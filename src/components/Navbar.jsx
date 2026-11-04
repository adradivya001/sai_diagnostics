import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ChevronDown, Stethoscope, Activity, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppointmentModal } from './AppointmentModal';
import { FETAL_MEDICINE_SCANS, GENERAL_DIAGNOSTIC_SCANS } from '../data/services';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    const handleScroll = () => {
      // On the home page, remain completely transparent throughout all 3 hero section stages
      // Only switch to frosted/scrolled navbar after scrolling past the full hero section
      const threshold = location.pathname === '/' ? (window.innerHeight - 80) : 10;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const isHome = location.pathname === '/';
  const isServicesActive = location.pathname.startsWith('/services');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Doctor', path: '/doctors' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar ${isHome ? 'navbar-hero' : ''} ${scrolled ? 'scrolled' : ''}`}>
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
            if (link.isDropdown) {
              return (
                <div
                  key={link.path}
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ position: 'relative' }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Link
                      to="/services"
                      className={`navbar-link-item ${isServicesActive ? 'active' : ''}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span>Services</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setServicesDropdownOpen(!servicesDropdownOpen);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          display: 'inline-flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                          color: 'inherit'
                        }}
                        aria-label="Toggle services menu"
                        aria-expanded={servicesDropdownOpen}
                      >
                        <ChevronDown
                          size={13}
                          style={{
                            transition: 'transform 0.2s ease',
                            transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        />
                      </button>
                    </Link>
                  </div>

                  {/* Mega Dropdown Panel (Matching Screenshot 1) */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="navbar-mega-dropdown-wrapper"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="navbar-mega-dropdown-card"
                        >
                          <div className="navbar-mega-grid">
                            
                            {/* Column 1: Fetal Medicine Scans */}
                            <div className="navbar-mega-col">
                              <div className="navbar-mega-header">
                                <div className="navbar-mega-icon-box bg-rose">
                                  <Stethoscope size={15} />
                                </div>
                                <h3 className="navbar-mega-title">
                                  Fetal Medicine Scans
                                </h3>
                              </div>

                              <ul className="navbar-mega-list">
                                {FETAL_MEDICINE_SCANS.map((scan) => (
                                  <li key={scan.slug}>
                                    <Link
                                      to={`/services/${scan.slug}`}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      className="navbar-mega-item"
                                    >
                                      <div className="navbar-mega-item-left">
                                        <img
                                          src={scan.image || "/anomaly-scan.jpg"}
                                          alt={scan.name}
                                          className="navbar-mega-thumb"
                                          onError={(e) => {
                                            e.currentTarget.src = "/anomaly-scan.jpg";
                                          }}
                                        />
                                        <span className="navbar-mega-item-name">
                                          {scan.name}
                                        </span>
                                      </div>
                                      <ArrowRight size={13} className="navbar-mega-arrow" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 2: General & Specialized Scans */}
                            <div className="navbar-mega-col navbar-mega-col-right">
                              <div>
                                <div className="navbar-mega-header">
                                  <div className="navbar-mega-icon-box bg-teal">
                                    <Activity size={15} />
                                  </div>
                                  <h3 className="navbar-mega-title">
                                    General &amp; Specialized Scans
                                  </h3>
                                </div>

                                <ul className="navbar-mega-list">
                                  {GENERAL_DIAGNOSTIC_SCANS.map((scan) => (
                                    <li key={scan.slug}>
                                      <Link
                                        to={`/services/${scan.slug}`}
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="navbar-mega-item"
                                      >
                                        <div className="navbar-mega-item-left">
                                          <img
                                            src={scan.image || "/ultrasound.jpg"}
                                            alt={scan.name}
                                            className="navbar-mega-thumb"
                                            onError={(e) => {
                                              e.currentTarget.src = "/ultrasound.jpg";
                                            }}
                                          />
                                          <span className="navbar-mega-item-name">
                                            {scan.name}
                                          </span>
                                        </div>
                                        <ArrowRight size={13} className="navbar-mega-arrow" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Bottom Guidance Card (Matching Screenshot 1) */}
                              <div className="navbar-mega-guidance-card">
                                <div>
                                  <div className="guidance-title">Need Doctor Guidance?</div>
                                  <div className="guidance-subtitle">Select any scan to view full detail</div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setServicesDropdownOpen(false);
                                    openModal();
                                  }}
                                  className="guidance-btn"
                                >
                                  Book Slot
                                </button>
                              </div>

                            </div>

                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

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
          <a href="tel:+917799900248" className="navbar-phone-btn" title="Call Sai Diagnostics directly">
            <Phone size={15} className="phone-icon-wiggle" />
            +91 7799900248
          </a>
          <button 
            onClick={() => openModal()} 
            className="navbar-cta-btn"
            style={{ cursor: 'pointer' }}
            type="button"
            title="Book Scan Appointment Online"
          >
            <Calendar size={15} className="calendar-icon-pulse" />
            Book Appointment
          </button>
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
          if (link.isDropdown) {
            return (
              <div key={link.path} className="navbar-mobile-services-wrapper">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Link
                    to="/services"
                    className={`navbar-link-item ${isServicesActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services (All)
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '8px 14px',
                      cursor: 'pointer',
                      color: '#AD2348'
                    }}
                    aria-label="Expand services"
                  >
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="navbar-mobile-sublist">
                    <div style={{ padding: '4px 10px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#AD2348' }}>
                      Fetal Medicine Scans
                    </div>
                    {FETAL_MEDICINE_SCANS.slice(0, 5).map((scan) => (
                      <Link
                        key={scan.slug}
                        to={`/services/${scan.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="navbar-mobile-subitem"
                      >
                        • {scan.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="navbar-mobile-subitem"
                      style={{ fontWeight: 700, color: '#AD2348' }}
                    >
                      View All 30 Services →
                    </Link>
                  </div>
                )}
              </div>
            );
          }

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
            <Phone size={15} className="phone-icon-wiggle" />
            +91 7799900248
          </a>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              openModal();
            }} 
            className="navbar-cta-btn"
            style={{ cursor: 'pointer', width: '100%', justifyContent: 'center' }}
            type="button"
          >
            <Calendar size={15} className="calendar-icon-pulse" />
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
