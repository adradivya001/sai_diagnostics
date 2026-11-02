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
  Sparkles,
  Heart,
  Activity,
  Radio
} from 'lucide-react';
import { useAppointmentModal } from '../components/AppointmentModal';
import { 
  ScrollReveal, 
  HeadingReveal, 
  StaggerContainer, 
  StaggerItem, 
  HoverCard 
} from '../components/motion/MotionReveal';

const Doctors = () => {
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    document.title = 'Meet Our Specialist | Dr. T. Sai Kiranmai | Sai Diagnostics';
  }, []);

  const clinicalFocusAreas = [
    {
      title: 'First-Trimester Screening (NT Scan)',
      desc: 'Early assessment of fetal development, nuchal translucency, nasal bone evaluation, and anatomical markers (11–13⁺⁶ weeks).',
      icon: <Activity size={24} />,
      badge: '11–13⁺⁶ WEEKS'
    },
    {
      title: 'Detailed Fetal Anomaly Scans (TIFFA)',
      desc: 'Systematic mid-trimester structural evaluation of fetal intracranial anatomy, spine, cardiac chambers, abdomen, and limbs (18–22 weeks).',
      icon: <ShieldCheck size={24} />,
      badge: '18–22 WEEKS'
    },
    {
      title: 'Obstetric Doppler Circulation',
      desc: 'Vascular hemodynamic evaluation measuring velocity in umbilical, uterine, and middle cerebral arteries to monitor fetal oxygenation.',
      icon: <Radio size={24} />,
      badge: 'HEMODYNAMICS'
    },
    {
      title: 'Fetal Echocardiography Scans',
      desc: 'Advanced structural and functional assessment of fetal heart chambers, valve motion, great arterial alignment, and rhythm.',
      icon: <Heart size={24} />,
      badge: 'CARDIAC CARE'
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* =========================================================================
          SECTION 1: PAGE INTRODUCTION (Compact Title Banner)
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(135deg, #FDF2F4 0%, #FFF9F5 50%, #E8F8FA 100%)',
        color: '#1F2733',
        padding: 'clamp(3rem, 5vw, 4rem) 1.5rem clamp(2.5rem, 4vw, 3.25rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(173, 35, 72, 0.1)'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="down" delay={0.05}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#AD2348',
              background: 'rgba(173, 35, 72, 0.08)',
              border: '1px solid rgba(173, 35, 72, 0.18)',
              padding: '4px 14px',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}>
              ● CLINICAL FACULTY & LEADERSHIP
            </span>
          </ScrollReveal>

          <HeadingReveal delay={0.1}>
            <h1 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              color: '#1F2733',
              marginBottom: '1rem',
              lineHeight: 1.15
            }}>
              Meet Our Specialist
            </h1>
          </HeadingReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p style={{
              fontSize: '1.05rem',
              color: '#5B687B',
              lineHeight: 1.65,
              maxWidth: '640px',
              margin: '0 auto'
            }}>
              Dedicated expertise in Fetal Medicine, advanced prenatal imaging and patient counselling to support informed care for every family.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SPECIALIST PROFILE (Premium Two-Column Profile)
          ========================================================================= */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(3.5rem, 6vw, 5.5rem) 1.5rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            
            {/* Left Column: Specialist Visual Presentation Frame */}
            <ScrollReveal direction="left" delay={0.15} amount={0.25}>
              <div style={{
                position: 'relative',
                background: 'linear-gradient(145deg, #FFFDFB 0%, #FDF2F4 50%, #E8F8FA 100%)',
                borderRadius: '28px',
                padding: 'clamp(2.5rem, 5vw, 3.75rem) clamp(1.5rem, 4vw, 2.5rem)',
                border: '1.5px solid rgba(173, 35, 72, 0.16)',
                boxShadow: '0 16px 40px rgba(173, 35, 72, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                {/* Monogram Seal */}
                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '2px solid rgba(173, 35, 72, 0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 28px rgba(173, 35, 72, 0.10)',
                  marginBottom: '1.75rem'
                }}>
                  <span style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#AD2348',
                    lineHeight: 1
                  }}>
                    SK
                  </span>
                  <span style={{
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#0B7F8C',
                    marginTop: '4px'
                  }}>
                    FETAL CARE
                  </span>
                </div>

                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#1F2733',
                  margin: '0 0 0.35rem'
                }}>
                  Dr. T. Sai Kiranmai
                </h3>

                <span style={{
                  fontSize: '0.88rem',
                  color: '#AD2348',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '1.75rem'
                }}>
                  Consultant Radiologist & Fetal Medicine Specialist
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
                    border: '1px solid rgba(173, 35, 72, 0.14)',
                    padding: '0.8rem 1.25rem',
                    borderRadius: '14px',
                    fontSize: '0.90rem',
                    color: '#1F2733',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <Award size={18} color="#AD2348" />
                    <span><strong>M.B.B.S., DMRD</strong> • Medical & Radiology</span>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(11, 127, 140, 0.22)',
                    padding: '0.8rem 1.25rem',
                    borderRadius: '14px',
                    fontSize: '0.90rem',
                    color: '#0B7F8C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <ShieldCheck size={18} color="#0B7F8C" />
                    <span><strong>Fellowship in Fetal Ultrasound</strong></span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Professional Bio, Credentials, and Actions */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ScrollReveal direction="right" delay={0.05}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#AD2348',
                  background: 'rgba(173, 35, 72, 0.08)',
                  border: '1px solid rgba(173, 35, 72, 0.18)',
                  padding: '5px 14px',
                  borderRadius: '9999px',
                  marginBottom: '1rem',
                  width: 'fit-content'
                }}>
                  <Sparkles size={13} /> SPECIALIST PROFILE
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.12}>
                <h2 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: '#1F2733',
                  lineHeight: 1.2,
                  margin: '0 0 0.85rem'
                }}>
                  Dr. T. Sai Kiranmai
                </h2>
              </HeadingReveal>

              <ScrollReveal direction="right" delay={0.18}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: '#AD2348',
                    background: 'rgba(173, 35, 72, 0.08)',
                    border: '1px solid rgba(173, 35, 72, 0.18)',
                    padding: '4px 12px',
                    borderRadius: '9999px'
                  }}>
                    M.B.B.S., DMRD
                  </span>
                  <span style={{
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: '#0B7F8C',
                    background: '#E8F8FA',
                    border: '1px solid rgba(11, 127, 140, 0.22)',
                    padding: '4px 12px',
                    borderRadius: '9999px'
                  }}>
                    Fellowship in Fetal Ultrasound
                  </span>
                  <span style={{ fontSize: '0.90rem', color: '#5B687B', fontWeight: 600 }}>
                    • Consultant Radiologist & Fetal Medicine Specialist
                  </span>
                </div>

                <p style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                  color: '#5B687B',
                  marginBottom: '1.5rem'
                }}>
                  Dr. T. Sai Kiranmai is a Consultant Radiologist and Fetal Medicine Specialist holding M.B.B.S., DMRD, and a Fellowship in Fetal Ultrasound. Dr. Kiranmai conducts and interprets specialized obstetric and maternal-fetal scans with careful clinical evaluation, clear guidance, and thoughtful communication with patients and referring specialists.
                </p>

                <blockquote style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  lineHeight: 1.75,
                  color: '#1F2733',
                  borderLeft: '3.5px solid #AD2348',
                  paddingLeft: '1.25rem',
                  margin: '1.25rem 0 2rem',
                  background: 'rgba(253, 242, 244, 0.5)',
                  padding: '1rem 1.25rem',
                  borderRadius: '0 14px 14px 0'
                }}>
                  “Committed to providing careful fetal imaging and personalised attention, with a focus on helping expectant parents understand their examinations and receive appropriate guidance.”
                </blockquote>

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
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CLINICAL FOCUS AREAS
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF9F5 100%)',
        padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem',
        borderTop: '1px solid rgba(173, 35, 72, 0.08)'
      }}>
        <div className="container">
          
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <ScrollReveal direction="up" delay={0.05}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#AD2348',
                background: 'rgba(173, 35, 72, 0.08)',
                border: '1px solid rgba(173, 35, 72, 0.18)',
                padding: '5px 14px',
                borderRadius: '9999px',
                marginBottom: '0.85rem'
              }}>
                <Stethoscope size={14} /> SPECIALISED EXPERTISE
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: '#1F2733',
                lineHeight: 1.2
              }}>
                Core Clinical Focus Areas
              </h2>
            </HeadingReveal>
          </div>

          <StaggerContainer delayChildren={0.15} staggerChildren={0.1} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.75rem'
          }}>
            {clinicalFocusAreas.map((area, index) => (
              <StaggerItem key={index}>
                <HoverCard lift={-5} style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2.25rem 1.75rem',
                  border: '1.5px solid rgba(173, 35, 72, 0.12)',
                  boxShadow: '0 4px 18px rgba(173, 35, 72, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: '#FFF9F5',
                      border: '1px solid rgba(173, 35, 72, 0.14)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#AD2348'
                    }}>
                      {area.icon}
                    </div>
                    <span style={{
                      fontSize: '0.70rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#AD2348',
                      background: 'rgba(173, 35, 72, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}>
                      {area.badge}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1F2733',
                    marginBottom: '0.65rem',
                    lineHeight: 1.35
                  }}>
                    {area.title}
                  </h3>

                  <p style={{
                    color: '#5B687B',
                    fontSize: '0.90rem',
                    lineHeight: 1.65,
                    margin: 0
                  }}>
                    {area.desc}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: APPOINTMENT SCHEDULE ("Plan Your Consultation")
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(135deg, #FFF9F5 0%, #FDF2F4 50%, #E8F8FA 100%)',
        padding: 'clamp(3.5rem, 5vw, 5rem) 1.5rem',
        borderTop: '1px solid rgba(173, 35, 72, 0.08)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <ScrollReveal direction="up" delay={0.05}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#AD2348',
              background: 'rgba(173, 35, 72, 0.08)',
              border: '1px solid rgba(173, 35, 72, 0.18)',
              padding: '5px 14px',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}>
              <Clock size={14} /> APPOINTMENT SCHEDULE
            </span>
          </ScrollReveal>

          <HeadingReveal delay={0.1}>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)',
              color: '#1F2733',
              lineHeight: 1.2,
              marginBottom: '1.25rem'
            }}>
              Plan Your Consultation
            </h2>
          </HeadingReveal>

          {/* Timings Card */}
          <ScrollReveal direction="up" delay={0.15}>
            <div style={{
              background: '#FFFFFF',
              border: '1.5px solid rgba(173, 35, 72, 0.14)',
              borderRadius: '18px',
              padding: '1.5rem 2rem',
              maxWidth: '520px',
              margin: '0 auto 1.75rem',
              boxShadow: '0 8px 24px rgba(173, 35, 72, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.98rem' }}>
                <span style={{ fontWeight: 600, color: '#1F2733' }}>Monday to Saturday</span>
                <span style={{ fontWeight: 700, color: '#AD2348' }}>8:30 AM – 7:00 PM</span>
              </div>
              <div style={{ height: '1px', background: 'rgba(173, 35, 72, 0.1)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem' }}>
                <span style={{ fontWeight: 600, color: '#5B687B' }}>Sunday</span>
                <span style={{ fontWeight: 700, color: '#8A1535' }}>Closed</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p style={{
              color: '#5B687B',
              fontSize: '1.02rem',
              lineHeight: 1.7,
              maxWidth: '620px',
              margin: '0 auto 2.25rem'
            }}>
              Consultations and scans are arranged by scheduled appointment to support a more organised visit.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => openModal()}
                type="button"
                className="btn btn-primary"
                style={{ padding: '0.85rem 2.25rem', cursor: 'pointer' }}
              >
                <Calendar size={18} /> Book an Appointment
              </button>

              <Link
                to="/contact"
                className="btn btn-outline"
                style={{ padding: '0.85rem 2.25rem', backgroundColor: '#FFFFFF' }}
              >
                <PhoneCall size={18} /> Contact the Centre
              </Link>
            </div>
          </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Doctors;