import { Link } from 'react-router-dom';
import { 
  Building, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Calendar, 
  PhoneCall, 
  CheckCircle2, 
  Activity,
  Layers,
  Clock
} from 'lucide-react';

const Facilities = () => {
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
            PATIENT COMFORT & CLINICAL INFRASTRUCTURE
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.3rem, 4vw, 3.3rem)',
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Our Modern Diagnostic Facilities
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#e2ece6',
            lineHeight: 1.6,
            maxWidth: '660px',
            margin: '0 auto'
          }}>
            Experience healthcare in an environment designed for peace of mind, privacy, and clinical precision. Every detail of our center is tailored to support expecting mothers and families.
          </p>
        </div>
      </section>

      {/* Featured Section: Modern Clinic Waiting Room with Fetal Mural */}
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
                  src="/modern-waiting-room.png" 
                  alt="Modern Clinic Waiting Room with Fetal Mural at Sai Diagnostics"
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
                Our serene expectant mother lounge with custom maternal-fetal art and tranquil seating.
              </div>
            </div>

            {/* Content Column */}
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
                HEALING ENVIRONMENT
              </span>

              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(1.9rem, 2.6vw, 2.5rem)',
                color: '#0a2540',
                lineHeight: 1.2,
                marginBottom: '1.25rem'
              }}>
                A Peaceful Haven for Expecting Families
              </h2>

              <p style={{
                color: '#334e68',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '1.25rem'
              }}>
                Medical diagnostics should never feel intimidating. At Sai Diagnostics, our center features calming ambient lighting, spacious lounge seating, soothing acoustic treatment, and gentle artistic aesthetics that reduce appointment stress for both mother and child.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#0a2540', fontSize: '0.95rem' }}>Serene Mother & Family Lounge:</strong>
                    <p style={{ color: '#64748b', fontSize: '0.88rem', margin: '2px 0 0' }}>
                      Clean, ergonomic seating with plenty of room for accompanying family members and refreshments.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#0a2540', fontSize: '0.95rem' }}>High-Precision Ultrasound Scanning Suites:</strong>
                    <p style={{ color: '#64748b', fontSize: '0.88rem', margin: '2px 0 0' }}>
                      Equipped with high-resolution GE Voluson ultrasound machines and ceiling display monitors for parents to watch their baby during the scan.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#0a2540', fontSize: '0.95rem' }}>Private Genetic & Scan Counselling Chambers:</strong>
                    <p style={{ color: '#64748b', fontSize: '0.88rem', margin: '2px 0 0' }}>
                      Confidential consultation rooms where Dr. T. Sai Kiranmai reviews scan reports and genetic markers one-on-one with families.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#0a2540', fontSize: '0.95rem' }}>Sterile Sample Collection & Phlebotomy:</strong>
                    <p style={{ color: '#64748b', fontSize: '0.88rem', margin: '2px 0 0' }}>
                      Highest hospital hygiene standards for Double Marker, Quadruple, NIPT, and genetic laboratory draws.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/doctors"
                  className="btn btn-primary"
                  style={{
                    borderRadius: '999px',
                    padding: '0.85rem 1.85rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Calendar size={18} /> Book Scan Appointment
                </Link>

                <Link
                  to="/services"
                  className="btn btn-outline"
                  style={{
                    borderRadius: '999px',
                    padding: '0.85rem 1.85rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderColor: 'var(--primary)',
                    color: 'var(--primary)',
                    textDecoration: 'none'
                  }}
                >
                  Browse All 30 Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section style={{ background: '#ffffff', padding: '4rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-10">
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              ADVANCED CLINICAL STANDARDS
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.4rem', color: '#0a2540', marginTop: '0.5rem' }}>
              Equipment & Patient Amenities
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'transform 0.2s'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e4edea', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Activity size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0a2540', marginBottom: '0.5rem' }}>Voluson 3D/4D Ultrasound</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                High-frequency probes delivering unmatched clarity for fetal brain, heart, spine, and facial structural evaluations.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'transform 0.2s'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0a2540', marginBottom: '0.5rem' }}>Zero-Wait Scanning Slots</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Dedicated appointment time allocation so mothers are never subjected to long uncomfortable waiting periods.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'transform 0.2s'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Layers size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0a2540', marginBottom: '0.5rem' }}>Digital Image Archiving</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                High-resolution digital reports and printable fetal keepsake images handed over immediately after each scan.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'transform 0.2s'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffe4e6', color: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Heart size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0a2540', marginBottom: '0.5rem' }}>Maternal Privacy Protocols</h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Fully private, sound-insulated imaging suites with female chaperone assistance for all obstetric and pelvic scans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Visit Callout */}
      <section style={{ padding: '4rem 0 0' }}>
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: '#0a2540', marginBottom: '0.5rem' }}>
            Visit Us in Sai Nagar, Anantapur
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            Located conveniently on 9th Cross Road with parking facilities and step-free clinic access for pregnant mothers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{
                borderRadius: '999px',
                padding: '0.85rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Get Directions & Contact
            </Link>
            <a
              href="tel:+917799900248"
              className="btn btn-outline"
              style={{
                borderRadius: '999px',
                padding: '0.85rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                borderColor: 'var(--primary)',
                color: 'var(--primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <PhoneCall size={18} /> +91 7799900248
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12" style={{ background: '#fbf9f4' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(43,92,75,0.06)', padding: '4px 14px', borderRadius: '999px', marginBottom: '0.75rem' }}>PATIENT TESTIMONIALS</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0a2540' }}>What Patients Love About Us</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Padmavathi R.', tag: 'TIFFA Scan Patient', text: 'The clinic has a very calm and welcoming environment. The ultrasound room is modern and immaculate. Dr. Kiranmai made the whole process smooth and reassuring for us.' },
              { name: 'Sridevi L.', tag: 'NT Scan + Double Marker', text: 'The facilities are excellent — private, clean, and very well-maintained. The staff were warm and attentive throughout. Highly recommend for any expectant mothers.' },
              { name: 'Anitha M.', tag: 'Fetal Echocardiography', text: "State-of-the-art equipment and a spotless clinical setting. We were very impressed by the professionalism and the genuine care shown by every team member." }
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

      {/* CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #163026 0%, #2b5c4b 100%)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#ffffff', marginBottom: '0.75rem' }}>Experience Our Center in Person</h2>
          <p style={{ color: '#c8e6da', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 2rem' }}>Visit Sai Diagnostics & Fetal Medicine Center in Anantapur. Walk-ins welcome during clinic hours.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+917799900248" className="btn" style={{ background: '#ffffff', color: 'var(--primary)', borderRadius: '999px', padding: '0.85rem 2rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><PhoneCall size={18} /> Call: +91 7799900248</a>
            <Link to="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', borderRadius: '999px', padding: '0.85rem 2rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><Calendar size={18} /> Get Directions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;

