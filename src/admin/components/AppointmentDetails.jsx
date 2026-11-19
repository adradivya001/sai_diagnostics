import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  CalendarClock,
  MessageSquare
} from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { formatDate, formatDateTime, formatTime } from '../utils/dateUtils';
import { canAllocateAppointments, canCancelAppointments, canCompleteAppointments } from '../utils/permissions';

export const AppointmentDetails = ({
  appointment,
  role,
  onClose,
  onAllocate,
  onComplete,
  onCancel
}) => {
  if (!appointment) return null;

  const canAllocate = canAllocateAppointments(role) && !['completed', 'cancelled'].includes(appointment.status);
  const canCancel = canCancelAppointments(role) && !['completed', 'cancelled'].includes(appointment.status);
  const canComplete = canCompleteAppointments(role) && ['confirmed', 'rescheduled'].includes(appointment.status);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(27, 36, 48, 0.6)',
        backdropFilter: 'blur(3px)',
        zIndex: 9998,
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
          background: '#FFFFFF',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(173, 35, 72, 0.15)',
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
            borderBottom: '1px solid rgba(173, 35, 72, 0.1)',
            background: '#FAF8F9'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, color: '#1B2430' }}>
                {appointment.patient_name}
              </h3>
              <StatusBadge status={appointment.status} />
            </div>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#59616B' }}>
              Reference ID: <code style={{ color: '#AD2348', fontWeight: 600 }}>{appointment.id}</code>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#59616B',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Patient Profile Card */}
          <div
            style={{
              background: '#FFF9F5',
              padding: '1.2rem',
              borderRadius: '14px',
              border: '1px solid rgba(173, 35, 72, 0.14)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem'
            }}
          >
            <div>
              <span style={{ color: '#59616B', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Mobile Number</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <Phone size={14} style={{ color: '#AD2348' }} />
                <a href={`tel:${appointment.mobile_number}`} style={{ color: '#1B2430', fontWeight: 600, textDecoration: 'none' }}>
                  {appointment.mobile_number}
                </a>
              </div>
            </div>

            <div>
              <span style={{ color: '#59616B', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Patient Age</span>
              <span style={{ color: '#1B2430', fontWeight: 600 }}>
                {appointment.age ? `${appointment.age} yrs` : 'Not Specified'}
              </span>
            </div>

            <div>
              <span style={{ color: '#59616B', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Request Type</span>
              <span style={{ color: '#1B2430', fontWeight: 600, textTransform: 'capitalize' }}>
                {appointment.request_type || 'appointment'}
              </span>
            </div>

            <div>
              <span style={{ color: '#59616B', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Requested On</span>
              <span style={{ color: '#1B2430', fontWeight: 500, fontSize: '0.85rem' }}>
                {formatDateTime(appointment.created_at)}
              </span>
            </div>
          </div>

          {/* Clinical Service & Schedule Details */}
          <div
            style={{
              border: '1px solid #E5E7EB',
              borderRadius: '14px',
              padding: '1.2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.2rem'
            }}
          >
            <div>
              <span style={{ color: '#59616B', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Diagnostic Service</span>
              <strong style={{ color: '#1B2430', fontSize: '0.98rem' }}>{appointment.service}</strong>
              <div style={{ color: '#59616B', fontSize: '0.82rem', marginTop: '3px' }}>
                Duration: {appointment.service_duration_mins || 30} mins
              </div>
            </div>

            <div>
              <span style={{ color: '#59616B', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Patient Preferred Date</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                <Calendar size={14} style={{ color: '#AD2348' }} />
                <span style={{ color: '#1B2430', fontWeight: 600 }}>{formatDate(appointment.appointment_date)}</span>
              </div>
            </div>

            <div>
              <span style={{ color: '#59616B', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Assigned Date & Slot</span>
              {appointment.assigned_date ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                  <CalendarClock size={14} style={{ color: '#2E7D32' }} />
                  <span style={{ color: '#2E7D32', fontWeight: 600 }}>
                    {formatDate(appointment.assigned_date)} at {formatTime(appointment.assigned_time)}
                  </span>
                </div>
              ) : (
                <span style={{ color: '#B78103', fontSize: '0.88rem', fontWeight: 500 }}>Slot Not Allocated</span>
              )}
            </div>

            <div>
              <span style={{ color: '#59616B', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Consultant Doctor</span>
              <span style={{ color: '#1B2430', fontWeight: 600 }}>
                {appointment.consultant_doctor || 'Dr. T. Sai Kiranmai (M.B.B.S., DMRD)'}
              </span>
            </div>
          </div>

          {/* Reschedule / Cancellation Notes if applicable */}
          {(appointment.reschedule_reason || appointment.cancellation_reason || appointment.admin_notes) && (
            <div
              style={{
                background: '#FAF8F9',
                border: '1px solid rgba(173, 35, 72, 0.1)',
                borderRadius: '12px',
                padding: '1rem',
                fontSize: '0.88rem'
              }}
            >
              {appointment.reschedule_reason && (
                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ color: '#7E22CE', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    Rescheduling Reason
                  </strong>
                  <p style={{ margin: '0.2rem 0 0', color: '#1B2430' }}>{appointment.reschedule_reason}</p>
                </div>
              )}

              {appointment.cancellation_reason && (
                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ color: '#DC2626', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    Cancellation Reason
                  </strong>
                  <p style={{ margin: '0.2rem 0 0', color: '#1B2430' }}>{appointment.cancellation_reason}</p>
                </div>
              )}

              {appointment.admin_notes && (
                <div>
                  <strong style={{ color: '#59616B', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    Internal Clinical Notes
                  </strong>
                  <p style={{ margin: '0.2rem 0 0', color: '#1B2430' }}>{appointment.admin_notes}</p>
                </div>
              )}
            </div>
          )}

          {/* Consent and DPDP Compliance Record */}
          <div
            style={{
              padding: '0.9rem 1rem',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              background: '#FFFFFF',
              fontSize: '0.82rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1B2430', fontWeight: 600 }}>
              <ShieldCheck size={16} style={{ color: '#2E7D32' }} />
              <span>DPDP Consent Compliance Log</span>
            </div>
            <div style={{ color: '#59616B', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '4px' }}>
              <span>
                Appointment WhatsApp: <strong>{appointment.whatsapp_consent_appointment ? 'Consented' : 'Unchecked'}</strong>
              </span>
              <span>
                Promotional WhatsApp: <strong>{appointment.whatsapp_consent_promotional ? 'Consented' : 'Unchecked'}</strong>
              </span>
              {appointment.consent_timestamp && (
                <span>Recorded: {formatDateTime(appointment.consent_timestamp)}</span>
              )}
              {appointment.consent_source && (
                <span>Source: {appointment.consent_source}</span>
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: '#FAF8F9',
            borderTop: '1px solid rgba(173, 35, 72, 0.1)',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}
        >
          {canCancel && (
            <button
              type="button"
              onClick={onCancel}
              style={{
                padding: '0.65rem 1.2rem',
                borderRadius: '10px',
                border: '1px solid #FCA5A5',
                background: '#FFFFFF',
                color: '#DC2626',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <XCircle size={16} /> Cancel Appointment
            </button>
          )}

          {canComplete && (
            <button
              type="button"
              onClick={onComplete}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                background: '#2E7D32',
                color: '#FFFFFF',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 3px 10px rgba(46, 125, 50, 0.25)'
              }}
            >
              <CheckCircle2 size={16} /> Mark Completed
            </button>
          )}

          {canAllocate && (
            <button
              type="button"
              onClick={onAllocate}
              style={{
                padding: '0.65rem 1.35rem',
                borderRadius: '10px',
                border: 'none',
                background: '#AD2348',
                color: '#FFFFFF',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 3px 10px rgba(173, 35, 72, 0.25)'
              }}
            >
              <CalendarClock size={16} /> {appointment.assigned_date ? 'Reschedule Slot' : 'Allocate Slot'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
