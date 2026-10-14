import { Link } from 'react-router-dom';
import { Award, Star, Users, ShieldCheck } from 'lucide-react';
import CountUp from '../CountUp';
import './Hero.css';

const HomeHero = () => {
  return (
    <section className="hero-section">
      {/* Complete Screen Background Image */}
      <div className="hero-background-wrapper">
        <img
          src="/sai-diagnostics-building.png"
          alt="Sai Diagnostics & Fetal Medicine Center Building"
          className="hero-background-visual"
        />
        <div className="hero-background-overlay" />
      </div>

      {/* Hero Container with Flex Space-Between Layout */}
      <div className="container hero-container-layout">
        {/* Upper/Middle Content Group */}
        <div className="hero-content-group">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            ADVANCED DIAGNOSTICS • FETAL MEDICINE
          </div>

          <h1 className="hero-heading">
            <span className="hero-heading-line1">Expert Care for</span>
            <span className="hero-heading-line2">Every Little Beginning</span>
          </h1>

          <p className="hero-description">
            Advanced diagnostic services and specialized fetal medicine care, supporting mothers and families with clarity, confidence, and compassion.
          </p>

          <div className="hero-actions">
            <Link to="/doctors" className="hero-btn-primary">
              Book an Appointment
            </Link>
            <Link to="/services" className="hero-btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Anchored Trust Strip Container */}
        <div className="hero-trust-container">
          <div className="hero-trust-card">
            <div className="hero-trust-item">
              <div className="hero-trust-icon-box">
                <Award size={18} strokeWidth={2} />
              </div>
              <div className="hero-trust-text-group">
                <div className="hero-trust-title">
                  <CountUp end={33} suffix="+" /> Years
                </div>
                <div className="hero-trust-subtitle">Clinical Excellence</div>
              </div>
            </div>

            <div className="hero-trust-item">
              <div className="hero-trust-icon-box">
                <Star size={18} strokeWidth={2} />
              </div>
              <div className="hero-trust-text-group">
                <div className="hero-trust-title">
                  <CountUp end={4.9} decimals={1} suffix="★" /> Rating
                </div>
                <div className="hero-trust-subtitle">920+ Patient Reviews</div>
              </div>
            </div>

            <div className="hero-trust-item">
              <div className="hero-trust-icon-box">
                <Users size={18} strokeWidth={2} />
              </div>
              <div className="hero-trust-text-group">
                <div className="hero-trust-title">
                  <CountUp end={45} suffix="K+" /> Trusted
                </div>
                <div className="hero-trust-subtitle">Families & Patients</div>
              </div>
            </div>

            <div className="hero-trust-item">
              <div className="hero-trust-icon-box">
                <ShieldCheck size={18} strokeWidth={2} />
              </div>
              <div className="hero-trust-text-group">
                <div className="hero-trust-title">Certified Care</div>
                <div className="hero-trust-subtitle">Fetal Medicine Center</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
