import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  AlertTriangle,
  Check
} from 'lucide-react';
import { doctorService } from '../services/doctorService';
import { appointmentService } from '../services/appointmentService';
import { formatDate, formatTime, getTodayDateString } from '../utils/dateUtils';
import { useTheme } from '../context/ThemeContext';
import { supabase } from '../../lib/supabaseClient';

export const AppointmentAllocationModal = ({
  isOpen,
  appointment,
  onClose,
  onSuccess
}) => {
  const { colors, isDark } = useTheme();

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
  const [successInfo, setSuccessInfo] = useState(null);

  const [isDurationVerified, setIsDurationVerified] = useState(true);
  const [checkingVerification, setCheckingVerification] = useState(true);

  // Check if this action counts as a reschedule
  const isReschedule = Boolean(
    (appointment?.assigned_date && selectedDate !== appointment.assigned_date) ||
    (appointment?.assigned_time && selectedTime !== appointment.assigned_time) ||
    (appointment?.status === 'confirmed' || appointment?.status === 'time_assigned' || appointment?.status === 'rescheduled')
  );

  // Load primary doctor and verify service duration status from public.approved_services
  useEffect(() => {
    if (!isOpen || !appointment) return;

    setSelectedDate(appointment?.assigned_date || appointment?.appointment_date || getTodayDateString());
    setSelectedTime(appointment?.assigned_time || '');
    setAdminNotes(appointment?.admin_notes || '');
    setRescheduleReason('');
    setSuccessInfo(null);
    setError(null);

    let mounted = true;
    const initModal = async () => {
      setCheckingVerification(true);
      try {
        const doc = await doctorService.getPrimaryDoctor();
        if (mounted) setDoctor(doc);

        const { data: serviceRecord, error: servErr } = await supabase
          .from('approved_services')
          .select('is_duration_verified, duration_mins')
          .eq('name', appointment.service)
          .maybeSingle();

        if (servErr) {
          console.warn('Could not check service duration verification:', servErr.message);
        }

        if (mounted) {
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
          // Keep current selection if available
          if (selectedTime && !data.slots.some(s => s.time === selectedTime && s.available)) {
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
      setError(`Cannot schedule: Service duration for "${appointment.service}" must be verified by hospital administration.`);
      return;
    }

    if (!doctor?.id) {
      setError('Consultant doctor record is unavailable. Please check doctor setup.');
      return;
    }

    if (!selectedDate) {
      setError('Please select an appointment date.');
      return;
    }

    if (!selectedTime) {
      setError('Please tap an available green time slot to book.');
      return;
    }

    if (isReschedule && (!rescheduleReason.trim() || rescheduleReason.trim().length < 3)) {
      setError('Please enter a brief reason for rescheduling (e.g. Patient requested morning time).');
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

      // Show immediate positive feedback
      setSuccessInfo({
        patientName: appointment.patient_name,
        date: selectedDate,
        time: selectedTime
      });

      setTimeout(() => {
        if (onSuccess) onSuccess();
        onClose();
      }, 1400);

    } catch (err) {
      console.error('Booking error:', err);
      setError(err.message || 'Slot allocation failed. Please select an available slot.');
    } finally {
      setSubmitting(false);
    }
  };

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
          maxWidth: '560px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isDark ? '0 20px 45px rgba(0, 0, 0, 0.6)' : '0 20px 45px rgba(173, 35, 72, 0.18)',
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
          <div>
            <h3 style={{ margin: 0, fontSize: '1.18rem', fontWeight: 700, color: colors.textPrimary }}>
              {isReschedule ? 'Reschedule Appointment' : 'Book Patient Appointment'}
            </h3>
            <p style={{ margin: '0.25rem 0 0', fontSize: '0.84rem', color: colors.textSecondary }}>
              Patient: <strong style={{ color: colors.textPrimary }}>{appointment.patient_name}</strong> • Phone: {appointment.mobile_number}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
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

        {/* Content Form */}
        <form onSubmit={handleSubmit} style={{ padding: '1.25rem 1.5rem', overflowY: 'auto' }}>
          {successInfo ? (
            <div
              style={{
                padding: '2rem 1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: colors.successBg,
                  color: colors.success,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Check size={36} strokeWidth={3} />
              </div>
              <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: colors.textPrimary }}>
                Appointment Confirmed!
              </h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: colors.textSecondary }}>
                Booked for <strong>{successInfo.patientName}</strong> on <strong>{formatDate(successInfo.date)}</strong> at <strong>{formatTime(successInfo.time)}</strong>.
              </p>
            </div>
          ) : (
            <>
              {error && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: colors.dangerBg,
                    border: `1px solid ${colors.danger}40`,
                    color: colors.danger,
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

              {/* Patient Service & Doctor Summary */}
              <div
                style={{
                  background: colors.subtleBg,
                  padding: '1rem',
                  borderRadius: '12px',
                  marginBottom: '1.25rem',
                  border: `1px solid ${colors.border}`,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                  fontSize: '0.85rem'
                }}
              >
                <div>
                  <span style={{ color: colors.textMuted, display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Requested Scan</span>
                  <strong style={{ color: colors.textPrimary, fontSize: '0.92rem' }}>{appointment.service}</strong>
                </div>
                <div>
                  <span style={{ color: colors.textMuted, display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Preferred Date</span>
                  <strong style={{ color: colors.textPrimary, fontSize: '0.92rem' }}>{formatDate(appointment.appointment_date)}</strong>
                </div>
                <div>
                  <span style={{ color: colors.textMuted, display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Consultant Doctor</span>
                  <strong style={{ color: colors.brandPrimary }}>{doctor?.name || 'Dr. T. Sai Kiranmai'}</strong>
                </div>
                <div>
                  <span style={{ color: colors.textMuted, display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Specialty</span>
                  <span style={{ color: colors.textSecondary }}>{doctor?.specialty || 'Radiologist & Fetal Medicine'}</span>
                </div>
              </div>

              {/* Step 1: Date Selection */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: colors.textPrimary, marginBottom: '0.35rem' }}>
                  1. Choose Appointment Date *
                </label>
                <input
                  type="date"
                  min={getTodayDateString()}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${colors.border}`,
                    background: colors.inputBg,
                    fontSize: '0.92rem',
                    color: colors.textPrimary,
                    outline: 'none',
                    fontWeight: 600
                  }}
                  required
                />
              </div>

              {/* Step 2: Time Slot Selection */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 700, color: colors.textPrimary }}>
                    2. Select Available Time Slot *
                  </label>
                  {selectedTime && (
                    <span style={{ color: colors.success, fontWeight: 700, fontSize: '0.84rem' }}>
                      Selected: {formatTime(selectedTime)}
                    </span>
                  )}
                </div>

                {loadingSlots ? (
                  <div style={{ padding: '1.5rem', textAlign: 'center', color: colors.textSecondary }}>
                    <Loader2 size={24} style={{ animation: 'spin 1s linear infinite', color: colors.brandPrimary, margin: '0 auto 0.5rem' }} />
                    <span style={{ fontSize: '0.85rem' }}>Checking doctor availability...</span>
                  </div>
                ) : !slotsData.available ? (
                  <div
                    style={{
                      padding: '1rem',
                      borderRadius: '10px',
                      background: colors.dangerBg,
                      border: `1px solid ${colors.danger}40`,
                      color: colors.danger,
                      fontSize: '0.88rem',
                      fontWeight: 600
                    }}
                  >
                    {slotsData.reason || 'Doctor unavailable on this date.'}
                  </div>
                ) : slotsData.slots.length === 0 ? (
                  <div style={{ padding: '1rem', textAlign: 'center', color: colors.textMuted, fontSize: '0.88rem' }}>
                    No slots scheduled on this date.
                  </div>
                ) : (
                  <div>
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
                              padding: '0.55rem 0.4rem',
                              borderRadius: '8px',
                              border: isSelected 
                                ? `2px solid ${colors.brandPrimary}` 
                                : slot.available
                                  ? `1px solid ${colors.border}`
                                  : isDark ? '1px solid #334155' : '1px solid #E5E7EB',
                              background: isSelected 
                                ? colors.brandPrimary 
                                : !slot.available 
                                  ? isDark ? '#1E293B' : '#F3F4F6' 
                                  : isDark ? '#0F172A' : '#FFFFFF',
                              color: isSelected 
                                ? '#FFFFFF' 
                                : !slot.available 
                                  ? isDark ? '#64748B' : '#9CA3AF' 
                                  : colors.textPrimary,
                              fontSize: '0.82rem',
                              fontWeight: isSelected ? 700 : 500,
                              cursor: !slot.available ? 'not-allowed' : 'pointer',
                              opacity: !slot.available ? 0.6 : 1,
                              transition: 'all 0.15s ease'
                            }}
                          >
                            {formatTime(slot.time)}
                          </button>
                        );
                      })}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.74rem', color: colors.textMuted }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: colors.brandPrimary }} />
                        Selected
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isDark ? '#0F172A' : '#FFFFFF', border: `1px solid ${colors.border}` }} />
                        Available
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#9CA3AF' }} />
                        Occupied / Break
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Reschedule Reason if applicable */}
              {isReschedule && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: colors.textPrimary, marginBottom: '0.35rem' }}>
                    Reason for Rescheduling *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Patient requested morning slot, Doctor emergency delayed..."
                    value={rescheduleReason}
                    onChange={(e) => setRescheduleReason(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: `1.5px solid ${colors.border}`,
                      background: colors.inputBg,
                      fontSize: '0.88rem',
                      color: colors.textPrimary,
                      outline: 'none'
                    }}
                    required
                  />
                </div>
              )}

              {/* Reception Notes */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: colors.textSecondary, marginBottom: '0.35rem' }}>
                  Reception / Preparation Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Patient needs fasting instructions, 20-week scan..."
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${colors.border}`,
                    background: colors.inputBg,
                    fontSize: '0.88rem',
                    color: colors.textPrimary,
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
                  borderTop: `1px solid ${colors.border}`
                }}
              >
                <button
                  type="button"
                  onClick={onClose}
                  disabled={submitting}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: '10px',
                    border: `1px solid ${colors.border}`,
                    background: colors.cardBg,
                    color: colors.textSecondary,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting || !selectedTime || !isDurationVerified}
                  style={{
                    padding: '0.65rem 1.45rem',
                    borderRadius: '10px',
                    border: 'none',
                    background: colors.brandPrimary,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.88rem',
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
                      Saving Appointment...
                    </>
                  ) : isReschedule ? (
                    'Confirm Reschedule'
                  ) : (
                    'Book Appointment'
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
