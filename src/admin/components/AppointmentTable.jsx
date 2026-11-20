import React from 'react';
import { 
  Eye, 
  CalendarClock, 
  CheckCircle2, 
  XCircle, 
  Phone, 
  Calendar,
  Clock,
  UserCheck
} from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { formatDate, formatTime } from '../utils/dateUtils';
import { canAllocateAppointments, canCancelAppointments, canCompleteAppointments } from '../utils/permissions';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';

export const AppointmentTable = ({
  appointments = [],
  onViewDetails,
  onAllocate,
  onComplete,
  onCancel
}) => {
  const { role } = useAuth();
  const { colors, isDark } = useTheme();

  const canAllocate = canAllocateAppointments(role);
  const canCancel = canCancelAppointments(role);
  const canComplete = canCompleteAppointments(role);

  if (!appointments || appointments.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        background: colors.cardBg,
        borderRadius: '16px',
        border: `1.5px solid ${colors.border}`,
        boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.25)' : '0 4px 16px rgba(173, 35, 72, 0.04)',
        overflow: 'hidden'
      }}
    >
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr
              style={{
                background: colors.subtleBg,
                borderBottom: `1.5px solid ${colors.border}`,
                color: colors.textSecondary,
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 700
              }}
            >
              <th style={{ padding: '0.9rem 1.1rem' }}>Patient Name &amp; Contact</th>
              <th style={{ padding: '0.9rem 1.1rem' }}>Requested Scan</th>
              <th style={{ padding: '0.9rem 1.1rem' }}>Preferred Date</th>
              <th style={{ padding: '0.9rem 1.1rem' }}>Assigned Slot</th>
              <th style={{ padding: '0.9rem 1.1rem' }}>Status</th>
              <th style={{ padding: '0.9rem 1.1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, idx) => {
              const isPending = appt.status === 'pending';
              const rowBg = isPending 
                ? (isDark ? 'rgba(217, 119, 6, 0.08)' : '#FFFDF9')
                : (idx % 2 === 0 ? colors.cardBg : colors.subtleBg);

              return (
                <tr
                  key={appt.id}
                  style={{
                    borderBottom: `1px solid ${colors.border}`,
                    background: rowBg,
                    transition: 'background 0.15s ease'
                  }}
                >
                  {/* Patient Info */}
                  <td style={{ padding: '1rem 1.1rem' }}>
                    <div style={{ fontWeight: 700, color: colors.textPrimary, fontSize: '0.94rem' }}>
                      {appt.patient_name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                      <Phone size={12} style={{ color: colors.brandPrimary }} />
                      <a
                        href={`tel:${appt.mobile_number}`}
                        style={{
                          color: colors.textSecondary,
                          fontSize: '0.82rem',
                          textDecoration: 'none',
                          fontWeight: 500
                        }}
                      >
                        {appt.mobile_number}
                      </a>
                    </div>
                  </td>

                  {/* Scan Service */}
                  <td style={{ padding: '1rem 1.1rem' }}>
                    <div style={{ fontWeight: 600, color: colors.textPrimary, fontSize: '0.88rem' }}>
                      {appt.service}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: colors.textMuted }}>
                      {appt.service_duration_mins ? `${appt.service_duration_mins} mins` : 'Standard Duration'}
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
                        <div style={{ fontWeight: 700, color: colors.success, fontSize: '0.88rem' }}>
                          {formatDate(appt.assigned_date)}
                        </div>
                        <div style={{ color: colors.success, fontSize: '0.8rem', fontWeight: 600 }}>
                          {formatTime(appt.assigned_time)}
                        </div>
                      </div>
                    ) : (
                      <span
                        style={{
                          color: isDark ? '#FBBF24' : '#B45309',
                          background: isDark ? 'rgba(245, 158, 11, 0.15)' : '#FEF3C7',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <Clock size={12} /> Unscheduled
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
                          fontWeight: 600,
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
                          title={appt.assigned_date ? 'Reschedule Appointment' : 'Book Appointment Time'}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            border: 'none',
                            background: colors.brandPrimary,
                            color: '#FFFFFF',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            boxShadow: '0 2px 6px rgba(173, 35, 72, 0.25)'
                          }}
                        >
                          <CalendarClock size={13} /> {appt.assigned_date ? 'Reschedule' : 'Book Time'}
                        </button>
                      )}

                      {canComplete && appt.status !== 'completed' && appt.status !== 'cancelled' && (
                        <button
                          type="button"
                          onClick={() => onComplete(appt)}
                          title="Mark Done"
                          style={{
                            padding: '6px 10px',
                            borderRadius: '8px',
                            border: 'none',
                            background: colors.success,
                            color: '#FFFFFF',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <CheckCircle2 size={13} /> Done
                        </button>
                      )}

                      {canCancel && appt.status !== 'cancelled' && appt.status !== 'completed' && (
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
