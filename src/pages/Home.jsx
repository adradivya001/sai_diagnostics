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
  Calendar,
  Building,
  ExternalLink
} from 'lucide-react';
import PregnancyJourneyHero from '../components/home/PregnancyJourneyHero';
import { useAppointmentModal } from '../components/AppointmentModal';
import { 
  ScrollReveal, 
  HeadingReveal, 
  StaggerContainer, 
  StaggerItem, 
  ImageReveal, 
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

  const servicesData = [
    {
      category: '11–13⁺⁶ WEEKS',
      name: 'First-Trimester Screening (NT Scan)',
      desc: 'Early ultrasound examination evaluating fetal development, nuchal translucency, nasal bone presence, and early anatomical milestones.',
      icon: <Activity size={22} />,
      link: '/services'
    },
    {
      category: '18–22 WEEKS',
      name: 'Detailed TIFFA / Fetal Anomaly Scan',
      desc: 'Systematic mid-trimester structural evaluation assessing fetal organ development, intracranial anatomy, spine integrity, and limbs.',
      icon: <ShieldCheck size={22} />,
      link: '/services'
    },
    {
      category: 'CIRCULATION',
      name: 'Obstetric Color Doppler Hemodynamics',
      desc: 'Specialized vascular ultrasound measuring blood velocity and resistance in umbilical, uterine, and middle cerebral vascular pathways.',
      icon: <Heart size={22} />,
      link: '/services'
    },
    {
      category: 'TARGETED CARDIAC',
      name: 'Fetal Echocardiography',
      desc: 'Advanced high-resolution cardiovascular examination analyzing fetal cardiac chambers, great vessel alignment, valve motion, and rhythm.',
      icon: <Stethoscope size={22} />,
      link: '/services'
    },
    {
      category: 'ADVANCED IMAGING',
      name: '3D & 4D Fetal Ultrasound',
      desc: 'High-definition surface rendering offering detailed structural visualization of facial morphology, extremities, and maternal-fetal bonding.',
      icon: <Eye size={22} />,
      link: '/services'
    },
    {
      category: 'TARGETED NEURO',
      name: 'Fetal Neurosonography & Growth Scan',
      desc: 'Dedicated high-precision neuroimaging of fetal brain ventricles, posterior fossa structures, and comprehensive interval biometry tracking.',
      icon: <Radio size={22} />,
      link: '/services'
    }
  ];

  const faqData = [
    {
      q: 'How can I book an appointment at Sai Diagnostics?',
      a: 'You can easily book an appointment by calling our dedicated reception helpline at +91 77999 00248 or by clicking any "Book an Appointment" button on this website to submit an online consultation request. Our care coordinator will confirm your preferred scan timing.'
    },
    {
      q: 'What scans and diagnostic services are available?',
      a: 'We specialize in evidence-based maternal-fetal medicine, including Early Pregnancy Dating Scans, First-Trimester Screening (NT Scans), Mid-Trimester Anomaly Scans (TIFFA), Obstetric Color Doppler, Fetal Echocardiography, Fetal Neurosonography, 3D/4D Ultrasound, and Interval Growth Assessments.'
    },
    {
      q: 'How should I prepare for my ultrasound scan?',
      a: 'For early first-trimester scans, you may be requested to arrive with a comfortably full bladder. For mid-trimester (TIFFA) and later growth scans, a full bladder is usually not required. Having a light meal beforehand is often recommended to encourage fetal movement. Please always bring your doctor\'s prescription and previous scan reports.'
    },
    {
      q: 'Where is the centre located in Anantapur?',
      a: 'Sai Diagnostics and Fetal Medicine Centre is centrally located at 9th Cross Road, Sai Nagar, Anantapur, Andhra Pradesh 515001. The centre is easily accessible and provides a peaceful, patient-friendly environment.'
    },
    {
      q: 'How can I contact the centre for urgent enquiries?',
      a: 'You can reach our centre team directly by phone at +91 77999 00248 during working hours (Monday to Saturday: 8:30 AM to 7:00 PM). For directions or referral questions, you can also view our Visit Centre section below.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* =========================================================================
          PHASE 4 & 5: SIGNATURE SCROLL-DRIVEN PREGNANCY JOURNEY HERO + TRUST STRIP
          ========================================================================= */}
      <PregnancyJourneyHero />

      {/* =========================================================================
          PHASE 6: ABOUT SAI DIAGNOSTICS (Editorial Asymmetric Layout)
          ========================================================================= */}
      <section className="home-about-section" id="about-centre">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="home-about-editorial-grid">
            
            {/* Left Narrative Column: Headings enter from right, text follows, CTAs last */}
            <div className="home-about-narrative">
              <ScrollReveal direction="right" delay={0.05}>
                <span className="home-section-eyebrow">
                  <Sparkles size={13} /> ABOUT OUR CENTRE
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.12}>
                <h2 className="home-section-heading">
                  Specialised Care for Every Pregnancy Journey
                </h2>
              </HeadingReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <p className="home-about-lead">
                  At Sai Diagnostics and Fetal Medicine Centre, we focus on providing specialised diagnostic services and personalised guidance throughout the pregnancy journey.
                </p>
                <p className="home-about-body">
                  Located in Anantapur, our dedicated maternal-fetal imaging centre bridges clinical precision with warm, reassuring patient care. We believe that every expectant mother deserves attentive, unhurried examinations backed by sound clinical judgment and clear communication.
                </p>
              </ScrollReveal>

              {/* Speciality highlights */}
              <StaggerContainer delayChildren={0.25} staggerChildren={0.1} className="home-about-highlights">
                <StaggerItem>
                  <div className="home-about-highlight-pill">
                    <CheckCircle2 size={16} />
                    <span>Fetal Medicine Expertise</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-about-highlight-pill">
                    <CheckCircle2 size={16} />
                    <span>High-Resolution Diagnostic Imaging</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-about-highlight-pill">
                    <CheckCircle2 size={16} />
                    <span>Personalised Patient Guidance</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="home-about-highlight-pill">
                    <CheckCircle2 size={16} />
                    <span>Referring Doctor Coordination</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* CTA Button */}
              <ScrollReveal direction="up" delay={0.35}>
                <div>
                  <Link to="/about" className="btn btn-primary" style={{ padding: '0.85rem 2.25rem' }}>
                    Learn More About Us <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side: Editorial Image Card */}
            <div className="home-about-visual-column">
              <ScrollReveal direction="left" delay={0.2} amount={0.25}>
                <div className="home-about-image-card">
                  <img 
                    src="/modern-reception.png" 
                    alt="Sai Diagnostics & Fetal Medicine Centre Reception" 
                    loading="lazy"
                  />
                  <div className="home-about-floating-badge">
                    <span className="home-about-badge-title">
                      Patient Comfort & Clinical Excellence
                    </span>
                    <p className="home-about-badge-desc">
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
          PHASE 7: SPECIALISED SERVICES (Asymmetric Service Grid)
          ========================================================================= */}
      <section className="home-services-section" id="services">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div className="text-center" style={{ marginBottom: '1rem' }}>
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <Activity size={13} /> SPECIALISED FETAL CARE
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Comprehensive Diagnostic Care
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                Explore our diagnostic services designed to support pregnancy monitoring and specialised fetal assessment.
              </p>
            </ScrollReveal>
          </div>

          {/* 6-Card Service Grid with Reversible Entrance & Stagger */}
          <StaggerContainer delayChildren={0.15} staggerChildren={0.1} className="home-services-grid">
            {servicesData.map((service, index) => (
              <StaggerItem key={index}>
                <HoverCard lift={-6} className="home-service-card" style={{ height: '100%' }}>
                  <div>
                    <div className="home-service-card-top">
                      <span className="home-service-tag">
                        {service.category}
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

          <div className="text-center">
            <ScrollReveal direction="up" delay={0.3}>
              <Link 
                to="/services" 
                className="btn btn-outline" 
                style={{ padding: '0.85rem 2.25rem', backgroundColor: '#FFFFFF' }}
              >
                View All Diagnostic Services <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PHASE 8: ADVANCED DIAGNOSTIC TECHNOLOGY (Clinical Ultrasound Platform)
          ========================================================================= */}
      <section className="home-technology-section" id="technology">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow home-section-eyebrow-cyan">
                <Cpu size={13} /> MODERN FETAL IMAGING
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Advanced Imaging for Better Diagnostic Insights
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                Our centre utilizes advanced high-resolution ultrasound platforms engineered for clinical precision, early structural clarity, and confident maternal-fetal assessments.
              </p>
            </ScrollReveal>
          </div>

          <div className="home-technology-grid">
            
            {/* Left: Genuine Clinical Ultrasound Equipment Image */}
            <ScrollReveal direction="left" delay={0.2} amount={0.25}>
              <div className="home-technology-image-wrap">
                <img 
                  src="/ultrasound.jpg" 
                  alt="Sai Diagnostics Clinical Ultrasound Diagnostic Platform" 
                  loading="lazy"
                />
                <div className="home-technology-floating-tag">
                  <Activity size={14} /> High-Resolution Ultrasound Platform
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Verified Technical Features */}
            <StaggerContainer delayChildren={0.2} staggerChildren={0.12} className="home-technology-features-list">
              <StaggerItem>
                <div className="home-tech-item-card">
                  <div className="home-tech-item-icon">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h3 className="home-tech-item-title">
                      High-Definition Volume Rendering
                    </h3>
                    <p className="home-tech-item-desc">
                      Advanced surface and depth algorithms allow detailed examination of subtle anatomical landmarks and fetal facial structures.
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
                      Directional Color & Spectral Doppler
                    </h3>
                    <p className="home-tech-item-desc">
                      High-sensitivity hemodynamic velocity quantification provides clear assessment of maternal uterine and fetal vascular circulation.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="home-tech-item-card">
                  <div className="home-tech-item-icon">
                    <Radio size={20} />
                  </div>
                  <div>
                    <h3 className="home-tech-item-title">
                      Multi-Frequency Matrix & Linear Transducers
                    </h3>
                    <p className="home-tech-item-desc">
                      Optimized acoustic penetration and near-field resolution support both early first-trimester screening and late-term growth reviews.
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
                      ALARA-Compliant Acoustic Protocols
                    </h3>
                    <p className="home-tech-item-desc">
                      Strict adherence to international safety guidelines ensures acoustic output is kept as low as reasonably achievable for maternal and fetal safety.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

          </div>

        </div>
      </section>

      {/* =========================================================================
          PHASE 9: MEET OUR DOCTOR (Editorial Doctor Profile Layout)
          ========================================================================= */}
      <section className="home-doctor-section" id="doctor">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div className="home-doctor-composition">
            
            {/* Left: Doctor Visual Identity Frame */}
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

            {/* Right: Doctor Editorial Narrative */}
            <div className="specialist-narrative-column">
              <ScrollReveal direction="right" delay={0.05}>
                <span className="home-section-eyebrow">
                  <Stethoscope size={13} /> MEET OUR SPECIALIST
                </span>
              </ScrollReveal>

              <HeadingReveal delay={0.12}>
                <h2 className="specialist-name-headline">
                  Expertise Guided by Compassion
                </h2>
              </HeadingReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="home-doctor-qualifications-row">
                  <span className="home-doctor-qual-tag">Dr. T. Sai Kiranmai</span>
                  <span className="home-doctor-qual-tag">M.B.B.S., DMRD</span>
                  <span className="home-doctor-qual-fellowship">Fellowship in Fetal Ultrasound</span>
                </div>

                <blockquote className="home-doctor-quote">
                  “Committed to providing careful fetal imaging and personalised attention, with a focus on helping expectant parents understand their examinations and receive appropriate guidance.”
                </blockquote>

                <div className="specialist-editorial-divider" />

                <div className="specialist-focus-heading">
                  CONFIRMED CLINICAL SPECIALISATIONS
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
                    View Full Profile <ArrowRight size={16} />
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
          PHASE 10: WHY CHOOSE SAI DIAGNOSTICS (Genuine Centre Differentiators)
          ========================================================================= */}
      <section className="home-why-section" id="why-choose-us">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <ShieldCheck size={13} /> CENTRE DIFFERENTIATORS
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Care That Puts Every Patient First
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                We combine dedicated maternal-fetal specialization with empathetic patient care to support you through every stage.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="home-why-grid">
            <StaggerItem>
              <HoverCard lift={-5} className="home-why-card" style={{ height: '100%' }}>
                <div className="home-why-icon-box">
                  <Activity size={24} />
                </div>
                <h3 className="home-why-card-title">
                  Specialised Fetal Medicine Focus
                </h3>
                <p className="home-why-card-desc">
                  Focused diagnostic ultrasound exclusively dedicated to maternal-fetal wellbeing, developmental milestones, and early anomaly detection.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-why-card" style={{ height: '100%' }}>
                <div className="home-why-icon-box">
                  <Cpu size={24} />
                </div>
                <h3 className="home-why-card-title">
                  Advanced High-Resolution Imaging
                </h3>
                <p className="home-why-card-desc">
                  Dedicated ultrasound platforms optimized for crystal-clear fetal visualization, Doppler hemodynamic flow, and structural clarity.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-why-card" style={{ height: '100%' }}>
                <div className="home-why-icon-box">
                  <Heart size={24} />
                </div>
                <h3 className="home-why-card-title">
                  Personalised Patient Guidance
                </h3>
                <p className="home-why-card-desc">
                  Dedicated time for direct doctor review, thoughtful reassurance, and clear explanations of scan findings for expectant parents.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-why-card" style={{ height: '100%' }}>
                <div className="home-why-icon-box">
                  <Stethoscope size={24} />
                </div>
                <h3 className="home-why-card-title">
                  Referring Specialist Coordination
                </h3>
                <p className="home-why-card-desc">
                  Close communication and timely, detailed clinical reporting coordinated directly with your consulting gynaecologist or obstetrician.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-why-card" style={{ height: '100%' }}>
                <div className="home-why-icon-box">
                  <Clock size={24} />
                </div>
                <h3 className="home-why-card-title">
                  Structured Appointment Support
                </h3>
                <p className="home-why-card-desc">
                  Well-organized scan scheduling and clear preparation guidelines to ensure unhurried, comfortable, and timely examinations.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard lift={-5} className="home-why-card" style={{ height: '100%' }}>
                <div className="home-why-icon-box">
                  <Building size={24} />
                </div>
                <h3 className="home-why-card-title">
                  Hygienic & Peaceful Environment
                </h3>
                <p className="home-why-card-desc">
                  A calm, private clinic setting located at 9th Cross Road, Sai Nagar, designed to ensure comfort for mothers and accompanying family.
                </p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          PHASE 11: PATIENT JOURNEY (Connected 4-Step Timeline)
          ========================================================================= */}
      <section className="home-journey-section" id="patient-journey">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <CalendarCheck size={13} /> SIMPLE & STRUCTURED
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Your Journey, Made Simpler
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                From your initial enquiry to detailed clinical guidance, we ensure a smooth, reassuring diagnostic experience.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer delayChildren={0.2} staggerChildren={0.15} className="home-journey-timeline">
            <StaggerItem>
              <HoverCard lift={-5} className="home-journey-step-card" style={{ height: '100%' }}>
                <span className="home-journey-number-badge">01</span>
                <div className="home-journey-icon-wrap">
                  <PhoneCall size={22} />
                </div>
                <h3 className="home-journey-step-title">
                  Book an Appointment
                </h3>
                <p className="home-journey-step-desc">
                  Call our centre at +91 77999 00248 or request online to schedule your recommended scan based on gestational weeks.
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
                  Visit Our Centre
                </h3>
                <p className="home-journey-step-desc">
                  Arrive at our calm, hygienic facility on 9th Cross Road, Sai Nagar, Anantapur, where our team will assist your registration.
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
                  Complete Your Recommended Scan
                </h3>
                <p className="home-journey-step-desc">
                  Experience a gentle, high-resolution ultrasound examination performed with clinical care and real-time visualization.
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
                  Receive Findings & Guidance
                </h3>
                <p className="home-journey-step-desc">
                  Receive comprehensive diagnostic reports with one-on-one doctor explanation and prompt coordination with your doctor.
                </p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* =========================================================================
          PHASE 12: GOOGLE REVIEWS (Verified Baseline Representation)
          ========================================================================= */}
      <section className="home-reviews-section" id="reviews">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <Star size={13} /> PATIENT EXPERIENCES
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Every Patient Experience Matters
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                We value patient trust and feedback from families across Anantapur and Rayalaseema.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="scale" delay={0.25} amount={0.2}>
            <div className="home-reviews-card-container">
              
              {/* Left Score Block: Verified Baseline 3.3 / 5 Rating & 79 Reviews */}
              <div className="home-reviews-score-block">
                <span className="home-reviews-big-number">3.3</span>
                <div className="home-reviews-stars-row" aria-label="Rating 3.3 out of 5 stars">
                  <Star size={20} fill="#F59E0B" color="#F59E0B" />
                  <Star size={20} fill="#F59E0B" color="#F59E0B" />
                  <Star size={20} fill="#F59E0B" color="#F59E0B" />
                  <Star size={20} fill="#F59E0B" color="#F59E0B" style={{ opacity: 0.4 }} />
                  <Star size={20} color="#D1D5DB" />
                </div>
                <span className="home-reviews-count-label">
                  Based on 79 Google Reviews
                </span>
              </div>

              {/* Right Content Block: Verified Profile Link & Genuine Representation */}
              <div className="home-reviews-content-block">
                <div className="home-reviews-profile-badge">
                  <ExternalLink size={13} /> Verified Google Business Profile
                </div>
                <p className="home-reviews-note">
                  At Sai Diagnostics and Fetal Medicine Centre, we are dedicated to continuous improvement and compassionate patient care. We welcome all genuine patient feedback to help us serve expectant mothers and families with highest diagnostic standards.
                </p>
                <div>
                  <a 
                    href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ backgroundColor: '#FFFFFF', padding: '0.75rem 1.75rem' }}
                  >
                    View Our Google Business Profile <ExternalLink size={15} />
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================================================
          PHASE 13: FREQUENTLY ASKED QUESTIONS (Smooth Interactive Accordion)
          ========================================================================= */}
      <section className="home-faq-section" id="faq">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <Sparkles size={13} /> COMMON ENQUIRIES
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                Questions You May Have
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-section-subheading">
                Find helpful answers about appointments, scan timings, and preparing for your visit.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="home-faq-accordion-wrap">
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
          MID-PAGE APPOINTMENT CTA (Full-Width Deep Pink Section)
          ========================================================================= */}
      <section className="home-cta-fullwidth-section">
        <div className="container">
          <div className="home-cta-inner">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-cta-badge">
                <CalendarCheck size={14} /> PLAN YOUR VISIT
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-cta-heading">
                We're Here to Help You Plan Your Visit
              </h2>
            </HeadingReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="home-cta-subtext">
                Contact our centre to enquire about available diagnostic services, appointment timings, and scan preparation instructions.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="home-cta-button-row">
                <a href="tel:+917799900248" className="btn-cta-white">
                  <PhoneCall size={18} /> Call +91 77999 00248
                </a>
                <button
                  onClick={() => openModal()}
                  type="button"
                  className="btn-cta-outline-white"
                >
                  <CalendarCheck size={18} /> Book an Appointment
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 14: VISIT OUR CENTRE (Split Contact & Map Layout)
          ========================================================================= */}
      <section className="home-contact-split-section" id="location">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div className="text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="home-section-eyebrow">
                <MapPin size={13} /> LOCATION & CONTACT
              </span>
            </ScrollReveal>

            <HeadingReveal delay={0.12}>
              <h2 className="home-section-heading">
                We Are Here to Help You
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
                <h3 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.65rem',
                  color: '#202B3C',
                  marginBottom: '1.5rem'
                }}>
                  Sai Diagnostics and Fetal Medicine Centre
                </h3>

                <div className="home-contact-item-row">
                  <div className="home-contact-icon-bubble">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#202B3C', fontSize: '0.95rem', marginBottom: '3px' }}>
                      Verified Centre Address
                    </strong>
                    <p style={{ margin: 0, color: '#647184', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      9th Cross Road, Sai Nagar, Anantapur, Andhra Pradesh 515001, India.
                    </p>
                  </div>
                </div>

                <div className="home-contact-item-row">
                  <div className="home-contact-icon-bubble">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#202B3C', fontSize: '0.95rem', marginBottom: '3px' }}>
                      Helpline & Appointments
                    </strong>
                    <a 
                      href="tel:+917799900248" 
                      style={{ color: '#C21850', fontWeight: 700, fontSize: '0.98rem', textDecoration: 'none' }}
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
                    <strong style={{ display: 'block', color: '#202B3C', fontSize: '0.95rem', marginBottom: '3px' }}>
                      Consultation & Working Hours
                    </strong>
                    <p style={{ margin: 0, color: '#647184', fontSize: '0.92rem', lineHeight: 1.65 }}>
                      <span style={{ fontWeight: 600, color: '#202B3C' }}>Monday to Saturday:</span> 8:30 AM – 7:00 PM<br />
                      <span style={{ fontWeight: 600, color: '#C21850' }}>Sunday:</span> Closed
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                  <a
                    href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '0.8rem 1.85rem' }}
                  >
                    <Navigation size={16} /> Get Directions
                  </a>

                  <Link
                    to="/contact"
                    className="btn btn-outline"
                    style={{ padding: '0.8rem 1.85rem', backgroundColor: '#FFFFFF' }}
                  >
                    Contact Details
                  </Link>
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
