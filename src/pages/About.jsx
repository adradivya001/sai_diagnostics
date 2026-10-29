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
  CalendarCheck
} from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Sai Diagnostics & Fetal Medicine Centre';
  }, []);

  return (
    <div style={{ background: 'var(--bg-warm-white)', minHeight: '100vh', paddingBottom: '0' }}>
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

      {/* 2. Main About Section — Founder's Message & Core Vision */}
      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Left Column: Elegant Founder's Message Card */}
            <div>
              <div style={{
                background: 'linear-gradient(150deg, #FFFFFF 0%, #FFF8FA 55%, #F4FAFD 100%)',
                borderRadius: '22px',
                border: '1px solid rgba(173, 35, 72, 0.18)',
                borderLeft: '5px solid var(--primary-burgundy)',
                boxShadow: '0 10px 32px rgba(173, 35, 72, 0.06), 0 2px 10px rgba(37, 137, 196, 0.05)',
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                position: 'relative'
              }}>
                {/* Header Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(173, 35, 72, 0.08)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid rgba(173, 35, 72, 0.15)'
                  }}>
                    <Heart size={15} color="var(--primary-burgundy)" />
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--primary-burgundy)',
                      textTransform: 'uppercase'
                    }}>
                      Founder's Message
                    </span>
                  </div>

                  <Quote size={32} style={{ color: 'rgba(173, 35, 72, 0.18)', transform: 'rotate(180deg)' }} />
                </div>

                {/* Founder's Exact Message Quote */}
                <blockquote style={{
                  margin: '0 0 1.75rem',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: 'var(--text-heading)',
                  fontWeight: 400
                }}>
                  “Recognised for its dedicated care in Rayalaseema, Sai Diagnostics and Fetal Medicine Centre is committed to providing personalised care to every patient. The centre has been involved in the evaluation of rare and complex fetal cases. We value the trust placed in us by senior gynaecologists and paediatric specialists and continue to work towards providing thoughtful, specialised care for every family.”
                </blockquote>

                {/* Subtle Divider with Rose-Pink to Cyan Gradient */}
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(173, 35, 72, 0.25) 0%, rgba(37, 137, 196, 0.25) 50%, transparent 100%)',
                  marginBottom: '1.5rem'
                }} />

                {/* Verified Founder Details */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '1.35rem',
                      color: 'var(--primary-burgundy)',
                      margin: '0 0 0.25rem',
                      fontWeight: 700
                    }}>
                      Dr. T. Sai Kiranmai
                    </h3>
                    <div style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--text-charcoal)',
                      marginBottom: '0.2rem'
                    }}>
                      Consultant Radiologist & Fetal Medicine Specialist
                    </div>
                    <div style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-muted)'
                    }}>
                      M.B.B.S., DMRD • Fellowship in Fetal Ultrasound
                    </div>
                  </div>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '6px 12px',
                    borderRadius: '12px',
                    background: 'rgba(37, 137, 196, 0.1)',
                    color: 'var(--primary-blue)',
                    border: '1px solid rgba(37, 137, 196, 0.2)'
                  }}>
                    <CheckCircle2 size={14} /> Verified Specialist
                  </span>
                </div>
              </div>

              {/* Supporting Text Card */}
              <div style={{
                background: 'linear-gradient(145deg, #F0F8FC 0%, #FFFFFF 100%)',
                border: '1px solid rgba(37, 137, 196, 0.22)',
                borderLeft: '4px solid var(--primary-blue)',
                borderRadius: '16px',
                padding: '1.5rem 1.75rem',
                marginTop: '1.75rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '0.5rem',
                  color: 'var(--primary-blue)',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}>
                  <Stethoscope size={18} /> Our Patient-Centred Commitment
                </div>
                <p style={{
                  color: 'var(--text-charcoal)',
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Every patient deserves individual attention, clear guidance, and compassionate care. Our aim is to support families through their healthcare journey while building lasting relationships with patients and referring doctors.
                </p>
              </div>
            </div>

            {/* Right Column: Reception Visual & Clinical Core Pillars */}
            <div>
              {/* Modern Clinic Reception Photo */}
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-warm-white)',
                marginBottom: '1rem'
              }}>
                <img 
                  src="/modern-reception.png" 
                  alt="Sai Diagnostics & Fetal Medicine Centre Patient Reception, Anantapur"
                  style={{
                    width: '100%',
                    height: '240px',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                textAlign: 'center',
                margin: '0 0 1.75rem'
              }}>
                Welcoming patient consultation lounge and diagnostic suites at Sai Diagnostics, Anantapur.
              </p>

              {/* Verified Pillars (No unverified claims) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                marginBottom: '1.75rem'
              }}>
                <div style={{
                  background: 'var(--bg-warm-white)',
                  padding: '1.2rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(173, 35, 72, 0.15)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <ShieldCheck size={18} color="var(--primary-burgundy)" />
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.94rem' }}>Fetal Medicine Expertise</strong>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    Fellowship-trained fetal ultrasound specialist oversight for every scan.
                  </p>
                </div>

                <div style={{
                  background: 'var(--bg-warm-white)',
                  padding: '1.2rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(37, 137, 196, 0.2)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Sparkles size={18} color="var(--primary-blue)" />
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.94rem' }}>High-Definition Imaging</strong>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    Advanced GE Voluson ultrasound system for clear prenatal views.
                  </p>
                </div>

                <div style={{
                  background: 'var(--bg-warm-white)',
                  padding: '1.2rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(37, 137, 196, 0.2)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Heart size={18} color="var(--primary-blue)" />
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.94rem' }}>Compassionate Care</strong>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    Unrushed consultations and empathetic counseling for every parent.
                  </p>
                </div>

                <div style={{
                  background: 'var(--bg-warm-white)',
                  padding: '1.2rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(173, 35, 72, 0.15)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Stethoscope size={18} color="var(--primary-burgundy)" />
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.94rem' }}>Specialist Trust</strong>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    Trusted regional referral destination for complex and rare fetal cases.
                  </p>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/facilities"
                  className="btn btn-outline"
                  style={{
                    backgroundColor: '#ffffff'
                  }}
                >
                  Explore Center Facilities <ArrowRight size={16} />
                </Link>

                <Link
                  to="/doctors"
                  className="btn btn-primary"
                >
                  Doctor Profile & Timings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clinical Consultation & Location Details */}
      <section className="py-16" style={{ background: 'var(--bg-skyblue-pale)', borderTop: '1px solid rgba(37, 137, 196, 0.15)', borderBottom: '1px solid rgba(37, 137, 196, 0.15)' }}>
        <div className="container" style={{ maxWidth: '1040px' }}>
          <div className="card" style={{
            background: '#ffffff',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="section-tag section-tag-blue" style={{ marginBottom: '0.75rem' }}>
                <Stethoscope size={14} /> CLINICAL DIRECTOR & SPECIALIST
              </span>

              <h3 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '2rem',
                color: 'var(--text-heading)',
                marginBottom: '0.25rem'
              }}>
                Dr. T. Sai Kiranmai
              </h3>

              <div style={{
                color: 'var(--primary-burgundy)',
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '0.25rem'
              }}>
                M.B.B.S., DMRD • Fellowship in Fetal Ultrasound
              </div>

              <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                Consultant Radiologist & Fetal Medicine Specialist
              </div>

              <p style={{ color: 'var(--text-charcoal)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                With dedicated clinical practice in maternal-fetal imaging, Dr. Kiranmai personally conducts and interprets specialised scans including NT Screening, TIFFA, Fetal Echocardiography, Doppler Studies, and fetal wellbeing assessments.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
              <div style={{
                background: 'var(--bg-skyblue-pale)',
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(37, 137, 196, 0.2)'
              }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CalendarCheck size={16} color="var(--primary-blue)" /> Consultation Timings
                </h4>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-charcoal)', lineHeight: 1.5 }}>
                  Monday to Saturday: 9:00 AM – 7:00 PM<br />
                  Location: 9th Cross Rd, Sai Nagar, Anantapur, AP
                </p>
              </div>

              <Link
                to="/doctors"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                View Full Doctor Profile & Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(173, 35, 72, 0.1)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag" style={{ marginBottom: '0.75rem' }}>EXPERIENCE COMPASSIONATE CARE</span>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>Begin Your Journey With Us</h2>
          <p style={{ color: 'var(--text-charcoal)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.6 }}>Book a consultation with Dr. T. Sai Kiranmai today and experience world-class maternal-fetal diagnostics in Anantapur.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+917799900248" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
              <PhoneCall size={18} /> Call: +91 7799900248
            </a>
            <Link to="/services" className="btn btn-outline" style={{ backgroundColor: '#ffffff', padding: '0.85rem 2rem' }}>
              <ArrowRight size={18} /> Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
