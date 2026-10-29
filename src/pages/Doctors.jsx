import { useState, useEffect } from 'react';
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
  FileCheck,
  PhoneCall
} from 'lucide-react';
import { useAppointmentModal } from '../components/AppointmentModal';

const Doctors = () => {
  const { openModal } = useAppointmentModal();
  useEffect(() => {
    document.title = 'Specialist Doctor | Dr. T. Sai Kiranmai | Sai Diagnostics';
  }, []);

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
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ marginBottom: '0.85rem' }}>
            ● CLINICAL FACULTY & LEADERSHIP
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: 'var(--text-heading)',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Meet Our Specialist
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-charcoal)',
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto'
          }}>
            Specialised fetal imaging and personalised care to support families throughout their pregnancy journey.
          </p>
        </div>
      </section>

      {/* 2. Main Profile Section (Warm White Surface) */}
      <div className="container" style={{ maxWidth: '1160px', marginTop: '2.5rem', marginBottom: '3.5rem' }}>
        <div className="card" style={{
          padding: 0,
          overflow: 'hidden',
          backgroundColor: '#ffffff'
        }}>
          {/* Top highlight bar */}
          <div style={{
            height: '6px',
            background: 'linear-gradient(90deg, #AD2348 0%, #D989A0 50%, #2589C4 100%)'
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
                  width: '96px',
                  height: '96px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-burgundy)',
                  border: '1px solid rgba(173, 35, 72, 0.2)',
                  boxShadow: 'var(--shadow-sm)',
                  flexShrink: 0
                }}>
                  <Stethoscope size={48} strokeWidth={1.8} />
                </div>

                <div>
                  <span className="section-tag" style={{ marginBottom: '0.4rem', fontSize: '0.74rem' }}>
                    <Sparkles size={13} /> Lead Consultant Radiologist
                  </span>
                  <h2 style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                    color: 'var(--text-heading)',
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
                  background: 'var(--bg-warm-white)',
                  border: '1px solid rgba(173, 35, 72, 0.15)',
                  padding: '0.65rem 1rem',
                  borderRadius: '12px'
                }}>
                  <Award size={18} color="var(--primary-burgundy)" />
                  <span style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.95rem' }}>
                    {doctor.qualifications}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    (Medical & Radiology Qualifications)
                  </span>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--bg-skyblue-pale)',
                  border: '1px solid rgba(37, 137, 196, 0.25)',
                  padding: '0.65rem 1rem',
                  borderRadius: '12px'
                }}>
                  <Award size={18} color="var(--primary-blue)" />
                  <span style={{ fontWeight: 700, color: 'var(--primary-blue)', fontSize: '0.95rem' }}>
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
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem'
                }}>
                  Clinical Profile
                </h4>

                <div style={{
                  background: 'var(--bg-burgundy-light)',
                  borderLeft: '4px solid var(--primary-burgundy)',
                  padding: '1rem 1.25rem',
                  borderRadius: '0 12px 12px 0',
                  fontSize: '1rem',
                  color: 'var(--text-heading)',
                  lineHeight: 1.7,
                  marginBottom: '1rem'
                }}>
                  “Committed to providing careful fetal imaging and personalised attention, with a focus on helping expectant parents understand their examinations and receive appropriate guidance.”
                </div>

                <p style={{
                  color: 'var(--text-charcoal)',
                  fontSize: '0.93rem',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {doctor.bio}
                </p>
              </div>

              {/* Trust stats pill bar — strictly verified */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                background: 'var(--bg-warm-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '1rem',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-burgundy)', fontFamily: '"Playfair Display", serif' }}>
                    12+ Yrs
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Clinical Practice</div>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-subtle)', borderRight: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)', fontFamily: '"Playfair Display", serif' }}>
                    GE Voluson
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Fetal Ultrasound</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-blue)', fontFamily: '"Playfair Display", serif' }}>
                    Specialised
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Personalised Care</div>
                </div>
              </div>
            </div>

            {/* Right Column: Specializations, Schedule, & Direct Booking */}
            <div>
              {/* Areas of Clinical Specialization */}
              <div style={{
                background: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-heading)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <HeartHandshake size={20} color="var(--primary-burgundy)" />
                  Clinical Specializations & Procedures
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {doctor.expertise.map((item, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.9rem',
                      color: 'var(--text-charcoal)'
                    }}>
                      <CheckCircle2 size={16} color="var(--primary-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Info Box */}
              <div style={{
                background: 'var(--bg-skyblue-pale)',
                border: '1px solid rgba(37, 137, 196, 0.25)',
                borderRadius: '16px',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.88rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-charcoal)' }}>
                  <Clock size={16} color="var(--primary-burgundy)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Timings: </strong> {doctor.availability}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-charcoal)' }}>
                  <Languages size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Consultation Languages: </strong> {doctor.languages.join(', ')}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-charcoal)' }}>
                  <MapPin size={16} color="var(--primary-burgundy)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Center: </strong> {doctor.clinic}, 9th Cross Rd, Sai Nagar, Anantapur
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-charcoal)' }}>
                  <Phone size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Helpline: </strong>
                    <a href={`tel:${doctor.phone}`} style={{ color: 'var(--primary-burgundy)', fontWeight: 700 }}>
                      {doctor.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => openModal()}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    padding: '0.85rem 1.5rem',
                    fontSize: '0.95rem',
                    justifyContent: 'center'
                  }}
                  type="button"
                >
                  <Calendar size={18} /> Book an Appointment
                </button>

                <Link
                  to="/contact"
                  className="btn btn-outline"
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    backgroundColor: '#ffffff',
                    padding: '0.85rem 1.5rem',
                    fontSize: '0.95rem',
                    justifyContent: 'center'
                  }}
                >
                  <PhoneCall size={18} /> Contact the Centre
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
            background: 'rgba(52, 57, 67, 0.65)',
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
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid var(--border-subtle)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setBookingDoctor(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'var(--bg-warm-white)',
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
              <div className="icon-box-burgundy" style={{ margin: '0 auto 1rem', width: '64px', height: '64px' }}>
                <Calendar size={30} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                Schedule Consultation
              </h3>
              <p style={{ color: 'var(--primary-burgundy)', fontWeight: 600, margin: 0 }}>
                {doctor.name} ({doctor.qualifications})
              </p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {doctor.fellowship}
              </span>
            </div>

            {bookingSuccess ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle2 size={52} style={{ color: 'var(--primary-burgundy)', margin: '0 auto 1rem' }} />
                <h4 style={{ color: 'var(--text-heading)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  Appointment Request Received!
                </h4>
                <p style={{ color: 'var(--text-charcoal)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{patientName}</strong>. Our reception team at Sai Diagnostics will call you at <strong>{patientPhone}</strong> shortly to confirm your consultation slot with {doctor.name}.
                </p>
                <div style={{ background: 'var(--bg-skyblue-pale)', padding: '0.85rem', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--primary-blue)', marginBottom: '1.5rem', fontWeight: 600 }}>
                  Direct Clinic Desk: +91 7799900248
                </div>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.75rem' }}
                  onClick={() => setBookingDoctor(null)}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookSubmit}>
                <div style={{
                  background: 'var(--bg-skyblue-pale)',
                  border: '1px solid rgba(37, 137, 196, 0.2)',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-charcoal)'
                }}>
                  <div><strong>Location:</strong> 9th Cross Rd, Sai Nagar, Anantapur</div>
                  <div><strong>Consultation Timings:</strong> Mon–Sat, 9 AM – 7 PM</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '4px' }}>
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Rao"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '4px' }}>
                      Phone / Mobile Number (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '4px' }}>
                      Scan or Test Requested
                    </label>
                    <select
                      value={selectedScan}
                      onChange={(e) => setSelectedScan(e.target.value)}
                      className="form-select"
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
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '4px' }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem' }}
                >
                  Confirm Appointment Request →
                </button>
              </form>
            )}
          </div>
        </div>
      )}


      {/* 4. CTA Strip (Light Burgundy Warm Ambient Panel) */}
      <section style={{ background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)', padding: '4rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(173, 35, 72, 0.1)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag" style={{ marginBottom: '0.75rem' }}>HAVE QUESTIONS?</span>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Need to Speak With Our Team?</h2>
          <p style={{ color: 'var(--text-charcoal)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>Our patient care team is available Mon–Sat, 9 AM to 7 PM to answer your questions and help schedule your scan.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+917799900248" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
              <Phone size={18} /> +91 7799900248
            </a>
            <button
              onClick={() => openModal()}
              className="btn btn-outline"
              style={{ backgroundColor: '#ffffff', padding: '0.85rem 2rem', cursor: 'pointer' }}
              type="button"
            >
              <Calendar size={18} /> Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
