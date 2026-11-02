import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2, 
  Clock, 
  Navigation, 
  Building2, 
  Sparkles,
  Maximize2,
  X,
  CalendarCheck
} from 'lucide-react';
import { 
  ScrollReveal, 
  HeadingReveal, 
  StaggerContainer, 
  StaggerItem, 
  HoverCard 
} from '../components/motion/MotionReveal';

const Facilities = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    document.title = 'Our Centre and Facilities | Sai Diagnostics Anantapur';
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryImages = [
    {
      id: 'waiting-room',
      title: 'Patient Waiting Lounge & Fetal Artistry',
      desc: 'Comfortable, air-conditioned reception lounge with dedicated seating for mothers and accompanying family.',
      src: '/modern-waiting-room.png',
      featured: true,
      tag: 'FEATURED SPACE'
    },
    {
      id: 'reception-desk',
      title: 'Reception & Check-in Desk',
      desc: 'Orderly registration and consultation reception counter designed for prompt appointment coordination.',
      src: '/modern-reception.png',
      featured: false,
      tag: 'WELCOME & CHECK-IN'
    },
    {
      id: 'clinic-exterior',
      title: 'Sai Diagnostics Centre Exterior',
      desc: 'Centrally located facility on 9th Cross Road, Sai Nagar, easily accessible with peaceful surroundings.',
      src: '/sai-diagnostics-building.png',
      featured: false,
      tag: 'CENTRE EXTERIOR'
    },
    {
      id: 'ultrasound-suite',
      title: 'Dedicated Ultrasound Consultation Suite',
      desc: 'Private diagnostic room equipped with high-resolution clinical ultrasound platform and secondary display for expectant parents.',
      src: '/ultrasound.jpg',
      featured: false,
      tag: 'DIAGNOSTIC SUITE'
    }
  ];

  const experiencePoints = [
    {
      num: '01',
      title: 'Appointment Arrangements',
      desc: 'Patients are scheduled by prior appointment to support organised diagnostic visits, minimizing wait times and ensuring adequate time for every scan.',
      icon: <Clock size={24} />
    },
    {
      num: '02',
      title: 'Patient Privacy',
      desc: 'Dedicated private ultrasound examination suites guarantee complete dignity, quiet reassurance, and comfort for expectant mothers throughout the procedure.',
      icon: <ShieldCheck size={24} />
    },
    {
      num: '03',
      title: 'Visit Guidance',
      desc: 'Our staff provides verified preparation advice (such as bladder fullness recommendations and report collection guidelines) prior to your visit.',
      icon: <CheckCircle2 size={24} />
    },
    {
      num: '04',
      title: 'Comfortable Environment',
      desc: 'Calm, hygienic waiting lounge with filtered drinking water, peaceful acoustics, and welcoming support for accompanying spouses and elders.',
      icon: <Heart size={24} />
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* =========================================================================
          SECTION 1: FACILITIES PAGE INTRODUCTION (Compact Title Banner)
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
              ● PATIENT COMFORT & CLINICAL INFRASTRUCTURE
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
              Our Modern Diagnostic Facilities
            </h1>
          </HeadingReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p style={{
              fontSize: '1.05rem',
              color: '#5B687B',
              lineHeight: 1.65,
              maxWidth: '660px',
              margin: '0 auto'
            }}>
              Experience healthcare in an environment designed for comfort, privacy and organised diagnostic care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CLINIC PHOTO GALLERY (Editorial Layout with Lightbox)
          ========================================================================= */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(3.5rem, 6vw, 5.5rem) 1.5rem' }}>
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
                <Sparkles size={13} /> AUTHENTIC CLINIC TOUR
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: '#1F2733',
                lineHeight: 1.2
              }}>
                Tour Our Diagnostic Setting
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p style={{ color: '#5B687B', fontSize: '1rem', maxWidth: '620px', margin: '0.5rem auto 0' }}>
                Explore our clinical spaces, patient reception and diagnostic environment. Click any photograph to view in high resolution.
              </p>
            </ScrollReveal>
          </div>

          {/* Editorial Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.75rem'
          }}>
            {/* Featured Photo: Waiting Room Lounge (Span 8 on desktop) */}
            <div 
              style={{
                gridColumn: 'span 12',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(173, 35, 72, 0.08)',
                border: '1.5px solid rgba(173, 35, 72, 0.14)',
                background: '#FFFFFF',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={() => setActivePhoto(galleryImages[0])}
            >
              <div style={{ height: 'clamp(320px, 45vw, 440px)', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={galleryImages[0].src} 
                  alt={galleryImages[0].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(31, 39, 51, 0.85) 0%, rgba(31, 39, 51, 0.1) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <span style={{
                        background: '#AD2348',
                        color: '#FFFFFF',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        display: 'inline-block',
                        marginBottom: '8px'
                      }}>
                        {galleryImages[0].tag}
                      </span>
                      <h3 style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)',
                        color: '#FFFFFF',
                        margin: '0 0 6px'
                      }}>
                        {galleryImages[0].title}
                      </h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.94rem', margin: 0, maxWidth: '640px' }}>
                        {galleryImages[0].desc}
                      </p>
                    </div>

                    <span style={{
                      background: 'rgba(255, 255, 255, 0.92)',
                      color: '#AD2348',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Maximize2 size={14} /> Click to Enlarge
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Supporting Photos */}
            {galleryImages.slice(1).map((photo) => (
              <div
                key={photo.id}
                style={{
                  gridColumn: 'span 4',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(173, 35, 72, 0.05)',
                  border: '1.5px solid rgba(173, 35, 72, 0.12)',
                  background: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                onClick={() => setActivePhoto(photo)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 14px 32px rgba(173, 35, 72, 0.10)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(173, 35, 72, 0.05)';
                }}
              >
                <div style={{ height: '230px', position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    color: '#AD2348',
                    fontSize: '0.70rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    padding: '3px 10px',
                    borderRadius: '9999px'
                  }}>
                    {photo.tag}
                  </div>
                </div>

                <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#1F2733',
                      marginBottom: '6px'
                    }}>
                      {photo.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#5B687B', lineHeight: 1.6, margin: 0 }}>
                      {photo.desc}
                    </p>
                  </div>
                  <div style={{
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(173, 35, 72, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.80rem',
                    color: '#AD2348',
                    fontWeight: 700
                  }}>
                    <span>View Image</span>
                    <Maximize2 size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PATIENT EXPERIENCE ("Designed Around Your Comfort and Care")
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
                <Heart size={14} /> PATIENT-FIRST ENVIRONMENT
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.1}>
              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: '#1F2733',
                lineHeight: 1.2
              }}>
                Designed Around Your Comfort and Care
              </h2>
            </HeadingReveal>
          </div>

          <StaggerContainer delayChildren={0.15} staggerChildren={0.1} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.75rem'
          }}>
            {experiencePoints.map((item, index) => (
              <StaggerItem key={index}>
                <HoverCard lift={-5} style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2.25rem 1.75rem',
                  border: '1.5px solid rgba(173, 35, 72, 0.12)',
                  boxShadow: '0 4px 18px rgba(173, 35, 72, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative'
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
                      {item.icon}
                    </div>
                    <span style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'rgba(173, 35, 72, 0.10)'
                    }}>
                      {item.num}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1F2733',
                    marginBottom: '0.65rem'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: '#5B687B',
                    fontSize: '0.90rem',
                    lineHeight: 1.65,
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
          SECTION 4: VISIT CTA ("Plan Your Visit")
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(135deg, #AD2348 0%, #C21850 60%, #90163C 100%)',
        padding: 'clamp(3.5rem, 5vw, 4.5rem) 1.5rem',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
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
            <Navigation size={14} /> CLINIC LOCATION & VISITS
          </span>

          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Plan Your Visit
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '620px',
            margin: '0 auto 2.25rem'
          }}>
            Find our location in Anantapur or get in touch with our team for appointment scheduling and assistance.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
              target="_blank"
              rel="noopener noreferrer"
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
              <Navigation size={16} /> Get Directions
            </a>

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
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIGHTBOX MODAL FOR GALLERY ENLARGEMENT
          ========================================================================= */}
      {activePhoto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActivePhoto(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '920px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', height: 'clamp(280px, 50vw, 520px)', background: '#1F2733' }}>
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1F2733'
                }}
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: '1.5rem 2rem' }}>
              <span style={{
                color: '#AD2348',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px'
              }}>
                {activePhoto.tag}
              </span>
              <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.35rem', color: '#1F2733', margin: '0 0 6px' }}>
                {activePhoto.title}
              </h3>
              <p style={{ margin: 0, color: '#5B687B', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {activePhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Facilities;