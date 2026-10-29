import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  CalendarCheck, 
  ArrowRight, 
  ChevronDown 
} from 'lucide-react';
import { useAppointmentModal } from '../AppointmentModal';
import PregnancyJourneyCanvas from './PregnancyJourneyCanvas';
import './PregnancyJourney.css';

// Direct paths to the user's three illustration assets
import stage1Img from '../../../Serene Maternity Garden Portrait.png';
import stage2Img from '../../../Dreamy Pastel Maternity Portrait.png';
import stage3Img from '../../../Dreamy Pastel Maternity Glow.png';

// 18 delicate sparkle particles positioned around the womb circumference
const SPARKLE_CONFIG = [
  // Inner rim particles (early shimmer)
  { id: 1, angle: 18, r: 68, size: 4.5, color: '#FFF8E7', glow: 7, isStar: true, delay: 0.2, dur: 3.2, early: true },
  { id: 2, angle: 48, r: 80, size: 3.2, color: '#F6DC94', glow: 6, isStar: false, delay: 0.8, dur: 2.8, early: true },
  { id: 3, angle: 78, r: 88, size: 5, color: '#FAD4C0', glow: 8, isStar: true, delay: 1.4, dur: 3.5, early: false },
  { id: 4, angle: 110, r: 74, size: 3.5, color: '#FFF9ED', glow: 6, isStar: false, delay: 0.5, dur: 2.9, early: true },
  { id: 5, angle: 138, r: 84, size: 4.5, color: '#EAC37D', glow: 8, isStar: true, delay: 1.9, dur: 3.4, early: false },
  { id: 6, angle: 168, r: 76, size: 3, color: '#FFF8E7', glow: 5, isStar: false, delay: 0.3, dur: 3.1, early: true },
  { id: 7, angle: 198, r: 72, size: 4.5, color: '#F6DC94', glow: 7, isStar: true, delay: 1.1, dur: 2.7, early: true },
  { id: 8, angle: 228, r: 88, size: 3.5, color: '#FAD4C0', glow: 6, isStar: false, delay: 1.7, dur: 3.6, early: false },
  { id: 9, angle: 258, r: 78, size: 5, color: '#FFF8E7', glow: 8, isStar: true, delay: 0.6, dur: 3.0, early: true },
  { id: 10, angle: 288, r: 84, size: 3.2, color: '#EAC37D', glow: 6, isStar: false, delay: 2.1, dur: 2.8, early: false },
  { id: 11, angle: 318, r: 72, size: 4.5, color: '#FFF9ED', glow: 7, isStar: true, delay: 1.3, dur: 3.3, early: true },
  { id: 12, angle: 348, r: 82, size: 3.5, color: '#F6DC94', glow: 6, isStar: false, delay: 0.9, dur: 3.1, early: false },
  
  // Ambient outer aura particles (middle to womb reveal)
  { id: 13, angle: 32, r: 108, size: 3, color: '#FFF8E7', glow: 5, isStar: false, delay: 1.5, dur: 4.1, early: false },
  { id: 14, angle: 92, r: 114, size: 4, color: '#F6DC94', glow: 7, isStar: true, delay: 2.4, dur: 3.8, early: false },
  { id: 15, angle: 152, r: 106, size: 3, color: '#FAD4C0', glow: 5, isStar: false, delay: 0.7, dur: 4.0, early: false },
  { id: 16, angle: 212, r: 112, size: 4, color: '#FFF9ED', glow: 7, isStar: true, delay: 2.0, dur: 3.7, early: false },
  { id: 17, angle: 272, r: 104, size: 3, color: '#EAC37D', glow: 5, isStar: false, delay: 1.2, dur: 3.9, early: false },
  { id: 18, angle: 332, r: 110, size: 3.5, color: '#FFF8E7', glow: 6, isStar: false, delay: 1.8, dur: 4.2, early: false }
];

