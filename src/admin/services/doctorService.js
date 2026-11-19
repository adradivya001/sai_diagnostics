import { supabase } from '../../lib/supabaseClient';

export const doctorService = {
  /**
   * Fetch active doctor (Sai Diagnostics has ONE consultant doctor)
   */
  async getPrimaryDoctor() {
    // Try querying doctors table directly
    const { data, error } = await supabase
      .from('doctors')
      .select('*')
      .eq('is_active', true)
      .limit(1)
      .maybeSingle();

    if (error) {
      console.warn('Could not query doctors table directly, trying public_doctors view:', error.message);
      const { data: viewData, error: viewError } = await supabase
        .from('public_doctors')
        .select('*')
        .eq('is_active', true)
        .limit(1)
        .maybeSingle();

      if (viewError) throw viewError;
      return viewData;
    }

    return data;
  },

  /**
   * Fetch weekly schedules for doctor
   */
  async getDoctorSchedules(doctorId) {
    if (!doctorId) return [];
    const { data, error } = await supabase
      .from('doctor_schedules')
      .select('*')
      .eq('doctor_id', doctorId)
      .eq('is_active', true)
      .order('day_of_week');

    if (error) {
      console.warn('Could not fetch doctor_schedules:', error.message);
      return [];
    }
    return data || [];
  },

  /**
   * Fetch holiday exceptions for clinic and doctor
   */
  async getHolidayExceptions(doctorId = null) {
    let query = supabase
      .from('holiday_exceptions')
      .select('*')
      .gte('exception_date', new Date().toISOString().split('T')[0])
      .order('exception_date');

    const { data, error } = await query;
    if (error) {
      console.warn('Could not fetch holiday_exceptions:', error.message);
      return [];
    }
    return data || [];
  },

  /**
   * Generate available time slots for a given doctor on a given date considering schedule, breaks, and existing appointments
   */
  async getAvailableSlots({ doctorId, date, serviceDurationMins = 30 }) {
    if (!doctorId || !date) return [];

    // 1. Check holiday exception for clinic and doctor
    const holidays = await this.getHolidayExceptions(doctorId);
    const dateHoliday = holidays.find(h => h.exception_date === date);

    if (dateHoliday && !dateHoliday.is_available && !dateHoliday.allow_clinic_override) {
      return {
        available: false,
        reason: dateHoliday.reason || 'Clinic Holiday / Doctor Leave',
        slots: []
      };
    }

    // 2. Check doctor's schedule for day of week
    const targetDate = new Date(`${date}T00:00:00`);
    const dayOfWeek = targetDate.getDay(); // 0 is Sunday, 1 is Monday ...

    const schedules = await this.getDoctorSchedules(doctorId);
    const daySchedule = schedules.find(s => s.day_of_week === dayOfWeek);

    if (!daySchedule) {
      return {
        available: false,
        reason: 'Doctor does not have scheduled consultation hours on this day.',
        slots: []
      };
    }

    // 3. Fetch existing booked appointments for doctor on this date
    const { data: bookedAppointments, error: apptErr } = await supabase
      .from('appointments')
      .select('assigned_time, service_duration_mins, status')
      .eq('doctor_id', doctorId)
      .eq('assigned_date', date)
      .in('status', ['time_assigned', 'confirmed', 'rescheduled']);

    if (apptErr) {
      console.warn('Could not query existing appointments for slot calculation:', apptErr.message);
    }

    // 4. Generate candidate slots from start_time to end_time
    const parseMinutes = (timeStr) => {
      if (!timeStr) return 0;
      const [h, m] = timeStr.split(':').map(Number);
      return h * 60 + (m || 0);
    };

    const formatMinutes = (mins) => {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00`;
    };

    const startMins = parseMinutes(daySchedule.start_time);
    const endMins = parseMinutes(daySchedule.end_time);
    const slotStep = daySchedule.slot_duration_mins || 30;
    const duration = serviceDurationMins || slotStep;

    const breakStart = daySchedule.break_start_time ? parseMinutes(daySchedule.break_start_time) : null;
    const breakEnd = daySchedule.break_end_time ? parseMinutes(daySchedule.break_end_time) : null;

    const slots = [];

    for (let slotTime = startMins; slotTime + duration <= endMins; slotTime += slotStep) {
      const slotEndTime = slotTime + duration;

      // Check break collision
      let collidesWithBreak = false;
      if (breakStart !== null && breakEnd !== null) {
        if (slotTime < breakEnd && slotEndTime > breakStart) {
          collidesWithBreak = true;
        }
      }

      // Check existing booked appointments collision
      let isBooked = false;
      if (bookedAppointments && bookedAppointments.length > 0) {
        for (const appt of bookedAppointments) {
          if (!appt.assigned_time) continue;
          const apptStart = parseMinutes(appt.assigned_time);
          const apptEnd = apptStart + (appt.service_duration_mins || 30);
          if (slotTime < apptEnd && slotEndTime > apptStart) {
            isBooked = true;
            break;
          }
        }
      }

      slots.push({
        time: formatMinutes(slotTime),
        available: !collidesWithBreak && !isBooked,
        reason: collidesWithBreak ? 'Doctor Break' : isBooked ? 'Slot Already Booked' : 'Available'
      });
    }

    return {
      available: true,
      schedule: daySchedule,
      slots
    };
  }
};
