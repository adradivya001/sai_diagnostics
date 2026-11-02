import { useState, useMemo, useEffect } from 'react';
import { services } from '../data/services';
import { 
  Search, 
  X, 
  CheckCircle2, 
  Info, 
  Activity, 
  Clock, 
  PhoneCall, 
  CalendarCheck,
  Stethoscope,
  Filter,
  Eye,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { useAppointmentModal } from '../components/AppointmentModal';
import { 
  ScrollReveal, 
  HeadingReveal 
} from '../components/motion/MotionReveal';

// Structured Clinical Categories
const SERVICE_CATEGORIES = [
  'All Services',
  'Pregnancy & Early Scans',
  'Fetal Medicine & Advanced Scans',
  'Growth & Doppler Studies',
  'General Ultrasound',
  'Other Diagnostic Investigations'
];

// Map each service in database to a clinical category
const mapServiceToCategory = (service) => {
  const name = service.name.toLowerCase();
  const cat = service.category;

  if (name.includes('dating') || name.includes('viability') || (name.includes('nuchal') || name.includes('nt scan'))) {
    return 'Pregnancy & Early Scans';
  }
  if (name.includes('anomaly') || name.includes('tifa') || name.includes('echo') || name.includes('neurosonogram') || name.includes('pelvis 3d')) {
    return 'Fetal Medicine & Advanced Scans';
  }
  if (name.includes('doppler') || name.includes('growth') || name.includes('wellbeing')) {
    return 'Growth & Doppler Studies';
  }
  if (cat === 'General Ultrasound Scans' || cat === 'Fertility Follow-Up' || name.includes('abdomen') || name.includes('thyroid') || name.includes('breast')) {
    return 'General Ultrasound';
  }
  return 'Other Diagnostic Investigations';
};

const Services = () => {
  const { openModal } = useAppointmentModal();
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalTest, setActiveModalTest] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalTest(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (activeModalTest) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalTest]);

  // Set document title
  useEffect(() => {
    document.title = 'Diagnostic Scans & Services | Sai Diagnostics Anantapur';
  }, []);

  // Reset pagination count when category or search changes
  useEffect(() => {
    setVisibleCount(9);
  }, [selectedCategory, searchQuery]);

  // Enrich services with mapped categories
  const enrichedServices = useMemo(() => {
    return services.map(s => ({
      ...s,
      clinicalCategory: mapServiceToCategory(s)
    }));
  }, []);

  // Filtered services based on search and category
  const filteredServices = useMemo(() => {
    return enrichedServices.filter((service) => {
      const matchesCategory = 
        selectedCategory === 'All Services' || service.clinicalCategory === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        service.name.toLowerCase().includes(q) ||
        service.purpose.toLowerCase().includes(q) ||
        service.procedure.toLowerCase().includes(q) ||
        service.clinicalCategory.toLowerCase().includes(q) ||
        (service.whatItChecks && service.whatItChecks.some(item => item.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [enrichedServices, selectedCategory, searchQuery]);

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    const counts = { 'All Services': enrichedServices.length };
    SERVICE_CATEGORIES.forEach(cat => {
      if (cat !== 'All Services') {
        counts[cat] = enrichedServices.filter(s => s.clinicalCategory === cat).length;
      }
    });
    return counts;
  }, [enrichedServices]);

  // Paginated slice
  const displayedServices = useMemo(() => {
    // If user is searching, show all matches to avoid pagination confusion
    if (searchQuery.trim()) {
      return filteredServices;
    }
    return filteredServices.slice(0, visibleCount);
  }, [filteredServices, visibleCount, searchQuery]);

  const hasMore = !searchQuery.trim() && visibleCount < filteredServices.length;

  return (
    <div style={{ background: '#FFFDFB', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* =========================================================================
          SECTION 1: SERVICES PAGE INTRODUCTION (Compact Gradient Banner)
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(135deg, #FDF2F4 0%, #FFF9F5 50%, #E8F8FA 100%)',
        color: '#1F2733',
        padding: 'clamp(3rem, 5vw, 4rem) 1.5rem clamp(2.5rem, 4vw, 3.25rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(173, 35, 72, 0.1)'
      }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal direction="down" delay={0.05}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#AD2348',
              background: 'rgba(173, 35, 72, 0.08)',
              border: '1px solid rgba(173, 35, 72, 0.18)',
              padding: '4px 14px',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}>
              ● COMPREHENSIVE CLINICAL DIAGNOSTICS
            </span>
          </ScrollReveal>

          <HeadingReveal delay={0.1}>
            <h1 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
              color: '#1F2733',
              marginBottom: '1rem',
              lineHeight: 1.18
            }}>
              Diagnostic Services and Specialised Scans
            </h1>
          </HeadingReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p style={{
              fontSize: '1.05rem',
              color: '#5B687B',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 2rem'
            }}>
              Explore our diagnostic and fetal imaging services designed to support pregnancy assessments and other clinical investigations.
            </p>
          </ScrollReveal>

          {/* =========================================================================
              SECTION 2: SERVICE SEARCH BAR
              ========================================================================= */}
          <ScrollReveal direction="up" delay={0.2}>
            <div style={{ maxWidth: '580px', margin: '0 auto', position: 'relative' }}>
              <Search 
                size={20} 
                style={{ 
                  position: 'absolute', 
                  left: '18px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: '#AD2348' 
                }} 
              />
              <input
                type="text"
                placeholder="Search diagnostic services (e.g. TIFFA, NT, Doppler, Anomaly)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 3.2rem 0.95rem 3.2rem',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(173, 35, 72, 0.22)',
                  background: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxShadow: '0 8px 24px rgba(173, 35, 72, 0.08)',
                  color: '#1F2733',
                  boxSizing: 'border-box'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#FDF2F4',
                    border: 'none',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#AD2348'
                  }}
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Main Services Container */}
      <div className="container" style={{ marginTop: '2.5rem', marginBottom: '5rem' }}>
        
        {/* =========================================================================
            SECTION 3: CATEGORY FILTERS
            ========================================================================= */}
        <div style={{ marginBottom: '2.25rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '0.85rem',
            color: '#647184',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}>
            <Filter size={15} color="#AD2348" /> Filter by Medical Category
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.65rem 1.15rem',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    border: isActive ? '1.5px solid #AD2348' : '1.5px solid rgba(173, 35, 72, 0.14)',
                    background: isActive ? '#AD2348' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#1F2733',
                    boxShadow: isActive ? '0 4px 14px rgba(173, 35, 72, 0.22)' : '0 2px 6px rgba(0,0,0,0.03)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>{cat}</span>
                  <span style={{
                    background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(173, 35, 72, 0.08)',
                    color: isActive ? '#FFFFFF' : '#AD2348',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '9999px'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter / Filter Indicator Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '2rem',
          paddingBottom: '0.85rem',
          borderBottom: '1px solid rgba(173, 35, 72, 0.1)'
        }}>
          <div style={{ fontSize: '0.94rem', color: '#5B687B' }}>
            Showing <strong>{displayedServices.length}</strong> of <strong>{filteredServices.length}</strong> services
            {selectedCategory !== 'All Services' && (
              <span> in <em>{selectedCategory}</em></span>
            )}
            {searchQuery && (
              <span> matching &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
            )}
          </div>

          {(selectedCategory !== 'All Services' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Services');
                setSearchQuery('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#AD2348',
                fontWeight: 700,
                fontSize: '0.86rem',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '4.5rem 2rem',
            textAlign: 'center',
            border: '1.5px dashed rgba(173, 35, 72, 0.25)',
            margin: '2rem 0'
          }}>
            <Stethoscope size={48} color="#AD2348" style={{ margin: '0 auto 1.25rem' }} />
            <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.45rem', color: '#1F2733', marginBottom: '0.5rem' }}>
              No Matching Services Found
            </h3>
            <p style={{ color: '#5B687B', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.65 }}>
              We couldn't find any scan matching your search criteria. Try a different test name or reset filters to browse all services.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Services');
                setSearchQuery('');
              }}
              className="btn btn-primary"
              style={{ borderRadius: '9999px', padding: '0.75rem 1.85rem' }}
            >
              View All Services
            </button>
          </div>
        )}

        {/* =========================================================================
            SECTION 4: SERVICE CARDS GRID (3 Columns Desktop, 2 Tablet, 1 Mobile)
            ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '1.85rem',
          alignItems: 'stretch'
        }}>
          {displayedServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveModalTest(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalTest(service);
                }
              }}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid rgba(173, 35, 72, 0.12)',
                boxShadow: '0 4px 18px rgba(173, 35, 72, 0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 32px rgba(173, 35, 72, 0.10)';
                e.currentTarget.style.borderColor = '#AD2348';
                const img = e.currentTarget.querySelector('.service-card-image');
                if (img) img.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(173, 35, 72, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(173, 35, 72, 0.12)';
                const img = e.currentTarget.querySelector('.service-card-image');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Card Image Banner */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '195px',
                backgroundColor: '#1F2733',
                overflow: 'hidden'
              }}>
                <img
                  src={service.image || '/ultrasound.jpg'}
                  alt={service.name}
                  className="service-card-image"
                  onError={(e) => {
                    e.currentTarget.src = '/ultrasound.jpg';
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  loading="lazy"
                />

                {/* Subtle Vignette Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(31, 39, 51, 0.75) 0%, rgba(31, 39, 51, 0.15) 50%, rgba(31, 39, 51, 0.3) 100%)',
                  pointerEvents: 'none'
                }} />

                {/* Category Badge Floating Top Left */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  color: '#AD2348',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
                }}>
                  {service.clinicalCategory}
                </div>

                {/* Price Tag Floating Bottom Right */}
                {service.price && (
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: '#AD2348',
                    color: '#FFFFFF',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
                  }}>
                    ₹{service.price}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#1F2733',
                    marginBottom: '0.55rem',
                    lineHeight: 1.35
                  }}>
                    {service.name}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: '#5B687B',
                    lineHeight: 1.6,
                    margin: '0 0 1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {service.purpose}
                  </p>
                </div>

                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(173, 35, 72, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: '#AD2348'
                  }}>
                    View Clinical Details <ArrowRight size={14} />
                  </span>
                  <span style={{
                    fontSize: '0.78rem',
                    color: '#647184',
                    background: '#FFF9F5',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    border: '1px solid rgba(173, 35, 72, 0.1)'
                  }}>
                    Click for Info
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            SECTION 5: SERVICE DISCOVERY EXPERIENCE (Load More Pagination)
            ========================================================================= */}
        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <p style={{ fontSize: '0.90rem', color: '#647184', marginBottom: '1rem' }}>
              Showing {displayedServices.length} of {filteredServices.length} diagnostic scans
            </p>
            <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => setVisibleCount(prev => prev + 9)}
                className="btn btn-outline"
                style={{
                  padding: '0.8rem 2.25rem',
                  backgroundColor: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.92rem'
                }}
              >
                Load More Services <ChevronDown size={16} />
              </button>
              <button
                type="button"
                onClick={() => setVisibleCount(filteredServices.length)}
                className="btn btn-primary"
                style={{
                  padding: '0.8rem 2.25rem',
                  fontWeight: 700,
                  fontSize: '0.92rem'
                }}
              >
                View All {filteredServices.length} Services
              </button>
            </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          SECTION 6: HELP / APPOINTMENT CTA
          ========================================================================= */}
      <section style={{
        background: 'linear-gradient(135deg, #AD2348 0%, #C21850 60%, #90163C 100%)',
        padding: 'clamp(3.5rem, 5vw, 4.5rem) 1.5rem',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            background: 'rgba(255, 255, 255, 0.18)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '5px 14px',
            borderRadius: '9999px',
            marginBottom: '1rem'
          }}>
            <CalendarCheck size={14} /> CLINICAL ASSISTANCE
          </span>

          <h2 style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Need Help Choosing the Right Scan?
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '620px',
            margin: '0 auto 2.25rem'
          }}>
            Contact our centre to enquire about available diagnostic services and appointment scheduling.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:+917799900248"
              style={{
                background: '#FFFFFF',
                color: '#AD2348',
                fontWeight: 700,
                padding: '0.85rem 2.25rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.25s ease'
              }}
            >
              <PhoneCall size={18} /> Call +91 77999 00248
            </a>

            <a
              href="https://wa.me/917799900248?text=Hello%20Sai%20Diagnostics,%20I%20would%20like%20to%20enquire%20about%20a%20diagnostic%20scan."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#FFFFFF',
                fontWeight: 700,
                padding: '0.85rem 2.25rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                transition: 'all 0.25s ease'
              }}
            >
              <MessageCircle size={18} /> WhatsApp Appointment Enquiry
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED CLINICAL SCAN MODAL
          ========================================================================= */}
      {activeModalTest && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setActiveModalTest(null)}
        >
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div style={{
              position: 'relative',
              height: '240px',
              backgroundColor: '#1F2733',
              overflow: 'hidden'
            }}>
              <img
                src={activeModalTest.image || '/ultrasound.jpg'}
                alt={activeModalTest.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.3) 100%)'
              }} />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalTest(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1F2733'
                }}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '20px',
                right: '20px'
              }}>
                <span style={{
                  background: '#AD2348',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '6px'
                }}>
                  {activeModalTest.clinicalCategory}
                </span>
                <h2 style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.5rem',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  {activeModalTest.name}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem' }}>
              
              {/* Purpose */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  fontSize: '0.80rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#AD2348',
                  marginBottom: '6px'
                }}>
                  Clinical Purpose
                </h4>
                <p style={{ margin: 0, color: '#1F2733', fontSize: '1rem', lineHeight: 1.65 }}>
                  {activeModalTest.purpose}
                </p>
              </div>

              {/* Procedure */}
              {activeModalTest.procedure && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '0.80rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#0B7F8C',
                    marginBottom: '6px'
                  }}>
                    Examination Procedure
                  </h4>
                  <p style={{ margin: 0, color: '#5B687B', fontSize: '0.94rem', lineHeight: 1.65 }}>
                    {activeModalTest.procedure}
                  </p>
                </div>
              )}

              {/* What It Checks */}
              {activeModalTest.whatItChecks && activeModalTest.whatItChecks.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '0.80rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#AD2348',
                    marginBottom: '8px'
                  }}>
                    What This Examination Evaluates
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeModalTest.whatItChecks.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} color="#AD2348" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.92rem', color: '#1F2733', lineHeight: 1.5 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preparation */}
              {activeModalTest.preparation && (
                <div style={{
                  background: '#FFF9F5',
                  border: '1.5px solid rgba(173, 35, 72, 0.15)',
                  borderRadius: '14px',
                  padding: '1.15rem 1.25rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#AD2348', fontWeight: 700, fontSize: '0.88rem', marginBottom: '4px' }}>
                    <Clock size={16} /> Preparation Instructions
                  </div>
                  <p style={{ margin: 0, color: '#5B687B', fontSize: '0.90rem', lineHeight: 1.6 }}>
                    {activeModalTest.preparation}
                  </p>
                </div>
              )}

              {/* Modal Actions */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(173, 35, 72, 0.1)'
              }}>
                <button
                  type="button"
                  onClick={() => {
                    const testName = activeModalTest.name;
                    setActiveModalTest(null);
                    openModal(testName);
                  }}
                  className="btn btn-primary"
                  style={{ flex: 1, minWidth: '200px', padding: '0.85rem 1.5rem' }}
                >
                  <CalendarCheck size={18} /> Book This Test {activeModalTest.price ? `(₹${activeModalTest.price})` : ''}
                </button>

                <a
                  href="tel:+917799900248"
                  className="btn btn-outline"
                  style={{ padding: '0.85rem 1.5rem', backgroundColor: '#FFFFFF' }}
                >
                  <PhoneCall size={16} /> Call +91 77999 00248
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Services;