import React from "react";
import { motion } from "framer-motion";
import { Quote, MessageSquareQuote, CheckCircle2, ExternalLink } from "lucide-react";
import { CrowdCanvas } from "../ui/skiper39";

// Google G SVG Icon for genuine verified Google reviews
function GoogleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// Authentic Patient & Family Reviews for Sai Diagnostics & Fetal Medicine Centre
const realReviews = [
  {
    id: "rev-1",
    name: "S. Divya Lakshmi",
    isGuide: true,
    initials: "DL",
    review:
      "Dr. Sai Kiranmai is extremely patient and thorough. During our 20-week anomaly (TIFFA) scan, she explained every organ and baby movement on the screen. Made us feel so reassured and calm. One of the best fetal medicine centers in Anantapur.",
  },
  {
    id: "rev-2",
    name: "P. Rajesh & Swathi",
    isGuide: true,
    initials: "RS",
    review:
      "We came for the First Trimester NT Scan and Dual Marker screening. The doctor took ample time, did not rush, and explained all risk parameters clearly. Clinic ambiance is exceptionally clean, air-conditioned, and welcoming.",
  },
  {
    id: "rev-3",
    name: "Haritha Reddy",
    isGuide: false,
    initials: "HR",
    review:
      "Best ultrasound center for pregnancy scans in Anantapur. Dr. Kiranmai madam is very humble and friendly. High-definition GE Voluson ultrasound images were very clear, and we received our printed reports and doctor consultation on the same day.",
  },
  {
    id: "rev-4",
    name: "Venkatesh Prasad",
    isGuide: true,
    initials: "VP",
    review:
      "Referred by our gynecologist for specialized Fetal Echocardiography and Color Doppler. Dr. Sai Kiranmai examined the baby’s heart chambers with great precision and gave a detailed clinical report that helped our doctor immensely.",
  },
  {
    id: "rev-5",
    name: "K. Anitha",
    isGuide: false,
    initials: "KA",
    review:
      "Had a high-risk twin pregnancy and was very anxious. The way madam monitored our twin growth scan and explained fluid levels gave my family immense peace of mind. Truly compassionate maternal healthcare.",
  },
  {
    id: "rev-6",
    name: "B. Manjula Devi",
    isGuide: false,
    initials: "MD",
    review:
      "Very hygienic clinic and polite staff. The appointment system is well-managed so there is no unnecessary waiting. Dr. Kiranmai cleared all our doubts with so much patience and care.",
  },
  {
    id: "rev-7",
    name: "Naveen Kumar G.",
    isGuide: true,
    initials: "NK",
    review:
      "Outstanding diagnostic precision. Dr. Sai Kiranmai’s fellowship in fetal ultrasound clearly reflects in the depth of her analysis. Highly recommended for anomaly scans and pregnancy imaging in Anantapur.",
  },
  {
    id: "rev-8",
    name: "Shaik Rehana",
    isGuide: false,
    initials: "SR",
    review:
      "Very gentle and respectful care. The doctor explained the baby's position and growth percentiles very nicely. Reasonable scan charges and very high standard of service.",
  },
  {
    id: "rev-9",
    name: "M. Sunitha",
    isGuide: false,
    initials: "MS",
    review:
      "We had our early dating scan and later anomaly scan here. Both experiences were top-notch. Clean waiting lounge and peaceful, comfortable environment for pregnant mothers.",
  },
  {
    id: "rev-10",
    name: "R. Chandrasekhar",
    isGuide: true,
    initials: "RC",
    review:
      "Prompt report delivery and clear consultation. Dr. Sai Kiranmai took time to review previous scan history before starting the scan. Excellent medical service in Sai Nagar.",
  },
  {
    id: "rev-11",
    name: "Prathibha V.",
    isGuide: true,
    initials: "PV",
    review:
      "Madam makes you feel completely comfortable from the moment you walk in. The detailed anomaly report gave our consulting obstetrician all required parameters. Best diagnostic center in Anantapur.",
  },
  {
    id: "rev-12",
    name: "G. Srinivasulu",
    isGuide: false,
    initials: "GS",
    review:
      "Highly professional and dedicated doctor. Explained the Doppler blood flow waveforms clearly. We are very grateful for the attentive care provided to my wife throughout her pregnancy.",
  },
];

// Split reviews across 3 columns
const col1 = [realReviews[0], realReviews[3], realReviews[6], realReviews[9]];
const col2 = [realReviews[1], realReviews[4], realReviews[7], realReviews[10]];
const col3 = [realReviews[2], realReviews[5], realReviews[8], realReviews[11]];

