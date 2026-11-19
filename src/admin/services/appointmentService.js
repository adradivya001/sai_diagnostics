import { supabase } from '../../lib/supabaseClient';

/**
 * Service to manage appointments via Supabase tables and secure RPCs
 */

export const appointmentService = {
  /**
   * Fetch appointments with optional filters, search, and sorting
   */
  async getAppointments({
    status = null,
    search = '',
    service = null,
    date = null,
    page = 1,
    pageSize = 15,
    sortBy = 'created_at',
    sortAsc = false
  } = {}) {
    let query = supabase
      .from('appointments')
      .select('*', { count: 'exact' });

    // Status filter
    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    // Service filter
    if (service && service !== 'all') {
      query = query.eq('service', service);
    }

    // Date filter
    if (date) {
      query = query.or(`assigned_date.eq.${date},appointment_date.eq.${date}`);
    }

    // Search query
    if (search && search.trim()) {
      const term = search.trim();
      // Check if term is a valid UUID
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(term);
      if (isUUID) {
        query = query.eq('id', term);
      } else {
        query = query.or(`patient_name.ilike.%${term}%,mobile_number.ilike.%${term}%`);
      }
    }

    // Sorting
    query = query.order(sortBy, { ascending: sortAsc });

    // Pagination
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;
    if (error) throw error;

    return {
      appointments: data || [],
      totalCount: count || 0,
      totalPages: Math.ceil((count || 0) / pageSize),
      currentPage: page
    };
  },

  /**
   * Fetch single appointment by ID
   */
  async getAppointmentById(id) {
    if (!id) throw new Error('Appointment ID is required');

    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * Allocate slot to appointment using secure RPC
   */
  async allocateSlot({
    appointmentId,
    doctorId,
    assignedDate,
    assignedTime,
    adminNotes = null,
    rescheduleReason = null
  }) {
    const { data, error } = await supabase.rpc('allocate_appointment_slot', {
      p_appointment_id: appointmentId,
      p_doctor_id: doctorId,
      p_assigned_date: assignedDate,
      p_assigned_time: assignedTime,
      p_admin_notes: adminNotes,
      p_reschedule_reason: rescheduleReason
    });

    if (error) {
      throw new Error(error.message || 'Slot allocation failed on server.');
    }

    if (!data?.success) {
      throw new Error(data?.error || 'Allocation rejected by clinic scheduling system.');
    }

    return data;
  },

  /**
   * Update appointment status (e.g. completed, cancelled)
   */
  async updateStatus({
    appointmentId,
    newStatus,
    notes = null,
    cancellationReason = null
  }) {
    const { data, error } = await supabase.rpc('update_appointment_status', {
      p_appointment_id: appointmentId,
      p_new_status: newStatus,
      p_notes: notes,
      p_cancellation_reason: cancellationReason
    });

    if (error) {
      throw new Error(error.message || 'Status update failed on server.');
    }

    if (!data?.success) {
      throw new Error(data?.error || 'Status update rejected by clinic workflow rules.');
    }

    return data;
  }
};
