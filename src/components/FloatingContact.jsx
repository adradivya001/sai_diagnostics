import { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, MapPin, ArrowUp } from 'lucide-react';
import { useAppointmentModal } from './AppointmentModal';
import './FloatingContact.css';

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001";

const FloatingContact = () => {
  const { openModal } = useAppointmentModal();
  const [expandedId, setExpandedId] = useState(null); // 'appointment' | 'call' | 'location' | 'top' | null
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef(null);

  // Monitor scroll depth for the Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Collapse expanded FAB if user clicks anywhere outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setExpandedId(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleAppointmentClick = (e) => {
    e.stopPropagation();
    if (expandedId === 'appointment') {
      openModal();
      setExpandedId(null);
    } else {
      setExpandedId('appointment');
    }
  };

  const handleCallClick = (e) => {
    e.stopPropagation();
    if (expandedId !== 'call') {
      e.preventDefault();
      setExpandedId('call');
    }
    // If already expanded, native href="tel:+917799900248" initiates the call
  };

  const handleLocationClick = (e) => {
    e.stopPropagation();
    if (expandedId !== 'location') {
      e.preventDefault();
      setExpandedId('location');
    }
    // If already expanded, target="_blank" opens Google Maps
  };

  const handleScrollTopClick = (e) => {
    e.stopPropagation();
    if (expandedId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setExpandedId(null);
    } else {
      setExpandedId('top');
    }
  };

  return (
    <aside className="fab-stack-container" ref={containerRef} aria-label="Quick Actions">
      {/* 1. Calendar – Book Appointment */}
      <div className="fab-slot">
        <button
          type="button"
          onClick={handleAppointmentClick}
          className={`fab-btn fab-btn-appointment ${expandedId === 'appointment' ? 'is-expanded' : ''}`}
          aria-label="Book Appointment"
          title={expandedId === 'appointment' ? 'Click to open booking form' : 'Book Appointment'}
        >
          <span className="fab-label">Book Appointment</span>
          <span className="fab-icon-circle">
            <Calendar size={20} />
          </span>
        </button>
      </div>

      {/* 2. Phone – Call Us */}
      <div className="fab-slot">
        <a
          href="tel:+917799900248"
          onClick={handleCallClick}
          className={`fab-btn fab-btn-call ${expandedId === 'call' ? 'is-expanded' : ''}`}
          aria-label="Call Us: +91 77999 00248"
          title={expandedId === 'call' ? 'Click to dial +91 77999 00248' : 'Call Us'}
        >
          <span className="fab-label">Call Us</span>
          <span className="fab-icon-circle">
            <Phone size={20} />
          </span>
        </a>
      </div>

      {/* 3. Location – Find Us */}
      <div className="fab-slot">
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLocationClick}
          className={`fab-btn fab-btn-location ${expandedId === 'location' ? 'is-expanded' : ''}`}
          aria-label="Find Us on Google Maps"
          title={expandedId === 'location' ? 'Click to open Google Maps directions' : 'Find Us'}
        >
          <span className="fab-label">Find Us</span>
          <span className="fab-icon-circle">
            <MapPin size={20} />
          </span>
        </a>
      </div>

      {/* 4. Back to Top – Scroll to Top (Smoothly appears on scroll) */}
      <div className={`fab-slot fab-slot-top ${showScrollTop ? 'is-visible' : ''}`}>
        <button
          type="button"
          onClick={handleScrollTopClick}
          className={`fab-btn fab-btn-top ${expandedId === 'top' ? 'is-expanded' : ''}`}
          aria-label="Scroll to Top"
          title={expandedId === 'top' ? 'Click to scroll to top' : 'Scroll to Top'}
        >
          <span className="fab-label">Scroll to Top</span>
          <span className="fab-icon-circle">
            <ArrowUp size={20} />
          </span>
        </button>
      </div>
    </aside>
  );
};

export default FloatingContact;
