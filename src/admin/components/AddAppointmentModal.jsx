import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { services } from '../../data/services';
import { appointmentService } from '../services/appointmentService';
import { doctorService } from '../services/doctorService';
import { getTodayDateString, formatTime } from '../utils/dateUtils';
import { useTheme } from '../context/ThemeContext';
import { supabase } from '../../lib/supabaseClient';

export const AddAppointmentModal = ({ isOpen, onClose, onSuccess }) => {
  const { colors, isDark } = useTheme();

  const [formData, setFormData] = useState({
    patient_name: '',
    mobile_number: '',
    age: '',
    service: services[0]?.name || 'Dating, Viability / Pregnancy Scan',
    appointment_date: getTodayDateString(),
    assigned_time: '',
    notes: '',
    whatsapp_consent_appointment: true
  });

  const [doctor, setDoctor] = useState(null);
  const [slotsData, setSlotsData] = useState({ available: true, slots: [] });
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Load primary doctor and available slots
  React.useEffect(() => {
    if (!isOpen) return;

    let mounted = true;
    const init = async () => {
      try {
        const doc = await doctorService.getPrimaryDoctor();
        if (mounted) setDoctor(doc);

        if (doc?.id && formData.appointment_date) {
          setLoadingSlots(true);
          const data = await doctorService.getAvailableSlots({
            doctorId: doc.id,
            date: formData.appointment_date,
            serviceDurationMins: 30
          });
          if (mounted) setSlotsData(data);
        }
      } catch (err) {
        console.warn('Slot check warning:', err);
      } finally {
        if (mounted) setLoadingSlots(false);
      }
    };

    init();
    return () => {
      mounted = false;
    };
  }, [isOpen, formData.appointment_date]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const cleanPhone = formData.mobile_number.trim().replace(/\D/g, '');
    if (!formData.patient_name.trim() || formData.patient_name.trim().length < 2) {
      setError('Please provide a patient name (minimum 2 characters).');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please provide a valid 10-digit Indian mobile number.');
      return;
    }
    if (!formData.appointment_date) {
      setError('Please select an appointment date.');
      return;
    }

    setSubmitting(true);
    try {
      // 1. Submit appointment through the secure submit_appointment_request RPC
      const isConsultation = formData.service.toLowerCase().includes('consultation');
      const requestType = isConsultation ? 'consultation' : 'scan';

      const { data: intakeRes, error: intakeErr } = await supabase.rpc('submit_appointment_request', {
        p_patient_name: formData.patient_name.trim(),
        p_mobile_number: cleanPhone,
        p_request_type: requestType,
        p_service: formData.service,
        p_appointment_date: formData.appointment_date,
        p_whatsapp_consent_appointment: Boolean(formData.whatsapp_consent_appointment),
        p_whatsapp_consent_promotional: false,
        p_consent_source: 'admin_dashboard_manual_entry',
        p_consent_text_version: 'v1.0_2026'
      });

      if (intakeErr) throw new Error(intakeErr.message);
      if (!intakeRes?.success || !intakeRes?.appointment_id) {
        throw new Error(intakeRes?.error || 'Failed to register appointment request.');
      }

      const appointmentId = intakeRes.appointment_id;

      // 2. If staff selected a slot time and notes, allocate it directly through allocate_appointment_slot
      if (formData.assigned_time && doctor?.id) {
        try {
          await appointmentService.allocateSlot({
            appointmentId,
            doctorId: doctor.id,
            assignedDate: formData.appointment_date,
            assignedTime: formData.assigned_time,
            adminNotes: formData.notes.trim() || 'Booked directly via clinic administration desk.'
          });
        } catch (allocErr) {
          console.warn('Slot allocation notice after intake:', allocErr);
          // If slot allocation encountered conflict or unverified duration, appointment is still safely saved as pending
        }
      }

      if (onSuccess) onSuccess();
      onClose();
    } catch (err) {
      console.error('Add appointment error:', err);
      setError(err.message || 'Unable to save appointment. Please check inputs.');
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
          color: colors.textPrimary,
          borderRadius: '20px',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
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
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: colors.textPrimary }}>
              New Patient Appointment
            </h3>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: colors.textSecondary }}>
              Register direct desk appointment or walk-in patient
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
          {error && (
            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                background: colors.dangerBg,
                border: `1px solid ${colors.danger}`,
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

          {/* Patient Name & Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.35rem' }}>
                Patient Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Anusha Reddy"
                value={formData.patient_name}
                onChange={(e) => setFormData({ ...formData, patient_name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.65rem 0.8rem',
                  borderRadius: '10px',
                  border: `1.5px solid ${colors.border}`,
                  background: colors.inputBg,
                  color: colors.textPrimary,
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.35rem' }}>
                Mobile Number (10 digits) *
              </label>
              <input
                type="tel"
                maxLength={10}
                placeholder="e.g. 9876543210"
                value={formData.mobile_number}
                onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.65rem 0.8rem',
                  borderRadius: '10px',
                  border: `1.5px solid ${colors.border}`,
                  background: colors.inputBg,
                  color: colors.textPrimary,
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Service & Date */}
          <div style={{ marginBottom: '1.1rem' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.35rem' }}>
              Diagnostic Scan / Service *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              style={{
                width: '100%',
                padding: '0.65rem 0.8rem',
                borderRadius: '10px',
                border: `1.5px solid ${colors.border}`,
                background: colors.inputBg,
                color: colors.textPrimary,
                fontSize: '0.88rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            >
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Appointment Date */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.35rem' }}>
                Appointment Date *
              </label>
              <input
                type="date"
                min={getTodayDateString()}
                value={formData.appointment_date}
                onChange={(e) => setFormData({ ...formData, appointment_date: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '0.65rem 0.8rem',
                  borderRadius: '10px',
                  border: `1.5px solid ${colors.border}`,
                  background: colors.inputBg,
                  color: colors.textPrimary,
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.35rem' }}>
                Patient Age (Optional)
              </label>
              <input
                type="number"
                placeholder="Years"
                min={1}
                max={120}
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.8rem',
                  borderRadius: '10px',
                  border: `1.5px solid ${colors.border}`,
                  background: colors.inputBg,
                  color: colors.textPrimary,
                  fontSize: '0.88rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Time Slot Selection (Optional on intake, but can allocate directly) */}
          <div style={{ marginBottom: '1.1rem' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.35rem' }}>
              Assign Time Slot (Optional) {formData.assigned_time && <span style={{ color: colors.brandPrimary }}>({formatTime(formData.assigned_time)})</span>}
            </label>

            {loadingSlots ? (
              <div style={{ padding: '0.75rem', textAlign: 'center', color: colors.textSecondary, fontSize: '0.82rem' }}>
                <Loader2 size={16} style={{ animation: 'spin 1s linear infinite', color: colors.brandPrimary, margin: '0 auto 4px' }} />
                Checking consultant slots...
              </div>
            ) : !slotsData.available ? (
              <div style={{ padding: '0.65rem 0.85rem', borderRadius: '8px', background: colors.warningBg, color: colors.warning, fontSize: '0.82rem' }}>
                {slotsData.reason || 'Doctor unavailable on this day.'}
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                  gap: '0.4rem',
                  maxHeight: '120px',
                  overflowY: 'auto',
                  padding: '4px'
                }}
              >
                {slotsData.slots.map((slot) => {
                  const isSelected = formData.assigned_time === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => setFormData({ ...formData, assigned_time: isSelected ? '' : slot.time })}
                      style={{
                        padding: '0.4rem 0.2rem',
                        borderRadius: '6px',
                        border: isSelected ? `2px solid ${colors.brandPrimary}` : `1px solid ${colors.border}`,
                        background: isSelected ? colors.brandPrimary : !slot.available ? (isDark ? '#1E293B' : '#F3F4F6') : colors.cardBg,
                        color: isSelected ? '#FFFFFF' : !slot.available ? colors.textMuted : colors.textPrimary,
                        fontSize: '0.78rem',
                        fontWeight: isSelected ? 600 : 500,
                        cursor: !slot.available ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {formatTime(slot.time)}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Notes */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.35rem' }}>
              Desk Notes / Referring Doctor (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Referred by Dr. Anitha, patient requested urgent scan review..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              style={{
                width: '100%',
                padding: '0.65rem 0.8rem',
                borderRadius: '10px',
                border: `1.5px solid ${colors.border}`,
                background: colors.inputBg,
                color: colors.textPrimary,
                fontSize: '0.88rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Submit Actions */}
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
                padding: '0.6rem 1.2rem',
                borderRadius: '10px',
                border: `1px solid ${colors.border}`,
                background: colors.cardBg,
                color: colors.textSecondary,
                fontWeight: 600,
                fontSize: '0.86rem',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '10px',
                border: 'none',
                background: colors.brandPrimary,
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.86rem',
                cursor: submitting ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(173, 35, 72, 0.3)'
              }}
            >
              {submitting ? (
                <>
                  <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                  Saving Appointment...
                </>
              ) : (
                'Save Appointment'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
