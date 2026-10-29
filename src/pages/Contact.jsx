import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact & Appointments | Sai Diagnostics Anantapur';
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    scanType: 'TIFFA / Anomaly Scan',
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--bg-warm-white)', minHeight: '100vh', paddingBottom: '0' }}>
      {/* 1. Header Banner (Light Burgundy Warm Ambient Header) */}
      <section style={{
        background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)',
        color: 'var(--text-heading)',
        padding: '3.75rem 1.5rem 3.25rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(173, 35, 72, 0.1)'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ marginBottom: '0.85rem' }}>
            ● REACH OUT TO OUR CLINIC
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.3rem, 4vw, 3.3rem)',
            color: 'var(--text-heading)',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Contact & Appointments
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-charcoal)',
            lineHeight: 1.6,
            maxWidth: '660px',
            margin: '0 auto'
          }}>
            Have questions about an ultrasound scan, blood test preparation, or doctor timings? Our patient support desk is here to help you.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <div className="container" style={{ maxWidth: '1240px', marginTop: '3rem', marginBottom: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Contact Details & Location Card */}
          <div>
            <div className="card" style={{
              padding: '2.25rem',
              marginBottom: '2rem',
              backgroundColor: '#ffffff'
            }}>
              <span className="section-tag section-tag-blue" style={{ marginBottom: '0.75rem' }}>
                DIRECT CLINICAL DESK
              </span>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.8rem',
                color: 'var(--text-heading)',
                marginBottom: '1.5rem'
              }}>
                Sai Diagnostics Center
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div className="icon-box-burgundy" style={{ width: '42px', height: '42px' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-heading)', display: 'block', marginBottom: '2px', fontSize: '0.95rem' }}>
                      Center Address
                    </strong>
                    <p style={{ margin: 0, color: 'var(--text-charcoal)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      9th Cross Rd, Sai Nagar, Ashok Nagar,<br />
                      Anantapur, Andhra Pradesh 515001
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div className="icon-box-blue" style={{ width: '42px', height: '42px' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-heading)', display: 'block', marginBottom: '2px', fontSize: '0.95rem' }}>
                      Helpline & Appointments
                    </strong>
                    <a
                      href="tel:+917799900248"
                      style={{
                        margin: 0,
                        color: 'var(--primary-burgundy)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'block'
                      }}
                    >
                      +91 7799900248
                    </a>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Direct reception line for scheduling & queries
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div className="icon-box-burgundy" style={{ width: '42px', height: '42px' }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-heading)', display: 'block', marginBottom: '2px', fontSize: '0.95rem' }}>
                      Center Working Hours
                    </strong>
                    <p style={{ margin: 0, color: 'var(--text-charcoal)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      <strong>Monday – Saturday:</strong> 9:00 AM – 8:30 PM<br />
                      <strong>Sunday:</strong> Closed (Emergency scans on-call)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-subtle)',
              height: '320px',
              background: '#f1f5f9'
            }}>
              <iframe
                title="Sai Diagnostics Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.986877969894!2d77.5960416!3d14.6853611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b0b144fa505%3A0xb3a22830f5c53155!2sSai%20Diagnostics!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Appointment / Inquiry Form */}
          <div className="card" style={{
            padding: '2.5rem',
            backgroundColor: '#ffffff'
          }}>
            <span className="section-tag" style={{ marginBottom: '0.5rem' }}>
              ONLINE SCHEDULING
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '1.8rem',
              color: 'var(--text-heading)',
              marginBottom: '0.5rem'
            }}>
              Schedule a Consultation / Scan
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '2rem' }}>
              Fill in your details and our team will get in touch to confirm your appointment timing.
            </p>

            {formSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                background: 'var(--bg-skyblue-pale)',
                borderRadius: '16px',
                border: '1px solid rgba(37, 137, 196, 0.25)'
              }}>
                <CheckCircle2 size={56} color="var(--primary-burgundy)" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                  Thank You, {formData.name}!
                </h3>
                <p style={{ color: 'var(--text-charcoal)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                  Your appointment request for <strong>{formData.scanType}</strong> has been received. Our reception will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', scanType: 'TIFFA / Anomaly Scan', preferredDate: '', message: '' });
                  }}
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 2rem' }}
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
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

                <div className="form-group">
                  <label className="form-label">
                    Scan or Service Required
                  </label>
                  <select
                    value={formData.scanType}
                    onChange={(e) => setFormData({ ...formData, scanType: e.target.value })}
                    className="form-select"
                  >
                    <option value="TIFFA / Anomaly Scan">Anomaly / TIFFA Scan (₹1,800)</option>
                    <option value="Nuchal Translucency Scan">NT Scan (12–14 Weeks) (₹1,500)</option>
                    <option value="Dating & Viability Scan">Dating / Viability Scan (₹1,000)</option>
                    <option value="Advanced Fetal Echo">Advanced Fetal Echo (₹2,500)</option>
                    <option value="Growth & Doppler Scan">Growth Scan + Doppler (₹1,500)</option>
                    <option value="Double Marker / NIPT">Blood Screening (Double Marker / NIPT)</option>
                    <option value="General Ultrasound">General Abdomen / Pelvis USG</option>
                    <option value="Doctor Consultation">Consultation with Dr. T. Sai Kiranmai</option>
                  </select>
                </div>

                <div className="form-group">
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

                <div className="form-group">
                  <label className="form-label">
                    Additional Message or Gestational Age (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 20 weeks pregnant, referred by Dr. Rao for TIFFA scan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    fontSize: '1rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <Send size={18} /> Submit Appointment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
