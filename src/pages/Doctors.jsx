import { useState } from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { 
  Award, 
  Calendar, 
  Clock, 
  Phone, 
  MapPin, 
  Languages, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Stethoscope, 
  HeartHandshake,
  FileCheck
} from 'lucide-react';

const Doctors = () => {
  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [selectedScan, setSelectedScan] = useState('TIFFA / Anomaly Scan');

  const doctor = doctors[0]; // Dr. T. Sai Kiranmai

  const handleBookSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !patientPhone) {
      alert('Please provide your name and phone number');
      return;
    }
    setBookingSuccess(true);
  };

  return (
    <div style={{ background: '#fbf9f4', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #163026 0%, #2b5c4b 100%)',
        color: '#ffffff',
        padding: '3.5rem 1.5rem 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block',
            letterSpacing: '2px',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#a7d3c0',
            marginBottom: '0.75rem',
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '4px 14px',
            borderRadius: '999px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            CLINICAL FACULTY & LEADERSHIP
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Our Fetal Medicine Specialist
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#e2ece6',
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto'
          }}>
            Consult with our fellowship-trained fetal medicine radiologist for high-resolution ultrasound scans, early genetic risk assessments, and personalized scan reviews.
          </p>
        </div>
      </section>

      {/* Main Profile Section */}
      <div className="container" style={{ maxWidth: '1140px', marginTop: '2.5rem' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px -5px rgba(10, 37, 64, 0.06)',
          overflow: 'hidden'
        }}>
          {/* Top highlight bar */}
          <div style={{
            height: '6px',
            background: 'linear-gradient(90deg, #163026 0%, #2b5c4b 50%, #0369a1 100%)'
          }} />

          <div style={{
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}>
            {/* Left Column: Doctor Identity & Key Badges */}
            <div>
              {/* Doctor Avatar / Icon Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '1.75rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #e4edea 0%, #cce0d8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  boxShadow: '0 8px 20px rgba(43, 92, 75, 0.15)',
                  flexShrink: 0
                }}>
                  <Stethoscope size={52} strokeWidth={1.75} />
                </div>

                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#e8f5e9',
                    color: '#1b5e20',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}>
                    <Sparkles size={13} />
                    <span>Lead Consultant Radiologist</span>
                  </div>
                  <h2 style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                    color: '#0a2540',
                    lineHeight: 1.15,
                    margin: 0
                  }}>
                    {doctor.name}
                  </h2>
                </div>
              </div>

              {/* Degrees & Fellowship Highlights */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '1.75rem'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '0.6rem 1rem',
                  borderRadius: '10px'
                }}>
                  <Award size={18} color="var(--primary)" />
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
                    {doctor.qualifications}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    (Medical & Radiology Degrees)
                  </span>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#eef5f8',
                  border: '1px solid #bae6fd',
                  padding: '0.6rem 1rem',
                  borderRadius: '10px'
                }}>
                  <Award size={18} color="#0284c7" />
                  <span style={{ fontWeight: 700, color: '#0369a1', fontSize: '0.95rem' }}>
                    {doctor.fellowship}
                  </span>
                </div>
              </div>

              {/* Bio & Clinical Philosophy */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#64748b',
                  marginBottom: '0.5rem'
                }}>
                  Clinical Profile
                </h4>
                <p style={{
                  color: '#334155',
                  fontSize: '0.95rem',
                  lineHeight: 1.65,
                  marginBottom: '1rem'
                }}>
                  {doctor.bio}
                </p>

                <div style={{
                  background: '#fcfdfb',
                  borderLeft: '4px solid var(--primary)',
                  padding: '0.85rem 1rem',
                  borderRadius: '0 10px 10px 0',
                  fontSize: '0.9rem',
                  color: '#2b5c4b',
                  fontStyle: 'italic',
                  lineHeight: 1.5
                }}>
                  &ldquo;{doctor.philosophy}&rdquo;
                </div>
              </div>

              {/* Trust stats pill bar */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', fontFamily: '"Playfair Display", serif' }}>
                    12+ Yrs
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Clinical Practice</div>
                </div>
                <div style={{ borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a2540', fontFamily: '"Playfair Display", serif' }}>
                    45,000+
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Ultrasound Scans</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0284c7', fontFamily: '"Playfair Display", serif' }}>
                    4.9★
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Patient Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Column: Specializations, Schedule, & Direct Booking */}
            <div>
              {/* Areas of Clinical Specialization */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
              }}>
                <h3 style={{
                  fontSize: '1.15rem',
                  color: '#0a2540',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <HeartHandshake size={20} color="var(--primary)" />
                  Clinical Specializations & Procedures
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {doctor.expertise.map((item, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.9rem',
                      color: '#334155'
                    }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Info Box */}
              <div style={{
                background: '#fafafa',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.88rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155' }}>
                  <Clock size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Timings: </strong> {doctor.availability}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155' }}>
                  <Languages size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Consultation Languages: </strong> {doctor.languages.join(', ')}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155' }}>
                  <MapPin size={16} color="#e11d48" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Center: </strong> {doctor.clinic}, 9th Cross Rd, Sai Nagar, Anantapur
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#334155' }}>
                  <Phone size={16} color="#10b981" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Helpline: </strong>
                    <a href={`tel:${doctor.phone}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>
                      {doctor.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => { setBookingDoctor(doctor); setBookingSuccess(false); }}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    borderRadius: '999px',
                    padding: '0.9rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(43, 92, 75, 0.25)'
                  }}
                >
                  <Calendar size={18} /> Book Consultation
                </button>

                <Link
                  to="/services"
                  className="btn btn-outline"
                  style={{
                    borderRadius: '999px',
                    padding: '0.9rem 1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    borderColor: 'var(--primary)',
                    color: 'var(--primary)',
                    textDecoration: 'none'
                  }}
                >
                  <FileCheck size={18} /> View All 30 Tests
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {bookingDoctor && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 25, 40, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem',
            backdropFilter: 'blur(5px)'
          }}
          onClick={() => setBookingDoctor(null)}
        >
          <div
            className="animate-fade-in-up"
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              width: '100%',
              maxWidth: '460px',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setBookingDoctor(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#f1f5f9',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#e4edea',
                color: 'var(--primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                boxShadow: '0 4px 12px rgba(43, 92, 75, 0.15)'
              }}>
                <Calendar size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0a2540', marginBottom: '0.25rem' }}>
                Schedule Consultation
              </h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, margin: 0 }}>
                {doctor.name} ({doctor.qualifications})
              </p>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                {doctor.fellowship}
              </span>
            </div>

            {bookingSuccess ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle2 size={52} style={{ color: '#10b981', margin: '0 auto 1rem' }} />
                <h4 style={{ color: '#0a2540', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  Appointment Request Received!
                </h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{patientName}</strong>. Our reception team at Sai Diagnostics will call you at <strong>{patientPhone}</strong> shortly to confirm your consultation slot with {doctor.name}.
                </p>
                <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '10px', fontSize: '0.82rem', color: '#64748b', marginBottom: '1.5rem' }}>
                  Direct Clinic Desk: <strong>+91 7799900248</strong>
                </div>
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: '999px', width: '100%', padding: '0.75rem' }}
                  onClick={() => setBookingDoctor(null)}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookSubmit}>
                <div style={{
                  background: '#fafafa',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.82rem',
                  color: '#475569'
                }}>
                  <div><strong>Location:</strong> 9th Cross Rd, Sai Nagar, Anantapur</div>
                  <div><strong>Consultation Timings:</strong> Mon–Sat, 9 AM – 7 PM</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Rao"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Phone / Mobile Number (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Scan or Test Requested
                    </label>
                    <select
                      value={selectedScan}
                      onChange={(e) => setSelectedScan(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem',
                        outline: 'none',
                        background: '#ffffff'
                      }}
                    >
                      <option value="TIFFA / Anomaly Scan">Anomaly / TIFFA Scan (₹1,800)</option>
                      <option value="Nuchal Translucency Scan">NT Scan (12–14 Weeks) (₹1,500)</option>
                      <option value="Combined Test NR + Double Marker">Combined Test + Double Marker (₹4,000)</option>
                      <option value="Advanced Fetal Echo">Advanced Fetal Echo (₹2,500)</option>
                      <option value="Growth / Well-Being Scan">Growth / Fetal Well-Being Scan (₹1,500)</option>
                      <option value="Obstetric Doppler + AFI">Obstetric Doppler + AFI Check (₹1,500)</option>
                      <option value="NIPT Cell-Free DNA">NIPT – Cell-Free DNA Test (₹15,000)</option>
                      <option value="Other / General Consultation">General Ultrasound / Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    borderRadius: '999px',
                    padding: '0.9rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    boxShadow: '0 4px 14px rgba(43, 92, 75, 0.25)'
                  }}
                >
                  Confirm Appointment Request →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-12" style={{ background: '#fbf9f4' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(43,92,75,0.06)', padding: '4px 14px', borderRadius: '999px', marginBottom: '0.75rem' }}>PATIENT TESTIMONIALS</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0a2540' }}>What Families Are Saying</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Padmavathi R.', tag: 'TIFFA Scan Patient', text: 'Dr. Kiranmai explained every detail of our anomaly scan with exceptional patience. The equipment quality and the calm atmosphere made what could have been a stressful visit genuinely reassuring.' },
              { name: 'Sridevi L.', tag: 'NT Scan + Double Marker', text: 'From the moment we walked in, the staff made us feel at ease. The scan was thorough and the report was ready promptly. We felt completely confident in the clinical team here.' },
              { name: 'Anitha M.', tag: 'Fetal Echocardiography', text: "We drove from Kurnool specifically for the Fetal Echo — well worth every kilometer. Dr. Kiranmai's expertise and willingness to explain every cardiac view gave us tremendous peace of mind." }
            ].map((t, i) => (
              <div key={i} style={{ background: '#ffffff', borderRadius: '18px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(s => <Sparkles key={s} size={15} fill="#f59e0b" color="#f59e0b" />)}
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

      {/* CTA Strip — Can't find what you need? */}
      <section style={{ background: 'linear-gradient(135deg, #163026 0%, #2b5c4b 100%)', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#ffffff', marginBottom: '0.5rem' }}>Need to Speak With Our Team?</h2>
          <p style={{ color: '#c8e6da', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 1.75rem' }}>Our patient care team is available Mon–Sat, 9 AM to 7 PM to answer your questions and help schedule your scan.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+917799900248" className="btn" style={{ background: '#ffffff', color: 'var(--primary)', borderRadius: '999px', padding: '0.85rem 2rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Phone size={18} /> +91 7799900248</a>
            <Link to="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', borderRadius: '999px', padding: '0.85rem 2rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Calendar size={18} /> Book Appointment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;

