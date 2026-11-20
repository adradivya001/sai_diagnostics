import React from 'react';
import { 
  X, 
  User, 
  Calendar, 
  Clock, 
  FileText, 
  Phone, 
  ShieldCheck, 
  CalendarClock, 
  CheckCircle2, 
  XCircle, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { formatDate, formatDateTime, formatTime } from '../utils/dateUtils';
import { canAllocateAppointments, canCancelAppointments, canCompleteAppointments } from '../utils/permissions';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';

export const AppointmentDetails = ({
  appointment,
  onClose,
  onAllocate,
  onComplete,
  onCancel
}) => {
  const { role } = useAuth();
  const { colors, isDark } = useTheme();

  const canAllocate = canAllocateAppointments(role);
  const canCancel = canCancelAppointments(role);
  const canComplete = canCompleteAppointments(role);

  if (!appointment) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: colors.modalOverlay,
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: colors.cardBg,
          borderRadius: '20px',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isDark ? '0 20px 45px rgba(0, 0, 0, 0.6)' : '0 20px 45px rgba(173, 35, 72, 0.15)',
          border: `1.5px solid ${colors.border}`,
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${colors.border}`,
            background: colors.subtleBg
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: colors.brandLight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.brandPrimary
              }}
            >
              <User size={22} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: colors.textPrimary }}>
                {appointment.patient_name}
              </h3>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: colors.textSecondary }}>
                Ref ID: <span style={{ fontFamily: 'monospace' }}>{appointment.id.substring(0, 13)}...</span>
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <StatusBadge status={appointment.status} />
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: colors.textSecondary,
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '8px'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Patient Profile Card */}
          <div
            style={{
              background: colors.subtleBg,
              padding: '1.2rem',
              borderRadius: '14px',
              border: `1px solid ${colors.border}`,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem'
            }}
          >
            <div>
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Mobile Number</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <Phone size={14} style={{ color: colors.brandPrimary }} />
                <a href={`tel:${appointment.mobile_number}`} style={{ color: colors.textPrimary, fontWeight: 700, textDecoration: 'none' }}>
                  {appointment.mobile_number}
                </a>
              </div>
            </div>

            <div>
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Patient Age</span>
              <span style={{ color: colors.textPrimary, fontWeight: 700 }}>
                {appointment.age ? `${appointment.age} yrs` : 'Not Specified'}
              </span>
            </div>

            <div>
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Request Type</span>
              <span style={{ color: colors.textPrimary, fontWeight: 700, textTransform: 'capitalize' }}>
                {appointment.request_type || 'appointment'}
              </span>
            </div>

            <div>
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Registered On</span>
              <span style={{ color: colors.textPrimary, fontWeight: 600, fontSize: '0.85rem' }}>
                {formatDateTime(appointment.created_at)}
              </span>
            </div>
          </div>

          {/* Clinical Service & Schedule Details */}
          <div
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: '14px',
              padding: '1.2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.2rem'
            }}
          >
            <div>
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Requested Scan</span>
              <h4 style={{ margin: '0.2rem 0 0', color: colors.brandPrimary, fontSize: '1.05rem', fontWeight: 800 }}>
                {appointment.service}
              </h4>
              <span style={{ color: colors.textSecondary, fontSize: '0.8rem', display: 'block', marginTop: '2px' }}>
                Duration: {appointment.service_duration_mins || 30} mins
              </span>
            </div>

            <div>
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Preferred Date</span>
              <span style={{ color: colors.textPrimary, fontWeight: 700, fontSize: '0.95rem', display: 'block', marginTop: '0.2rem' }}>
                {formatDate(appointment.appointment_date)}
              </span>
            </div>

            <div>
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Consultant Radiologist</span>
              <span style={{ color: colors.textPrimary, fontWeight: 700, fontSize: '0.95rem', display: 'block', marginTop: '0.2rem' }}>
                {appointment.doctor_name || 'Dr. T. Sai Kiranmai (M.B.B.S., DMRD)'}
              </span>
            </div>

            <div>
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>Confirmed Appointment Slot</span>
              {appointment.assigned_date ? (
                <div style={{ marginTop: '0.2rem' }}>
                  <div style={{ color: colors.success, fontWeight: 800, fontSize: '0.95rem' }}>
                    {formatDate(appointment.assigned_date)}
                  </div>
                  <div style={{ color: colors.success, fontSize: '0.85rem', fontWeight: 700 }}>
                    {formatTime(appointment.assigned_time)}
                  </div>
                </div>
              ) : (
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: '0.2rem',
                    color: '#B45309',
                    background: '#FEF3C7',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  Slot Unassigned
                </span>
              )}
            </div>
          </div>

          {/* Internal Clinical & Admin Notes */}
          {appointment.admin_notes && (
            <div
              style={{
                background: colors.subtleBg,
                borderRadius: '12px',
                padding: '1rem',
                border: `1px solid ${colors.border}`
              }}
            >
              <span style={{ color: colors.textMuted, fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>
                Reception &amp; Preparation Notes
              </span>
              <p style={{ margin: 0, color: colors.textPrimary, fontSize: '0.88rem', lineHeight: 1.4 }}>
                {appointment.admin_notes}
              </p>
            </div>
          )}

          {/* Reschedule Reason Audit */}
          {appointment.reschedule_reason && (
            <div
              style={{
                background: isDark ? 'rgba(168, 85, 247, 0.15)' : '#FAF5FF',
                borderRadius: '12px',
                padding: '1rem',
                border: '1px solid rgba(168, 85, 247, 0.3)'
              }}
            >
              <span style={{ color: '#7E22CE', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block', fontWeight: 700, marginBottom: '0.25rem' }}>
                Rescheduling Reason
              </span>
              <p style={{ margin: 0, color: colors.textPrimary, fontSize: '0.88rem' }}>
                {appointment.reschedule_reason}
              </p>
            </div>
          )}

          {/* WhatsApp Consent & Delivery Status */}
          <div
            style={{
              padding: '1rem',
              borderRadius: '12px',
              background: colors.subtleBg,
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={18} style={{ color: '#25D366' }} />
              <div>
                <strong style={{ color: colors.textPrimary, fontSize: '0.88rem', display: 'block' }}>
                  WhatsApp Notifications
                </strong>
                <span style={{ fontSize: '0.8rem', color: colors.textSecondary }}>
                  {appointment.whatsapp_consent_appointment 
                    ? 'Patient consented to receive booking updates on WhatsApp'
                    : 'Patient did not provide WhatsApp consent'}
                </span>
              </div>
            </div>

            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '9999px',
                background: appointment.whatsapp_consent_appointment ? colors.successBg : colors.subtleBg,
                color: appointment.whatsapp_consent_appointment ? colors.success : colors.textMuted,
                border: `1px solid ${colors.border}`
              }}
            >
              {appointment.whatsapp_consent_appointment ? 'Consent Given' : 'No Consent'}
            </span>
          </div>

        </div>

        {/* Footer Actions */}
        <div
          style={{
            padding: '1rem 1.5rem',
            borderTop: `1px solid ${colors.border}`,
            background: colors.subtleBg,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div>
            {canCancel && appointment.status !== 'cancelled' && appointment.status !== 'completed' && (
              <button
                type="button"
                onClick={onCancel}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  border: `1px solid ${colors.danger}40`,
                  background: colors.dangerBg,
                  color: colors.danger,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Cancel Appointment
              </button>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                border: `1px solid ${colors.border}`,
                background: colors.cardBg,
                color: colors.textSecondary,
                fontWeight: 600,
                fontSize: '0.84rem',
                cursor: 'pointer'
              }}
            >
              Close
            </button>

            {canAllocate && appointment.status !== 'completed' && appointment.status !== 'cancelled' && (
              <button
                type="button"
                onClick={onAllocate}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: colors.brandPrimary,
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 3px 10px rgba(173, 35, 72, 0.25)'
                }}
              >
                <CalendarClock size={15} /> {appointment.assigned_date ? 'Reschedule Slot' : 'Book Time Slot'}
              </button>
            )}

            {canComplete && appointment.status !== 'completed' && appointment.status !== 'cancelled' && (
              <button
                type="button"
                onClick={onComplete}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: colors.success,
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <CheckCircle2 size={15} /> Mark Completed
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
