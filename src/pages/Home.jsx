import { useEffect, useRef } from 'react';
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
  Sparkles
} from 'lucide-react';
import PregnancyJourneyHero from '../components/home/PregnancyJourneyHero';
import TrustStrip from '../components/home/TrustStrip';
import { useAppointmentModal } from '../components/AppointmentModal';
import useScrollReveal from '../hooks/useScrollReveal';
import './HomeSections.css';

const Home = () => {
  const { openModal } = useAppointmentModal();
  const pageContainerRef = useRef(null);
  useScrollReveal();
  
  useEffect(() => {
    document.title = 'Sai Diagnostics & Fetal Medicine Centre | Advanced Prenatal Care Anantapur';
  }, []);

  return (
    <div ref={pageContainerRef} style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* 1. Signature Scroll-Driven Pregnancy Journey Hero — LOCKED & UNCHANGED */}
      <PregnancyJourneyHero />

      {/* 2. Refined Horizontal Trust Strip Bar */}
      <section className="home-feature-strip-section" aria-label="Core Patient Care Values">
        <TrustStrip />
      </section>

      {/* 3. SECTION: ABOUT OUR CENTRE (Editorial Storytelling Layout) */}
      <section className="home-about-section" id="about-centre">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="home-about-editorial-grid">
            {/* Left Narrative Column */}
            <div className="home-about-narrative reveal-on-scroll">
              <span className="home-section-eyebrow">
                <Sparkles size={13} /> ABOUT OUR CENTRE
              </span>
              <h2 className="home-section-heading">
                Care, Clarity and Confidence
              </h2>
              <p className="home-about-lead">
                Sai Diagnostics and Fetal Medicine Centre is committed to providing personalised diagnostic care and supporting families through important stages of their healthcare journey.
              </p>

              {/* Genuine Clinic Reception Showcase */}
              <div className="home-about-image-preview">
                <img 
                  src="/modern-reception.png" 
                  alt="Sai Diagnostics and Fetal Medicine Centre Reception" 
                  loading="lazy"
                />
                <div className="home-about-image-badge">
                  <CheckCircle2 size={13} /> Dedicated Ultrasound & Prenatal Care
                </div>
              </div>

              <div>
                <Link to="/about" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Founder's Message in Distinctive Quotation Layout */}
            <div className="home-founder-quotation-wrap reveal-on-scroll stagger-2">
              <Quote size={56} className="founder-quote-decorative-mark" aria-hidden="true" />
              
              <div className="founder-quote-tag">
                <Heart size={14} /> Founder's Message
              </div>

              <blockquote className="founder-quote-text">
                “Recognised for its dedicated care in Rayalaseema, Sai Diagnostics and Fetal Medicine Centre is committed to providing personalised care to every patient. The centre has been involved in the evaluation of rare and complex fetal cases. We value the trust placed in us by senior gynaecologists and paediatric specialists and continue to work towards providing thoughtful, specialised care for every family.”
              </blockquote>

              <div className="founder-quote-divider" />

              <div className="founder-quote-author">
                <span className="founder-author-name">
                  Dr. T. Sai Kiranmai
                </span>
                <span className="founder-author-role">
                  Consultant Radiologist & Fetal Medicine Specialist
                </span>
                <span style={{ fontSize: '0.8rem', color: '#17A9CF', fontWeight: 600, marginTop: '2px' }}>
                  M.B.B.S., DMRD • Fellowship in Fetal Ultrasound
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: FEATURED SERVICES (Interactive Refined Service Grid) */}
      <section className="home-services-section" id="services">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="text-center reveal-on-scroll" style={{ marginBottom: '3.5rem' }}>
            <span className="home-section-eyebrow">
              <Activity size={13} /> CONFIRMED DIAGNOSTIC SCANS
            </span>
            <h2 className="home-section-heading">
              Specialised Diagnostic Services
            </h2>
            <p style={{
              maxWidth: '660px',
              margin: '0 auto',
              color: '#59616B',
              fontSize: '1.02rem',
              lineHeight: 1.7
            }}>
              Explore our core diagnostic examinations. Please contact our reception to confirm specific scan timings and preparation instructions.
            </p>
          </div>

          {/* 4 Confirmed Featured Services Cards */}
          <div className="home-services-grid">
            {[
              {
                category: '11–13⁺⁶ WEEKS',
                name: 'NT Scan / First-Trimester Screening',
                desc: 'Early ultrasound examination to evaluate fetal development, nuchal translucency, nasal bone, and early anatomical milestones.',
                icon: <Activity size={22} />
              },
              {
                category: '18–22 WEEKS',
                name: 'TIFFA / Fetal Anomaly Scan',
                desc: 'Comprehensive mid-trimester structural evaluation systematically examining organ anatomy, spinal integrity, and fetal growth.',
                icon: <ShieldCheck size={22} />
              },
              {
                category: 'CIRCULATION',
                name: 'Obstetric Doppler',
                desc: 'Specialised hemodynamic evaluation measuring blood flow through uterine, umbilical, and middle cerebral vascular pathways.',
                icon: <Heart size={22} />
              },
              {
                category: 'TARGETED CARDIAC',
                name: 'Fetal Echocardiography',
                desc: 'Detailed high-resolution cardiovascular examination assessing fetal heart chambers, valves, outflow tracts, and rhythm.',
                icon: <Stethoscope size={22} />
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`home-service-refined-card reveal-on-scroll stagger-${index + 1}`}
              >
                <div>
                  <div className="home-service-card-top">
                    <span className="home-service-category-tag">
                      {service.category}
                    </span>
                    <div className="home-service-icon-wrap">
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

                <div className="home-service-card-footer">
                  <Link to="/services" className="home-service-action-link">
                    View Scan Details <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal-on-scroll">
            <Link 
              to="/services" 
              className="btn btn-outline" 
              style={{ padding: '0.85rem 2.25rem', backgroundColor: '#FFFFFF' }}
            >
              View All Diagnostic Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SECTION: SPECIALIST INTRODUCTION (Editorial Asymmetrical Layout) */}
      <section className="home-specialist-editorial-section" id="specialist">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="home-specialist-composition">
            {/* Left: Large Editorial Visual Identity Anchor */}
            <div className="specialist-visual-column reveal-on-scroll">
              <div className="specialist-visual-frame">
                <div className="specialist-monogram-circle">
                  <span className="specialist-monogram-letters">SK</span>
                  <span className="specialist-monogram-sub">FETAL CARE</span>
                </div>

                <h3 className="specialist-visual-title">
                  Dr. T. Sai Kiranmai
                </h3>
                <span className="specialist-visual-role">
                  Lead Consultant Specialist
                </span>

                <div className="specialist-credentials-pill-list">
                  <div className="specialist-credential-item">
                    <Award size={16} color="#C2184B" />
                    <span><strong>M.B.B.S., DMRD</strong> • Medical & Radiology</span>
                  </div>
                  <div className="specialist-credential-item">
                    <ShieldCheck size={16} color="#17A9CF" />
                    <span><strong>Fellowship in Fetal Ultrasound</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Specialist Introduction Narrative */}
            <div className="specialist-narrative-column reveal-on-scroll stagger-2">
              <span className="home-section-eyebrow">
                <Stethoscope size={13} /> MEET OUR SPECIALIST
              </span>

              <h2 className="specialist-name-headline">
                Dr. T. Sai Kiranmai
              </h2>

              <div className="specialist-qualifications-inline">
                <span className="specialist-qual-tag">M.B.B.S., DMRD</span>
                <span className="specialist-qual-fellowship">Fellowship in Fetal Ultrasound</span>
                <span style={{ fontSize: '0.9rem', color: '#59616B' }}>• Consultant Radiologist & Fetal Medicine Specialist</span>
              </div>

              <p className="specialist-intro-quote">
                “Committed to providing careful fetal imaging and personalised attention, with a focus on helping expectant parents understand their examinations and receive appropriate guidance.”
              </p>

              <div className="specialist-editorial-divider" />

              <div className="specialist-focus-heading">
                CONFIRMED CLINICAL EXPERTISE
              </div>

              <div className="specialist-focus-grid">
                <div className="specialist-focus-item">
                  <CheckCircle2 size={16} />
                  <span>First-Trimester Screening (NT Scan)</span>
                </div>
                <div className="specialist-focus-item">
                  <CheckCircle2 size={16} />
                  <span>Detailed Anomaly Evaluation (TIFFA)</span>
                </div>
                <div className="specialist-focus-item">
                  <CheckCircle2 size={16} />
                  <span>Obstetric Doppler Hemodynamics</span>
                </div>
                <div className="specialist-focus-item">
                  <CheckCircle2 size={16} />
                  <span>Targeted Fetal Echocardiography</span>
                </div>
              </div>

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
                  <CalendarCheck size={16} /> Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: APPOINTMENT CTA (Full-Width Deep Rose Section) */}
      <section className="home-cta-fullwidth-section reveal-on-scroll">
        <div className="container">
          <div className="home-cta-inner">
            <span className="home-cta-badge">
              <CalendarCheck size={14} /> PLAN YOUR VISIT
            </span>
            <h2 className="home-cta-heading">
              We're Here to Help You Plan Your Visit
            </h2>
            <p className="home-cta-subtext">
              Contact our centre to enquire about available diagnostic services, appointment timings, and preparation instructions.
            </p>

            <div className="home-cta-button-row">
              <a href="tel:+917799900248" className="btn-cta-white">
                <PhoneCall size={18} /> Call the Centre
              </a>
              <button
                onClick={() => openModal()}
                type="button"
                className="btn-cta-outline-white"
              >
                <CalendarCheck size={18} /> Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: CONTACT & LOCATION (Clean Split Layout) */}
      <section className="home-contact-split-section" id="location">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="text-center reveal-on-scroll" style={{ marginBottom: '3.5rem' }}>
            <span className="home-section-eyebrow">
              <MapPin size={13} /> LOCATION & CONTACT
            </span>
            <h2 className="home-section-heading">
              Visit Our Centre
            </h2>
          </div>

          <div className="home-contact-split-grid">
            {/* Left: Contact Meta Column */}
            <div className="home-contact-meta-col reveal-on-scroll">
              <h3 style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.65rem',
                color: '#202735',
                marginBottom: '1.5rem'
              }}>
                Sai Diagnostics and Fetal Medicine Centre
              </h3>

              <div className="home-contact-item-row">
                <div className="home-contact-icon-bubble">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#202735', fontSize: '0.95rem', marginBottom: '3px' }}>
                    Address
                  </strong>
                  <p style={{ margin: 0, color: '#59616B', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    9th Cross Road, Sai Nagar, Anantapur, Andhra Pradesh 515001, India.
                  </p>
                </div>
              </div>

              <div className="home-contact-item-row">
                <div className="home-contact-icon-bubble">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: '#202735', fontSize: '0.95rem', marginBottom: '3px' }}>
                    Helpline & Appointments
                  </strong>
                  <a 
                    href="tel:+917799900248" 
                    style={{ color: '#C2184B', fontWeight: 700, fontSize: '0.96rem', textDecoration: 'none' }}
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
                  <strong style={{ display: 'block', color: '#202735', fontSize: '0.95rem', marginBottom: '3px' }}>
                    Working & Consultation Hours
                  </strong>
                  <p style={{ margin: 0, color: '#59616B', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    <span style={{ fontWeight: 600, color: '#202735' }}>Monday to Saturday:</span> 8:30 AM – 7:00 PM<br />
                    <span style={{ fontWeight: 600, color: '#C2184B' }}>Sunday:</span> Closed
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
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
                  Contact Page
                </Link>
              </div>
            </div>

            {/* Right: Verified Google Maps Embed */}
            <div className="home-contact-map-frame reveal-on-scroll stagger-2">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
