import { supabase } from '../../lib/supabaseClient';
import { getTodayDateString } from '../utils/dateUtils';

export const dashboardService = {
  /**
   * Get aggregate statistics from Supabase appointments table
   */
  async getDashboardStats() {
    const today = getTodayDateString();

    const { data: allAppointments, error } = await supabase
      .from('appointments')
      .select('id, status, assigned_date, appointment_date, created_at');

    if (error) throw error;

    const stats = {
      total: allAppointments?.length || 0,
      pending: 0,
      confirmed: 0,
      today: 0,
      rescheduled: 0,
      completed: 0,
      cancelled: 0
    };

    allAppointments?.forEach(appt => {
      // Status breakdown
      if (appt.status === 'pending') stats.pending++;
      else if (appt.status === 'confirmed' || appt.status === 'time_assigned') stats.confirmed++;
      else if (appt.status === 'rescheduled') stats.rescheduled++;
      else if (appt.status === 'completed') stats.completed++;
      else if (appt.status === 'cancelled') stats.cancelled++;

      // Today's count (matches assigned_date or fallback appointment_date)
      const apptDate = appt.assigned_date || appt.appointment_date;
      if (apptDate === today) {
        stats.today++;
      }
    });

    return stats;
  },

  /**
   * Get today's scheduled appointments
   */
  async getTodayAppointments() {
    const today = getTodayDateString();

    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .or(`assigned_date.eq.${today},appointment_date.eq.${today}`)
      .order('assigned_time', { ascending: true, nullsFirst: false });

    if (error) throw error;
    return data || [];
  },

  /**
   * Get recent pending requests that require nurse review
   */
  async getPendingRequests(limit = 6) {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  },

  /**
   * Get upcoming confirmed/rescheduled appointments
   */
  async getUpcomingAppointments(limit = 6) {
    const today = getTodayDateString();

    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .in('status', ['confirmed', 'time_assigned', 'rescheduled'])
      .gte('assigned_date', today)
      .order('assigned_date', { ascending: true })
      .order('assigned_time', { ascending: true })
      .limit(limit);

    if (error) throw error;
    return data || [];
  }
};
