import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  AlertTriangle 
} from 'lucide-react';
import { doctorService } from '../services/doctorService';
import { appointmentService } from '../services/appointmentService';
import { formatDate, formatTime, getTodayDateString } from '../utils/dateUtils';
import { supabase } from '../../lib/supabaseClient';

export const AppointmentAllocationModal = ({
  isOpen,
  appointment,
  onClose,
  onSuccess
}) => {
  const [selectedDate, setSelectedDate] = useState(
    appointment?.assigned_date || appointment?.appointment_date || getTodayDateString()
  );
  const [selectedTime, setSelectedTime] = useState(appointment?.assigned_time || '');
  const [adminNotes, setAdminNotes] = useState(appointment?.admin_notes || '');
  const [rescheduleReason, setRescheduleReason] = useState('');

  const [doctor, setDoctor] = useState(null);
  const [slotsData, setSlotsData] = useState({ available: true, slots: [] });
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [isDurationVerified, setIsDurationVerified] = useState(true);
  const [checkingVerification, setCheckingVerification] = useState(true);

  // Check if this action counts as a reschedule
  const isReschedule = Boolean(
    (appointment?.assigned_date && selectedDate !== appointment.assigned_date) ||
    (appointment?.assigned_time && selectedTime !== appointment.assigned_time) ||
    (selectedDate !== appointment?.appointment_date)
  );

  // Load primary doctor and verify service duration status from public.approved_services
  useEffect(() => {
    if (!isOpen || !appointment) return;

    let mounted = true;
    const initModal = async () => {
      setError(null);
      setCheckingVerification(true);
      try {
        const doc = await doctorService.getPrimaryDoctor();
        if (mounted) setDoctor(doc);

        // Check is_duration_verified from approved_services table
        const { data: serviceRecord, error: servErr } = await supabase
          .from('approved_services')
          .select('is_duration_verified, duration_mins')
          .eq('name', appointment.service)
          .maybeSingle();

        if (servErr) {
          console.warn('Could not check service duration verification:', servErr.message);
        }

        if (mounted) {
          // If table has the record and is_duration_verified is explicitly false
          if (serviceRecord && serviceRecord.is_duration_verified === false) {
            setIsDurationVerified(false);
          } else {
            setIsDurationVerified(true);
          }
        }
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setCheckingVerification(false);
      }
    };

    initModal();

    return () => {
      mounted = false;
    };
  }, [isOpen, appointment]);

  // Load available slots whenever selectedDate or doctor changes
  useEffect(() => {
    if (!isOpen || !doctor?.id || !selectedDate) return;

    let mounted = true;
    const loadSlots = async () => {
      setLoadingSlots(true);
      try {
        const data = await doctorService.getAvailableSlots({
          doctorId: doctor.id,
          date: selectedDate,
          serviceDurationMins: appointment?.service_duration_mins || 30
        });
        if (mounted) {
          setSlotsData(data);
          // Auto-select if selectedTime is in slots, else clear
          if (selectedTime && !data.slots.some(s => s.time === selectedTime && s.available)) {
            // Keep if already assigned
            if (appointment?.assigned_date !== selectedDate || appointment?.assigned_time !== selectedTime) {
              setSelectedTime('');
            }
          }
        }
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoadingSlots(false);
      }
    };

    loadSlots();

    return () => {
      mounted = false;
    };
  }, [isOpen, doctor, selectedDate, appointment]);

  if (!isOpen || !appointment) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!isDurationVerified) {
      setError('Cannot allocate slot: Service duration for "' + appointment.service + '" has not been administratively verified yet.');
      return;
    }

    if (!doctor?.id) {
      setError('Consultant doctor record is unavailable. Please check doctor configuration.');
      return;
    }

    if (!selectedDate) {
      setError('Please select an appointment date.');
      return;
    }

    if (!selectedTime) {
      setError('Please select an available appointment time slot.');
      return;
    }

    if (isReschedule && (!rescheduleReason.trim() || rescheduleReason.trim().length < 3)) {
      setError('Please provide a valid rescheduling reason (minimum 3 characters).');
      return;
    }

    setSubmitting(true);
    try {
      await appointmentService.allocateSlot({
        appointmentId: appointment.id,
        doctorId: doctor.id,
        assignedDate: selectedDate,
        assignedTime: selectedTime,
        adminNotes: adminNotes.trim() || null,
        rescheduleReason: isReschedule ? rescheduleReason.trim() : null
      });

      if (onSuccess) onSuccess();
      onClose();
    } catch (err) {
      console.error('Allocation error:', err);
      setError(err.message || 'Slot allocation failed. Please verify doctor availability.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(27, 36, 48, 0.6)',
        backdropFilter: 'blur(3px)',
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
          background: '#FFFFFF',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '560px',
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
            <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600, color: '#1B2430' }}>
              {appointment.assigned_date ? 'Reschedule Appointment Slot' : 'Allocate Appointment Slot'}
            </h3>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: '#59616B' }}>
              Patient: <strong style={{ color: '#1B2430' }}>{appointment.patient_name}</strong> • Phone: {appointment.mobile_number}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
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

        {/* Content Form */}
        <form onSubmit={handleSubmit} style={{ padding: '1.25rem 1.5rem', overflowY: 'auto' }}>
          {error && (
            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                background: '#FEE2E2',
                border: '1px solid rgba(220, 38, 38, 0.3)',
                color: '#DC2626',
                fontSize: '0.88rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>{error}</div>
            </div>
          )}

          {/* Unverified Service Duration Warning */}
          {!checkingVerification && !isDurationVerified && (
            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                background: '#FFF8E1',
                border: '1px solid rgba(183, 129, 3, 0.3)',
                color: '#B78103',
                fontSize: '0.88rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}
            >
              <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Duration Verification Required:</strong> The duration for "{appointment.service}" has not yet been verified by hospital administration. Database rules require verified duration before slot allocation can be completed.
              </div>
            </div>
          )}

          {/* Patient Details & Service Info (Read-only) */}
          <div
            style={{
              background: '#FAF8F9',
              padding: '1rem',
              borderRadius: '12px',
              marginBottom: '1.25rem',
              border: '1px solid rgba(173, 35, 72, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
              fontSize: '0.85rem'
            }}
          >
            <div>
              <span style={{ color: '#59616B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Service</span>
              <strong style={{ color: '#1B2430' }}>{appointment.service}</strong>
            </div>
            <div>
              <span style={{ color: '#59616B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Patient Preferred Date</span>
              <strong style={{ color: '#1B2430' }}>{formatDate(appointment.appointment_date)}</strong>
            </div>
            <div>
              <span style={{ color: '#59616B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Consultant Doctor</span>
              <strong style={{ color: '#AD2348' }}>{doctor?.name || 'Dr. T. Sai Kiranmai'}</strong>
            </div>
            <div>
              <span style={{ color: '#59616B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Specialty</span>
              <span style={{ color: '#1B2430' }}>{doctor?.specialty || 'Radiologist & Fetal Medicine Specialist'}</span>
            </div>
          </div>

          {/* Date Picker */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.35rem' }}>
              Assign Date *
            </label>
            <input
              type="date"
              min={getTodayDateString()}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                border: '1.5px solid #D1D5DB',
                fontSize: '0.9rem',
                color: '#1B2430',
                outline: 'none'
              }}
              required
            />
          </div>

          {/* Slots Section */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.35rem' }}>
              Available Time Slot * {selectedTime && <span style={{ color: '#AD2348' }}>({formatTime(selectedTime)})</span>}
            </label>

            {loadingSlots ? (
              <div style={{ padding: '1.5rem', textAlign: 'center', color: '#59616B' }}>
                <Loader2 size={24} style={{ animation: 'spin 1s linear infinite', color: '#AD2348', margin: '0 auto 0.5rem' }} />
                <span style={{ fontSize: '0.85rem' }}>Checking doctor availability and conflicts...</span>
              </div>
            ) : !slotsData.available ? (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: '#FFF9F5',
                  border: '1px solid rgba(173, 35, 72, 0.2)',
                  color: '#AD2348',
                  fontSize: '0.88rem'
                }}
              >
                {slotsData.reason || 'Doctor unavailable on this date.'}
              </div>
            ) : slotsData.slots.length === 0 ? (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#6B7280', fontSize: '0.88rem' }}>
                No slots available on this date.
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(95px, 1fr))',
                  gap: '0.5rem',
                  maxHeight: '160px',
                  overflowY: 'auto',
                  padding: '4px'
                }}
              >
                {slotsData.slots.map((slot) => {
                  const isSelected = selectedTime === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      title={slot.reason}
                      style={{
                        padding: '0.5rem 0.4rem',
                        borderRadius: '8px',
                        border: isSelected ? '2px solid #AD2348' : '1px solid #E5E7EB',
                        background: isSelected ? '#AD2348' : !slot.available ? '#F3F4F6' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : !slot.available ? '#9CA3AF' : '#1B2430',
                        fontSize: '0.82rem',
                        fontWeight: isSelected ? 600 : 500,
                        cursor: !slot.available ? 'not-allowed' : 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {formatTime(slot.time)}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Reschedule Reason if applicable */}
          {isReschedule && (
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.35rem' }}>
                Rescheduling Reason *
              </label>
              <input
                type="text"
                placeholder="e.g. Patient requested morning slot, Doctor emergency delayed OPD..."
                value={rescheduleReason}
                onChange={(e) => setRescheduleReason(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '10px',
                  border: '1.5px solid #D1D5DB',
                  fontSize: '0.9rem',
                  color: '#1B2430',
                  outline: 'none'
                }}
                required
              />
            </div>
          )}

          {/* Admin Notes */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.35rem' }}>
              Internal Clinical / Reception Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Patient needs fasting instructions, high-risk scan..."
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                border: '1.5px solid #D1D5DB',
                fontSize: '0.9rem',
                color: '#1B2430',
                outline: 'none'
              }}
            />
          </div>

          {/* Action buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(173, 35, 72, 0.1)'
            }}
          >
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                border: '1px solid #D1D5DB',
                background: '#FFFFFF',
                color: '#374151',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting || !selectedTime || !isDurationVerified}
              style={{
                padding: '0.65rem 1.35rem',
                borderRadius: '10px',
                border: 'none',
                background: '#AD2348',
                color: '#FFFFFF',
                fontWeight: 600,
                cursor: submitting || !selectedTime || !isDurationVerified ? 'not-allowed' : 'pointer',
                opacity: submitting || !selectedTime || !isDurationVerified ? 0.6 : 1,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(173, 35, 72, 0.25)'
              }}
            >
              {submitting ? (
                <>
                  <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                  Saving Slot...
                </>
              ) : isReschedule ? (
                'Confirm Reschedule'
              ) : (
                'Allocate Slot'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
