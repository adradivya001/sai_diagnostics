import { Award, Star, Users, ShieldCheck } from 'lucide-react';
import './TrustStrip.css';

const trustItems = [
  { 
    label: "12+ Years", 
    detail: "Lead Radiologist Experience",
    icon: Award,
    theme: "burgundy"
  },
  { 
    label: "4.9★", 
    detail: "Verified Patient Reviews",
    icon: Star,
    theme: "blue"
  },
  { 
    label: "12K+", 
    detail: "Mothers & Families Served",
    icon: Users,
    theme: "burgundy"
  },
  { 
    label: "GE Voluson", 
    detail: "High-Definition Fetal Ultrasound",
    icon: ShieldCheck,
    theme: "blue"
  }
];

const TrustStrip = () => {
  return (
    <div className="hero-trust-strip-bar" aria-label="Trust & Clinical Excellence Metrics">
      <div className="trust-strip-continuous-float">
        <div className="trust-strip-container">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="trust-strip-item">
                <div className={`trust-item-icon-box trust-item-icon-${item.theme}`} aria-hidden="true">
                  <Icon size={16} strokeWidth={2.2} />
                </div>
                <div className="trust-item-text">
                  <span className="trust-item-title">{item.label}</span>
                  <span className="trust-item-detail">{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
