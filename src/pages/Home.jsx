import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  PhoneCall, 
  CalendarCheck, 
  MapPin, 
  ArrowRight, 
  FileText, 
  Stethoscope, 
  Users, 
  MessageSquare, 
  Navigation, 
  Award,
  CheckCircle2,
  Brain,
  Quote
} from 'lucide-react';
import PregnancyJourneyHero from '../components/home/PregnancyJourneyHero';
import TrustStrip from '../components/home/TrustStrip';
import { useAppointmentModal } from '../components/AppointmentModal';
import './HomeSections.css';

const Home = () => {
  const { openModal } = useAppointmentModal();
  
  useEffect(() => {
    document.title = 'Sai Diagnostics & Fetal Medicine Centre | Advanced Prenatal Care Anantapur';
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-white)', minHeight: '100vh' }}>
      {/* 1. Signature Scroll-Driven Pregnancy Journey Hero — LOCKED & UNCHANGED */}
      <PregnancyJourneyHero />

      {/* 2. Clinical Pillars & Verified Trust Metrics — LOCKED & UNCHANGED */}
      <section className="home-feature-strip-section" aria-label="Clinical Highlights">
        <TrustStrip />
      </section>

      {/* SECTION 1 — ABOUT THE CENTRE */}
      <section className="home-about-section" id="about-centre">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="home-about-grid">
            {/* Story & Context */}
            <div>
              <span className="section-tag" style={{ marginBottom: '0.85rem' }}>
                ● ABOUT THE CENTRE
              </span>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: '#202735',
                lineHeight: 1.2,
                marginBottom: '1.25rem'
              }}>
                Care, Clarity and Confidence
              </h2>
              <p style={{
                color: '#343943',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                marginBottom: '2rem'
              }}>
                Sai Diagnostics and Fetal Medicine Centre is committed to providing personalised diagnostic care and supporting families through important stages of their healthcare journey. We value patient trust, careful fetal assessment, and collaboration with referring doctors.
              </p>

              <Link to="/about" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>

            {/* Founder's Message Card */}
            <div className="home-founder-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(194, 24, 75, 0.08)',
                  color: '#C2184B',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '20px'
                }}>
                  <Heart size={14} /> Founder's Message
                </div>
                <Quote size={28} style={{ color: 'rgba(194, 24, 75, 0.18)', transform: 'rotate(180deg)' }} />
              </div>

              <blockquote style={{
                margin: '0 0 1.5rem',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: '#202735',
                fontStyle: 'normal'
              }}>
                “Recognised for its dedicated care in Rayalaseema, the centre has been involved in the evaluation of rare and complex fetal cases. We continue to value the trust of senior gynaecologists and paediatric specialists while providing personalised care to every patient.”
              </blockquote>

              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(194, 24, 75, 0.25) 0%, rgba(23, 169, 207, 0.25) 50%, transparent 100%)',
                marginBottom: '1rem'
              }} />

              <div>
                <strong style={{ display: 'block', color: '#C2184B', fontSize: '1.05rem', fontFamily: '"Playfair Display", serif' }}>
                  Dr. T. Sai Kiranmai
                </strong>
                <span style={{ fontSize: '0.85rem', color: '#59616B' }}>
                  Consultant Radiologist & Fetal Medicine Specialist • M.B.B.S., DMRD, Fellowship in Fetal Ultrasound
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR SERVICES */}
      <section className="home-services-section" id="services">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag" style={{ marginBottom: '0.75rem' }}>
              ● SPECIALISED SERVICES
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#202735',
              marginBottom: '0.75rem'
            }}>
              Specialised Services for Your Care
            </h2>
            <p style={{
              maxWidth: '680px',
              margin: '0 auto',
              color: '#343943',
              fontSize: '1.02rem',
              lineHeight: 1.7
            }}>
              Explore our diagnostic and fetal imaging services and contact the centre to find out which examination is available and appropriate for your needs.
            </p>
          </div>

          {/* Confirmed Services Grid */}
          <div className="home-services-grid">
            {[
              {
                name: 'NT Scan / First-Trimester Screening',
                desc: 'Early ultrasound screening to assess fetal development, nuchal translucency, and early anatomical milestones.',
                icon: <Activity size={24} />
              },
              {
                name: 'TIFFA / Fetal Anomaly Scan',
                desc: 'Comprehensive mid-trimester detailed anatomical examination surveying structural organ development and growth.',
                icon: <ShieldCheck size={24} />
              },
              {
                name: 'Obstetric Doppler',
                desc: 'Specialised blood flow evaluation measuring uterine, umbilical, and middle cerebral artery circulation.',
                icon: <Heart size={24} />
              },
              {
                name: 'Fetal Echocardiography',
                desc: 'Dedicated high-resolution cardiovascular evaluation assessing fetal cardiac chambers, rhythm, and outflow tracts.',
                icon: <Stethoscope size={24} />
              },
              {
                name: 'Fetal Neurosonogram',
                desc: 'Targeted multi-planar ultrasound evaluation focused on structural development of the fetal brain and central nervous system.',
                icon: <Brain size={24} />
              },
              {
                name: 'Advanced Fetal Imaging',
                desc: 'Detailed 3D/4D ultrasound examinations and specialised maternal-fetal assessments for complex cases.',
                icon: <Sparkles size={24} />
              }
            ].map((service, index) => (
              <div key={index} className="home-service-card">
                <div>
                  <div className="home-service-icon-box">
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    color: '#202735',
                    marginBottom: '0.65rem',
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700
                  }}>
                    {service.name}
                  </h3>
                  <p style={{
                    color: '#59616B',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {service.desc}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(32, 39, 53, 0.08)',
                  paddingTop: '1.25rem',
                  marginTop: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <button
                    onClick={() => openModal()}
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#C2184B',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0
                    }}
                  >
                    Enquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn btn-outline" style={{ padding: '0.85rem 2.25rem' }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MEET OUR SPECIALIST */}
      <section className="home-specialist-section" id="specialist">
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-tag" style={{ marginBottom: '0.75rem' }}>
              ● CLINICAL LEADERSHIP
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#202735',
              marginBottom: '0.75rem'
            }}>
              Dedicated Specialist Care
            </h2>
            <p style={{
              maxWidth: '640px',
              margin: '0 auto',
              color: '#343943',
              fontSize: '1.02rem',
              lineHeight: 1.65
            }}>
              Learn more about our specialist and the fetal imaging services offered at the centre.
            </p>
          </div>

          {/* Text-Focused Professional Profile Layout (No fake photos) */}
          <div className="home-specialist-card">
            <div style={{ height: '5px', background: 'linear-gradient(90deg, #C2184B 0%, #F5B7C8 50%, #17A9CF 100%)' }} />
            <div className="home-specialist-inner">
              {/* Doctor Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #FCE8EE 0%, #E6F7FC 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C2184B',
                    border: '1px solid rgba(194, 24, 75, 0.2)',
                    flexShrink: 0
                  }}>
                    <Stethoscope size={38} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: '#17A9CF',
                      textTransform: 'uppercase',
                      marginBottom: '0.35rem'
                    }}>
                      <CheckCircle2 size={14} /> Consultant Radiologist & Fetal Medicine Specialist
                    </span>
                    <h3 style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)',
                      color: '#202735',
                      margin: 0,
                      lineHeight: 1.2
                    }}>
                      Dr. T. Sai Kiranmai
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#FFF9F5',
                    border: '1px solid rgba(194, 24, 75, 0.16)',
                    padding: '0.6rem 1rem',
                    borderRadius: '12px'
                  }}>
                    <Award size={18} color="#C2184B" />
                    <span style={{ fontWeight: 700, color: '#202735', fontSize: '0.94rem' }}>
                      M.B.B.S., DMRD
                    </span>
                    <span style={{ color: '#59616B', fontSize: '0.84rem' }}>
                      • Medical & Radiology Qualifications
                    </span>
                  </div>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#E6F7FC',
                    border: '1px solid rgba(23, 169, 207, 0.25)',
                    padding: '0.6rem 1rem',
                    borderRadius: '12px'
                  }}>
                    <ShieldCheck size={18} color="#17A9CF" />
                    <span style={{ fontWeight: 700, color: '#17A9CF', fontSize: '0.94rem' }}>
                      Fellowship in Fetal Ultrasound
                    </span>
                  </div>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#FFF9F5',
                    border: '1px solid rgba(32, 39, 53, 0.1)',
                    padding: '0.6rem 1rem',
                    borderRadius: '12px'
                  }}>
                    <Clock size={18} color="#C2184B" />
                    <span style={{ fontWeight: 600, color: '#343943', fontSize: '0.9rem' }}>
                      12+ Years Clinical Practice in Fetal Medicine
                    </span>
                  </div>
                </div>

                <Link to="/doctors" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                  Meet Our Doctor <ArrowRight size={16} />
                </Link>
              </div>

              {/* Doctor Philosophy Card */}
              <div style={{
                background: 'linear-gradient(145deg, #FFFFFF 0%, #FFF8FA 60%, #E6F7FC 100%)',
                borderRadius: '18px',
                border: '1px solid rgba(194, 24, 75, 0.14)',
                borderLeft: '4px solid #C2184B',
                padding: 'clamp(1.75rem, 3vw, 2.25rem)'
              }}>
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#C2184B',
                  marginBottom: '0.75rem',
                  display: 'block'
                }}>
                  CLINICAL COMMITMENT
                </span>

                <blockquote style={{
                  margin: '0 0 1.5rem',
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  color: '#202735',
                  fontStyle: 'normal'
                }}>
                  “Committed to providing careful fetal imaging and personalised attention, with a focus on helping expectant parents understand their examinations and receive appropriate guidance.”
                </blockquote>

                <div style={{
                  background: 'rgba(23, 169, 207, 0.08)',
                  borderRadius: '12px',
                  padding: '0.9rem 1.15rem',
                  border: '1px solid rgba(23, 169, 207, 0.18)',
                  fontSize: '0.88rem',
                  color: '#343943',
                  lineHeight: 1.55
                }}>
                  <div><strong>Consultation Timings:</strong> Monday to Saturday, 9:00 AM – 7:00 PM</div>
                  <div><strong>Location:</strong> 9th Cross Road, Sai Nagar, Anantapur, AP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — YOUR VISIT, MADE SIMPLE */}
      <section className="home-timeline-section" id="how-it-works">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag" style={{ marginBottom: '0.75rem' }}>
              ● CLEAR & TRANSPARENT PROCESS
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#202735',
              marginBottom: '0.75rem'
            }}>
              A Simple Path to Your Appointment
            </h2>
            <p style={{
              maxWidth: '620px',
              margin: '0 auto',
              color: '#343943',
              fontSize: '1.02rem',
              lineHeight: 1.65
            }}>
              Four straightforward steps designed to ensure comfortable scheduling, clear guidance, and thoughtful care.
            </p>
          </div>

          <div className="home-timeline-grid">
            {[
              {
                step: 'Step 1',
                title: 'Contact Us',
                desc: 'Tell us which scan or diagnostic service you want to enquire about.',
                icon: <MessageSquare size={22} />
              },
              {
                step: 'Step 2',
                title: 'Discuss Your Visit',
                desc: 'Confirm service availability, appointment timing, and any preparation instructions.',
                icon: <CalendarCheck size={22} />
              },
              {
                step: 'Step 3',
                title: 'Visit the Centre',
                desc: 'Bring relevant referrals, previous reports, and medical records where applicable.',
                icon: <MapPin size={22} />
              },
              {
                step: 'Step 4',
                title: 'Follow Your Care Plan',
                desc: 'Discuss your results and next steps with your healthcare professional.',
                icon: <FileText size={22} />
              }
            ].map((item, idx) => (
              <div key={idx} className="home-timeline-card">
                <span className="home-timeline-step-badge">
                  {item.step}
                </span>
                <div style={{ color: '#C2184B', marginBottom: '0.75rem' }}>
                  {item.icon}
                </div>
                <h4 style={{
                  fontSize: '1.15rem',
                  color: '#202735',
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  marginBottom: '0.5rem'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: '#59616B',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY PATIENTS VALUE OUR CARE */}
      <section className="home-values-section" id="why-choose-us">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag" style={{ marginBottom: '0.75rem' }}>
              ● PATIENT-CENTRED VALUES
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#202735',
              marginBottom: '0.75rem'
            }}>
              Care That Puts Patients First
            </h2>
            <p style={{
              maxWidth: '620px',
              margin: '0 auto',
              color: '#343943',
              fontSize: '1.02rem',
              lineHeight: 1.65
            }}>
              Our clinical practice is grounded in thoughtful listening, precise imaging, and collaborative communication.
            </p>
          </div>

          <div className="home-values-grid">
            {[
              {
                title: 'Personalised Attention',
                desc: "Respectful attention to each patient's needs.",
                icon: <Heart size={26} color="#C2184B" />
              },
              {
                title: 'Diagnostic Focus',
                desc: 'Services intended to support appropriate clinical assessment.',
                icon: <ShieldCheck size={26} color="#17A9CF" />
              },
              {
                title: 'Clear Communication',
                desc: 'Helpful information about appointments and examinations.',
                icon: <MessageSquare size={26} color="#C2184B" />
              },
              {
                title: 'Doctor Collaboration',
                desc: 'Coordination with referring healthcare professionals where applicable.',
                icon: <Users size={26} color="#17A9CF" />
              }
            ].map((card, i) => (
              <div key={i} className="home-value-card">
                <div style={{ marginBottom: '1rem' }}>{card.icon}</div>
                <h4 style={{
                  fontSize: '1.15rem',
                  color: '#202735',
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  marginBottom: '0.5rem'
                }}>
                  {card.title}
                </h4>
                <p style={{
                  color: '#59616B',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — APPOINTMENT CALL TO ACTION */}
      <section className="home-cta-section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tag" style={{ marginBottom: '0.85rem' }}>
            ● PLAN YOUR VISIT
          </span>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
            color: '#202735',
            lineHeight: 1.25,
            marginBottom: '1rem'
          }}>
            We're Here to Help You Plan Your Visit
          </h2>
          <p style={{
            color: '#343943',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: '0 auto 2.25rem'
          }}>
            Contact Sai Diagnostics and Fetal Medicine Centre to enquire about available services, appointment timings, and examination preparation.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+917799900248" className="btn btn-primary" style={{ padding: '0.9rem 2.25rem' }}>
              <PhoneCall size={18} /> Call the Centre
            </a>
            <button
              onClick={() => openModal()}
              type="button"
              className="btn btn-outline"
              style={{ backgroundColor: '#FFFFFF', padding: '0.9rem 2.25rem', cursor: 'pointer' }}
            >
              <CalendarCheck size={18} /> Book an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CONTACT AND LOCATION */}
      <section className="home-location-section" id="location">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag" style={{ marginBottom: '0.75rem' }}>
              ● LOCATION & CONTACT
            </span>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#202735',
              marginBottom: '0.75rem'
            }}>
              Visit Our Centre
            </h2>
          </div>

          <div className="home-location-grid">
            {/* Contact Details */}
            <div>
              <h3 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.6rem',
                color: '#202735',
                marginBottom: '1.25rem'
              }}>
                Sai Diagnostics and Fetal Medicine Centre
              </h3>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1.25rem' }}>
                <MapPin size={20} color="#C2184B" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', color: '#202735', marginBottom: '2px', fontSize: '0.95rem' }}>
                    Address
                  </strong>
                  <p style={{ margin: 0, color: '#59616B', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    9th Cross Road, Sai Nagar, Anantapur, Andhra Pradesh 515001, India.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1.25rem' }}>
                <PhoneCall size={20} color="#C2184B" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', color: '#202735', marginBottom: '2px', fontSize: '0.95rem' }}>
                    Phone Helpline
                  </strong>
                  <a href="tel:+917799900248" style={{ color: '#C2184B', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
                    +91 77999 00248
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1.75rem' }}>
                <Clock size={20} color="#C2184B" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ display: 'block', color: '#202735', marginBottom: '2px', fontSize: '0.95rem' }}>
                    Working Hours
                  </strong>
                  <p style={{ margin: 0, color: '#59616B', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Monday to Saturday, 9:00 AM – 7:00 PM (Sunday Closed)
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 1.75rem' }}
                >
                  <Navigation size={16} /> Get Directions
                </a>

                <Link
                  to="/contact"
                  className="btn btn-outline"
                  style={{ padding: '0.75rem 1.75rem', backgroundColor: '#FFFFFF' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Verified Google Maps Embed */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(32, 39, 53, 0.08)',
              border: '1px solid rgba(23, 169, 207, 0.2)',
              height: '380px',
              background: '#F4FAFD'
            }}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=9th%20Cross%20Rd,%20Sai%20Nagar,%20Anantapur,%20Andhra%20Pradesh%20515001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Sai Diagnostics Clinic Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
