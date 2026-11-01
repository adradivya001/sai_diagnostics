import { Heart, Activity, CalendarCheck, Users } from 'lucide-react';
import './TrustStrip.css';

const trustItems = [
  { 
    label: "Personalised Patient Care", 
    detail: "Dedicated attention for every mother & family.",
    icon: Heart
  },
  { 
    label: "Fetal Imaging Services", 
    detail: "Evidence-based diagnostic ultrasound.",
    icon: Activity
  },
  { 
    label: "Appointment Guidance", 
    detail: "Clear scan timing & preparation support.",
    icon: CalendarCheck
  },
  { 
    label: "Doctor Collaboration", 
    detail: "Close coordination with referring specialists.",
    icon: Users
  }
];

const TrustStrip = () => {
  return (
    <div className="hero-trust-floating-bar" id="trust-strip" aria-label="Core Patient Care Highlights">
      <div className="hero-trust-inner-pill">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="hero-trust-item">
              <div className="hero-trust-icon-box" aria-hidden="true">
                <Icon size={17} strokeWidth={2.2} />
              </div>
              <div className="hero-trust-text-group">
                <span className="hero-trust-title">{item.label}</span>
                <span className="hero-trust-desc">{item.detail}</span>
              </div>
              {idx < trustItems.length - 1 && (
                <div className="hero-trust-divider" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustStrip;
