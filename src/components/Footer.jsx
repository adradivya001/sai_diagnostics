import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock, 
  Activity,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#071a2b',
      color: '#ffffff',
      paddingTop: '3rem',
      paddingBottom: '1.75rem',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Top Header Row: Brand Identity & Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Left Brand Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img 
                src="/maternal-fetal-medicine-logo.png" 
                alt="Sai Diagnostics & Fetal Medicine Center" 
                style={{ 
                  height: '52px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  filter: 'brightness(1.05)'
                }} 
              />
              <div>
                <span style={{ 
                  display: 'block', 
                  fontSize: '1.15rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.5px',
                  color: '#ffffff',
                  lineHeight: 1.15
                }}>
                  SAI DIAGNOSTICS
                </span>
                <span style={{ 
                  display: 'block', 
                  fontSize: '0.72rem', 
                  color: '#94a3b8', 
                  letterSpacing: '0.3px',
                  marginTop: '2px'
                }}>
                  Diagnostics & Fetal Medicine Centre
                </span>
              </div>
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link
              to="/doctors"
              style={{
                backgroundColor: '#0d9488',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.875rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(13, 148, 136, 0.25)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#14b8a6';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#0d9488';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href="https://wa.me/917799900248"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                color: '#ffffff',
                fontWeight: 500,
                fontSize: '0.875rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1.5px solid rgba(255, 255, 255, 0.22)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Middle Section: 4 Columns Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem'
        }}>
          
          {/* Column 1: Brand Summary & Certification Badge */}
          <div>
            <p style={{
              color: '#cbd5e1',
              fontSize: '0.9rem',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
              maxWidth: '300px'
            }}>
              Specialised fetal medicine, advanced diagnostics and comprehensive maternal care under one trusted centre.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(20, 184, 166, 0.08)',
              border: '1px solid rgba(20, 184, 166, 0.35)',
              color: '#2dd4bf',
              fontSize: '0.78rem',
              fontWeight: 600
            }}>
              <ShieldCheck size={16} color="#14b8a6" />
              <span>Certified Diagnostic & Fetal Suites</span>
            </div>
          </div>

          {/* Column 2: Care Divisions */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.98rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              Care Divisions <span style={{ color: '#14b8a6', fontSize: '1.1rem' }}>•</span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { name: 'Fetal Medicine & Ultrasound', link: '/services' },
                { name: 'Fetal Assessment & TIFFA', link: '/services' },
                { name: 'Doppler & Growth Imaging', link: '/services' },
                { name: 'Genetic & Prenatal Screening', link: '/services' },
                { name: '3D/4D Pelvis & Follicular', link: '/services' },
                { name: 'Diagnostic Services & Lab', link: '/services' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.link}
                    style={{
                      color: '#94a3b8',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.98rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              Quick Links <span style={{ color: '#14b8a6', fontSize: '1.1rem' }}>•</span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { name: 'Home', link: '/' },
                { name: 'About Centre', link: '/about' },
                { name: 'Fetal Medicine Specialist', link: '/doctors' },
                { name: 'All 30 Services & Pricing', link: '/services' },
                { name: 'Our Facilities', link: '/facilities' },
                { name: 'Dr. T. Sai Kiranmai', link: '/doctors' },
                { name: 'Contact & Location', link: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.link}
                    style={{
                      color: '#94a3b8',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Visit & Contact */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.98rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              Visit & Contact <span style={{ color: '#14b8a6', fontSize: '1.1rem' }}>•</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
              
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#14b8a6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#cbd5e1', lineHeight: 1.45 }}>
                  Sai Nagar Double Road, 9th Cross,<br />
                  Anantapur, Andhra Pradesh 515001
                </span>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Phone size={18} color="#14b8a6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#cbd5e1' }}>
                  <a 
                    href="tel:+917799900248" 
                    style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#14b8a6'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    +91 77999 00248
                  </a>
                  {' | '}
                  <a 
                    href="tel:+919391251558" 
                    style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#14b8a6'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    +91 93912 51558
                  </a>
                </span>
              </div>

              {/* Timings */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Clock size={18} color="#14b8a6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ color: '#cbd5e1', lineHeight: 1.45 }}>
                  <div>Mon–Sat: 9 AM–8 PM</div>
                  <div>Sun: 9 AM–1 PM</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} Sai Diagnostics & Fetal Medicine Center. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link 
              to="/about" 
              style={{ color: '#64748b', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#94a3b8'}
              onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link 
              to="/services" 
              style={{ color: '#64748b', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#94a3b8'}
              onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Terms
            </Link>
            <span>•</span>
            <Link 
              to="/contact" 
              style={{ color: '#64748b', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#94a3b8'}
              onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Emergency Info
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
