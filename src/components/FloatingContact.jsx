import { Phone, Calendar, MapPin, ArrowUp } from 'lucide-react';
import { useAppointmentModal } from './AppointmentModal';
import './FloatingContact.css';

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001";

const FloatingContact = () => {
  const { openModal } = useAppointmentModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-contact-container" aria-label="Quick Actions">
      {/* 1. Appointment Pill Tab */}
      <button
        type="button"
        onClick={() => openModal()}
        className="floating-tab-item floating-tab-appointment"
        title="Book Scan Appointment Online"
        aria-label="Book appointment"
      >
        <span className="floating-tab-icon-wrap">
          <Calendar size={18} />
        </span>
        <span className="floating-tab-label">Appointment</span>
      </button>

      {/* 2. Direct Call Helpline Pill Tab */}
      <a 
        href="tel:+917799900248"
        className="floating-tab-item floating-tab-call"
        title="Call Helpline: +91 77999 00248"
        aria-label="Call clinic directly"
      >
        <span className="floating-tab-icon-wrap">
          <Phone size={18} />
        </span>
        <span className="floating-tab-label">Call</span>
      </a>

      {/* 3. Google Maps Clinic Directions Pill Tab */}
      <a 
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-tab-item floating-tab-maps"
        title="Find Clinic Directions on Google Maps"
        aria-label="View location on Google Maps"
      >
        <span className="floating-tab-icon-wrap">
          <MapPin size={18} />
        </span>
        <span className="floating-tab-label">Maps</span>
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
