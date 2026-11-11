import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ChevronDown, Stethoscope, Activity, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppointmentModal } from './AppointmentModal';
import { FETAL_MEDICINE_SCANS, GENERAL_DIAGNOSTIC_SCANS } from '../data/services';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const isNavigatingRef = useRef(false);
  const { openModal } = useAppointmentModal();

  const isHome = location.pathname === '/';
  const isServicesActive = location.pathname.startsWith('/services');

  // Track scroll position to toggle header scrolled appearance
  useEffect(() => {
    const handleScroll = () => {
      // Threshold to turn on blurred frosted background and clear active pill
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  // Scroll-spy: Track current visible homepage section based on scroll position
  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const sections = [
      { id: 'location', navKey: 'location' },
      { id: 'appointment-cta', navKey: 'location' },
      { id: 'patient-journey', navKey: 'location' },
      { id: 'why-choose-us', navKey: 'technology' },
      { id: 'technology', navKey: 'technology' },
      { id: 'services', navKey: 'services' },
      { id: 'founder', navKey: 'founder' },
      { id: 'about-centre', navKey: 'about-centre' }
    ];

    const updateActiveSection = () => {
      if (isNavigatingRef.current) return;

      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // When near the top, highlight Home
      if (scrollY < 180) {
        setActiveSection('hero');
        return;
      }

      // If scrolled near bottom of page, highlight Contact
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight >= docHeight - 120) {
        setActiveSection('location');
        return;
      }

      // Target trigger line: 30% from the top of viewport (where user is reading)
      const scanLine = scrollY + 160;

      for (const item of sections) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scanLine >= top) {
            setActiveSection(item.navKey);
            return;
          }
        }
      }

      setActiveSection('hero');
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [isHome]);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileMenuOpen]);

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

  // Smooth scroll handler for homepage section links
  const scrollToTargetSection = useCallback((sectionId) => {
    isNavigatingRef.current = true;
    setActiveSection(sectionId);

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const navbarHeight = 90;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);
  }, []);

  const handleNavClick = (e, link) => {
    if (link.isDropdown) return;

    if (link.path === '/') {
      if (isHome) {
        e.preventDefault();
        isNavigatingRef.current = true;
        setActiveSection('hero');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 800);
      }
      setMobileMenuOpen(false);
      return;
    }

    // Direct page navigation for each route (/about, /doctors, /services, /facilities, /contact)
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', sectionId: 'hero' },
    { name: 'About Us', path: '/about', sectionId: 'about-centre' },
    { name: 'Doctor', path: '/doctors', sectionId: 'founder' },
    { name: 'Services', path: '/services', sectionId: 'services', isDropdown: true },
    { name: 'Facilities', path: '/facilities', sectionId: 'technology' },
    { name: 'Contact', path: '/contact', sectionId: 'location' }
  ];

  // Helper to determine if a nav link is visually active
  const isLinkActive = (link) => {
    if (isHome) {
      if (link.path === '/' && activeSection === 'hero') return true;
      if (link.path === '/services' && activeSection === 'services') return true;
      if (link.path === '/facilities' && activeSection === 'technology') return true;
      if (link.sectionId && activeSection === link.sectionId) return true;
      if (link.path === '/about' && (activeSection === 'founder-message' || activeSection === 'about-centre')) return true;
      if (link.path === '/doctors' && (activeSection === 'founder' || activeSection === 'why-choose-us')) return true;
      if (link.path === '/contact' && (activeSection === 'location' || activeSection === 'appointment-cta' || activeSection === 'patient-journey' || activeSection === 'faq')) return true;
      return false;
    }
    if (link.isDropdown) return isServicesActive;
    return location.pathname === link.path;
  };

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
                      className={`navbar-link-item ${isLinkActive(link) ? 'active' : ''}`}
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

            const active = isLinkActive(link);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`navbar-link-item ${active ? 'active' : ''}`}
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
                    className={`navbar-link-item ${isLinkActive(link) ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
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
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            );
          }

          const active = isLinkActive(link);
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleNavClick(e, link)}
              className={`navbar-link-item ${active ? 'active' : ''}`}
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
