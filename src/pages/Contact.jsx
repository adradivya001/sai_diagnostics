import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
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
    <div style={{ background: '#fbf9f4', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #163026 0%, #2b5c4b 100%)',
        color: '#ffffff',
        padding: '3.75rem 1.5rem 3.25rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block',
            letterSpacing: '2px',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#a7d3c0',
            marginBottom: '0.75rem',
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '4px 16px',
            borderRadius: '999px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            REACH OUT TO OUR CLINIC
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.3rem, 4vw, 3.3rem)',
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Contact & Appointments
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#e2ece6',
            lineHeight: 1.6,
            maxWidth: '660px',
            margin: '0 auto'
          }}>
            Have questions about an ultrasound scan, blood test preparation, or doctor timings? Our patient support desk is here to help you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ maxWidth: '1240px', marginTop: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Contact Details & Location Card */}
          <div>
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 8px 30px -4px rgba(10, 37, 64, 0.05)',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.8rem',
                color: '#0a2540',
                marginBottom: '1.5rem'
              }}>
                Sai Diagnostics Center
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: '#e4edea',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong style={{ color: '#0a2540', display: 'block', marginBottom: '2px', fontSize: '0.95rem' }}>
                      Center Address
                    </strong>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      9th Cross Rd, Sai Nagar, Ashok Nagar,<br />
                      Anantapur, Andhra Pradesh 515001
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <strong style={{ color: '#0a2540', display: 'block', marginBottom: '2px', fontSize: '0.95rem' }}>
                      Helpline & Appointments
                    </strong>
                    <a
                      href="tel:+917799900248"
                      style={{
                        margin: 0,
                        color: 'var(--primary)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      +91 7799900248
                    </a>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b' }}>
                      Direct reception line for scheduling & queries
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: '#fef3c7',
                    color: '#d97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong style={{ color: '#0a2540', display: 'block', marginBottom: '2px', fontSize: '0.95rem' }}>
                      Center Working Hours
                    </strong>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      <strong>Monday – Saturday:</strong> 9:00 AM – 7:00 PM<br />
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
              boxShadow: '0 8px 30px -4px rgba(10, 37, 64, 0.08)',
              border: '1px solid #e2e8f0',
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
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            padding: '2.5rem',
            boxShadow: '0 8px 30px -4px rgba(10, 37, 64, 0.05)'
          }}>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '1.8rem',
              color: '#0a2540',
              marginBottom: '0.5rem'
            }}>
              Schedule a Consultation / Scan
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '2rem' }}>
              Fill in your details and our team will get in touch to confirm your appointment timing.
            </p>

            {formSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                background: '#f0fdf4',
                borderRadius: '16px',
                border: '1px solid #bbf7d0'
              }}>
                <CheckCircle2 size={56} color="#16a34a" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.4rem', color: '#166534', marginBottom: '0.5rem' }}>
                  Thank You, {formData.name}!
                </h3>
                <p style={{ color: '#15803d', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                  Your appointment request for <strong>{formData.scanType}</strong> has been received. Our reception will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', scanType: 'TIFFA / Anomaly Scan', preferredDate: '', message: '' });
                  }}
                  className="btn btn-primary"
                  style={{ borderRadius: '999px', padding: '0.75rem 2rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Phone Number (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Scan or Service Required
                  </label>
                  <select
                    value={formData.scanType}
                    onChange={(e) => setFormData({ ...formData, scanType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: '#ffffff'
                    }}
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Additional Message or Gestational Age (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 20 weeks pregnant, referred by Dr. Smith for TIFFA scan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    borderRadius: '999px',
                    padding: '0.95rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(43, 92, 75, 0.25)',
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

      {/* Why Book With Us */}
      <section className="py-12" style={{ background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(43,92,75,0.06)', padding: '4px 14px', borderRadius: '999px', marginBottom: '0.75rem' }}>WHY BOOK WITH US</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0a2540' }}>Trusted Diagnostics, Every Step</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🎯', title: 'Accurate & Timely Reports', desc: 'Every scan and test is performed and reported by experienced specialists with precision.' },
              { icon: '💬', title: 'Expert Consultation', desc: 'Dr. T. Sai Kiranmai personally reviews critical cases and guides families through findings.' },
              { icon: '🔒', title: 'Safe & Private', desc: 'All clinical visits are conducted in private, air-conditioned consultation rooms.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. All 30+ services are listed with clear pricing upfront.' },
              { icon: '📅', title: 'Flexible Scheduling', desc: 'Same-day appointments available for most scans. Mon–Sat, 9 AM to 8:30 PM.' },
              { icon: '🏥', title: 'Advanced Equipment', desc: 'GE Voluson premium ultrasound systems for superior imaging resolution.' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: '16px', padding: '1.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1rem', color: '#0a2540', fontWeight: 700, marginBottom: '0.4rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12" style={{ background: '#fbf9f4' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(43,92,75,0.06)', padding: '4px 14px', borderRadius: '999px', marginBottom: '0.75rem' }}>PATIENT TESTIMONIALS</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0a2540' }}>What Our Patients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Padmavathi R.', tag: 'TIFFA Scan Patient', text: 'Dr. Kiranmai explained every detail of our anomaly scan with exceptional patience. The equipment quality and the calm atmosphere made what could have been a stressful visit genuinely reassuring.' },
              { name: 'Sridevi L.', tag: 'NT Scan + Double Marker', text: 'From the moment we walked in, the staff made us feel at ease. The scan was thorough and the report was ready promptly. We felt completely confident in the clinical team here.' },
              { name: 'Anitha M.', tag: 'Fetal Echocardiography', text: "We drove from Kurnool specifically for the Fetal Echo — well worth every kilometer. Dr. Kiranmai's expertise gave us tremendous peace of mind." }
            ].map((t, i) => (
              <div key={i} style={{ background: '#ffffff', borderRadius: '18px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(s => <CheckCircle2 key={s} size={15} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.25rem' }}>"{t.text}"</p>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                  <strong style={{ color: '#0a2540', fontSize: '0.95rem' }}>{t.name}</strong>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 500, marginTop: '2px' }}>{t.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

