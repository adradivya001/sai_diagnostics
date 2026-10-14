import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Heart, 
  Users, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  Stethoscope
} from 'lucide-react';

const About = () => {
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
            ABOUT OUR CENTER
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.3rem, 4vw, 3.3rem)',
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Dedicated to Maternal & Fetal Wellbeing
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#e2ece6',
            lineHeight: 1.6,
            maxWidth: '660px',
            margin: '0 auto'
          }}>
            For over three decades, Sai Diagnostics has stood as a beacon of clinical accuracy, technological innovation, and compassionate care for mothers and families across Anantapur.
          </p>
        </div>
      </section>

      {/* Main Story Section with Clinic Reception Image */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Image Column */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px -10px rgba(10, 37, 64, 0.15)',
                border: '1px solid #e2e8f0',
                background: '#f1f5f9'
              }}>
                <img 
                  src="/modern-reception.png" 
                  alt="Modern Medical Clinic Reception at Sai Diagnostics"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{
                marginTop: '1rem',
                textAlign: 'center',
                fontSize: '0.85rem',
                color: '#64748b',
                fontStyle: 'italic'
              }}>
                Welcoming patient reception and consultation foyer at Sai Diagnostics, Anantapur.
              </div>
            </div>

            {/* Story Text Column */}
            <div>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--primary)',
                marginBottom: '0.5rem',
                display: 'block'
              }}>
                OUR HERITAGE & MISSION
              </span>

              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(1.9rem, 2.6vw, 2.5rem)',
                color: '#0a2540',
                lineHeight: 1.2,
                marginBottom: '1.25rem'
              }}>
                Excellence in Fetal Medicine & Diagnostic Imaging
              </h2>

              <p style={{
                color: '#334e68',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '1.25rem'
              }}>
                Founded with a singular vision to bring world-class fetal imaging and diagnostic precision to Rayalaseema, Sai Diagnostics has evolved into a premier regional referral center for high-risk pregnancies, fetal echocardiography, and genetic risk assessments.
              </p>

              <p style={{
                color: '#334e68',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '1.75rem'
              }}>
                We believe that every expectant mother deserves transparent explanations, serene clinical environments, and the reassurance of fellowship-trained specialist oversight for every ultrasound scan.
              </p>

              {/* Four Key Pillars */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  background: '#ffffff',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <ShieldCheck size={18} color="var(--primary)" />
                    <strong style={{ color: '#0a2540', fontSize: '0.92rem' }}>33+ Years Legacy</strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>Trusted by over 45,000 families</p>
                </div>

                <div style={{
                  background: '#ffffff',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Award size={18} color="#0284c7" />
                    <strong style={{ color: '#0a2540', fontSize: '0.92rem' }}>Fellowship Trained</strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>Fetal ultrasound specialist</p>
                </div>

                <div style={{
                  background: '#ffffff',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Sparkles size={18} color="#d97706" />
                    <strong style={{ color: '#0a2540', fontSize: '0.92rem' }}>30+ Diagnostic Tests</strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>All prenatal scans & genetics</p>
                </div>

                <div style={{
                  background: '#ffffff',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Heart size={18} color="#e11d48" />
                    <strong style={{ color: '#0a2540', fontSize: '0.92rem' }}>Compassionate Care</strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>Gentle & supportive guidance</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/facilities"
                  className="btn btn-outline"
                  style={{
                    borderRadius: '999px',
                    padding: '0.8rem 1.75rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderColor: 'var(--primary)',
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Explore Our Facilities <ArrowRight size={16} />
                </Link>

                <Link
                  to="/doctors"
                  className="btn btn-primary"
                  style={{
                    borderRadius: '999px',
                    padding: '0.8rem 1.75rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Meet Dr. T. Sai Kiranmai
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile Spotlight */}
      <section style={{ background: '#ffffff', padding: '4rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1040px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #eef5f8 100%)',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#e4edea',
                color: 'var(--primary)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}>
                <Stethoscope size={14} /> CLINICAL DIRECTOR
              </div>

              <h3 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '2rem',
                color: '#0a2540',
                marginBottom: '0.25rem'
              }}>
                Dr. T. Sai Kiranmai
              </h3>

              <div style={{
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '1rem',
                marginBottom: '0.25rem'
              }}>
                M.B.B.S., DMRD • Fellowship in Fetal Ultrasound
              </div>

              <div style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                Consultant Radiologist & Fetal Medicine Specialist
              </div>

              <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                With over a decade of dedicated expertise in maternal-fetal imaging, Dr. Kiranmai leads our clinical scans including TIFFA, NT Screening, Fetal Echocardiography, Doppler Studies, and invasive prenatal genetic testing.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
              <div style={{
                background: '#ffffff',
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid #e2e8f0'
              }}>
                <h4 style={{ fontSize: '0.9rem', color: '#0a2540', marginBottom: '0.5rem' }}>Consultation Timings</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569' }}>
                  Monday to Saturday: 9:00 AM – 7:00 PM<br />
                  Location: 9th Cross Rd, Sai Nagar, Anantapur
                </p>
              </div>

              <Link
                to="/doctors"
                className="btn btn-primary"
                style={{
                  borderRadius: '999px',
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                View Full Doctor Profile & Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Helpline Callout */}
      <section style={{ padding: '4rem 0 0' }}>
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: '#0a2540', marginBottom: '0.5rem' }}>
            Have Questions About an Upcoming Scan?
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            Our patient care counselors are on hand to guide you on gestational timing, scan preparation, and doctor appointments.
          </p>
          <a
            href="tel:+917799900248"
            className="btn btn-primary"
            style={{
              borderRadius: '999px',
              padding: '0.85rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <PhoneCall size={18} /> Call Us: +91 7799900248
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12" style={{ background: '#fbf9f4' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(43,92,75,0.06)', padding: '4px 14px', borderRadius: '999px', marginBottom: '0.75rem' }}>PATIENT TESTIMONIALS</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0a2540' }}>What Our Patients Say</h2>
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

      {/* CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #163026 0%, #2b5c4b 100%)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#ffffff', marginBottom: '0.75rem' }}>Begin Your Journey With Us</h2>
          <p style={{ color: '#c8e6da', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 2rem' }}>Book a consultation with Dr. T. Sai Kiranmai today and experience world-class maternal-fetal diagnostics in Anantapur.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+917799900248" className="btn" style={{ background: '#ffffff', color: 'var(--primary)', borderRadius: '999px', padding: '0.85rem 2rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><PhoneCall size={18} /> Call: +91 7799900248</a>
            <Link to="/services" className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', borderRadius: '999px', padding: '0.85rem 2rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><ArrowRight size={18} /> Explore All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

