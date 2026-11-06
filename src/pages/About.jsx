import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  Stethoscope, 
  Sparkles, 
  PhoneCall, 
  ArrowRight, 
  Quote, 
  CheckCircle2, 
  CalendarCheck, 
  Building2, 
  MessageSquare,
  Award
} from 'lucide-react';
import { 
  ScrollReveal, 
  HeadingReveal, 
  StaggerContainer, 
  StaggerItem, 
  HoverCard 
} from '../components/motion/MotionReveal';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Sai Diagnostics & Fetal Medicine Centre';
  }, []);

  const philosophyPrinciples = [
    {
      num: '01',
      title: 'Thoughtful Diagnostics',
      desc: 'Diagnostic examinations are selected according to the clinical question and relevant referral or medical advice.',
      icon: <Stethoscope size={24} />,
      accentBg: '#FCE8EF',
      accentColor: '#AD2348'
    },
    {
      num: '02',
      title: 'Clear Communication',
      desc: 'Patients should have access to clear information about appointments, examination preparation and follow-up.',
      icon: <MessageSquare size={24} />,
      accentBg: '#E8F8FA',
      accentColor: '#0B7F8C'
    },
    {
      num: '03',
      title: 'Respectful Patient Care',
      desc: 'Every patient deserves privacy, dignity and individual attention throughout their consultation and ultrasound examination.',
      icon: <Heart size={24} />,
      accentBg: '#FCE8EF',
      accentColor: '#AD2348'
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* =========================================================================
          SECTION 1: ABOUT PAGE INTRODUCTION (Compact Title Banner)
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
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
              ● ABOUT OUR CENTRE
            </span>
          </ScrollReveal>

          <HeadingReveal delay={0.1}>
            <h1 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
              color: '#1F2733',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              About Sai Diagnostics and Fetal Medicine Centre
            </h1>
          </HeadingReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p style={{
              fontSize: '1.05rem',
              color: '#5B687B',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto'
            }}>
              Every patient deserves individual attention, clear guidance and compassionate care. Our aim is to support families through their healthcare journey while building lasting relationships with patients and referring doctors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FOUNDER'S MESSAGE (Sophisticated Balanced Editorial Composition)
          ========================================================================= */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem' }}>
        <div className="container">
          <ScrollReveal direction="scale" delay={0.1} amount={0.2}>
            <div style={{
              maxWidth: '1240px',
              margin: '0 auto',
              background: 'linear-gradient(145deg, #FFFDFB 0%, #FFF9F5 60%, #FDF2F4 100%)',
              borderRadius: '24px',
              padding: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              border: '1.5px solid rgba(173, 35, 72, 0.14)',
              borderLeft: '5px solid #AD2348',
              boxShadow: '0 12px 36px rgba(173, 35, 72, 0.06)',
              position: 'relative'
            }}>
              <Quote 
                size={64} 
                style={{
                  position: 'absolute',
                  top: '1.75rem',
                  right: '2rem',
                  color: 'rgba(173, 35, 72, 0.12)',
                  pointerEvents: 'none'
                }} 
              />

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#AD2348',
                marginBottom: '1.25rem'
              }}>
                <Heart size={14} /> FOUNDER'S MESSAGE
              </div>

              <blockquote style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(1.12rem, 1.8vw, 1.3rem)',
                lineHeight: 1.85,
                color: '#1F2733',
                margin: '0 0 1.75rem',
                fontStyle: 'italic',
                maxWidth: '880px'
              }}>
                “Recognised for its dedicated care in Rayalaseema, Sai Diagnostics and Fetal Medicine Centre is committed to providing personalised care to every patient. The centre has been involved in the evaluation of rare and complex fetal cases. We value the trust placed in us by senior gynaecologists and paediatric specialists and continue to work towards providing thoughtful, specialised care for every family.”
              </blockquote>

              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, #AD2348 0%, rgba(212, 66, 104, 0.3) 60%, transparent 100%)',
                marginBottom: '1.35rem'
              }} />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#AD2348',
                  marginBottom: '2px'
                }}>
                  Dr. T. Sai Kiranmai
                </span>
                <span style={{ fontSize: '0.92rem', color: '#1F2733', fontWeight: 600 }}>
                  Consultant Radiologist & Fetal Medicine Specialist
                </span>
                <span style={{ fontSize: '0.85rem', color: '#0B7F8C', fontWeight: 600, marginTop: '2px' }}>
                  M.B.B.S., DMRD • Fellowship in Fetal Ultrasound
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CLINICAL PHILOSOPHY ("Our Approach to Care")
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
                color: '#0B7F8C',
                background: '#E8F8FA',
                border: '1px solid rgba(11, 127, 140, 0.22)',
                padding: '5px 14px',
                borderRadius: '9999px',
                marginBottom: '0.85rem'
              }}>
                <ShieldCheck size={14} /> CLINICAL PHILOSOPHY
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: '#1F2733',
                lineHeight: 1.2
              }}>
                Our Approach to Care
              </h2>
            </HeadingReveal>
          </div>

          <StaggerContainer delayChildren={0.15} staggerChildren={0.1} className="about-philosophy-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.75rem'
          }}>
            {philosophyPrinciples.map((item, index) => (
              <StaggerItem key={index}>
                <HoverCard lift={-5} style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid rgba(173, 35, 72, 0.12)',
                  boxShadow: '0 6px 20px rgba(173, 35, 72, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: item.accentBg,
                      color: item.accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {item.icon}
                    </div>
                    <span style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'rgba(173, 35, 72, 0.12)'
                    }}>
                      {item.num}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#1F2733',
                    marginBottom: '0.85rem'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: '#5B687B',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: RECOGNITIONS & ACHIEVEMENTS (Certificate Presentation Milestone)
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 50%, #FDF2F4 100%)',
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 1.5rem',
        borderTop: '1px solid rgba(173, 35, 72, 0.08)'
      }}>
        <div className="container">
          
          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3rem' }}>
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
                <Award size={14} /> PROFESSIONAL RECOGNITION
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: '#1F2733',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                Recognitions &amp; Achievements
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p style={{
                color: '#5B687B',
                fontSize: '1.02rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                Recognising professional milestones and moments of appreciation that reflect our commitment to specialized fetal medicine, diagnostic excellence and patient care.
              </p>
            </ScrollReveal>
          </div>

          {/* Prominent Framed Photograph Composition */}
          <ScrollReveal direction="up" delay={0.2} amount={0.2}>
            <div style={{
              maxWidth: '920px',
              margin: '0 auto',
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(1rem, 2.5vw, 1.75rem)',
              border: '1.5px solid rgba(173, 35, 72, 0.14)',
              boxShadow: '0 16px 44px rgba(173, 35, 72, 0.08)'
            }}>
              <div style={{
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#0F172A',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.06)'
              }}>
                <img
                  src="/recognitions-and-achievements.jpg"
                  alt="Certificate presentation ceremony honouring professional milestone at Sai Diagnostics and Fetal Medicine Centre"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '560px',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto'
                  }}
                  loading="lazy"
                />
              </div>

              <div style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(173, 35, 72, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '0.86rem',
                color: '#5B687B',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={16} color="#AD2348" />
                <span>Professional certificate presentation and academic recognition ceremony</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLINIC ENVIRONMENT ("A Thoughtful, Calm Clinical Atmosphere")
          ========================================================================= */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Visual Column: Genuine Reception Photo */}
            <ScrollReveal direction="left" delay={0.15} amount={0.25}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(173, 35, 72, 0.08)',
                border: '1.5px solid rgba(173, 35, 72, 0.14)',
                position: 'relative'
              }}>
                <img 
                  src="/modern-reception.png" 
                  alt="Sai Diagnostics & Fetal Medicine Centre Patient Reception Area, Anantapur" 
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#AD2348',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)'
                }}>
                  <Building2 size={16} /> Reception & Consultation Lounge • Anantapur
                </div>
              </div>
            </ScrollReveal>

            {/* Narrative Column: Confirmed Centre Information */}
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
                  <Building2 size={13} /> CLINIC ENVIRONMENT
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.12}>
                <h2 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: '#1F2733',
                  lineHeight: 1.22,
                  marginBottom: '1.15rem'
                }}>
                  A Thoughtful, Calm Clinical Atmosphere
                </h2>
              </HeadingReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <p style={{ color: '#5B687B', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                  Sai Diagnostics and Fetal Medicine Centre is arranged to provide unhurried appointments, dedicated ultrasound rooms, and an orderly waiting environment so expectant parents feel comfortable and supported during every visit.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#1F2733' }}>
                    <CheckCircle2 size={18} color="#AD2348" />
                    <span>Dedicated ultrasound suites designed for maternal comfort & privacy</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#1F2733' }}>
                    <CheckCircle2 size={18} color="#0B7F8C" />
                    <span>Scheduled appointment slots to ensure thorough scanning time</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#1F2733' }}>
                    <CheckCircle2 size={18} color="#AD2348" />
                    <span>Active collaboration with treating obstetricians & paediatricians</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/facilities" className="btn btn-outline" style={{ padding: '0.8rem 1.85rem', backgroundColor: '#FFFFFF' }}>
                    View All Facilities
                  </Link>
                  <Link to="/doctors" className="btn btn-primary" style={{ padding: '0.8rem 1.85rem' }}>
                    Specialist Profile <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ABOUT PAGE CTA ("Begin Your Visit With Confidence")
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(135deg, #AD2348 0%, #C21850 60%, #90163C 100%)',
        padding: 'clamp(3.5rem, 5vw, 4.5rem) 1.5rem',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <ScrollReveal direction="up" delay={0.05}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '5px 14px',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}>
              <CalendarCheck size={14} /> PLAN YOUR VISIT
            </span>
          </ScrollReveal>

          <HeadingReveal delay={0.1}>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)',
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}>
              Begin Your Visit With Confidence
            </h2>
          </HeadingReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '620px',
              margin: '0 auto 2rem'
            }}>
              Contact our centre to enquire about available diagnostic examinations, appointment timings, and visit preparation guidance.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/services" 
                style={{
                  background: '#FFFFFF',
                  color: '#AD2348',
                  fontWeight: 700,
                  padding: '0.85rem 2.25rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                  transition: 'all 0.25s ease'
                }}
              >
                Explore Our Services <ArrowRight size={16} />
              </Link>

              <Link 
                to="/contact" 
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  padding: '0.85rem 2.25rem',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(255, 255, 255, 0.65)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease'
                }}
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

export default About;