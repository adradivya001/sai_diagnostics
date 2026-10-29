import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2, 
  Clock, 
  Navigation, 
  Building2, 
  Sparkles 
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const Facilities = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Our Centre and Facilities | Sai Diagnostics Anantapur';
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

      {/* SECTION B — Genuine Photo Showcase Gallery */}
      <section style={{ background: '#FFFFFF', padding: '5.5rem 1.5rem' }}>
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
              <Sparkles size={13} /> AUTHENTIC CLINIC PHOTOGRAPHY
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#202735',
              lineHeight: 1.2
            }}>
              Tour Our Diagnostic Setting
            </h2>
            <p style={{ color: '#59616B', fontSize: '1rem', maxWidth: '620px', margin: '0.5rem auto 0' }}>
              Genuine views of our clinical spaces, patient reception, and diagnostic consultation suites in Anantapur.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}>
            {/* Photo 1: Patient Reception */}
            <div className="reveal-on-scroll stagger-1" style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(194, 24, 75, 0.08)',
              border: '1px solid rgba(194, 24, 75, 0.14)',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img 
                  src="/modern-reception.png" 
                  alt="Sai Diagnostics Reception Lounge, Anantapur" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#C2184B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  PATIENT RECEPTION
                </span>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#202735', margin: '4px 0 8px' }}>
                  Reception & Check-in Desk
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#59616B', lineHeight: 1.6, margin: 0 }}>
                  Orderly registration counter where our front-desk staff assists expectant parents with arrival and scan coordination.
                </p>
              </div>
            </div>

            {/* Photo 2: Patient Waiting Lounge */}
            <div className="reveal-on-scroll stagger-2" style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(23, 169, 207, 0.08)',
              border: '1px solid rgba(23, 169, 207, 0.2)',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img 
                  src="/modern-waiting-room.png" 
                  alt="Sai Diagnostics Patient Waiting Area, Anantapur" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#17A9CF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  COMFORTABLE LOUNGE
                </span>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#202735', margin: '4px 0 8px' }}>
                  Patient Waiting Area
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#59616B', lineHeight: 1.6, margin: 0 }}>
                  A clean, air-conditioned waiting space providing comfortable seating and a serene atmosphere for accompanying family members.
                </p>
              </div>
            </div>

            {/* Photo 3: Clinic Exterior Entrance */}
            <div className="reveal-on-scroll stagger-3" style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(194, 24, 75, 0.08)',
              border: '1px solid rgba(194, 24, 75, 0.14)',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img 
                  src="/sai-diagnostics-building.png" 
                  alt="Sai Diagnostics Centre Exterior Building, Anantapur" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#C2184B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  CENTRAL LOCATION
                </span>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#202735', margin: '4px 0 8px' }}>
                  Clinic Entrance & Access
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#59616B', lineHeight: 1.6, margin: 0 }}>
                  Conveniently situated on 9th Cross Road, Sai Nagar in Anantapur with direct road access for arriving families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C — Patient Experience (Editorial Alternating Layout) */}
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
              color: '#C2184B',
              background: 'rgba(194, 24, 75, 0.08)',
              border: '1px solid rgba(194, 24, 75, 0.18)',
              padding: '5px 14px',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}>
              <Heart size={14} /> PATIENT-FIRST CARE
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#202735',
              lineHeight: 1.2
            }}>
              Pillars of the Patient Experience
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Feature 1 */}
            <div className="reveal-on-scroll stagger-1" style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.25rem 1.85rem',
              border: '1px solid rgba(194, 24, 75, 0.12)',
              boxShadow: '0 8px 24px rgba(194, 24, 75, 0.04)'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#FCE8EE',
                color: '#C2184B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Clock size={22} />
              </div>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#202735', marginBottom: '0.65rem' }}>
                Appointment Arrangements
              </h3>
              <p style={{ color: '#59616B', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                Patients are scheduled by appointment to preserve dedicated scanning time for comprehensive fetal anatomical reviews.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="reveal-on-scroll stagger-2" style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.25rem 1.85rem',
              border: '1px solid rgba(23, 169, 207, 0.2)',
              boxShadow: '0 8px 24px rgba(23, 169, 207, 0.04)'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#E6F7FC',
                color: '#17A9CF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#202735', marginBottom: '0.65rem' }}>
                Patient Privacy
              </h3>
              <p style={{ color: '#59616B', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                Individual ultrasound consultation rooms arranged to maintain dignified privacy and comfortable scanning for every patient.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="reveal-on-scroll stagger-3" style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.25rem 1.85rem',
              border: '1px solid rgba(194, 24, 75, 0.12)',
              boxShadow: '0 8px 24px rgba(194, 24, 75, 0.04)'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#FCE8EE',
                color: '#C2184B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#202735', marginBottom: '0.65rem' }}>
                Visit Guidance & Prep
              </h3>
              <p style={{ color: '#59616B', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                Clear preparation instructions (such as hydration or bladder requirements) are explained in advance when scheduling your scan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D — Location CTA */}
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
            <Navigation size={14} /> DIRECTIONS & VISITS
          </span>

          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1.15rem'
          }}>
            Plan Your Visit
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '620px',
            margin: '0 auto 2.5rem'
          }}>
            Find our location in Anantapur or get in touch with our team for appointment scheduling and assistance.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
              target="_blank"
              rel="noopener noreferrer"
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
              <Navigation size={16} /> Get Directions
            </a>

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

export default Facilities;
