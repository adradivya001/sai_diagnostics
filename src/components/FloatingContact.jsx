import { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, MapPin, ArrowUp, ChevronLeft } from 'lucide-react';
import { useAppointmentModal } from './AppointmentModal';
import './FloatingContact.css';

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001";

const FloatingContact = () => {
  const { openModal } = useAppointmentModal();
  const [activeTab, setActiveTab] = useState(null); // 'appointment' | 'call' | 'maps' | null
  const containerRef = useRef(null);

  // Close opened label if user clicks anywhere outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveTab(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle behavior: First click unfolds the label; clicking again or while unfolded executes the action
  const handleAppointmentClick = (e) => {
    e.stopPropagation();
    if (activeTab === 'appointment') {
      openModal();
    } else {
      setActiveTab('appointment');
    }
  };

  const handleCallClick = (e) => {
    e.stopPropagation();
    if (activeTab !== 'call') {
      e.preventDefault();
      setActiveTab('call');
    }
    // If already active, the native href="tel:..." triggers automatically
  };

  const handleMapsClick = (e) => {
    e.stopPropagation();
    if (activeTab !== 'maps') {
      e.preventDefault();
      setActiveTab('maps');
    }
    // If already active, opening target="_blank" triggers automatically
  };

  return (
    <div className="floating-contact-container" ref={containerRef} aria-label="Quick Actions">
      {/* 1. Appointment Tab */}
      <button
        type="button"
        onClick={handleAppointmentClick}
        className={`floating-tab-item floating-tab-appointment ${activeTab === 'appointment' ? 'is-active' : ''}`}
        title="Book Scan Appointment Online"
        aria-label="Book appointment"
      >
        <span className="floating-tab-icon-wrap">
          <Calendar size={19} />
        </span>
        <span className="floating-tab-label">Appointment</span>
      </button>

      {/* 2. Direct Call Helpline Tab */}
      <a 
        href="tel:+917799900248"
        onClick={handleCallClick}
        className={`floating-tab-item floating-tab-call ${activeTab === 'call' ? 'is-active' : ''}`}
        title="Call Helpline: +91 77999 00248"
        aria-label="Call clinic directly"
      >
        <span className="floating-tab-icon-wrap">
          <Phone size={19} />
        </span>
        <span className="floating-tab-label">Call Us</span>
      </a>

      {/* 3. Google Maps Clinic Directions Tab */}
      <a 
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleMapsClick}
        className={`floating-tab-item floating-tab-maps ${activeTab === 'maps' ? 'is-active' : ''}`}
        title="Find Clinic Directions on Google Maps"
        aria-label="View location on Google Maps"
      >
        <span className="floating-tab-icon-wrap">
          <MapPin size={19} />
        </span>
        <span className="floating-tab-label">Directions</span>
      </a>

      {/* 4. Scroll To Top Button */}
      <button 
        onClick={scrollToTop}
        className="floating-tab-item floating-tab-top"
        title="Scroll to Top"
        aria-label="Scroll back to top of page"
        type="button"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
};

export default FloatingContact;
