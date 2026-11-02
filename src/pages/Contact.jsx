import { useEffect } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Navigation,
  Building2,
  Calendar,
  MessageCircle,
  CalendarCheck,
  ShieldCheck
} from 'lucide-react';
import { useAppointmentModal } from '../components/AppointmentModal';
import { 
  ScrollReveal, 
  HeadingReveal, 
  StaggerContainer, 
  StaggerItem, 
  HoverCard 
} from '../components/motion/MotionReveal';

const Contact = () => {
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    document.title = 'Contact & Appointments | Sai Diagnostics Anantapur';
  }, []);

  const visitHighlights = [
    {
      num: '01',
      title: 'Central Location',
      desc: 'Conveniently situated at 9th Cross Road, Sai Nagar, Anantapur. Accessible ground-floor clinic with easy nearby parking.',
      icon: <MapPin size={22} />
    },
    {
      num: '02',
      title: 'Structured Timings',
      desc: 'Open Monday to Saturday, 8:30 AM to 7:00 PM. Scans are scheduled in dedicated slots to ensure calm, unhurried care.',
      icon: <Clock size={22} />
    },
    {
      num: '03',
      title: 'Appointment Arrangements',
      desc: 'Advance booking is recommended for detailed scans (TIFFA, NT, Doppler) to reserve optimal doctor consultation time.',
      icon: <CalendarCheck size={22} />
    },
    {
      num: '04',
      title: 'Contact Availability',
      desc: 'Direct phone (+91 77999 00248) and WhatsApp reception support available throughout clinic hours for timely guidance.',
      icon: <PhoneCall size={22} />
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* =========================================================================
          SECTION 1: CONTACT PAGE INTRODUCTION (Gradient Banner)
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(135deg, #FDF2F4 0%, #FFF9F5 50%, #E8F8FA 100%)',
        color: '#1F2733',
        padding: 'clamp(3rem, 5vw, 4rem) 1.5rem clamp(2.5rem, 4vw, 3.25rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(173, 35, 72, 0.08)'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="down" distance={15}>
            <span className="section-tag" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#C2184B',
              background: 'rgba(194, 24, 75, 0.08)',
              border: '1px solid rgba(194, 24, 75, 0.16)',
              padding: '6px 14px',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}>
              ● REACH OUT TO OUR CLINIC
            </span>
          </ScrollReveal>

          <HeadingReveal>
            <h1 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.1rem, 4vw, 3.1rem)',
              color: '#1F2733',
              marginBottom: '1rem',
              lineHeight: 1.15,
              fontWeight: 700
            }}>
              Contact & Appointments
            </h1>
          </HeadingReveal>

          <ScrollReveal direction="up" delay={0.2} distance={20}>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              color: '#556070',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto'
            }}>
              Have questions about an upcoming scan, preparation instructions or clinic timings? We are here to assist you every step of the way.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CONTACT INFORMATION & GOOGLE MAP (Two-Column Layout)
          ========================================================================= */}
      <section style={{ 
        background: '#FFFFFF', 
        padding: 'clamp(3.5rem, 6vw, 5.5rem) 1.5rem',
        position: 'relative'
      }}>
        <div className="container">
          <div className="responsive-contact-split">
            
            {/* Left Column: Direct Clinic Details & Actions */}
            <ScrollReveal direction="left" distance={30}>
              <div>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#C2184B',
                  background: 'rgba(194, 24, 75, 0.08)',
                  border: '1px solid rgba(194, 24, 75, 0.18)',
                  padding: '5px 13px',
                  borderRadius: '9999px',
                  marginBottom: '1.25rem'
                }}>
                  <Building2 size={13} /> CLINIC LOCATION & HOURS
                </span>

                <h2 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                  color: '#1F2733',
                  lineHeight: 1.25,
                  marginBottom: '1.75rem'
                }}>
                  Sai Diagnostics and Fetal Medicine Centre
                </h2>

                {/* 3 Numbered Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.25rem' }}>
                  
                  {/* 01. Verified Physical Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: '#FDF2F4',
                      color: '#AD2348',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(173, 35, 72, 0.15)'
                    }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C2184B', letterSpacing: '0.05em' }}>01.</span>
                        <strong style={{ color: '#1F2733', fontSize: '1rem' }}>
                          Verified Physical Address
                        </strong>
                      </div>
                      <p style={{ margin: 0, color: '#556070', fontSize: '0.94rem', lineHeight: 1.6 }}>
                        9th Cross Road, Sai Nagar, Anantapur, Andhra Pradesh 515001, India.
                      </p>
                    </div>
                  </div>

                  {/* 02. Direct Phone Helpline */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: '#FDF2F4',
                      color: '#AD2348',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(173, 35, 72, 0.15)'
                    }}>
                      <PhoneCall size={22} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C2184B', letterSpacing: '0.05em' }}>02.</span>
                        <strong style={{ color: '#1F2733', fontSize: '1rem' }}>
                          Direct Phone Helpline
                        </strong>
                      </div>
                      <a 
                        href="tel:+917799900248" 
                        style={{ 
                          color: '#C2184B', 
                          fontWeight: 700, 
                          fontSize: '1.05rem', 
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        +91 77999 00248
                      </a>
                      <p style={{ margin: '3px 0 0', color: '#77717A', fontSize: '0.85rem' }}>
                        Available Monday to Saturday during consultation hours.
                      </p>
                    </div>
                  </div>

                  {/* 03. Working & Consultation Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: '#FDF2F4',
                      color: '#AD2348',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(173, 35, 72, 0.15)'
                    }}>
                      <Clock size={22} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C2184B', letterSpacing: '0.05em' }}>03.</span>
                        <strong style={{ color: '#1F2733', fontSize: '1rem' }}>
                          Working & Consultation Hours
                        </strong>
                      </div>
                      <p style={{ margin: 0, color: '#556070', fontSize: '0.94rem', lineHeight: 1.65 }}>
                        <span style={{ fontWeight: 600, color: '#1F2733' }}>Monday to Saturday:</span> 8:30 AM – 7:00 PM<br />
                        <span style={{ fontWeight: 600, color: '#C2184B' }}>Sunday:</span> Closed
                      </p>
                    </div>
                  </div>

                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="btn btn-primary"
                    style={{ 
                      padding: '0.85rem 1.6rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.92rem',
                      borderRadius: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    <Calendar size={17} /> Book Appointment
                  </button>

                  <a
                    href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ 
                      padding: '0.85rem 1.6rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.92rem',
                      borderRadius: '12px',
                      borderColor: 'rgba(173, 35, 72, 0.28)',
                      color: '#AD2348'
                    }}
                  >
                    <Navigation size={17} /> Get Directions
                  </a>

                  <a 
                    href="tel:+917799900248" 
                    className="btn btn-outline"
                    style={{ 
                      padding: '0.85rem 1.6rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.92rem',
                      borderRadius: '12px',
                      borderColor: 'rgba(173, 35, 72, 0.28)',
                      color: '#AD2348'
                    }}
                  >
                    <PhoneCall size={17} /> Call Now
                  </a>

                  <a 
                    href="https://wa.me/917799900248?text=Hello%20Sai%20Diagnostics%2C%20I%20would%20like%20to%20enquire%20about%20a%20scan%20appointment"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      padding: '0.85rem 1.6rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.92rem',
                      borderRadius: '12px',
                      background: '#25D366',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      fontWeight: 600,
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 211, 102, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.25)';
                    }}
                  >
                    <MessageCircle size={17} /> WhatsApp Us
                  </a>
                </div>

              </div>
            </ScrollReveal>

            {/* Right Column: Google Maps Embed with refined frame */}
            <ScrollReveal direction="right" distance={30}>
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(32, 39, 53, 0.08)',
                border: '1px solid rgba(173, 35, 72, 0.15)',
                height: 'clamp(340px, 45vw, 460px)',
                background: '#FDF2F4'
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=9th%20Cross%20Rd,%20Sai%20Nagar,%20Anantapur,%20Andhra%20Pradesh%20515001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Sai Diagnostics Clinic Location Map"
                  style={{ display: 'block', width: '100%', height: '100%', border: 0 }}
                />

                {/* Corner Map Info Pill */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(173, 35, 72, 0.15)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#1F2733',
                  pointerEvents: 'none'
                }}>
                  <MapPin size={13} color="#C2184B" /> Sai Nagar, Anantapur
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: VISIT INFORMATION STRIP (Compact 4-Card Grid)
          ========================================================================= */}
      <section style={{ 
        background: '#FFFDFB', 
        padding: 'clamp(3.5rem, 6vw, 5rem) 1.5rem',
        borderTop: '1px solid rgba(173, 35, 72, 0.08)'
      }}>
        <div className="container">
          
          <ScrollReveal direction="up" distance={20}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#C2184B',
                background: 'rgba(194, 24, 75, 0.08)',
                border: '1px solid rgba(194, 24, 75, 0.16)',
                padding: '5px 13px',
                borderRadius: '9999px',
                marginBottom: '0.85rem'
              }}>
                <ShieldCheck size={13} /> ESSENTIAL VISIT INFORMATION
              </span>

              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                color: '#1F2733',
                marginBottom: '0.5rem'
              }}>
                What to Expect for Your Visit
              </h2>

              <p style={{
                fontSize: '0.96rem',
                color: '#556070',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Helpful guidelines designed to make your diagnostic appointment smooth, punctual, and comfortable.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}>
              {visitHighlights.map((item, idx) => (
                <StaggerItem key={idx}>
                  <HoverCard>
                    <div style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      padding: '1.75rem 1.5rem',
                      border: '1.5px solid rgba(173, 35, 72, 0.12)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.25rem'
                      }}>
                        <div style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: '#FDF2F4',
                          color: '#AD2348',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(173, 35, 72, 0.16)'
                        }}>
                          {item.icon}
                        </div>
                        <span style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: '#C2184B',
                          background: 'rgba(194, 24, 75, 0.08)',
                          padding: '3px 8px',
                          borderRadius: '6px'
                        }}>
                          {item.num}
                        </span>
                      </div>

                      <h3 style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: '1.18rem',
                        color: '#1F2733',
                        marginBottom: '0.65rem',
                        fontWeight: 700
                      }}>
                        {item.title}
                      </h3>

                      <p style={{
                        margin: 0,
                        color: '#556070',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        flexGrow: 1
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

        </div>
      </section>

    </div>
  );
};

export default Contact;
