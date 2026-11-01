import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { useAppointmentModal } from '../AppointmentModal';
import TrustStrip from './TrustStrip';
import './PregnancyJourney.css';

// Two authentic maternity illustrations
import stage1Img from '../../../Serene Pastel Nursery Maternity Portrait.png';
import stage2Img from '../../../Tender Nursery Mother and Baby Portrait.png';

const PregnancyJourneyHero = () => {
  const { openModal } = useAppointmentModal();
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(1);

  // Preload both images in browser memory to eliminate loading delay
  useEffect(() => {
    [stage1Img, stage2Img].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Seamless, native scroll-linked stage transition
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = scrolled / totalScrollable;

      // Transition to Stage 2 at 35% scroll through the hero container
      if (progress >= 0.35) {
        setActiveStage(2);
      } else {
        setActiveStage(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = useCallback((e) => {
    e.preventDefault();
    const nextSection = document.getElementById('about-centre') || document.querySelector('.home-about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="pj-scroll-container"
      aria-label="Sai Diagnostics & Fetal Medicine Centre"
    >
      <section className="pj-sticky-viewport">
        {/* 1. HERO BACKGROUND ARTWORK CONTAINER (COMMON CONTAINER WITH OVERFLOW HIDDEN) */}
        <div className="pj-hero-bg-stage" aria-hidden="true">
          {/* Stage 1 Image: Serene Pastel Nursery Maternity Portrait */}
          <div className={`pj-image-layer pj-layer-1 ${activeStage === 1 ? 'active' : 'inactive'}`}>
            <img 
              src={stage1Img} 
              alt="Sai Diagnostics & Fetal Medicine Centre - Expert Fetal Care"
              className="pj-hero-bg-art"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Stage 2 Image: Tender Nursery Mother and Baby Portrait */}
          <div className={`pj-image-layer pj-layer-2 ${activeStage === 2 ? 'active' : 'inactive'}`}>
            <img 
              src={stage2Img} 
              alt="Sai Diagnostics & Fetal Medicine Centre - A Beautiful Beginning"
              className="pj-hero-bg-art"
              loading="eager"
            />
          </div>
        </div>

        {/* 2. HERO CONTENT: EDITORIAL HEALTHCARE LAYOUT */}
        <div className="pj-content-container">
          <div className="pj-narrative-col">

            {/* ============================================================= */}
            {/* STAGE 01 CONTENT                                              */}
            {/* ============================================================= */}
            <div className={`pj-stage-slide ${activeStage === 1 ? 'active' : 'hidden-above'}`}>
              {/* Small label with live blinking status beacon */}
              <div className="pj-eyebrow pj-eyebrow-burgundy">
                <span className="pj-blinking-beacon" aria-hidden="true">
                  <span className="pj-beacon-ping" />
                  <span className="pj-beacon-core" />
                </span>
                SAI DIAGNOSTICS & FETAL MEDICINE CENTRE
              </div>

              {/* Main heading with blinking cursor placeholder */}
              <h1 className="pj-heading">
                Expert Fetal Care for a <span className="pj-heading-burgundy">Healthier Tomorrow</span>
                <span className="pj-blinking-cursor" aria-hidden="true">|</span>
              </h1>

              {/* Small highlight with blinking starlet placeholder */}
              <div className="pj-hero-highlight-badge">
                <span className="pj-blinking-starlet" aria-hidden="true">✦</span>
                <Sparkles size={14} className="pj-highlight-sparkle" />
                <span>Specialised Fetal Medicine | Advanced Pregnancy Imaging</span>
              </div>

              {/* Supporting description */}
              <p className="pj-description">
                Advanced fetal imaging, detailed pregnancy scans and personalised medical guidance to support you and your baby's development at every important stage.
              </p>

              {/* Buttons */}
              <div className="pj-actions">
                <button 
                  onClick={() => openModal()} 
                  className="pj-btn-primary"
                  type="button"
                >
                  <CalendarCheck size={16} /> Book an Appointment
                </button>
                <Link to="/services" className="pj-btn-secondary">
                  Explore Our Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* ============================================================= */}
            {/* STAGE 02 CONTENT                                              */}
            {/* ============================================================= */}
            <div className={`pj-stage-slide ${activeStage === 2 ? 'active' : 'hidden-below'}`}>
              {/* Small label with live blinking status beacon */}
              <div className="pj-eyebrow pj-eyebrow-burgundy">
                <span className="pj-blinking-beacon" aria-hidden="true">
                  <span className="pj-beacon-ping" />
                  <span className="pj-beacon-core" />
                </span>
                SAI DIAGNOSTICS & FETAL MEDICINE CENTRE
              </div>

              {/* Main heading with blinking cursor placeholder */}
              <h2 className="pj-heading">
                A Beautiful Beginning Starts with <span className="pj-heading-burgundy">Expert Care</span>
                <span className="pj-blinking-cursor" aria-hidden="true">|</span>
              </h2>

              {/* Small highlight with blinking starlet placeholder */}
              <div className="pj-hero-highlight-badge">
                <span className="pj-blinking-starlet" aria-hidden="true">✦</span>
                <Sparkles size={14} className="pj-highlight-sparkle" />
                <span>Precision in Diagnosis | Care for Every Family</span>
              </div>

              {/* Supporting description */}
              <p className="pj-description">
                Every pregnancy is special. We are committed to providing accurate diagnostic insights, thoughtful guidance and compassionate care for mothers and their little ones.
              </p>

              {/* Buttons */}
              <div className="pj-actions">
                <button 
                  onClick={() => openModal()} 
                  className="pj-btn-primary"
                  type="button"
                >
                  <CalendarCheck size={16} /> Book an Appointment
                </button>
                <a 
                  href="#about-centre"
                  onClick={scrollToAbout} 
                  className="pj-btn-secondary"
                >
                  <Building2 size={16} /> Discover Our Centre
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3. FLOATING HEALTHCARE HIGHLIGHTS PILL */}
        <TrustStrip />
      </section>
    </div>
  );
};

export default PregnancyJourneyHero;
