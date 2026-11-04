import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  CalendarCheck, 
  MapPin, 
  ArrowRight, 
  Stethoscope, 
  Navigation, 
  Award,
  CheckCircle2, 
  Quote, 
  Sparkles, 
  ChevronDown, 
  Star, 
  Cpu, 
  Eye, 
  Radio, 
  FileText, 
  Building, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import PregnancyJourneyHero from '../components/home/PregnancyJourneyHero';
import { useAppointmentModal } from '../components/AppointmentModal';
import { 
  ScrollReveal, 
  HeadingReveal, 
  StaggerContainer, 
  StaggerItem, 
  HoverCard 
} from '../components/motion/MotionReveal';
import './HomeSections.css';

const Home = () => {
  const { openModal } = useAppointmentModal();
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = 'Sai Diagnostics & Fetal Medicine Centre | Advanced Prenatal Care Anantapur';
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Section 02: Comprehensive Diagnostic Services (6 Verified Cards)
  const serviceCards = [
    {
      id: 'early-scans',
      badge: '6–10 WEEKS',
      name: 'Early Pregnancy Scans',
      desc: 'Confirm pregnancy location, verify embryonic heartbeat, determine gestational age, and ensure early reassurance.',
      icon: <Heart size={22} />,
      link: '/services'
    },
    {
      id: 'nt-nb-scan',
      badge: '11–13⁺⁶ WEEKS',
      name: 'NT / NB Scan',
      desc: 'First-trimester screening measuring nuchal translucency and nasal bone with detailed structural anatomy review.',
      icon: <ShieldCheck size={22} />,
      link: '/services'
    },
    {
      id: 'anomaly-scan',
      badge: '18–22 WEEKS',
      name: 'Detailed Anomaly Scan (TIFFA)',
      desc: 'Comprehensive head-to-toe structural examination of fetal organs, spine, brain, heart, and musculoskeletal development.',
      icon: <Eye size={22} />,
      link: '/services'
    },
    {
      id: 'growth-scan',
      badge: '28–36 WEEKS',
      name: 'Fetal Growth & Wellbeing Scan',
      desc: 'Serial evaluation of fetal growth parameters, estimated fetal weight, amniotic fluid volume, and placental maturity.',
      icon: <Activity size={22} />,
      link: '/services'
    },
    {
      id: 'doppler-studies',
      badge: 'HEMODYNAMICS',
      name: 'Obstetric Doppler Studies',
      desc: 'Specialized vascular velocity assessment of uterine, umbilical, and middle cerebral arteries to monitor fetal circulation.',
      icon: <Radio size={22} />,
      link: '/services'
    },
    {
      id: 'fetal-medicine',
      badge: 'ADVANCED SPECIALTY',
      name: 'Specialised Fetal Medicine',
      desc: 'Targeted fetal echocardiography and detailed neurosonography for high-risk pregnancies requiring focused specialist review.',
      icon: <Stethoscope size={22} />,
      link: '/services'
    }
  ];

  // Section 08: Frequently Asked Questions (Exact 6 Required Questions)
  const faqData = [
    {
      q: 'What types of pregnancy scans are available at Sai Diagnostics?',
      a: 'We offer comprehensive obstetric ultrasound examinations including Dating & Viability Scans (6–9 weeks), First-Trimester NT/NB Screening Scans (11–13⁺⁶ weeks), Mid-Trimester Anomaly Scans (TIFFA / Target Scan, 18–22 weeks), Fetal Growth & Wellbeing Scans (28–36 weeks), Obstetric Color Doppler Studies, Fetal Echocardiography, and Fetal Neurosonography.'
    },
    {
      q: 'When should I schedule my first pregnancy ultrasound?',
      a: 'The first scan (dating and viability ultrasound) is typically performed between 6 and 9 weeks of pregnancy. This scan confirms the location of the gestational sac, confirms the embryonic heartbeat, accurately estimates your due date, and checks whether you are carrying single or multiple babies.'
    },
    {
      q: 'Do I need an appointment before visiting?',
      a: 'Yes, we strongly encourage scheduling an appointment in advance. Detailed maternal-fetal ultrasound requires careful, unhurried examination by our specialist radiologist. Pre-booking ensures minimal waiting time and guarantees dedicated scan time for you and your baby.'
    },
    {
      q: 'What is an anomaly scan, and when is it performed?',
      a: 'The anomaly scan (also known as TIFFA or Targeted Imaging for Fetal Anomalies) is performed between 18 and 22 weeks of pregnancy. It is an in-depth anatomical assessment that evaluates the baby’s brain, face, spine, heart chambers, kidneys, stomach, abdominal wall, and limbs to ensure healthy structural development.'
    },
    {
      q: 'How should I prepare for my ultrasound appointment?',
      a: 'Preparation varies by scan type. For early first-trimester transabdominal scans, drinking 2–3 glasses of water 1 hour before the scan helps fill the bladder for clearer visibility. For mid-trimester scans (such as TIFFA), a full bladder is usually not required. Having a light meal beforehand is often recommended. Please always bring your doctor’s prescription and all previous scan reports.'
    },
    {
      q: 'How can I collect my diagnostic reports?',
      a: 'Routine ultrasound reports with high-resolution diagnostic images are provided on the same day, immediately following the scan review and personal consultation with our specialist doctor. Digital copies and direct communication with your referring obstetrician are also supported upon request.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      
      {/* =========================================================================
          PROTECTED COMPONENT: SIGNATURE HERO SECTION (STRICTLY UNMODIFIED)
          ========================================================================= */}
      <PregnancyJourneyHero />

      {/* =========================================================================
          FOUNDER'S MESSAGE (Placed Directly After Hero Section)
          ========================================================================= */}
      <section className="home-founder-message-section" id="founder-message">
        <div className="container">
          <ScrollReveal direction="scale" delay={0.08} amount={0.2}>
            <div className="home-founder-message-card">
              <Quote 
                size={72} 
                className="home-founder-message-quote-bg"
                aria-hidden="true"
              />

              <div className="home-founder-message-top">
                <span className="home-founder-eyebrow">
                  <Heart size={14} /> FOUNDER'S MESSAGE
                </span>
                <span className="home-founder-badge-pill">
                  <Award size={13} /> Dedicated Maternal-Fetal Care
                </span>
              </div>

              <blockquote className="home-founder-quote-text">
                “Recognised for its dedicated care in Rayalaseema, Sai Diagnostics and Fetal Medicine Centre is committed to providing personalised care to every patient. The centre has been involved in the evaluation of rare and complex fetal cases. We value the trust placed in us by senior gynaecologists and paediatric specialists and continue to work towards providing thoughtful, specialised care for every family.”
              </blockquote>

              <div className="home-founder-divider" />

              <div className="home-founder-footer">
                <div className="home-founder-profile">
                  <div className="home-founder-avatar-monogram">
                    <span>SK</span>
                  </div>
                  <div className="home-founder-info">
                    <h3 className="home-founder-name">
                      Dr. T. Sai Kiranmai
                    </h3>
                    <div className="home-founder-role">
                      Consultant Radiologist &amp; Fetal Medicine Specialist
                    </div>
                    <div className="home-founder-deg">
                      M.B.B.S., DMRD • Fellowship in Fetal Ultrasound
                    </div>
                  </div>
                </div>

                <div className="home-founder-actions">
                  <button
                    type="button"
                    onClick={() => openModal("Consultation with Dr. T. Sai Kiranmai")}
                    className="btn btn-primary home-founder-btn"
                  >
                    <CalendarCheck size={16} /> Book Consultation
                  </button>
                  <Link
                    to="/about"
                    className="btn btn-outline home-founder-btn-secondary"
                  >
                    About Our Centre <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 01: SPECIALISED FETAL MEDICINE INTRODUCTION
          ========================================================================= */}
      <section className="home-intro-section" id="about-centre">
        <div className="container">
          <div className="home-intro-editorial-grid">
            
            {/* Left Narrative Column */}
            <div className="home-intro-narrative">
              <ScrollReveal direction="right" delay={0.05}>
                <span className="home-section-eyebrow">
                  <Sparkles size={13} /> SPECIALISED FETAL MEDICINE
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.12}>
                <h2 className="home-section-heading">
                  Every Pregnancy Deserves Specialised Attention.
                </h2>
              </HeadingReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <p className="home-intro-lead">
                  From early pregnancy scans to advanced fetal assessments, we focus on providing detailed diagnostic insights and personalised care at every stage of pregnancy.
                </p>
                <p className="home-intro-body">
                  Located in Anantapur, our dedicated maternal-fetal centre brings together clinical diagnostic precision with warm, reassuring patient guidance. We ensure every expectant family receives attentive, unhurried examinations backed by sound clinical judgment and clear doctor communication.
                </p>
              </ScrollReveal>

              {/* Four Service Highlights */}
              <StaggerContainer delayChildren={0.25} staggerChildren={0.08} className="home-intro-highlights">
                <StaggerItem>
                  <div className="home-intro-highlight-pill">
                    <CheckCircle2 size={16} />
                    <span>First-Trimester Screening & Early Anatomy</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-intro-highlight-pill">
                    <CheckCircle2 size={16} />
                    <span>High-Resolution Structural Anomaly Evaluation</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-intro-highlight-pill">
                    <CheckCircle2 size={16} />
                    <span>Hemodynamic Doppler & Fetal Growth Monitoring</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-intro-highlight-pill">
                    <CheckCircle2 size={16} />
                    <span>Clear Doctor Explanations & Specialist Coordination</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* Explore Fetal Medicine CTA */}
              <ScrollReveal direction="up" delay={0.35}>
                <div style={{ marginTop: '0.75rem' }}>
                  <Link to="/services" className="btn btn-primary" style={{ padding: '0.85rem 2.25rem' }}>
                    Explore Fetal Medicine <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Column: Clinic Diagnostic Centre Atmosphere */}
            <div className="home-intro-visual-column">
              <ScrollReveal direction="left" delay={0.2} amount={0.25}>
                <div className="home-intro-image-frame">
                  <img 
                    src="/modern-waiting-room.png" 
                    alt="Sai Diagnostics & Fetal Medicine Centre Atmosphere" 
                    loading="lazy"
                  />
                  <div className="home-intro-floating-badge">
                    <span className="home-intro-badge-title">
                      Patient Comfort & Clinical Excellence
                    </span>
                    <p className="home-intro-badge-desc">
                      Dedicated ultrasound consultation suites designed for compassionate care and family reassurance.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: COMPREHENSIVE DIAGNOSTIC SERVICES (6 Verified Cards)
          ========================================================================= */}
      <section className="home-services-section" id="services">
        <div className="container">
          
          <div className="text-center" style={{ marginBottom: '1.5rem' }}>
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <Activity size={13} /> EVIDENCE-BASED DIAGNOSTICS
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Comprehensive Diagnostic Care.
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                Explore specialised diagnostic services designed to support informed medical assessments throughout your pregnancy journey.
              </p>
            </ScrollReveal>
          </div>

          {/* 6 Visually Consistent Service Cards */}
          <StaggerContainer delayChildren={0.15} staggerChildren={0.08} className="home-services-grid">
            {serviceCards.map((service, index) => (
              <StaggerItem key={index}>
                <HoverCard lift={-6} className="home-service-card" style={{ height: '100%' }}>
                  <div>
                    <div className="home-service-card-top">
                      <span className="home-service-tag">
                        {service.badge}
                      </span>
                      <div className="home-service-icon-box">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="home-service-title">
                      {service.name}
                    </h3>

                    <p className="home-service-desc">
                      {service.desc}
                    </p>
                  </div>

                  <div className="home-service-footer">
                    <Link to={service.link} className="home-service-link">
                      Explore Service <ArrowRight size={15} />
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View All Services CTA */}
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <ScrollReveal direction="up" delay={0.3}>
              <Link 
                to="/services" 
                className="btn btn-outline" 
                style={{ padding: '0.85rem 2.25rem', backgroundColor: '#FFFFFF' }}
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: ADVANCED IMAGING AND TECHNOLOGY
          ========================================================================= */}
      <section className="home-technology-section" id="technology">
        <div className="container">
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow home-section-eyebrow-cyan">
                <Cpu size={13} /> MODERN FETAL IMAGING
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Advanced Imaging. Greater Diagnostic Clarity.
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                Modern imaging capabilities support detailed diagnostic assessments and help provide valuable insights throughout the pregnancy journey.
              </p>
            </ScrollReveal>
          </div>

          <div className="home-technology-grid">
            
            {/* Left: Authentic Diagnostic Equipment Photograph */}
            <ScrollReveal direction="left" delay={0.2} amount={0.25}>
              <div className="home-technology-image-wrap">
                <img 
                  src="/ultrasound.jpg" 
                  alt="Sai Diagnostics Clinical Ultrasound Diagnostic Platform" 
                  loading="lazy"
                />
                <div className="home-technology-floating-tag">
                  <Activity size={14} /> High-Resolution Clinical Ultrasound Platform
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Four Feature Rows */}
            <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="home-technology-features-list">
              <StaggerItem>
                <div className="home-tech-item-card">
                  <div className="home-tech-item-icon">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h3 className="home-tech-item-title">
                      Advanced Ultrasound Technology
                    </h3>
                    <p className="home-tech-item-desc">
                      Equipped with multi-frequency matrix transducer probes optimized for superior acoustic penetration and fine tissue differentiation.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="home-tech-item-card">
                  <div className="home-tech-item-icon">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h3 className="home-tech-item-title">
                      High-Resolution Imaging
                    </h3>
                    <p className="home-tech-item-desc">
                      Volume rendering algorithms deliver remarkable clarity for subtle fetal facial features and critical anatomical landmarks.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="home-tech-item-card">
                  <div className="home-tech-item-icon">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h3 className="home-tech-item-title">
                      Detailed Fetal Assessment
                    </h3>
                    <p className="home-tech-item-desc">
                      Directional color and spectral Doppler provide quantitative velocity measurement of vital maternal-fetal vascular flows.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="home-tech-item-card">
                  <div className="home-tech-item-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="home-tech-item-title">
                      Patient-Centred Diagnostic Process
                    </h3>
                    <p className="home-tech-item-desc">
                      Strict ALARA safety protocols combined with dedicated scan review ensure unhurried, reassuring clinical evaluations.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: MEET OUR FOUNDER / MEDICAL EXPERTISE
          ========================================================================= */}
      <section className="home-doctor-section" id="founder">
        <div className="container">
          
          <div className="home-doctor-composition">
            
            {/* Left: Founder / Doctor Visual Identity Presentation */}
            <ScrollReveal direction="left" delay={0.15} amount={0.25}>
              <div className="home-doctor-visual-frame">
                <div className="home-doctor-monogram">
                  <span className="home-doctor-monogram-initials">SK</span>
                  <span className="home-doctor-monogram-sub">FETAL MEDICINE</span>
                </div>

                <h3 className="home-doctor-name-card">
                  Dr. T. Sai Kiranmai
                </h3>
                <span className="home-doctor-title-card">
                  Consultant Radiologist & Fetal Medicine Specialist
                </span>

                <div className="home-doctor-credentials-box">
                  <div className="home-doctor-credential-pill">
                    <Award size={16} color="#C21850" />
                    <span><strong>M.B.B.S., DMRD</strong> • Medical & Radiology</span>
                  </div>
                  <div className="home-doctor-credential-pill">
                    <ShieldCheck size={16} color="#0B7F8C" />
                    <span><strong>Fellowship in Fetal Ultrasound</strong></span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Founder Editorial Narrative */}
            <div className="specialist-narrative-column">
              <ScrollReveal direction="right" delay={0.05}>
                <span className="home-section-eyebrow">
                  <Stethoscope size={13} /> THE PEOPLE BEHIND YOUR CARE
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.12}>
                <h2 className="specialist-name-headline">
                  Expertise Built on Experience. Care Built on Trust.
                </h2>
              </HeadingReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="home-doctor-qualifications-row">
                  <span className="home-doctor-qual-tag">Dr. T. Sai Kiranmai</span>
                  <span className="home-doctor-qual-tag">M.B.B.S., DMRD</span>
                  <span className="home-doctor-qual-fellowship">Fellowship in Fetal Ultrasound</span>
                </div>

                <p className="specialist-narrative-lead">
                  At Sai Diagnostics and Fetal Medicine Centre, our commitment is to provide specialised diagnostic care with precision, compassion and personal attention. Our founder's experience and dedication have helped build lasting trust among patients and referring doctors across the region.
                </p>

                <blockquote className="home-doctor-quote">
                  “Committed to providing careful fetal imaging and personalised attention, with a focus on helping expectant parents understand their examinations and receive appropriate guidance.”
                </blockquote>

                <div className="specialist-editorial-divider" />

                <div className="specialist-focus-heading">
                  VERIFIED CLINICAL EXPERTISE
                </div>
              </ScrollReveal>

              <StaggerContainer delayChildren={0.25} staggerChildren={0.08} className="home-doctor-competencies-grid">
                <StaggerItem>
                  <div className="home-doctor-competency-item">
                    <CheckCircle2 size={16} />
                    <span>First-Trimester Screening (NT Scan)</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-doctor-competency-item">
                    <CheckCircle2 size={16} />
                    <span>Detailed Structural Anomaly (TIFFA)</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-doctor-competency-item">
                    <CheckCircle2 size={16} />
                    <span>Obstetric Color Doppler Hemodynamics</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-doctor-competency-item">
                    <CheckCircle2 size={16} />
                    <span>Targeted Fetal Echocardiography</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <ScrollReveal direction="up" delay={0.35}>
                <div className="specialist-cta-actions">
                  <Link to="/doctors" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                    Meet Our Doctor <ArrowRight size={16} />
                  </Link>
                  <button
                    onClick={() => openModal()}
                    type="button"
                    className="btn btn-outline"
                    style={{ backgroundColor: '#FFFFFF', padding: '0.85rem 2rem', cursor: 'pointer' }}
                  >
                    <CalendarCheck size={16} /> Book Consultation
                  </button>
                </div>
              </ScrollReveal>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: WHY CHOOSE SAI DIAGNOSTICS? (Four Distinct Benefits)
          ========================================================================= */}
      <section className="home-why-section" id="why-choose-us">
        <div className="container">
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <ShieldCheck size={13} /> OUR PROMISE
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Why Families Choose Sai Diagnostics.
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                We combine specialized maternal-fetal diagnostic capabilities with warm, personal attention for every mother and family.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="home-why-distinct-grid">
            <StaggerItem>
              <HoverCard lift={-5} className="home-why-distinct-card" style={{ height: '100%' }}>
                <span className="home-why-distinct-num">01</span>
                <div className="home-why-distinct-icon">
                  <Activity size={24} />
                </div>
                <h3 className="home-why-distinct-title">
                  Specialised Expertise
                </h3>
                <p className="home-why-distinct-desc">
                  Dedicated fetal medicine and diagnostic care delivered by qualified specialist radiologists focused entirely on maternal-fetal health.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-why-distinct-card" style={{ height: '100%' }}>
                <span className="home-why-distinct-num">02</span>
                <div className="home-why-distinct-icon">
                  <Cpu size={24} />
                </div>
                <h3 className="home-why-distinct-title">
                  Advanced Diagnostics
                </h3>
                <p className="home-why-distinct-desc">
                  Modern imaging platforms and detailed structural assessments engineered for clinical accuracy, early anomaly screening, and confidence.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-why-distinct-card" style={{ height: '100%' }}>
                <span className="home-why-distinct-num">03</span>
                <div className="home-why-distinct-icon">
                  <Heart size={24} />
                </div>
                <h3 className="home-why-distinct-title">
                  Personalised Attention
                </h3>
                <p className="home-why-distinct-desc">
                  Care focused on individual patient needs, with dedicated time for direct scan explanation, thoughtful reassurance, and doctor guidance.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-why-distinct-card" style={{ height: '100%' }}>
                <span className="home-why-distinct-num">04</span>
                <div className="home-why-distinct-icon">
                  <Building size={24} />
                </div>
                <h3 className="home-why-distinct-title">
                  Patient-Centred Approach
                </h3>
                <p className="home-why-distinct-desc">
                  A supportive, hygienic, and comfortable experience from appointment scheduling to timely report coordination with referring doctors.
                </p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06: YOUR JOURNEY, MADE SIMPLER (4-Step Timeline)
          ========================================================================= */}
      <section className="home-journey-section" id="patient-journey">
        <div className="container">
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <CalendarCheck size={13} /> SIMPLE & STRUCTURED
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Your Journey, Made Simpler.
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                From scheduling your appointment to receiving your diagnostic report, we aim to make your experience clear and convenient.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer delayChildren={0.2} staggerChildren={0.12} className="home-journey-timeline">
            <StaggerItem>
              <HoverCard lift={-5} className="home-journey-step-card" style={{ height: '100%' }}>
                <span className="home-journey-number-badge">01</span>
                <div className="home-journey-icon-wrap">
                  <PhoneCall size={22} />
                </div>
                <h3 className="home-journey-step-title">
                  Book Your Appointment
                </h3>
                <p className="home-journey-step-desc">
                  Contact the clinic or request an appointment online to schedule your recommended scan based on gestational weeks.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-journey-step-card" style={{ height: '100%' }}>
                <span className="home-journey-number-badge">02</span>
                <div className="home-journey-icon-wrap">
                  <Building size={22} />
                </div>
                <h3 className="home-journey-step-title">
                  Visit the Centre
                </h3>
                <p className="home-journey-step-desc">
                  Arrive for your scheduled consultation or scan at our calm, hygienic facility on 9th Cross Road, Sai Nagar.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-journey-step-card" style={{ height: '100%' }}>
                <span className="home-journey-number-badge">03</span>
                <div className="home-journey-icon-wrap">
                  <Activity size={22} />
                </div>
                <h3 className="home-journey-step-title">
                  Diagnostic Assessment
                </h3>
                <p className="home-journey-step-desc">
                  Undergo the recommended diagnostic procedure performed with high-resolution imaging and attentive clinical care.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-journey-step-card" style={{ height: '100%' }}>
                <span className="home-journey-number-badge">04</span>
                <div className="home-journey-icon-wrap">
                  <FileText size={22} />
                </div>
                <h3 className="home-journey-step-title">
                  Receive Your Report
                </h3>
                <p className="home-journey-step-desc">
                  Collect your comprehensive diagnostic report and follow the doctor's guidance with prompt coordination for your specialist.
                </p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 07: FREQUENTLY ASKED QUESTIONS (Smooth Interactive Accordion)
          ========================================================================= */}
      <section className="home-faq-section" id="faq">
        <div className="container">
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <Sparkles size={13} /> COMMON ENQUIRIES
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Questions You May Have.
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                Find clear, medically reviewed guidance on appointments, scan timing, and preparation.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer delayChildren={0.2} staggerChildren={0.08} className="home-faq-accordion-wrap">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <StaggerItem key={index}>
                  <div className={`home-faq-item ${isOpen ? 'open' : ''}`}>
                    <button 
                      type="button"
                      className="home-faq-trigger"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <h3 className="home-faq-question">{faq.q}</h3>
                      <ChevronDown size={20} className="home-faq-chevron" />
                    </button>
                    {isOpen && (
                      <div className="home-faq-answer">
                        <p style={{ margin: 0 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          SECTION 09: APPOINTMENT CTA (Refined Rose-Burgundy Gradient Banner)
          ========================================================================= */}
      <section className="home-cta-fullwidth-section" id="appointment-cta">
        <div className="container">
          <div className="home-cta-inner">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-cta-badge">
                <CalendarCheck size={14} /> PLAN YOUR VISIT
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-cta-heading">
                Your Pregnancy Journey Deserves the Right Care.
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-cta-subtext">
                Get the support and specialised diagnostic attention you need at every important stage.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="home-cta-button-row">
                <button
                  onClick={() => openModal()}
                  type="button"
                  className="btn-cta-white"
                >
                  <CalendarCheck size={18} /> Book an Appointment
                </button>
                <Link to="/contact" className="btn-cta-outline-white">
                  <PhoneCall size={18} /> Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CONTACT AND LOCATION (Integrated Split Layout)
          ========================================================================= */}
      <section className="home-contact-split-section" id="location">
        <div className="container">
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <MapPin size={13} /> LOCATION & CONTACT
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                We're Here to Help You.
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                Visit our dedicated diagnostic centre or reach our reception team directly for appointments and queries.
              </p>
            </ScrollReveal>
          </div>

          <div className="home-contact-split-grid">
            
            {/* Left Contact Information */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="home-contact-meta-col">
                <h3 className="home-contact-clinic-name">
                  Sai Diagnostics and Fetal Medicine Centre
                </h3>

                <div className="home-contact-item-row">
                  <div className="home-contact-icon-bubble">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="home-contact-item-title">
                      Verified Centre Address
                    </strong>
                    <p className="home-contact-item-desc">
                      9th Cross Road, Sai Nagar, Anantapur, Andhra Pradesh 515001, India.
                    </p>
                  </div>
                </div>

                <div className="home-contact-item-row">
                  <div className="home-contact-icon-bubble">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <strong className="home-contact-item-title">
                      Helpline & Appointments
                    </strong>
                    <a 
                      href="tel:+917799900248" 
                      className="home-contact-phone-link"
                    >
                      +91 77999 00248
                    </a>
                  </div>
                </div>

                <div className="home-contact-item-row">
                  <div className="home-contact-icon-bubble">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong className="home-contact-item-title">
                      Consultation & Working Hours
                    </strong>
                    <p className="home-contact-item-desc">
                      <span style={{ fontWeight: 600, color: '#202B3C' }}>Monday to Saturday:</span> 8:30 AM – 7:00 PM<br />
                      <span style={{ fontWeight: 600, color: '#C21850' }}>Sunday:</span> Closed
                    </p>
                  </div>
                </div>

                {/* Functional Actions */}
                <div className="home-contact-actions-row">
                  <a
                    href="tel:+917799900248"
                    className="btn btn-primary"
                    style={{ padding: '0.8rem 1.85rem' }}
                  >
                    <PhoneCall size={16} /> Call Now
                  </a>

                  <a
                    href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '0.8rem 1.85rem', backgroundColor: '#FFFFFF' }}
                  >
                    <Navigation size={16} /> Get Directions
                  </a>

                  <a
                    href="https://wa.me/917799900248?text=Hello%20Sai%20Diagnostics,%20I%20would%20like%20to%20enquire%20about%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '0.8rem 1.85rem' }}
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Map Frame */}
            <ScrollReveal direction="left" delay={0.25}>
              <div className="home-contact-map-frame">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=9th%20Cross%20Rd,%20Sai%20Nagar,%20Anantapur,%20Andhra%20Pradesh%20515001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Sai Diagnostics Clinic Location Map"
                />
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;