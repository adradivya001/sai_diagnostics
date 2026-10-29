import { useEffect } from 'react';
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
  Clock,
  ArrowRight
} from 'lucide-react';
import { useAppointmentModal } from '../components/AppointmentModal';

const Facilities = () => {
  const { openModal } = useAppointmentModal();
  useEffect(() => {
    document.title = 'Diagnostic Facilities & Infrastructure | Sai Diagnostics';
  }, []);

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
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ marginBottom: '0.85rem' }}>
            ● PATIENT COMFORT & CLINICAL INFRASTRUCTURE
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.3rem, 4vw, 3.3rem)',
            color: 'var(--text-heading)',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Our Modern Diagnostic Facilities
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-charcoal)',
            lineHeight: 1.6,
            maxWidth: '660px',
            margin: '0 auto'
          }}>
            Experience healthcare in an environment designed for peace of mind, privacy, and clinical precision. Every detail of our center is tailored to support expecting mothers and families.
          </p>
        </div>
      </section>

      {/* 2. Featured Section: Modern Clinic Waiting Room */}
      <section className="py-16" style={{ background: '#ffffff' }}>
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
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-warm-white)'
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
                color: 'var(--text-muted)',
                fontStyle: 'italic'
              }}>
                Our serene expectant mother lounge with custom maternal-fetal art and tranquil seating.
              </div>
            </div>

            {/* Content Column */}
            <div>
              <span className="section-tag section-tag-blue" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
                HEALING ENVIRONMENT
              </span>

              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(1.9rem, 2.6vw, 2.5rem)',
                color: 'var(--text-heading)',
                lineHeight: 1.2,
                marginBottom: '1.25rem'
              }}>
                A Peaceful Haven for Expecting Families
              </h2>

              <p style={{
                color: 'var(--text-charcoal)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '1.25rem'
              }}>
                Medical diagnostics should never feel intimidating. At Sai Diagnostics, our center features calming ambient lighting, spacious lounge seating, soothing acoustic treatment, and gentle artistic aesthetics that reduce appointment stress for both mother and child.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--primary-burgundy)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.95rem' }}>Serene Mother & Family Lounge:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '2px 0 0' }}>
                      Clean, ergonomic seating with plenty of room for accompanying family members and refreshments.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.95rem' }}>High-Precision Ultrasound Scanning Suites:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '2px 0 0' }}>
                      Equipped with high-resolution GE Voluson ultrasound machines and ceiling display monitors for parents to watch their baby during the scan.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--primary-burgundy)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.95rem' }}>Private Genetic & Scan Counselling Chambers:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '2px 0 0' }}>
                      Confidential consultation rooms where Dr. T. Sai Kiranmai reviews scan reports and genetic markers one-on-one with families.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)', fontSize: '0.95rem' }}>Sterile Sample Collection & Phlebotomy:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '2px 0 0' }}>
                      Highest hospital hygiene standards for Double Marker, Quadruple, NIPT, and genetic laboratory draws.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => openModal()}
                  className="btn btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="button"
                >
                  <Calendar size={18} /> Book Scan Appointment
                </button>

                <Link
                  to="/services"
                  className="btn btn-outline"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  Browse All 30 Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facilities Grid (Pale Sky Blue Alternation) */}
      <section className="py-16" style={{ background: 'var(--bg-skyblue-pale)', borderTop: '1px solid rgba(37, 137, 196, 0.15)', borderBottom: '1px solid rgba(37, 137, 196, 0.15)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-10">
            <span className="section-tag section-tag-blue" style={{ marginBottom: '0.5rem' }}>
              ADVANCED CLINICAL STANDARDS
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.4rem', color: 'var(--text-heading)', marginTop: '0.5rem' }}>
              Equipment & Patient Amenities
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <div className="card" style={{ backgroundColor: '#ffffff' }}>
              <div className="icon-box-burgundy" style={{ marginBottom: '1rem' }}>
                <Activity size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Voluson 3D/4D Ultrasound</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                High-frequency probes delivering unmatched clarity for fetal brain, heart, spine, and facial structural evaluations.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: '#ffffff' }}>
              <div className="icon-box-blue" style={{ marginBottom: '1rem' }}>
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Zero-Wait Scanning Slots</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Dedicated appointment time allocation so mothers are never subjected to long uncomfortable waiting periods.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: '#ffffff' }}>
              <div className="icon-box-burgundy" style={{ marginBottom: '1rem' }}>
                <Layers size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Digital Image Archiving</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                High-resolution digital reports and printable fetal keepsake images handed over immediately after each scan.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: '#ffffff' }}>
              <div className="icon-box-blue" style={{ marginBottom: '1rem' }}>
                <Heart size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Maternal Privacy Protocols</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Fully private, sound-insulated imaging suites with female chaperone assistance for all obstetric and pelvic scans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Clinic Visit Callout */}
      <section className="py-16" style={{ background: 'var(--bg-warm-white)' }}>
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <span className="section-tag" style={{ marginBottom: '0.75rem' }}>EASY ACCESS</span>
          <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Visit Us in Sai Nagar, Anantapur
          </h3>
          <p style={{ color: 'var(--text-charcoal)', fontSize: '0.98rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            Located conveniently on 9th Cross Road with parking facilities and step-free clinic access for pregnant mothers.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem' }}
            >
              Get Directions & Contact
            </Link>
            <a
              href="tel:+917799900248"
              className="btn btn-outline"
              style={{
                backgroundColor: '#ffffff',
                padding: '0.85rem 2rem'
              }}
            >
              <PhoneCall size={18} /> +91 7799900248
            </a>
          </div>
        </div>
      </section>


      {/* 6. CTA Banner */}
      <section style={{ background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(173, 35, 72, 0.1)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag" style={{ marginBottom: '0.75rem' }}>WALK-INS WELCOME</span>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>Experience Our Center in Person</h2>
          <p style={{ color: 'var(--text-charcoal)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.6 }}>Visit Sai Diagnostics & Fetal Medicine Center in Anantapur. Walk-ins welcome during clinic hours.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+917799900248" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
              <PhoneCall size={18} /> Call: +91 7799900248
            </a>
            <Link to="/contact" className="btn btn-outline" style={{ backgroundColor: '#ffffff', padding: '0.85rem 2rem' }}>
              <Calendar size={18} /> Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
