import { Link } from 'react-router-dom';
import { Calendar, Phone, MapPin, Navigation } from 'lucide-react';
import { useAppointmentModal } from './AppointmentModal';
import './Footer.css';

const Footer = () => {
  const { openModal } = useAppointmentModal();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Doctor', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const confirmedServices = [
    { name: 'NT Scan', path: '/services' },
    { name: 'TIFFA / Anomaly Scan', path: '/services' },
    { name: 'Obstetric Doppler', path: '/services' },
    { name: 'Fetal Imaging', path: '/services' }
  ];

  return (
    <footer className="site-footer">
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* 4-Column Layout */}
        <div className="site-footer-grid">
          
          {/* Column 1 — Centre Information */}
          <div>
            <Link to="/" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '1rem' }}>
              <img 
                src="/maternal-fetal-medicine-logo.png" 
                alt="Sai Diagnostics & Fetal Medicine Center" 
                style={{ 
                  height: '56px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  display: 'block'
                }} 
              />
            </Link>

            <p style={{
              color: 'var(--text-charcoal)',
              fontSize: '0.92rem',
              lineHeight: 1.65,
              margin: '0.25rem 0 0',
              maxWidth: '320px'
            }}>
              Dedicated diagnostic services and personalised care to support patients and families through their healthcare journey.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-nav-link">
                    <span className="footer-bullet">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-link-list">
              {confirmedServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="footer-nav-link">
                    <span className="footer-bullet">›</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            
            {/* Address */}
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>
                9th Cross Road, Sai Nagar, Anantapur, Andhra Pradesh 515001.
              </span>
            </div>

            {/* Directions Link */}
            <div>
              <a
                href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-directions-link"
              >
                <Navigation size={14} /> Get Directions →
              </a>
            </div>

            {/* Phone */}
            <div className="footer-contact-item" style={{ marginBottom: '1.25rem' }}>
              <Phone size={18} className="footer-contact-icon" />
              <a href="tel:+917799900248" className="footer-contact-link" style={{ fontWeight: 600 }}>
                +91 77999 00248
              </a>
            </div>

            {/* Prominent Appointment CTA */}
            <button
              onClick={() => openModal()}
              type="button"
              className="footer-appointment-btn"
            >
              <Calendar size={16} />
              <span>Book an Appointment</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 Sai Diagnostics and Fetal Medicine Centre. All rights reserved.
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            Personalised Maternal-Fetal Care & Diagnostic Imaging
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