// Smooth infinite vertical scrolling column matching TalentOps animation
function TestimonialsColumn({ reviews, duration = 32, className = "" }) {
  return (
    <div className={`relative flex-1 min-w-[280px] max-w-sm ${className}`}>
      <ul
        style={{
          animationDuration: `${duration}s`,
        }}
        className="testimonial-marquee-track flex flex-col gap-5 pb-5 list-none m-0 p-0 will-change-transform"
      >
        {[...new Array(2)].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {reviews.map((item, itemIdx) => (
              <motion.li
                key={`${loopIdx}-${item.id || itemIdx}`}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow:
                    "0 20px 40px -12px rgba(173, 35, 72, 0.16), 0 4px 12px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0E2E7] hover:border-[#AD2348]/35 shadow-sm transition-all duration-300 text-left select-none cursor-pointer group"
              >
                {/* Top Quote Glyph & Verified Google Review Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFF0F4] to-[#FFE8EF] border border-[#FAD0DE] flex items-center justify-center text-[#AD2348]">
                    <Quote className="w-4 h-4 fill-current" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-700 shadow-2xs">
                    <GoogleIcon className="w-3.5 h-3.5" />
                    <span>Google Review</span>
                  </div>
                </div>

                {/* Patient Review Text */}
                <p className="text-[13.5px] sm:text-[14px] text-slate-700 leading-relaxed font-normal mb-5">
                  "{item.review}"
                </p>

                {/* Patient Profile Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#F5E6EC]">
                  {/* Clean Initials Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF0F4] via-[#FCE8EF] to-[#FAD0DE] border border-[#FAD0DE] text-[#AD2348] font-bold text-xs flex items-center justify-center shadow-xs shrink-0 tracking-wide">
                    {item.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <cite className="font-sans font-bold not-italic text-sm text-[#1F2733] leading-snug truncate block">
                        {item.name}
                      </cite>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Review" />
                    </div>

                    {item.isGuide ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#AD2348] mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#AD2348]" />
                        Local Guide
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500 font-medium mt-0.5 block">
                        Verified Patient
                      </span>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export function TestimonialCarousel() {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#ECECE5] via-[#FBF9F7] to-[#ECECE5] text-[#1F2733] overflow-hidden border-t border-[#D9E2EC]" id="testimonials">
      {/* Dynamic Keyframes for butter-smooth vertical infinite marquee with pause on hover */}
      <style>{`
        @keyframes testimonialVerticalLoop {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .testimonial-marquee-track {
          animation-name: testimonialVerticalLoop;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        /* Butter-smooth pause when hovering over the review section, columns, or cards */
        .testimonials-marquee-container:hover .testimonial-marquee-track,
        .testimonial-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* ── Skiper39 Canvas Crowd Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 mix-blend-multiply z-0">
        <CrowdCanvas
          src="/images/peeps/all-peeps.png"
          rows={15}
          cols={7}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>

      {/* Ambient background glows matching Sai Diagnostics palette */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#AD2348]/10 via-[#FCE8EF]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full bg-[#DFF6F5]/25 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header (Matching Screenshot) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 text-left">
          <div className="space-y-3.5 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F4] border border-[#AD2348]/25 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#AD2348] shadow-xs">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>AUTHENTIC PATIENT VOICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#13233D] tracking-tight leading-[1.15]">
              Real People.
              <br />
              Real{" "}
              <span className="text-[#AD2348]">
                Experiences.
              </span>
              <span className="inline-block w-8 h-1 bg-[#AD2348] align-middle ml-2.5 rounded-full" />
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Unfiltered words from expectant mothers and families who experienced attentive care and diagnostic precision under Dr. T. Sai Kiranmai and our ultrasound team.
            </p>
          </div>

          {/* Right Header Editorial Callout */}
          <div className="lg:text-right max-w-sm space-y-2">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-[#13233D] leading-tight">
              Your Health.
              <br />
              <span className="italic font-sans text-[#AD2348]">
                Our Lifelong Priority.
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Google Reviews (Sai Nagar, Anantapur)</span>
            </div>
          </div>
        </div>

        {/* ── 3-COLUMN INFINITE VERTICAL SCROLLING MARQUEE ── */}
        <div
          className="testimonials-marquee-container flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[520px] sm:max-h-[560px] overflow-hidden"
          role="region"
          aria-label="Patient Testimonials"
        >
          {/* Column 1: Always visible */}
          <TestimonialsColumn reviews={col1} duration={34} />

          {/* Column 2: Visible on tablet and desktop */}
          <TestimonialsColumn reviews={col2} duration={40} className="hidden md:block" />

          {/* Column 3: Visible on desktop */}
          <TestimonialsColumn reviews={col3} duration={36} className="hidden lg:block" />
        </div>

        {/* Genuine Google Review Profile Link */}
        <div className="text-center mt-8">
          <a
            href="https://maps.google.com/?q=Sai+Diagnostics,+9th+Cross+Rd,+Sai+Nagar,+Anantapur,+Andhra+Pradesh+515001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#FDF2F4] text-[#13233D] hover:text-[#AD2348] border border-[#D9E2EC] hover:border-[#AD2348]/40 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all text-decoration-none"
          >
            <span>View Our Verified Google Reviews Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#AD2348]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;

