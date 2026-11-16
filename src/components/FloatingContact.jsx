import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import './FloatingContact.css';

const PHONE_NUMBER = "+917799900248";
const WHATSAPP_URL = "https://wa.me/917799900248?text=Hello%20Sai%20Diagnostics,%20I%20would%20like%20to%20enquire%20about%20an%20appointment";
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001";

/**
 * FloatingActionButtons (FABs)
 * Stack of 3 action buttons (Call, WhatsApp, Maps) mounted globally,
 * pinned vertically dead-center on the right viewport edge on both desktop & mobile.
 */
const FloatingContact = () => {
  return (
    <aside className="fab-stack-container" aria-label="Quick Actions">
      {/* 1. Call 24/7 Helpline */}
      <div className="fab-item-group">
        <div className="fab-tooltip">Call +91 77999 00248</div>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="fab-circle-btn fab-btn-call"
          aria-label="Call Sai Diagnostics: +91 77999 00248"
        >
          <Phone size={19} className="fab-icon" />
        </a>
        <span className="fab-badge-label">Call</span>
      </div>

      {/* 2. WhatsApp Desk */}
      <div className="fab-item-group">
        <div className="fab-tooltip">Chat on WhatsApp</div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-circle-btn fab-btn-whatsapp"
          aria-label="Chat with Sai Diagnostics on WhatsApp"
        >
          <MessageCircle size={19} className="fab-icon" />
        </a>
        <span className="fab-badge-label">WhatsApp</span>
      </div>

      {/* 3. Google Maps Directions */}
      <div className="fab-item-group">
        <div className="fab-tooltip">Get Google Maps Directions</div>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-circle-btn fab-btn-maps"
          aria-label="Find Sai Diagnostics on Google Maps"
        >
          <MapPin size={19} className="fab-icon" />
        </a>
        <span className="fab-badge-label">Maps</span>
      </div>
    </aside>
  );
};

export default FloatingContact;
