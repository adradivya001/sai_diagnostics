import { useState, createContext, useContext } from 'react';
import { X, Calendar, CheckCircle2, Clock, AlertCircle, Loader2, MessageCircle, ShieldCheck } from 'lucide-react';
import { services } from '../data/services';
import { supabase } from '../lib/supabaseClient';

const CONSENT_TEXT_VERSION = 'v1.0_2026';
const CONSENT_SOURCE = 'web_appointment_modal';

const AppointmentModalContext = createContext(null);

export const useAppointmentModal = () => useContext(AppointmentModalContext);

export const AppointmentModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    scanType: services[0]?.name || 'Dating, Viability / Pregnancy Scan',
    preferredDate: '',
    doctor: 'Dr. T. Sai Kiranmai (M.B.B.S., DMRD)',
    notes: ''
  });

  // WhatsApp communication preferences (both optional and unchecked by default)
  const [whatsappAppointmentConsent, setWhatsappAppointmentConsent] = useState(false);
  const [whatsappPromotionalConsent, setWhatsappPromotionalConsent] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [requestId, setRequestId] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const openModal = (initialService = '') => {
    const matchedService = services.find(s => s.name === initialService);
    setFormData(prev => ({
      ...prev,
      scanType: matchedService ? matchedService.name : (services[0]?.name || 'Dating, Viability / Pregnancy Scan')
    }));
    setWhatsappAppointmentConsent(false);
    setWhatsappPromotionalConsent(false);
    setSubmitted(false);
    setIsSubmitting(false);
    setErrors({});
    setRequestId(null);
    setSubmitError(null);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData(prev => ({
      ...prev,
      name: '',
      phone: '',
      age: '',
      scanType: services[0]?.name || 'Dating, Viability / Pregnancy Scan',
      preferredDate: '',
      notes: ''
    }));
    setWhatsappAppointmentConsent(false);
    setWhatsappPromotionalConsent(false);
    setSubmitted(false);
    setIsSubmitting(false);
    setErrors({});
    setRequestId(null);
    setSubmitError(null);
    document.body.style.overflow = '';
  };

  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (minimum 2 characters).';
    }
    const cleanPhone = formData.phone.trim().replace(/\D/g, '');
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (formData.age) {
      const numAge = parseInt(formData.age, 10);
      if (isNaN(numAge) || numAge <= 0 || numAge > 120) {
        errs.age = 'Please enter a valid age.';
      }
    }

    // Strict Date Guardrails:
    // 1. Must be a valid date format YYYY-MM-DD
    // 2. Reject all-zeros or invalid segments (e.g. 0000-00-00, 2026-00-00)
    // 3. Disallow past dates (prior to today)
    if (formData.preferredDate) {
      const dateVal = formData.preferredDate.trim();
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateVal);
      if (!match) {
        errs.preferredDate = 'Please select a valid appointment date.';
      } else {
        const year = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const day = parseInt(match[3], 10);

        if (year <= 0 || month <= 0 || month > 12 || day <= 0 || day > 31) {
          errs.preferredDate = 'Invalid date. Zeros or invalid calendar values are not accepted.';
        } else {
          const parsed = new Date(`${dateVal}T00:00:00`);
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (isNaN(parsed.getTime())) {
            errs.preferredDate = 'Please enter a valid calendar date.';
          } else if (parsed < today) {
            errs.preferredDate = 'Past dates are not available for booking. Please select today or a future date.';
          }
        }
      }
    }

    // Strict Service Selection Validation:
    // Ensure selected service exists in approved services list and is not empty
    if (!formData.scanType || !formData.scanType.trim()) {
      errs.scanType = 'Please select a diagnostic scan or service.';
    } else if (!services.some(s => s.name === formData.scanType)) {
      errs.scanType = 'The selected service is not recognized. Please choose a valid service from the list.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const cleanPhone = formData.phone.trim().replace(/\D/g, '');
      const isConsultation = formData.scanType.toLowerCase().includes('consultation');
      const requestType = isConsultation ? 'consultation' : 'scan';
      
      // Calculate normalized appointment date (fallback to today/tomorrow if not picked)
      const selectedDate = formData.preferredDate || new Date().toISOString().split('T')[0];

      // Submit appointment request securely via Supabase RPC (Zero patient-data exposure)
      const { data: rpcResponse, error: rpcError } = await supabase.rpc('submit_appointment_request', {
        p_patient_name: formData.name.trim(),
        p_mobile_number: cleanPhone,
        p_request_type: requestType,
        p_service: formData.scanType,
        p_appointment_date: selectedDate,
        p_whatsapp_consent_appointment: !!whatsappAppointmentConsent,
        p_whatsapp_consent_promotional: !!whatsappPromotionalConsent,
        p_consent_source: CONSENT_SOURCE,
        p_consent_text_version: CONSENT_TEXT_VERSION
      });

      if (rpcError) {
        throw new Error(rpcError.message || 'Unable to register appointment request.');
      }

      if (!rpcResponse || !rpcResponse.success || !rpcResponse.appointment_id) {
        throw new Error(rpcResponse?.error || 'Registration failed. Please check form inputs or contact clinic reception.');
      }

      // Success confirmed by database: Record Request ID and transition view
      setRequestId(rpcResponse.appointment_id);
      setSubmitted(true);
    } catch (err) {
      console.error('Appointment submission error:', err?.message || err);
      setSubmitError(
        err?.message || 
        'Unable to connect to the clinic server. Please check your internet connection or call our reception directly at +91 77999 00248.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppointmentModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* Global Appointment Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(32, 7, 15, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: 'clamp(0.5rem, 2.5vw, 1rem)',
            animation: 'fadeIn 0.25s ease-out'
          }}
          onClick={closeModal}
        >
          <div
            className="animate-fade-in-up"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              maxWidth: '560px',
              width: '100%',
              maxHeight: '94dvh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px -15px rgba(173, 35, 72, 0.3)',
              position: 'relative',
              border: '1px solid rgba(173, 35, 72, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Strip with Burgundy Gradient */}
            <div style={{
              background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)',
              padding: 'clamp(1.25rem, 3.5vw, 1.75rem) clamp(1.15rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem)',
              borderBottom: '1px solid rgba(173, 35, 72, 0.12)',
              position: 'relative'
            }}>
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#ffffff',
                  border: '1px solid rgba(173, 35, 72, 0.15)',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-charcoal)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F8E7EC'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                type="button"
                aria-label="Close appointment modal"
              >
                <X size={20} />
              </button>

              <span className="section-tag" style={{ marginBottom: '0.4rem', fontSize: '0.74rem' }}>
                <Calendar size={13} /> ONLINE PATIENT APPOINTMENT
              </span>

              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.65rem',
                color: 'var(--text-heading)',
                margin: 0,
                lineHeight: 1.2
              }}>
                Book Your Scan & Consultation
              </h2>
              <p style={{ color: 'var(--text-charcoal)', fontSize: '0.88rem', margin: '0.35rem 0 0', lineHeight: 1.5 }}>
                Sai Diagnostics & Fetal Medicine Centre • Anantapur
              </p>
            </div>

            {/* Content Body */}
            <div style={{ padding: 'clamp(1.25rem, 3.5vw, 1.75rem) clamp(1rem, 3.5vw, 2rem) clamp(1.25rem, 3.5vw, 2rem)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <div style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: '#F8E7EC',
                    color: '#AD2348',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                    boxShadow: '0 4px 16px rgba(173, 35, 72, 0.2)'
                  }}>
                    <CheckCircle2 size={38} />
                  </div>

                  <h3 style={{ fontSize: '1.45rem', color: 'var(--text-heading)', marginBottom: '0.5rem', fontFamily: '"Playfair Display", serif' }}>
                    Appointment Request Submitted!
                  </h3>

                  <p style={{ color: 'var(--text-charcoal)', fontSize: '0.94rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>. We have received your appointment request for <strong>{formData.scanType}</strong>.
                    <br /><br />
                    <span style={{ color: '#AD2348', fontWeight: 600 }}>Please Note:</span> Your appointment is currently <strong>Pending Confirmation</strong>. Our hospital reception team will contact you at <strong>{formData.phone}</strong> to confirm your slot time and clinical preparation.
                  </p>

                  <div style={{
                    background: 'var(--bg-skyblue-pale)',
                    border: '1px solid rgba(37, 137, 196, 0.25)',
                    borderRadius: '14px',
                    padding: '1rem',
                    marginBottom: '1.75rem',
                    fontSize: '0.86rem',
                    color: 'var(--text-charcoal)',
                    textAlign: 'left'
                  }}>
                    <div style={{ fontWeight: 700, color: '#2589C4', marginBottom: '0.35rem' }}>Inquiry Summary:</div>
                    {requestId && (
                      <div style={{ marginBottom: '0.25rem' }}>
                        <strong>Reference ID:</strong> <code style={{ fontSize: '0.8rem', background: 'rgba(37, 137, 196, 0.12)', padding: '2px 6px', borderRadius: '4px' }}>{requestId.slice(0, 8).toUpperCase()}</code>
                      </div>
                    )}
                    <div><strong>Specialist:</strong> {formData.doctor}</div>
                    <div><strong>Requested Date:</strong> {formData.preferredDate || 'Earliest Available'}</div>
                    <div><strong>Clinic Helpline:</strong> +91 77999 00248</div>
                  </div>

                  <button
                    onClick={closeModal}
                    className="btn btn-primary"
                    style={{ padding: '0.75rem 2.5rem', width: '100%' }}
                    type="button"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Error Notification Banner */}
                  {submitError && (
                    <div style={{
                      background: '#FDF2F4',
                      border: '1px solid #C2184B',
                      borderRadius: '12px',
                      padding: '0.85rem 1rem',
                      marginBottom: '1.25rem',
                      fontSize: '0.85rem',
                      color: '#C2184B',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}>
                      <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div style={{ flex: 1, lineHeight: 1.5 }}>
                        <strong>Submission Issue:</strong> {submitError}
                      </div>
                    </div>
                  )}

                  {/* Step Indicators / Info Badge */}
                  <div style={{
                    background: '#F8E7EC',
                    border: '1px solid rgba(173, 35, 72, 0.15)',
                    borderRadius: '12px',
                    padding: '0.75rem 1rem',
                    marginBottom: '1.35rem',
                    fontSize: '0.82rem',
                    color: '#AD2348',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Clock size={16} style={{ flexShrink: 0 }} />
                    <span>Operating Hours: Monday – Saturday: 8:30 AM – 7:00 PM • Sunday: Closed</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Patient Name */}
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="modal-name">
                        Patient Full Name *
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        required
                        placeholder="e.g. Sravani Reddy"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className="form-input"
                        style={{ borderColor: errors.name ? '#C2184B' : undefined }}
                      />
                      {errors.name && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C2184B', fontSize: '0.8rem', marginTop: '4px' }}>
                          <AlertCircle size={13} /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Phone & Age Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '0.85rem' }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label" htmlFor="modal-phone">
                          Mobile Number (+91) *
                        </label>
                        <input
                          id="modal-phone"
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '');
                            setFormData({ ...formData, phone: val });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          className="form-input"
                          style={{ borderColor: errors.phone ? '#C2184B' : undefined }}
                        />
                        {errors.phone && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C2184B', fontSize: '0.8rem', marginTop: '4px' }}>
                            <AlertCircle size={13} /> {errors.phone}
                          </span>
                        )}
                      </div>

                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label" htmlFor="modal-age">
                          Age
                        </label>
                        <input
                          id="modal-age"
                          type="number"
                          placeholder="Years"
                          min="1"
                          max="120"
                          value={formData.age}
                          onChange={(e) => {
                            setFormData({ ...formData, age: e.target.value });
                            if (errors.age) setErrors({ ...errors, age: undefined });
                          }}
                          className="form-input"
                          style={{ borderColor: errors.age ? '#C2184B' : undefined }}
                        />
                        {errors.age && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C2184B', fontSize: '0.8rem', marginTop: '4px' }}>
                            <AlertCircle size={13} /> {errors.age}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Scan / Test Selection */}
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="modal-service">
                        Select Diagnostic Scan / Service *
                      </label>
                      <select
                        id="modal-service"
                        value={formData.scanType}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, scanType: val });
                          if (errors.scanType) {
                            setErrors({ ...errors, scanType: undefined });
                          }
                        }}
                        className="form-select"
                        style={{ borderColor: errors.scanType ? '#C2184B' : undefined }}
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      {errors.scanType && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C2184B', fontSize: '0.8rem', marginTop: '4px' }}>
                          <AlertCircle size={13} /> {errors.scanType}
                        </span>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="modal-date">
                        Preferred Date
                      </label>
                      <input
                        id="modal-date"
                        type="date"
                        min={getTodayDateString()}
                        value={formData.preferredDate}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, preferredDate: val });
                          if (errors.preferredDate) {
                            setErrors({ ...errors, preferredDate: undefined });
                          }
                        }}
                        className="form-input"
                        style={{ borderColor: errors.preferredDate ? '#C2184B' : undefined }}
                      />
                      {errors.preferredDate && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C2184B', fontSize: '0.8rem', marginTop: '4px' }}>
                          <AlertCircle size={13} /> {errors.preferredDate}
                        </span>
                      )}
                    </div>

                    {/* Consultant Doctor */}
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">
                        Consultant Doctor
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={formData.doctor}
                        className="form-input"
                        style={{ backgroundColor: '#faf8f9', color: '#59616B', cursor: 'not-allowed' }}
                      />
                    </div>

                    {/* Additional Notes / Gestational Weeks */}
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="modal-notes">
                        Gestational Age / Clinical Notes (Optional)
                      </label>
                      <textarea
                        id="modal-notes"
                        rows={2}
                        placeholder="e.g. 19 weeks pregnant, referred by gynecologist for anomaly survey..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="form-textarea"
                        style={{ minHeight: '70px' }}
                      />
                    </div>
                  </div>

                  {/* WhatsApp Communication Preferences Section */}
                  <div
                    style={{
                      marginTop: '1.25rem',
                      padding: '1rem 1.1rem',
                      background: '#FFF9F5',
                      border: '1px solid rgba(173, 35, 72, 0.16)',
                      borderRadius: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: '#E8F5E9',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#2E7D32',
                          flexShrink: 0
                        }}
                      >
                        <MessageCircle size={14} />
                      </span>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-heading, #1F2733)' }}>
                          WhatsApp Communication Preferences
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #647184)' }}>
                          Optional · You can modify or withdraw consent at any time
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {/* Preference 1: Appointment Updates */}
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          cursor: 'pointer',
                          fontSize: '0.82rem',
                          color: '#343943',
                          lineHeight: 1.45,
                          userSelect: 'none'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={whatsappAppointmentConsent}
                          onChange={(e) => setWhatsappAppointmentConsent(e.target.checked)}
                          style={{
                            marginTop: '2px',
                            accentColor: '#AD2348',
                            width: '16px',
                            height: '16px',
                            cursor: 'pointer',
                            flexShrink: 0
                          }}
                        />
                        <span>
                          <strong>Appointment Updates:</strong> I agree to receive appointment confirmations, reminders and booking-related updates from the hospital through WhatsApp.
                        </span>
                      </label>

                      {/* Preference 2: Health Awareness & Promotional Updates */}
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          cursor: 'pointer',
                          fontSize: '0.82rem',
                          color: '#343943',
                          lineHeight: 1.45,
                          userSelect: 'none'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={whatsappPromotionalConsent}
                          onChange={(e) => setWhatsappPromotionalConsent(e.target.checked)}
                          style={{
                            marginTop: '2px',
                            accentColor: '#AD2348',
                            width: '16px',
                            height: '16px',
                            cursor: 'pointer',
                            flexShrink: 0
                          }}
                        />
                        <span>
                          <strong>Health Awareness &amp; Promotional Updates:</strong> I agree to receive hospital health campaigns, awareness programmes, health camp announcements and promotional information through WhatsApp.
                        </span>
                      </label>
                    </div>

                    <p style={{ margin: 0, fontSize: '0.72rem', color: '#647184', lineHeight: 1.4 }}>
                      * Both choices are completely optional. Declining consent will not prevent or delay your appointment booking. Your clinical notes and medical records are kept confidential and are never used for promotional targeting.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div style={{ marginTop: '1.25rem' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.95rem',
                        fontSize: '1rem',
                        fontWeight: 700,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.8 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Submitting Request...
                        </>
                      ) : (
                        'Submit Appointment Request →'
                      )}
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                      * Note: An appointment request is confirmed only after telephone verification by our reception desk.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </AppointmentModalContext.Provider>
  );
};
