import { useState, createContext, useContext } from 'react';
import { X, Calendar, CheckCircle2, Phone, Clock, User, FileText, AlertCircle } from 'lucide-react';
import { services } from '../data/services';

const AppointmentModalContext = createContext(null);

export const useAppointmentModal = () => useContext(AppointmentModalContext);

export const AppointmentModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    scanType: 'TIFFA / Anomaly Scan',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 01:00 PM)',
    doctor: 'Dr. T. Sai Kiranmai (M.B.B.S., DMRD)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const openModal = (initialService = '') => {
    if (initialService) {
      setFormData(prev => ({ ...prev, scanType: initialService }));
    }
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your full name and mobile number.');
      return;
    }
    setSubmitted(true);
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
            padding: '1rem',
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
              maxHeight: '92vh',
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
              padding: '1.75rem 2rem 1.5rem',
              borderBottom: '1px solid rgba(173, 35, 72, 0.12)',
              position: 'relative'
            }}>
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: '#ffffff',
                  border: '1px solid rgba(173, 35, 72, 0.15)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
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
                <X size={18} />
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
            <div style={{ padding: '1.75rem 2rem 2rem' }}>
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
                    Appointment Request Received!
                  </h3>

                  <p style={{ color: 'var(--text-charcoal)', fontSize: '0.94rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>. We have registered your request for <strong>{formData.scanType}</strong>. Our clinical coordinator will call you at <strong>{formData.phone}</strong> shortly to confirm your visit time.
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
                    <div style={{ fontWeight: 700, color: '#2589C4', marginBottom: '0.35rem' }}>Appointment Summary:</div>
                    <div><strong>Specialist:</strong> {formData.doctor}</div>
                    <div><strong>Preferred Slot:</strong> {formData.preferredDate || 'Earliest Available'} ({formData.preferredTime})</div>
                    <div><strong>Clinic Desk:</strong> +91 7799900248</div>
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
                <form onSubmit={handleSubmit}>
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
                    <span>Clinic Timings: Mon–Sat, 9:00 AM – 8:30 PM • Same-day appointments available</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Patient Name */}
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sravani Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    {/* Phone & Age Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.85rem' }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">
                          Mobile Number (+91) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">
                          Age
                        </label>
                        <input
                          type="number"
                          placeholder="Years"
                          min="1"
                          max="120"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Scan / Test Selection */}
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">
                        Select Diagnostic Scan / Service *
                      </label>
                      <select
                        value={formData.scanType}
                        onChange={(e) => setFormData({ ...formData, scanType: e.target.value })}
                        className="form-select"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name} (₹{s.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date & Time Slot Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">
                          Preferred Time Window
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="form-select"
                        >
                          <option value="Morning (09:00 AM - 01:00 PM)">Morning (09:00 AM - 01:00 PM)</option>
                          <option value="Afternoon (01:00 PM - 05:00 PM)">Afternoon (01:00 PM - 05:00 PM)</option>
                          <option value="Evening (05:00 PM - 08:30 PM)">Evening (05:00 PM - 08:30 PM)</option>
                        </select>
                      </div>
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
                      <label className="form-label">
                        Gestational Age / Clinical Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. 19 weeks pregnant, referred by gynecologist for anomaly survey..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="form-textarea"
                        style={{ minHeight: '70px' }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div style={{ marginTop: '1.5rem' }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.95rem',
                        fontSize: '1rem',
                        fontWeight: 700
                      }}
                    >
                      Confirm Appointment Request →
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                      🔒 Your medical data is strictly confidential. No pre-payment required.
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
