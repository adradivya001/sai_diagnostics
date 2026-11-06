import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Phone,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  User,
  Stethoscope,
  ChevronRight,
  Info
} from "lucide-react";
import {
  getServiceBySlug,
  services,
  FETAL_MEDICINE_SCANS,
  GENERAL_DIAGNOSTIC_SCANS
} from "../data/services";
import { doctors } from "../data/doctors";
import { useAppointmentModal } from "../components/AppointmentModal";
import "./ServiceDetail.css";

export function ServiceDetailPage() {
  const { openModal } = useAppointmentModal();
  const { slug } = useParams();

  // Default to the flagship scan (Anomaly / TIFFA Scan) if no slug is specified in the URL
  const activeSlug = slug || "anomaly-tiffa-scan";
  const service = getServiceBySlug(activeSlug) || services[4] || services[0];

  const [activeFaq, setActiveFaq] = useState(null);

  const doctor = doctors[0] || {
    name: "Dr. T. Sai Kiranmai",
    qualifications: "M.B.B.S., DMRD",
    fellowship: "Fellowship in Fetal Ultrasound",
    title: "Consultant Radiologist & Fetal Medicine Specialist",
    availability: "OPD: Mon – Sat | 08:30 AM – 07:00 PM",
    bio: "Specialist in Maternal-Fetal Ultrasound, First & Mid-Trimester Screening, Fetal Echocardiography, and High-Risk Doppler Assessments. Meticulous reporting and compassionate parent counselling."
  };

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | Sai Diagnostics & Fetal Medicine Centre`;
      window.scrollTo(0, 0);
    }
  }, [service]);

  const quickJumpLinks = [
    { label: "About", href: "#about-speciality" },
    { label: "Diagnostic Focus", href: "#conditions-treated" },
    { label: "What It Evaluates", href: "#treatments-services" },
    { label: "Specialists", href: "#consultant-doctors" },
    { label: "FAQs", href: "#speciality-faqs" }
  ];

  // Combined scans list for the department switcher strip
  const switcherScans = [...FETAL_MEDICINE_SCANS, ...GENERAL_DIAGNOSTIC_SCANS];

  return (
    <div className="service-detail-page">
      
      {/* ── 1. HERO SECTION (MATCHING REFERENCE SCREENSHOT) ── */}
      <section className="sd-hero">
        <div className="sd-container">
          <div className="sd-hero-content">
            
            {/* Breadcrumbs: HOME > DEPARTMENTS > [DEPARTMENT NAME] */}
            <nav aria-label="Breadcrumb" className="sd-breadcrumbs">
              <Link to="/" className="sd-breadcrumb-link">HOME</Link>
              <ChevronRight className="sd-breadcrumb-sep" />
              <Link to="/services" className="sd-breadcrumb-link">DEPARTMENTS</Link>
              <ChevronRight className="sd-breadcrumb-sep" />
              <span className="sd-breadcrumb-active">{service.name.toUpperCase()}</span>
            </nav>

            {/* Badges: [MEDICAL DEPARTMENT] [SPECIALITY DEPARTMENT] */}
            <div className="sd-badges-row">
              <span className="sd-badge-navy">
                <Stethoscope size={13} style={{ color: "#B2CEE2" }} />
                <span>{(service.category || "MEDICAL DEPARTMENT").toUpperCase()}</span>
              </span>
              <span className="sd-badge-blue">
                <span>SPECIALITY DEPARTMENT</span>
              </span>
            </div>

            {/* Heading & Subtitle */}
            <div>
              <h1 className="sd-hero-title">
                {service.name}
              </h1>
              <p className="sd-hero-subtitle">
                {service.purpose || service.shortDescription}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="sd-hero-actions">
              <button
                type="button"
                onClick={() => openModal(service.name)}
                className="sd-btn-primary"
              >
                <Calendar size={16} />
                <span>Book an Appointment</span>
              </button>
              <a href="tel:+917799900248" className="sd-btn-secondary">
                <Phone size={16} style={{ color: "#3A4F99" }} />
                <span>Call 24/7: +91 77999 00248</span>
              </a>
            </div>

            {/* Department Quick Switcher Strip */}
            <div className="sd-dept-switcher-strip">
              <span className="sd-dept-switcher-label">
                Select Department:
              </span>
              {switcherScans.map((s) => {
                const isCurrent = s.slug === service.slug || s.name.toLowerCase() === service.name.toLowerCase();
                return (
                  <Link
                    key={s.slug || s.id}
                    to={`/services/${s.slug}`}
                    className={`sd-dept-pill ${isCurrent ? "active" : "inactive"}`}
                  >
                    {s.name}
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. STICKY QUICK-JUMP SUB-NAVIGATION (MATCHING SCREENSHOT) ── */}
      <div className="sd-sticky-nav">
        <div className="sd-container">
          <div className="sd-sticky-inner">
            <div className="sd-quickjump-group">
              <span className="sd-quickjump-label">
                QUICK JUMP:
              </span>
              <div className="sd-quickjump-pills">
                {quickJumpLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="sd-quickjump-link"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => openModal(service.name)}
              className="sd-btn-quick-book"
            >
              Book OPD Slot
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. ABOUT THIS SPECIALITY & HERO PHOTOGRAPH (MATCHING SCREENSHOT) ── */}
      <section id="about-speciality" className="sd-section-about">
        <div className="sd-container">
          <div className="sd-about-grid">
            
            {/* Left Content */}
            <div className="sd-about-left">
              <div className="sd-badge-about">
                <span className="sd-dot-orange" />
                <span>ABOUT THIS SPECIALITY</span>
              </div>

              <h2 className="sd-about-heading">
                Dedicated Care for Your Health
              </h2>

              <p className="sd-about-text">
                {service.introduction}
              </p>

              <div className="sd-about-info-grid">
                <div className="sd-info-box">
                  <div className="sd-info-label">
                    DEPARTMENT GROUP
                  </div>
                  <div className="sd-info-val">
                    {service.category}
                  </div>
                </div>

                <div className="sd-info-box">
                  <div className="sd-info-label">
                    AVAILABILITY &amp; TIMING
                  </div>
                  <div className="sd-info-val">
                    OPD: Mon – Sat | 08:30 AM – 07:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Right Relevant Department Image with Gradient & Badge */}
            <div className="sd-about-right">
              <div className="sd-image-frame">
                <img
                  src={service.image || "/anomaly-scan.jpg"}
                  alt={`${service.name} at Sai Diagnostics`}
                  className="sd-image-element"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/anomaly-scan.jpg";
                  }}
                />
                <div className="sd-image-gradient" />
                <div className="sd-image-content">
                  <span className="sd-image-tag-orange">
                    SAI DIAGNOSTICS
                  </span>
                  <p className="sd-image-caption">
                    {service.name} Department
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. DIAGNOSTIC FOCUS & WHAT THIS SCAN EVALUATES ── */}
      <section id="conditions-treated" className="sd-section-two-cards">
        <div className="sd-container">
          <div className="sd-two-cards-grid">
            
            {/* Left Card: Diagnostic Focus */}
            <div className="sd-card-white">
              <div className="sd-card-header">
                <span className="sd-card-tag-navy">
                  CLINICAL EVALUATION
                </span>
                <h3 className="sd-card-title">
                  Diagnostic Focus
                </h3>
                <p className="sd-card-subtitle" style={{ fontSize: '0.94rem', lineHeight: 1.7, color: '#334155' }}>
                  {service.diagnosticFocus || service.purpose || service.shortDescription}
                </p>
              </div>

              {service.procedure && (
                <div style={{ marginTop: '1.25rem', padding: '14px 18px', background: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0B7F8C', marginBottom: '4px' }}>
                    Clinical Protocol
                  </div>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                    {service.procedure}
                  </p>
                </div>
              )}
            </div>

            {/* Right Card: What This Scan Evaluates */}
            <div id="treatments-services" className="sd-card-white">
              <div className="sd-card-header">
                <span className="sd-card-tag-teal">
                  ANATOMICAL &amp; SCREENING SCOPE
                </span>
                <h3 className="sd-card-title">
                  What This Scan Evaluates
                </h3>
                <p className="sd-card-subtitle" style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#334155', marginBottom: '1.25rem' }}>
                  {service.evaluates || "This comprehensive ultrasound assessment examines key anatomical structures and clinical markers:"}
                </p>
              </div>

              <ul className="sd-check-list">
                {(service.evaluatesList || service.conditions || service.whatItChecks || []).map((item, idx) => (
                  <li key={idx} className="sd-check-item">
                    <div className="sd-icon-circle-teal">
                      <CheckCircle2 size={13} strokeWidth={2.5} />
                    </div>
                    <span className="sd-check-text">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. WHEN TO CONSULT OUR SPECIALISTS (MATCHING SCREENSHOT) ── */}
      <section className="sd-section-advisory">
        <div className="sd-container">
          <div className="sd-advisory-container">
            <div className="sd-advisory-box">
              <div className="sd-advisory-header">
                <div>
                  <span className="sd-advisory-tag">
                    PATIENT ADVISORY
                  </span>
                  <h3 className="sd-advisory-title">
                    When to Consult Our {service.name} Specialists
                  </h3>
                </div>
                <a
                  href="tel:+917799900248"
                  className="sd-advisory-btn-call"
                >
                  <Phone size={13} fill="currentColor" />
                  <span>Call +91 77999 00248</span>
                </a>
              </div>

              {/* Compact Inline Pill Badges */}
              <div className="sd-pills-row">
                {(service.whenToConsult || []).map((point, idx) => (
                  <div key={idx} className="sd-advisory-pill">
                    <span className="sd-dot-red" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. OUR SPECIALISTS (MATCHING SCREENSHOT) ── */}
      <section id="consultant-doctors" className="sd-section-specialists">
        <div className="sd-container">
          <div className="sd-specialists-header">
            <span className="sd-specialists-tag">
              EXPERIENCED MEDICAL LEADERSHIP
            </span>
            <h2 className="sd-specialists-title">
              Our {service.name} Specialists
            </h2>
            <p className="sd-specialists-subtitle">
              Consult verified doctors providing diagnostic imaging and specialist fetal evaluations at Sai Diagnostics.
            </p>
          </div>

          <div className="sd-doctor-card">
            <div className="sd-doctor-profile">
              <div className="sd-doctor-avatar-box">
                <User size={30} />
              </div>
              <div>
                <h3 className="sd-doctor-name">
                  {doctor.name}
                </h3>
                <div className="sd-doctor-deg">
                  {doctor.qualifications} · {doctor.fellowship}
                </div>
                <div className="sd-doctor-title">
                  {doctor.title}
                </div>
              </div>
            </div>

            <p className="sd-doctor-bio">
              {doctor.bio}
            </p>

            <div className="sd-doctor-timing">
              <Clock size={14} className="sd-icon-orange" />
              <span>{doctor.availability || "OPD: Mon – Sat | 08:30 AM – 07:00 PM"}</span>
            </div>

            <button
              type="button"
              onClick={() => openModal(service.name)}
              className="sd-btn-consult"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── 7. FREQUENTLY ASKED QUESTIONS (MATCHING SCREENSHOT) ── */}
      <section id="speciality-faqs" className="sd-section-faqs">
        <div className="sd-container">
          <div className="sd-faqs-header">
            <span className="sd-faqs-tag">
              CLEAR ANSWERS FOR PATIENTS
            </span>
            <h2 className="sd-faqs-title">
              Frequently Asked Questions
            </h2>
            <p className="sd-faqs-subtitle">
              Common questions about {service.name} appointments and hospital care.
            </p>
          </div>

          <div className="sd-faqs-list">
            {(service.faqs || []).map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="sd-faq-card">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="sd-faq-btn"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`sd-faq-chevron ${isOpen ? "rotate" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="sd-faq-answer">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. BOOKING DESK CTA STRIP ── */}
      <section className="sd-section-cta">
        <div className="sd-container">
          <div className="sd-cta-card">
            <div className="sd-cta-content">
              <span className="sd-cta-tag">
                APPOINTMENT DESK
              </span>
              <h3 className="sd-cta-title">
                Ready to Schedule Your {service.name}?
              </h3>
              <p className="sd-cta-desc">
                Connect directly with our reception desk for appointment timing confirmation and scan preparation guidelines.
              </p>
            </div>
            <div className="sd-cta-actions">
              <button
                type="button"
                onClick={() => openModal(service.name)}
                className="sd-btn-primary"
              >
                Book Appointment Online
              </button>
              <a
                href="https://wa.me/917799900248?text=Hello%20Sai%20Diagnostics,%20I%20would%20like%20to%20schedule%20a%20scan%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="sd-btn-wa"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ServiceDetailPage;
