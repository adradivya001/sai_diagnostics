/**
 * Permissions & Roles for Sai Diagnostics Staff
 * Roles supported by Supabase schema:
 * - 'hospital_admin' (Full clinic management)
 * - 'receptionist'   (Appointment intake, slot allocation, rescheduling, cancellation, WhatsApp follow-up)
 * - 'nurse'          (Clinical review, slot allocation / rescheduling support, status update)
 * - 'doctor'         (Consultant view, self-assigned appointment completion)
 */

export const ROLES = {
  ADMIN: 'hospital_admin',
  RECEPTIONIST: 'receptionist',
  NURSE: 'nurse',
  DOCTOR: 'doctor'
};

export const hasRole = (userRole, allowedRoles = []) => {
  if (!userRole) return false;
  return allowedRoles.includes(userRole);
};

export const canAllocateAppointments = (role) => {
  // Database function allocate_appointment_slot allows hospital_admin and receptionist
  // In this clinic, the two nurses act with receptionist/intake management capabilities
  return ['hospital_admin', 'receptionist', 'nurse'].includes(role);
};

export const canCancelAppointments = (role) => {
  return ['hospital_admin', 'receptionist', 'nurse'].includes(role);
};

export const canCompleteAppointments = (role) => {
  return ['hospital_admin', 'doctor', 'nurse'].includes(role);
};

export const canManageServices = (role) => {
  return ['hospital_admin'].includes(role);
};

export const canManageSchedules = (role) => {
  return ['hospital_admin', 'doctor'].includes(role);
};
