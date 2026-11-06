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
      {/* 1. Appointment Form Modal Trigger FAB */}
      <button
        type="button"
        onClick={() => openModal()}
        className="floating-fab-btn floating-fab-appointment"
        title="Book Appointment"
        aria-label="Book scan appointment online"
      >
        <Calendar size={21} />
        <span className="floating-fab-tooltip">Book Appointment</span>
      </button>

      {/* 2. Direct Call Helpline FAB */}
      <a 
        href="tel:+917799900248"
        className="floating-fab-btn floating-fab-call"
        title="Call Helpline: +91 77999 00248"
        aria-label="Call clinic helpline directly"
      >
        <Phone size={21} />
        <span className="floating-fab-tooltip">Call Clinic (+91 77999 00248)</span>
      </a>

      {/* 3. Google Maps Clinic Directions FAB */}
      <a 
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-fab-btn floating-fab-maps"
        title="Get Directions on Google Maps"
        aria-label="Open clinic location on Google Maps"
      >
        <MapPin size={21} />
        <span className="floating-fab-tooltip">Clinic Location & Directions</span>
      </a>

      {/* 4. Scroll to Top Floating Button */}
      <button 
        onClick={scrollToTop}
        className="floating-fab-btn floating-fab-top"
        title="Scroll to Top"
        aria-label="Scroll back to top of page"
        type="button"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default FloatingContact;
