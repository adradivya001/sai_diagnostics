import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Layers, MapPin } from 'lucide-react';
import { useAppointmentModal } from './AppointmentModal';
import './MobileBottomBar.css';

const MobileBottomBar = () => {
  const location = useLocation();
  const { openModal } = useAppointmentModal();

  return (
    <nav className="mobile-bottom-bar" aria-label="Quick Mobile Actions">
      {/* 1. Direct Call Link */}
      <a 
        href="tel:+917799900248" 
        className="mobile-bar-item"
        aria-label="Call clinic directly"
      >
        <div className="mobile-bar-icon-wrap" style={{ color: '#2589C4' }}>
          <Phone size={20} />
        </div>
        <span className="mobile-bar-label">Call Us</span>
      </a>

      {/* 2. Services Overview */}
      <Link 
        to="/services" 
        className={`mobile-bar-item ${location.pathname === '/services' ? 'active' : ''}`}
        aria-label="View diagnostic scan services"
      >
        <div className="mobile-bar-icon-wrap">
          <Layers size={20} />
        </div>
        <span className="mobile-bar-label">Scans</span>
      </Link>

      {/* 3. Center Highlight CTA: Book Appointment */}
      <button 
        type="button"
        onClick={() => openModal()}
        className="mobile-bar-item mobile-bar-item-cta"
        aria-label="Book scan appointment online"
      >
        <div className="mobile-bar-icon-wrap">
          <Calendar size={20} />
        </div>
        <span className="mobile-bar-label">Book Scan</span>
      </button>

      {/* 4. Find Clinic & Route */}
      <Link 
        to="/contact" 
        className={`mobile-bar-item ${location.pathname === '/contact' ? 'active' : ''}`}
        aria-label="Find clinic address and directions"
      >
        <div className="mobile-bar-icon-wrap">
          <MapPin size={20} />
        </div>
        <span className="mobile-bar-label">Location</span>
      </Link>
    </nav>
  );
};

export default MobileBottomBar;
