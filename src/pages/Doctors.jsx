import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Calendar, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  Stethoscope, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { useAppointmentModal } from '../components/AppointmentModal';
import useScrollReveal from '../hooks/useScrollReveal';

const Doctors = () => {
  const { openModal } = useAppointmentModal();
  useScrollReveal();

  useEffect(() => {
    document.title = 'Meet Our Specialist | Dr. T. Sai Kiranmai | Sai Diagnostics';
  }, []);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '0' }}>
      
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
            Dedicated expertise in Fetal Medicine, advanced prenatal imaging, and patient counseling to ensure peace of mind for every family.
          </p>
        </div>
      </section>

      {/* SECTION B — Main Doctor Profile (Asymmetrical Editorial Two-Column Presentation) */}
      <section style={{ background: '#FFFFFF', padding: '5.5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.15fr',
            gap: '4.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left Side: Large Visual Identity Anchor */}
            <div className="reveal-on-scroll">
              <div style={{
                position: 'relative',
                background: 'linear-gradient(145deg, #FFF9F5 0%, #FCE8EE 50%, #E6F7FC 100%)',
                borderRadius: '32px',
                padding: '4rem 2.5rem',
                border: '1.5px solid rgba(194, 24, 75, 0.16)',
                boxShadow: '24px 24px 0px rgba(194, 24, 75, 0.05), 0 20px 44px rgba(194, 24, 75, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                {/* Large Monogram Circle */}
                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '2px solid rgba(194, 24, 75, 0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 28px rgba(194, 24, 75, 0.12)',
                  marginBottom: '2rem'
                }}>
                  <span style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#C2184B',
                    lineHeight: 1
                  }}>
                    SK
                  </span>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#17A9CF',
                    marginTop: '3px'
                  }}>
                    FETAL CARE
                  </span>
                </div>

                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.75rem',
                  color: '#202735',
                  margin: '0 0 0.4rem'
                }}>
                  Dr. T. Sai Kiranmai
                </h3>

                <span style={{
                  fontSize: '0.9rem',
                  color: '#17A9CF',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '1.75rem'
                }}>
                  Lead Consultant Specialist
                </span>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  width: '100%'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(194, 24, 75, 0.14)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '14px',
                    fontSize: '0.9rem',
                    color: '#343943',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <Award size={18} color="#C2184B" />
                    <span><strong>M.B.B.S., DMRD</strong> • Medical & Radiology</span>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(23, 169, 207, 0.25)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '14px',
                    fontSize: '0.9rem',
                    color: '#17A9CF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <ShieldCheck size={18} color="#17A9CF" />
                    <span><strong>Fellowship in Fetal Ultrasound</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Professional Introduction & Clinical Focus */}
            <div className="reveal-on-scroll stagger-2">
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#C2184B',
                background: 'rgba(194, 24, 75, 0.08)',
                border: '1px solid rgba(194, 24, 75, 0.18)',
                padding: '5px 14px',
                borderRadius: '9999px',
                marginBottom: '1rem'
              }}>
                <Sparkles size={13} /> SPECIALIST PROFILE
              </span>

              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                color: '#202735',
                lineHeight: 1.2,
                margin: '0 0 0.5rem'
              }}>
                Dr. T. Sai Kiranmai
              </h2>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '1.75rem'
              }}>
                <span style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#C2184B',
                  background: 'rgba(194, 24, 75, 0.08)',
                  padding: '4px 12px',
                  borderRadius: '6px'
                }}>
                  M.B.B.S., DMRD
                </span>
                <span style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: '#17A9CF',
                  background: '#E6F7FC',
                  padding: '4px 12px',
                  borderRadius: '6px'
                }}>
                  Fellowship in Fetal Ultrasound
                </span>
                <span style={{ fontSize: '0.92rem', color: '#59616B', fontWeight: 500 }}>
                  • Consultant Radiologist & Fetal Medicine Specialist
                </span>
              </div>

              <blockquote style={{
                fontSize: '1.12rem',
                lineHeight: 1.85,
                color: '#343943',
                margin: '0 0 2rem',
                fontStyle: 'normal'
              }}>
                “Committed to providing careful fetal imaging and personalised attention, with a focus on helping expectant parents understand their examinations and receive appropriate guidance.”
              </blockquote>

              <div style={{
                height: '2px',
                background: 'linear-gradient(90deg, #C2184B 0%, rgba(245, 183, 200, 0.4) 70%, transparent 100%)',
                marginBottom: '2rem'
              }} />

              <div style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#202735',
                marginBottom: '1.25rem'
              }}>
                CONFIRMED CLINICAL FOCUS AREAS
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#343943' }}>
                  <CheckCircle2 size={18} color="#C2184B" />
                  <span>First-trimester screening (NT Scan)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#343943' }}>
                  <CheckCircle2 size={18} color="#C2184B" />
                  <span>Detailed fetal anomaly scans (TIFFA)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#343943' }}>
                  <CheckCircle2 size={18} color="#C2184B" />
                  <span>Obstetric Doppler circulation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#343943' }}>
                  <CheckCircle2 size={18} color="#C2184B" />
                  <span>Fetal echocardiography scans</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => openModal()}
                  type="button"
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 2rem', cursor: 'pointer' }}
                >
                  <Calendar size={18} /> Book an Appointment
                </button>
                <Link
                  to="/contact"
                  className="btn btn-outline"
                  style={{ padding: '0.85rem 2rem', backgroundColor: '#FFFFFF' }}
                >
                  <PhoneCall size={18} /> Contact the Centre
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C — Consultation and Booking */}
      <section style={{
        background: 'linear-gradient(135deg, #FDF4F7 0%, #FFF9F5 50%, #E6F7FC 100%)',
        padding: '5.5rem 1.5rem',
        borderTop: '1px solid rgba(194, 24, 75, 0.08)',
        textAlign: 'center'
      }}>
        <div className="container reveal-on-scroll" style={{ maxWidth: '820px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#C2184B',
            background: 'rgba(194, 24, 75, 0.08)',
            border: '1px solid rgba(194, 24, 75, 0.18)',
            padding: '5px 14px',
            borderRadius: '9999px',
            marginBottom: '1.25rem'
          }}>
            <Clock size={14} /> APPOINTMENT SCHEDULE
          </span>

          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
            color: '#202735',
            lineHeight: 1.25,
            marginBottom: '1.15rem'
          }}>
            Plan Your Consultation
          </h2>

          <p style={{
            color: '#343943',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            maxWidth: '640px',
            margin: '0 auto 2.5rem'
          }}>
            Our centre operates Monday to Saturday from 8:30 AM to 7:00 PM (Sunday Closed). Consultations and scans are arranged by scheduled appointment to ensure dedicated scanning time for every mother.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => openModal()}
              type="button"
              className="btn btn-primary"
              style={{ padding: '0.9rem 2.25rem', cursor: 'pointer' }}
            >
              <Calendar size={18} /> Book an Appointment
            </button>

            <Link
              to="/contact"
              className="btn btn-outline"
              style={{ padding: '0.9rem 2.25rem', backgroundColor: '#FFFFFF' }}
            >
              <PhoneCall size={18} /> Contact the Centre
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Doctors;
