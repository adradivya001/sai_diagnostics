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
  Building2
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = 'About Us | Sai Diagnostics & Fetal Medicine Centre';
  }, []);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* 1. Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)',
        color: 'var(--text-heading)',
        padding: '3.75rem 1.5rem 3.25rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(173, 35, 72, 0.1)'
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ marginBottom: '0.85rem' }}>
            ● ABOUT OUR CENTRE
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
            color: 'var(--text-heading)',
            marginBottom: '1.25rem',
            lineHeight: 1.2
          }}>
            About Sai Diagnostics and Fetal Medicine Centre
          </h1>

          <p style={{
            fontSize: '1.08rem',
            color: 'var(--text-charcoal)',
            lineHeight: 1.7,
            maxWidth: '720px',
            margin: '0 auto'
          }}>
            Every patient deserves individual attention, clear guidance, and compassionate care. Our aim is to support families through their healthcare journey while building lasting relationships with patients and referring doctors.
          </p>
        </div>
      </section>

      {/* SECTION B — Founder's Message (Distinctive Editorial Quotation Section) */}
      <section style={{ background: '#FFFFFF', padding: '5.5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div className="reveal-on-scroll" style={{
            background: 'linear-gradient(145deg, #FFF9F5 0%, #FFFFFF 60%, #FDF4F7 100%)',
            borderRadius: '28px',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            border: '1px solid rgba(194, 24, 75, 0.14)',
            borderLeft: '5px solid #C2184B',
            boxShadow: '0 16px 40px rgba(194, 24, 75, 0.05)',
            position: 'relative'
          }}>
            <Quote 
              size={68} 
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2.5rem',
                color: 'rgba(194, 24, 75, 0.12)',
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
              color: '#C2184B',
              marginBottom: '1.5rem'
            }}>
              <Heart size={14} /> FOUNDER'S MESSAGE
            </div>

            <blockquote style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
              lineHeight: 1.9,
              color: '#202735',
              margin: '0 0 2rem',
              fontStyle: 'italic',
              maxWidth: '920px'
            }}>
              “Recognised for its dedicated care in Rayalaseema, Sai Diagnostics and Fetal Medicine Centre is committed to providing personalised care to every patient. The centre has been involved in the evaluation of rare and complex fetal cases. We value the trust placed in us by senior gynaecologists and paediatric specialists and continue to work towards providing thoughtful, specialised care for every family.”
            </blockquote>

            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, #C2184B 0%, rgba(245, 183, 200, 0.3) 70%, transparent 100%)',
              marginBottom: '1.5rem'
            }} />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#C2184B',
                marginBottom: '4px'
              }}>
                Dr. T. Sai Kiranmai
              </span>
              <span style={{ fontSize: '0.92rem', color: '#343943', fontWeight: 600 }}>
                Consultant Radiologist & Fetal Medicine Specialist
              </span>
              <span style={{ fontSize: '0.85rem', color: '#17A9CF', fontWeight: 600, marginTop: '2px' }}>
                M.B.B.S., DMRD • Fellowship in Fetal Ultrasound
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C — Our Approach to Care (Three Distinct Principles) */}
      <section style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF9F5 100%)',
        padding: '5.5rem 1.5rem',
        borderTop: '1px solid rgba(194, 24, 75, 0.06)'
      }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="text-center reveal-on-scroll" style={{ marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#17A9CF',
              background: '#E6F7FC',
              border: '1px solid rgba(23, 169, 207, 0.25)',
              padding: '5px 14px',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}>
              <ShieldCheck size={14} /> CLINICAL PHILOSOPHY
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#202735',
              lineHeight: 1.2
            }}>
              Our Approach to Care
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {/* Principle 1: Thoughtful Diagnostics */}
            <div className="reveal-on-scroll stagger-1" style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(194, 24, 75, 0.12)',
              boxShadow: '0 8px 24px rgba(194, 24, 75, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: '#FCE8EE',
                color: '#C2184B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Stethoscope size={24} />
              </div>
              <h3 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.35rem',
                color: '#202735',
                marginBottom: '0.85rem'
              }}>
                Thoughtful Diagnostics
              </h3>
              <p style={{ color: '#59616B', fontSize: '0.96rem', lineHeight: 1.7, margin: 0 }}>
                Diagnostic examinations are selected according to the clinical question and relevant referral or medical advice.
              </p>
            </div>

            {/* Principle 2: Clear Communication */}
            <div className="reveal-on-scroll stagger-2" style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(23, 169, 207, 0.2)',
              boxShadow: '0 8px 24px rgba(23, 169, 207, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: '#E6F7FC',
                color: '#17A9CF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.35rem',
                color: '#202735',
                marginBottom: '0.85rem'
              }}>
                Clear Communication
              </h3>
              <p style={{ color: '#59616B', fontSize: '0.96rem', lineHeight: 1.7, margin: 0 }}>
                Patients should have access to clear information about appointments, examination preparation, and follow-up.
              </p>
            </div>

            {/* Principle 3: Respectful Patient Care */}
            <div className="reveal-on-scroll stagger-3" style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(194, 24, 75, 0.12)',
              boxShadow: '0 8px 24px rgba(194, 24, 75, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: '#FCE8EE',
                color: '#C2184B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Heart size={24} />
              </div>
              <h3 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.35rem',
                color: '#202735',
                marginBottom: '0.85rem'
              }}>
                Respectful Patient Care
              </h3>
              <p style={{ color: '#59616B', fontSize: '0.96rem', lineHeight: 1.7, margin: 0 }}>
                Every patient deserves privacy, dignity, and individual attention throughout their consultation and ultrasound examination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D — Centre Environment (Genuine Clinic Photography Showcase) */}
      <section style={{ background: '#FFFFFF', padding: '5.5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Visual Column: Genuine Reception Photo */}
            <div className="reveal-on-scroll">
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(194, 24, 75, 0.08)',
                border: '1.5px solid rgba(194, 24, 75, 0.16)',
                position: 'relative',
                maxHeight: '380px'
              }}>
                <img 
                  src="/modern-reception.png" 
                  alt="Sai Diagnostics & Fetal Medicine Centre Patient Reception Area, Anantapur" 
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '380px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '16px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#C2184B',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}>
                  <Building2 size={14} /> Reception & Consultation Lounge, Anantapur
                </div>
              </div>
            </div>

            {/* Narrative Column: Confirmed Centre Information */}
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
                <Building2 size={13} /> CLINIC ENVIRONMENT
              </span>

              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: '#202735',
                lineHeight: 1.22,
                marginBottom: '1.25rem'
              }}>
                A Thoughtful, Calm Clinical Atmosphere
              </h2>

              <p style={{ color: '#343943', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                Sai Diagnostics and Fetal Medicine Centre is arranged to provide unhurried appointments, dedicated ultrasound rooms, and an orderly waiting environment so expectant parents feel comfortable and supported during every visit.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#202735' }}>
                  <CheckCircle2 size={18} color="#C2184B" />
                  <span>Dedicated ultrasound suites designed for maternal comfort & privacy</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#202735' }}>
                  <CheckCircle2 size={18} color="#17A9CF" />
                  <span>Scheduled appointment slots to ensure thorough scanning time</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#202735' }}>
                  <CheckCircle2 size={18} color="#C2184B" />
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
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E — Closing CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #8E133C 0%, #AD2348 55%, #C2184B 100%)',
        padding: '5.5rem 1.5rem',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container reveal-on-scroll" style={{ maxWidth: '780px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#FCE8EE',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '5px 14px',
            borderRadius: '9999px',
            marginBottom: '1.25rem'
          }}>
            <CalendarCheck size={14} /> PLAN YOUR VISIT
          </span>

          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1.15rem'
          }}>
            Begin Your Visit With Confidence
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '620px',
            margin: '0 auto 2.5rem'
          }}>
            Contact our centre to enquire about available diagnostic examinations, appointment timings, and visit preparation guidance.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/services" 
              className="btn btn-cta-white"
              style={{
                background: '#FFFFFF',
                color: '#AD2348',
                fontWeight: 700,
                padding: '0.9rem 2.25rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Explore Our Services <ArrowRight size={16} />
            </Link>

            <Link 
              to="/contact" 
              className="btn btn-cta-outline-white"
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                fontWeight: 700,
                padding: '0.9rem 2.25rem',
                borderRadius: '9999px',
                border: '1.5px solid rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <PhoneCall size={18} /> Contact the Centre
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
