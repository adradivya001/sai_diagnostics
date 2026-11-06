import { Link } from 'react-router-dom';
import { Calendar, Phone, MapPin, Navigation, Clock, ArrowUp } from 'lucide-react';
import { useAppointmentModal } from './AppointmentModal';
import { HalftoneWordmarkFooter } from './ui/halftone-wordmark-footer';
import './Footer.css';

const Footer = () => {
  const { openModal } = useAppointmentModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Doctor', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' }
  ];

  const confirmedServices = [
    { name: 'NT Scan / Screening', path: '/services' },
    { name: 'TIFFA / Anomaly Scan', path: '/services' },
    { name: 'Obstetric Doppler', path: '/services' },
    { name: 'Fetal Echocardiography', path: '/services' }
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* 4-Column Layout */}
        <div className="site-footer-grid">
          
          {/* Column 1 — Centre Information */}
          <div>
            <Link to="/" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <img 
                src="/maternal-fetal-medicine-logo.png" 
                alt="Sai Diagnostics & Fetal Medicine Center" 
                className="site-footer-logo-img"
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

          {/* Column 4 — Contact Us & Interactive Map Split */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact Us</h4>

            <div className="footer-contact-split">
              {/* Left: Existing Contact Details */}
              <div className="footer-contact-info">
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
                <div className="footer-contact-item" style={{ marginBottom: '0.85rem' }}>
                  <Phone size={18} className="footer-contact-icon" />
                  <a href="tel:+917799900248" className="footer-contact-link" style={{ fontWeight: 600 }}>
                    +91 77999 00248
                  </a>
                </div>

                {/* Operating Hours */}
                <div className="footer-contact-item" style={{ marginBottom: '1.25rem' }}>
                  <Clock size={18} className="footer-contact-icon" />
                  <span>
                    Mon – Sat: 8:30 AM – 7:00 PM<br />
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Sunday: Closed</span>
                  </span>
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

              {/* Right: Verified Interactive Google Map */}
              <div className="footer-map-wrapper">
                <iframe
                  title="Sai Diagnostics and Fetal Medicine Centre Location Map"
                  src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="footer-map-iframe"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full-Bleed Halftone Wordmark Canvas Banner: "sai diagnostics" */}
      <div className="footer-halftone-banner">
        <HalftoneWordmarkFooter
          wordmark="sai diagnostics"
          height="clamp(90px, 10.5vw, 150px)"
          dotGap={6}
          radius={85}
          crop={0.2}
          grain={0.4}
          interactive={true}
          palette={{
            background: "#0D1728",
            ink: "#B2CEE2",
            warm: "#E9762B",
          }}
          showTopColumns={false}
        />
      </div>

      {/* Bottom Copyright & Legal Strip with Back-to-Top Button */}
      <div className="footer-dark-strip">
        <div className="footer-dark-strip-container">
          <div className="footer-copyright-text">
            © 2026 Sai Diagnostics. All rights reserved.
          </div>

          <div className="footer-legal-links-row">
            <Link to="/about">Privacy Policy</Link>
            <span className="footer-legal-bullet">•</span>
            <Link to="/about">Terms & Conditions</Link>
            <span className="footer-legal-bullet">•</span>
            <Link to="/contact">Sitemap</Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top-btn"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
