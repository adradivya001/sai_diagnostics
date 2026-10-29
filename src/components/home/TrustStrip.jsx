import { Heart, Activity, CalendarCheck, Users } from 'lucide-react';
import './TrustStrip.css';

const trustItems = [
  { 
    label: "Personalised Patient Care", 
    detail: "Dedicated attention for every mother & family",
    icon: Heart
  },
  { 
    label: "Fetal Imaging Services", 
    detail: "Evidence-based diagnostic ultrasound",
    icon: Activity
  },
  { 
    label: "Appointment Guidance", 
    detail: "Clear scan timing & preparation support",
    icon: CalendarCheck
  },
  { 
    label: "Doctor Collaboration", 
    detail: "Close coordination with referring specialists",
    icon: Users
  }
];

const TrustStrip = () => {
  return (
    <div className="trust-strip-horizontal-bar" aria-label="Core Patient Care Values">
      <div className="container" style={{ maxWidth: '1240px' }}>
        <div className="trust-strip-row">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="trust-strip-segment"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="trust-strip-icon-circle" aria-hidden="true">
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <div className="trust-strip-content">
                  <span className="trust-strip-label">{item.label}</span>
                  <span className="trust-strip-sub">{item.detail}</span>
                </div>
                {idx < trustItems.length - 1 && (
                  <div className="trust-strip-divider" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
