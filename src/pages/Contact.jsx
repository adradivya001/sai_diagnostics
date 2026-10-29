import { useEffect } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Navigation,
  Building2
} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Contact & Appointments | Sai Diagnostics Anantapur';
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
            ● REACH OUT TO OUR CLINIC
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.3rem, 4vw, 3.3rem)',
            color: 'var(--text-heading)',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Contact & Appointments
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-charcoal)',
            lineHeight: 1.6,
            maxWidth: '660px',
            margin: '0 auto'
          }}>
            Have questions about an upcoming scan, preparation instructions, or clinic timings? We are here to assist you every step of the way.
          </p>
        </div>
      </section>

      {/* SECTION B — Contact Details and Location (Two-Column Layout) */}
      <section style={{ background: '#FFFFFF', padding: '5.5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '4.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left Side: Direct Contact Details */}
            <div className="reveal-on-scroll">
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
                <Building2 size={13} /> CLINIC LOCATION
              </span>

              <h2 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(1.9rem, 3vw, 2.5rem)',
                color: '#202735',
                lineHeight: 1.25,
                marginBottom: '1.5rem'
              }}>
                Sai Diagnostics and Fetal Medicine Centre
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#FCE8EE',
                    color: '#C2184B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#202735', fontSize: '0.96rem', marginBottom: '3px' }}>
                      Verified Physical Address
                    </strong>
                    <p style={{ margin: 0, color: '#59616B', fontSize: '0.94rem', lineHeight: 1.6 }}>
                      9th Cross Road, Sai Nagar, Anantapur, Andhra Pradesh 515001, India.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#FCE8EE',
                    color: '#C2184B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#202735', fontSize: '0.96rem', marginBottom: '3px' }}>
                      Direct Phone Helpline
                    </strong>
                    <a 
                      href="tel:+917799900248" 
                      style={{ color: '#C2184B', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}
                    >
                      +91 77999 00248
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#FCE8EE',
                    color: '#C2184B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#202735', fontSize: '0.96rem', marginBottom: '3px' }}>
                      Working & Consultation Hours
                    </strong>
                    <p style={{ margin: 0, color: '#59616B', fontSize: '0.94rem', lineHeight: 1.65 }}>
                      <span style={{ fontWeight: 600, color: '#202735' }}>Monday to Saturday:</span> 8:30 AM – 7:00 PM<br />
                      <span style={{ fontWeight: 600, color: '#C2184B' }}>Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 2rem' }}
                >
                  <Navigation size={16} /> Get Directions
                </a>
              </div>
            </div>

            {/* Right Side: Verified Google Map Embed */}
            <div className="reveal-on-scroll stagger-2">
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(32, 39, 53, 0.08)',
                border: '1px solid rgba(23, 169, 207, 0.25)',
                height: '420px',
                background: '#F4FAFD'
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
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
