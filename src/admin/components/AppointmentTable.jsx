import React from 'react';
import { 
  Eye, 
  CalendarClock, 
  CheckCircle2, 
  XCircle, 
  Phone, 
  Calendar 
} from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { formatDate, formatTime } from '../utils/dateUtils';
import { canAllocateAppointments, canCancelAppointments, canCompleteAppointments } from '../utils/permissions';
import { useTheme } from '../context/ThemeContext';

export const AppointmentTable = ({
  appointments = [],
  role = 'nurse',
  onViewDetails,
  onAllocate,
  onComplete,
  onCancel
}) => {
  const { colors, isDark } = useTheme();

  if (!appointments || appointments.length === 0) return null;

  return (
    <div
      style={{
        background: colors.cardBg,
        borderRadius: '16px',
        border: `1.5px solid ${colors.border}`,
        boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(173, 35, 72, 0.04)',
        overflow: 'hidden'
      }}
    >
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '850px' }}>
          <thead>
            <tr style={{ background: colors.subtleBg, borderBottom: `1.5px solid ${colors.border}` }}>
              <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: colors.textSecondary, textTransform: 'uppercase' }}>
                Patient
              </th>
              <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: colors.textSecondary, textTransform: 'uppercase' }}>
                Service
              </th>
              <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: colors.textSecondary, textTransform: 'uppercase' }}>
                Preferred Date
              </th>
              <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: colors.textSecondary, textTransform: 'uppercase' }}>
                Assigned Slot
              </th>
              <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: colors.textSecondary, textTransform: 'uppercase' }}>
                Status
              </th>
              <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: colors.textSecondary, textTransform: 'uppercase', textAlign: 'right' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => {
              const canAllocate = canAllocateAppointments(role) && !['completed', 'cancelled'].includes(appt.status);
              const canComplete = canCompleteAppointments(role) && ['confirmed', 'rescheduled'].includes(appt.status);
              const canCancel = canCancelAppointments(role) && !['completed', 'cancelled'].includes(appt.status);

              return (
                <tr
                  key={appt.id}
                  style={{
                    borderBottom: `1px solid ${colors.border}`,
                    transition: 'background-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.subtleBg)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {/* Patient Info */}
                  <td style={{ padding: '1rem 1.1rem' }}>
                    <div style={{ fontWeight: 600, color: colors.textPrimary, fontSize: '0.92rem' }}>
                      {appt.patient_name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: colors.textSecondary, fontSize: '0.8rem', marginTop: '2px' }}>
                      <Phone size={12} style={{ color: colors.brandPrimary }} />
                      <span>{appt.mobile_number}</span>
                      {appt.age && <span>• {appt.age} yrs</span>}
                    </div>
                  </td>

                  {/* Service */}
                  <td style={{ padding: '1rem 1.1rem' }}>
                    <div style={{ fontWeight: 500, color: colors.textPrimary, fontSize: '0.88rem' }}>
                      {appt.service}
                    </div>
                    <div style={{ color: colors.textSecondary, fontSize: '0.78rem', textTransform: 'capitalize' }}>
                      {appt.request_type || 'Scan'}
                    </div>
                  </td>

                  {/* Preferred Date */}
                  <td style={{ padding: '1rem 1.1rem', color: colors.textPrimary, fontSize: '0.86rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} style={{ color: colors.brandPrimary }} />
                      <span>{formatDate(appt.appointment_date)}</span>
                    </div>
                  </td>

                  {/* Assigned Slot */}
                  <td style={{ padding: '1rem 1.1rem' }}>
                    {appt.assigned_date ? (
                      <div>
                        <div style={{ fontWeight: 600, color: colors.success, fontSize: '0.86rem' }}>
                          {formatDate(appt.assigned_date)}
                        </div>
                        <div style={{ color: colors.success, fontSize: '0.78rem', fontWeight: 500 }}>
                          {formatTime(appt.assigned_time)}
                        </div>
                      </div>
                    ) : (
                      <span style={{ color: colors.warning, fontSize: '0.82rem', fontWeight: 500 }}>
                        Slot Unallocated
                      </span>
                    )}
                  </td>

                  {/* Status Badge */}
                  <td style={{ padding: '1rem 1.1rem' }}>
                    <StatusBadge status={appt.status} size="small" />
                  </td>

                  {/* Actions */}
                  <td style={{ padding: '1rem 1.1rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        type="button"
                        onClick={() => onViewDetails(appt)}
                        title="View Full Details"
                        style={{
                          padding: '6px 10px',
                          borderRadius: '8px',
                          border: `1px solid ${colors.border}`,
                          background: colors.cardBg,
                          color: colors.textPrimary,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Eye size={13} /> View
                      </button>

                      {canAllocate && (
                        <button
                          type="button"
                          onClick={() => onAllocate(appt)}
                          title={appt.assigned_date ? 'Reschedule Slot' : 'Allocate Slot'}
                          style={{
                            padding: '6px 10px',
                            borderRadius: '8px',
                            border: 'none',
                            background: colors.brandPrimary,
                            color: '#FFFFFF',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <CalendarClock size={13} /> {appt.assigned_date ? 'Reschedule' : 'Allocate'}
                        </button>
                      )}

                      {canComplete && (
                        <button
                          type="button"
                          onClick={() => onComplete(appt)}
                          title="Mark Completed"
                          style={{
                            padding: '6px 10px',
                            borderRadius: '8px',
                            border: 'none',
                            background: colors.success,
                            color: '#FFFFFF',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <CheckCircle2 size={13} /> Complete
                        </button>
                      )}

                      {canCancel && (
                        <button
                          type="button"
                          onClick={() => onCancel(appt)}
                          title="Cancel Appointment"
                          style={{
                            padding: '6px 8px',
                            borderRadius: '8px',
                            border: `1px solid ${colors.danger}40`,
                            background: colors.dangerBg,
                            color: colors.danger,
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                          }}
                        >
                          <XCircle size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
