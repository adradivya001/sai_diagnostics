import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Doctor', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <img 
            src="/maternal-fetal-medicine-logo.png" 
            alt="Sai Diagnostics & Fetal Medicine Center" 
            className="navbar-logo-img"
          />
        </Link>
        
        {/* Center Desktop Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isCurrent = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link-item ${isCurrent ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Desktop Actions */}
        <div className="navbar-actions">
          <a href="tel:+917799900248" className="navbar-phone-btn">
            <Phone size={15} />
            +91 7799900248
          </a>
          <Link to="/doctors" className="navbar-cta-btn">
            <Calendar size={15} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => {
          const isCurrent = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link-item ${isCurrent ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="navbar-mobile-actions">
          <a href="tel:+917799900248" className="navbar-phone-btn">
            <Phone size={15} />
            +91 7799900248
          </a>
          <Link to="/doctors" className="navbar-cta-btn">
            <Calendar size={15} />
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
