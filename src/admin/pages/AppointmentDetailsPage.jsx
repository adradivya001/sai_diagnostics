import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  CalendarClock,
  AlertTriangle 
} from 'lucide-react';
import { appointmentService } from '../services/appointmentService';
import { StatusBadge } from '../components/StatusBadge';
import { LoadingState } from '../components/LoadingState';
import { AppointmentAllocationModal } from '../components/AppointmentAllocationModal';
import { ConfirmationDialog } from '../components/ConfirmationDialog';
import { formatDate, formatDateTime, formatTime } from '../utils/dateUtils';
import { canAllocateAppointments, canCancelAppointments, canCompleteAppointments } from '../utils/permissions';
import { useAuth } from '../hooks/useAuth';

export const AppointmentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { role } = useAuth();

  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modals
  const [allocating, setAllocating] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const fetchDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await appointmentService.getAppointmentById(id);
      setAppointment(data);
    } catch (err) {
      console.error('Failed to load appointment details:', err);
      setError(err.message || 'Appointment record not found or inaccessible.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const handleCompleteConfirm = async () => {
    setActionLoading(true);
    try {
      await appointmentService.updateStatus({
        appointmentId: appointment.id,
        newStatus: 'completed'
      });
      setCompleting(false);
      fetchDetails();
    } catch (err) {
      alert(err.message || 'Failed to complete appointment.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancelConfirm = async () => {
    if (!cancelReason.trim()) return;
    setActionLoading(true);
    try {
      await appointmentService.updateStatus({
        appointmentId: appointment.id,
        newStatus: 'cancelled',
        cancellationReason: cancelReason.trim()
      });
      setCancelling(false);
      setCancelReason('');
      fetchDetails();
    } catch (err) {
      alert(err.message || 'Failed to cancel appointment.');
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return <LoadingState message="Retrieving appointment record..." />;
  }

  if (error || !appointment) {
    return (
      <div style={{ padding: '2.5rem', textAlign: 'center', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
        <AlertTriangle size={36} style={{ color: '#DC2626', margin: '0 auto 0.75rem' }} />
        <h3 style={{ margin: '0 0 0.5rem', color: '#1B2430' }}>Appointment Not Accessible</h3>
        <p style={{ margin: '0 0 1.5rem', color: '#59616B' }}>{error || 'Unable to display requested appointment record.'}</p>
        <button
          type="button"
          onClick={() => navigate('/admin/appointments')}
          style={{
            padding: '0.65rem 1.25rem',
            borderRadius: '10px',
            border: 'none',
            background: '#AD2348',
            color: '#FFFFFF',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Return to Appointments
        </button>
      </div>
    );
  }

  const canAllocate = canAllocateAppointments(role) && !['completed', 'cancelled'].includes(appointment.status);
  const canCancel = canCancelAppointments(role) && !['completed', 'cancelled'].includes(appointment.status);
  const canComplete = canCompleteAppointments(role) && ['confirmed', 'rescheduled'].includes(appointment.status);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
      
      {/* Back button and page title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <button
          type="button"
          onClick={() => navigate('/admin/appointments')}
          style={{
            background: 'none',
            border: 'none',
            color: '#AD2348',
            fontSize: '0.88rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ArrowLeft size={16} /> Back to Appointments
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <StatusBadge status={appointment.status} />
        </div>
      </div>

      {/* Main Details Card */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1.5px solid rgba(173, 35, 72, 0.12)',
          boxShadow: '0 4px 18px rgba(173, 35, 72, 0.04)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid rgba(173, 35, 72, 0.1)',
            background: '#FAF8F9',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: '#1B2430' }}>
              {appointment.patient_name}
            </h2>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: '#59616B' }}>
              ID: <code>{appointment.id}</code> • Registered {formatDateTime(appointment.created_at)}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {canCancel && (
              <button
                type="button"
                onClick={() => setCancelling(true)}
                style={{
                  padding: '0.65rem 1.15rem',
                  borderRadius: '10px',
                  border: '1px solid #FCA5A5',
                  background: '#FFFFFF',
                  color: '#DC2626',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <XCircle size={16} /> Cancel
              </button>
            )}

            {canComplete && (
              <button
                type="button"
                onClick={() => setCompleting(true)}
                style={{
                  padding: '0.65rem 1.25rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#2E7D32',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <CheckCircle2 size={16} /> Mark Completed
              </button>
            )}

            {canAllocate && (
              <button
                type="button"
                onClick={() => setAllocating(true)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#AD2348',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(173, 35, 72, 0.25)'
                }}
              >
                <CalendarClock size={16} /> {appointment.assigned_date ? 'Reschedule Slot' : 'Allocate Slot'}
              </button>
            )}
          </div>
        </div>

        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Patient Details */}
          <div>
            <h4 style={{ margin: '0 0 1rem', fontSize: '0.95rem', fontWeight: 600, color: '#AD2348', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Patient Information
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                background: '#FAF8F9',
                padding: '1.25rem',
                borderRadius: '14px',
                border: '1px solid rgba(173, 35, 72, 0.08)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Full Name</span>
                <strong style={{ color: '#1B2430', fontSize: '1rem' }}>{appointment.patient_name}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Mobile Number</span>
                <a href={`tel:${appointment.mobile_number}`} style={{ color: '#AD2348', fontWeight: 600, textDecoration: 'none' }}>
                  {appointment.mobile_number}
                </a>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Patient Age</span>
                <span style={{ color: '#1B2430', fontWeight: 600 }}>{appointment.age ? `${appointment.age} yrs` : 'Not specified'}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Request Type</span>
                <span style={{ color: '#1B2430', fontWeight: 600, textTransform: 'capitalize' }}>{appointment.request_type || 'appointment'}</span>
              </div>
            </div>
          </div>

          {/* Service & Allocation Details */}
          <div>
            <h4 style={{ margin: '0 0 1rem', fontSize: '0.95rem', fontWeight: 600, color: '#AD2348', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Diagnostic Examination &amp; Doctor Allocation
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                border: '1px solid #E5E7EB',
                padding: '1.25rem',
                borderRadius: '14px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Requested Service</span>
                <strong style={{ color: '#1B2430', fontSize: '1rem' }}>{appointment.service}</strong>
                <div style={{ color: '#59616B', fontSize: '0.8rem', marginTop: '3px' }}>Standard Duration: {appointment.service_duration_mins || 30} mins</div>
              </div>

              <div>
                <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Patient Preferred Date</span>
                <span style={{ color: '#1B2430', fontWeight: 600 }}>{formatDate(appointment.appointment_date)}</span>
              </div>

              <div>
                <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Allocated Date &amp; Slot</span>
                {appointment.assigned_date ? (
                  <span style={{ color: '#2E7D32', fontWeight: 700 }}>
                    {formatDate(appointment.assigned_date)} at {formatTime(appointment.assigned_time)}
                  </span>
                ) : (
                  <span style={{ color: '#B78103', fontWeight: 500 }}>Slot Unallocated</span>
                )}
              </div>

              <div>
                <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Assigned Consultant Doctor</span>
                <span style={{ color: '#1B2430', fontWeight: 600 }}>
                  {appointment.consultant_doctor || 'Dr. T. Sai Kiranmai (M.B.B.S., DMRD)'}
                </span>
              </div>
            </div>
          </div>

          {/* Notes & Reschedule History */}
          {(appointment.reschedule_reason || appointment.cancellation_reason || appointment.admin_notes) && (
            <div>
              <h4 style={{ margin: '0 0 1rem', fontSize: '0.95rem', fontWeight: 600, color: '#AD2348', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Operational &amp; Clinical Notes
              </h4>
              <div
                style={{
                  background: '#FFF9F5',
                  padding: '1.25rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(173, 35, 72, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                {appointment.reschedule_reason && (
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#7E22CE', fontWeight: 700, textTransform: 'uppercase' }}>
                      Reschedule Reason
                    </span>
                    <p style={{ margin: '0.2rem 0 0', color: '#1B2430', fontSize: '0.92rem' }}>
                      {appointment.reschedule_reason}
                    </p>
                  </div>
                )}

                {appointment.cancellation_reason && (
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#DC2626', fontWeight: 700, textTransform: 'uppercase' }}>
                      Cancellation Reason
                    </span>
                    <p style={{ margin: '0.2rem 0 0', color: '#1B2430', fontSize: '0.92rem' }}>
                      {appointment.cancellation_reason}
                    </p>
                  </div>
                )}

                {appointment.admin_notes && (
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#59616B', fontWeight: 700, textTransform: 'uppercase' }}>
                      Internal Staff Notes
                    </span>
                    <p style={{ margin: '0.2rem 0 0', color: '#1B2430', fontSize: '0.92rem' }}>
                      {appointment.admin_notes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Consent Details */}
          <div>
            <h4 style={{ margin: '0 0 1rem', fontSize: '0.95rem', fontWeight: 600, color: '#AD2348', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              DPDP Compliance &amp; Consent Record
            </h4>
            <div
              style={{
                border: '1px solid #E5E7EB',
                padding: '1rem 1.25rem',
                borderRadius: '14px',
                fontSize: '0.85rem',
                color: '#59616B',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}
            >
              <span>Appointment Notifications: <strong>{appointment.whatsapp_consent_appointment ? 'Consented' : 'Unchecked'}</strong></span>
              <span>Promotional Communications: <strong>{appointment.whatsapp_consent_promotional ? 'Consented' : 'Unchecked'}</strong></span>
              {appointment.consent_timestamp && <span>Consent Timestamp: {formatDateTime(appointment.consent_timestamp)}</span>}
              {appointment.consent_source && <span>Consent Source: {appointment.consent_source}</span>}
              {appointment.consent_text_version && <span>Version: {appointment.consent_text_version}</span>}
            </div>
          </div>

        </div>
      </div>

      {/* Allocation Modal */}
      {allocating && (
        <AppointmentAllocationModal
          isOpen={allocating}
          appointment={appointment}
          onClose={() => setAllocating(false)}
          onSuccess={() => {
            setAllocating(false);
            fetchDetails();
          }}
        />
      )}

      {/* Complete Confirmation */}
      <ConfirmationDialog
        isOpen={completing}
        title="Mark Appointment Completed"
        message={`Confirm that the examination for "${appointment.patient_name}" is finished?`}
        confirmLabel="Confirm Completed"
        isLoading={actionLoading}
        onConfirm={handleCompleteConfirm}
        onCancel={() => setCompleting(false)}
      />

      {/* Cancel Confirmation */}
      <ConfirmationDialog
        isOpen={cancelling}
        title="Cancel Patient Appointment"
        message={`Cancel the appointment for "${appointment.patient_name}"? A valid reason is required.`}
        confirmLabel="Cancel Appointment"
        isDestructive={true}
        isLoading={actionLoading}
        onConfirm={handleCancelConfirm}
        onCancel={() => {
          setCancelling(false);
          setCancelReason('');
        }}
      >
        <div style={{ marginTop: '0.85rem' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.35rem' }}>
            Cancellation Reason *
          </label>
          <input
            type="text"
            placeholder="e.g. Patient called to cancel, Doctor emergency..."
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem',
              borderRadius: '8px',
              border: '1.5px solid #D1D5DB',
              fontSize: '0.88rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </ConfirmationDialog>
    </div>
  );
};