const PregnancyJourneyHero = () => {
  const { openModal } = useAppointmentModal();
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  // Preload Image 2 and Image 3 in browser memory
  useEffect(() => {
    const pImg2 = new Image();
    pImg2.src = stage2Img;
    const pImg3 = new Image();
    pImg3.src = stage3Img;
  }, []);

  // Compute scroll progress with performant requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollDistance = rect.height - window.innerHeight;
    if (scrollDistance <= 0) return;
    const currentScroll = -rect.top;
    const p = Math.min(Math.max(currentScroll / scrollDistance, 0), 1);
    setProgress(p);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // =========================================================================
  // SCROLL-LINKED ANIMATION TIMELINE (0% - 100%)
  // Stage 1 (Normal Woman): 0% – 30%
  // Stage 2 (Pregnancy Bump): 30% – 58%
  // Stage 3 (Sparkles & Womb Reveal): 58% – 85%
  // Stage 4 (Release to Diagnostic Services): 85% – 100%
  // =========================================================================

  // Stage 1 -> Stage 2 Crossfade (Woman gains bump)
  const img1Opacity = progress < 0.28 
    ? 1 
    : progress > 0.54 
      ? 0 
      : 1 - (progress - 0.28) / (0.54 - 0.28);

  const img2Opacity = progress < 0.28 
    ? 0 
    : progress < 0.54 
      ? (progress - 0.28) / (0.54 - 0.28) 
      : 1;

  // Stage 2 -> Stage 3 Womb Reveal (Luminous sphere & baby illustration fade in)
  const img3Opacity = progress < 0.65 
    ? 0 
    : progress > 0.82 
      ? 1 
      : (progress - 0.65) / (0.82 - 0.65);

  const stage3Blend = progress < 0.65 
    ? 0 
    : progress > 0.82 
      ? 1 
      : (progress - 0.65) / (0.82 - 0.65);

  const canvasOpacity = 1 - img1Opacity;
  const canvasActive = progress > 0.15 && progress < 0.98;

  // Sparkle Motion System Timeline
  let sparkleSystemOpacity = 0;
  let glowHaloOpacity = 0;
  let sparkleEarlyOnly = false;

  if (progress >= 0.54 && progress < 0.64) {
    // Early transition: tiny warm-white particles shimmer
    const t = (progress - 0.54) / 0.10;
    sparkleSystemOpacity = t * 0.75;
    glowHaloOpacity = t * 0.35;
    sparkleEarlyOnly = true;
  } else if (progress >= 0.64 && progress < 0.78) {
    // Middle transition: champagne-gold glow develops, particles drift
    const t = (progress - 0.64) / 0.14;
    sparkleSystemOpacity = 0.75 + t * 0.25;
    glowHaloOpacity = 0.35 + t * 0.55;
    sparkleEarlyOnly = false;
  } else if (progress >= 0.78 && progress < 0.88) {
    // Womb reveal transition easing into steady final state
    const t = (progress - 0.78) / 0.10;
    sparkleSystemOpacity = 1.0 - t * 0.45;
    glowHaloOpacity = 0.90 - t * 0.35;
    sparkleEarlyOnly = false;
  } else if (progress >= 0.88) {
    // Final state: restrained, elegant accent glow
    sparkleSystemOpacity = 0.50;
    glowHaloOpacity = 0.50;
    sparkleEarlyOnly = false;
  }

  // Active Narrative Stage for Left Column
  let activeStage = 1;
  if (progress >= 0.68) {
    activeStage = 3;
  } else if (progress >= 0.32) {
    activeStage = 2;
  }

  // Precomputed sparkle particle positions
  const renderedParticles = useMemo(() => {
    return SPARKLE_CONFIG.map((p) => {
      const rad = (p.angle * Math.PI) / 180;
      const x = Math.round(Math.cos(rad) * p.r);
      const y = Math.round(Math.sin(rad) * p.r);
      return { ...p, x, y };
    });
  }, []);

  // Smooth scroll helper for CTAs
  const scrollToStage = (stageNum) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollDistance = rect.height - window.innerHeight;
    const containerTop = window.scrollY + rect.top;

    if (stageNum === 1) {
      window.scrollTo({ top: containerTop, behavior: 'smooth' });
    } else if (stageNum === 2) {
      window.scrollTo({ top: containerTop + 0.45 * scrollDistance, behavior: 'smooth' });
    } else if (stageNum === 3) {
      window.scrollTo({ top: containerTop + 0.80 * scrollDistance, behavior: 'smooth' });
    } else if (stageNum === 4) {
      const nextSection = document.getElementById('services-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: containerTop + rect.height, behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="pj-scroll-container" 
      aria-label="Sai Diagnostics Pregnancy Journey Experience"
    >
      <div className="pj-sticky-viewport">
        
        {/* ================================================================= */}
        {/* 1. FULL-WIDTH ILLUSTRATED BACKGROUND CANVAS (ENTIRE HERO VIEWPORT) */}
        {/* ================================================================= */}
        <div className="pj-hero-bg-stage" aria-hidden="true">
          
          {/* Layer 1: Normal Woman Artwork (Full Hero Background) */}
          <img 
            src={stage1Img} 
            alt=""
            className="pj-hero-bg-art pj-hero-bg-art-1"
            style={{ opacity: img1Opacity }}
            loading="eager"
            fetchPriority="high"
          />

          {/* WebGL Continuous Natural Hand-Caress Animation Layer (Stages 2 & 3) */}
          <PregnancyJourneyCanvas
            stage2Src={stage2Img}
            stage3Src={stage3Img}
            displacementSrc="/images/journey/hand_caress_displacement.png"
            stage3Blend={stage3Blend}
            opacity={canvasOpacity}
            active={canvasActive}
            onWebglFallback={() => setUseFallback(true)}
          />

          {/* Fallback Static Layers 2 & 3 ONLY if WebGL is unavailable */}
          {useFallback && (
            <>
              <img 
                src={stage2Img} 
                alt=""
                className="pj-hero-bg-art pj-hero-bg-art-2"
                style={{ opacity: img2Opacity }}
                loading="eager"
              />
              <img 
                src={stage3Img} 
                alt=""
                className="pj-hero-bg-art pj-hero-bg-art-3"
                style={{ opacity: img3Opacity }}
                loading="eager"
              />
            </>
          )}

          {/* Sparkle Motion & Halo Anchored to the Abdomen in the Artwork */}
          <div 
            className="pj-sparkle-anchor"
            style={{ 
              opacity: sparkleSystemOpacity,
              zIndex: 4 
            }}
          >
            {/* Soft champagne-gold radial halo */}
            <div 
              className="pj-womb-halo"
              style={{ opacity: glowHaloOpacity }}
            />

            {/* Ethereal womb rim light accent ring */}
            <div 
              className="pj-womb-rim-ring"
              style={{ opacity: glowHaloOpacity * 0.75 }}
            />

            {/* Refined floating & twinkling particles */}
            {renderedParticles.map((particle) => {
              if (sparkleEarlyOnly && !particle.early) return null;
              return (
                <span
                  key={particle.id}
                  className="pj-sparkle-particle"
                  style={{
                    transform: `translate(${particle.x}px, ${particle.y}px)`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    boxShadow: `0 0 ${particle.glow}px ${particle.color}`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.dur}s`
                  }}
                >
                  {particle.isStar && (
                    <svg 
                      viewBox="0 0 24 24" 
                      width={particle.size * 2} 
                      height={particle.size * 2} 
                      className="pj-starlet-svg"
                    >
                      <path 
                        d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" 
                        fill={particle.color} 
                      />
                    </svg>
                  )}
                </span>
              );
            })}
          </div>

        </div>

        {/* ================================================================= */}
        {/* 2. SOFT READABILITY GRADIENT OVER LEFT SIDE (TRANSPARENT, ORGANIC) */}
        {/* ================================================================= */}
        <div className="pj-readability-overlay" aria-hidden="true" />

        {/* ================================================================= */}
        {/* 3. HERO CONTENT: EXACT STAGE COPY DIRECTLY OVER BACKGROUND        */}
        {/* ================================================================= */}
        <div className="pj-content-container">
          <div className="pj-narrative-col">

            {/* ============================================================= */}
            {/* STAGE 1: Normal, non-pregnant woman                           */}
            {/* ============================================================= */}
            <div className={`pj-stage-slide ${activeStage === 1 ? 'active' : 'hidden-above'}`}>
              <div className="pj-eyebrow">
                <span className="pj-eyebrow-dot" />
                SAI DIAGNOSTICS & FETAL MEDICINE CENTRE
              </div>

              <h1 className="pj-heading">
                Every Journey <span className="pj-heading-burgundy">Begins with Care</span>
              </h1>

              {/* Founder's Message Card (Stage 1 Only) */}
              <div className="pj-founder-card">
                <div className="pj-founder-card-header">
                  <Heart size={16} color="var(--primary-burgundy)" fill="var(--primary-burgundy)" />
                  <span className="pj-founder-badge-title">A Message from Our Founder</span>
                </div>
                <p className="pj-founder-quote">
                  “A commitment to compassionate care, trusted diagnostics, and supporting families through every important stage of their healthcare journey.”
                </p>
                <div className="pj-founder-subtext">
                  Dedicated Maternal-Fetal Healthcare • Anantapur
                </div>
              </div>

              <p className="pj-description">
                Supporting women from pre-conception wellness to their first steps toward motherhood.
              </p>

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

              <div className="pj-scroll-cue">
                <div className="pj-scroll-mouse">
                  <div className="pj-scroll-mouse-wheel" />
                </div>
                <span>Scroll to follow the pregnancy journey</span>
                <ChevronDown size={14} color="var(--primary-burgundy)" />
              </div>
            </div>

            {/* ============================================================= */}
            {/* STAGE 2: Pregnancy bump                                       */}
            {/* ============================================================= */}
            <div className={`pj-stage-slide ${activeStage === 2 ? 'active' : activeStage < 2 ? 'hidden-below' : 'hidden-above'}`}>
              <div className="pj-eyebrow pj-eyebrow-burgundy">
                <span className="pj-eyebrow-dot" />
                STAGE 02 • THE MIRACLE OF MOTHERHOOD
              </div>

              <h2 className="pj-heading">
                Nurturing Life Through <span className="pj-heading-burgundy">Every Trimester</span>
              </h2>

              <p className="pj-description">
                Thoughtful prenatal care and timely scans to support mother and baby's journey.
              </p>

              <div className="pj-actions">
                <button 
                  onClick={() => openModal()} 
                  className="pj-btn-primary"
                  type="button"
                >
                  <CalendarCheck size={16} /> Schedule a Prenatal Scan
                </button>
                <button 
                  onClick={() => scrollToStage(3)} 
                  className="pj-btn-secondary"
                  type="button"
                >
                  See Womb Visualization <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* ============================================================= */}
            {/* STAGE 3: Womb and baby reveal                                 */}
            {/* ============================================================= */}
            <div className={`pj-stage-slide ${activeStage === 3 ? 'active' : 'hidden-below'}`}>
              <div className="pj-eyebrow">
                <span className="pj-eyebrow-dot" />
                STAGE 03 • THE SANCTUARY WITHIN
              </div>

              <h2 className="pj-heading">
                A Clear Window into <span className="pj-heading-burgundy">Fetal Wellbeing</span>
              </h2>

              <p className="pj-description">
                Advanced fetal imaging to understand your baby's development with clarity and care.
              </p>

              <div className="pj-actions">
                <button 
                  onClick={() => scrollToStage(4)} 
                  className="pj-btn-primary"
                  type="button"
                >
                  Explore Fetal Scans <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => openModal()} 
                  className="pj-btn-secondary"
                  type="button"
                >
                  <CalendarCheck size={16} /> Book a Consultation
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PregnancyJourneyHero;
