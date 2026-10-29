import { useState, useMemo, useEffect } from 'react';
import { services, categories } from '../data/services';
import { 
  Search, 
  X, 
  CheckCircle2, 
  Info, 
  Activity, 
  Clock, 
  AlertTriangle, 
  ChevronRight, 
  PhoneCall, 
  CalendarCheck,
  Stethoscope,
  Filter,
  Eye
} from 'lucide-react';
import { useAppointmentModal } from '../components/AppointmentModal';

const categoryColorMap = {
  'Pregnancy & Fetal Medicine Scans': {
    badgeBg: '#F8E7EC',
    badgeText: '#AD2348',
    border: '#eedee3',
    accent: '#AD2348'
  },
  'General Ultrasound Scans': {
    badgeBg: '#E8F4FB',
    badgeText: '#2589C4',
    border: '#cce5f5',
    accent: '#2589C4'
  },
  'Blood Tests & Genetic Screening': {
    badgeBg: '#F8E7EC',
    badgeText: '#AD2348',
    border: '#eedee3',
    accent: '#AD2348'
  },
  'Pregnancy Tissue & Genetic Diagnostic Tests': {
    badgeBg: '#E8F4FB',
    badgeText: '#2589C4',
    border: '#cce5f5',
    accent: '#2589C4'
  },
  'Fertility Follow-Up': {
    badgeBg: '#F8E7EC',
    badgeText: '#AD2348',
    border: '#eedee3',
    accent: '#AD2348'
  }
};

const Services = () => {
  const { openModal } = useAppointmentModal();
  const [selectedCategory, setSelectedCategory] = useState('All Scans & Tests');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalTest, setActiveModalTest] = useState(null);

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

  // Filtered services based on search and category
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = 
        selectedCategory === 'All Scans & Tests' || service.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        service.name.toLowerCase().includes(q) ||
        service.purpose.toLowerCase().includes(q) ||
        service.procedure.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q) ||
        service.whatItChecks.some(item => item.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts = { 'All Scans & Tests': services.length };
    services.forEach(s => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div style={{ background: 'var(--bg-warm-white)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)',
        color: 'var(--text-heading)',
        padding: '3.75rem 1.5rem 3.25rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(173, 35, 72, 0.1)'
      }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ marginBottom: '0.85rem' }}>
            ● COMPREHENSIVE CLINICAL DIRECTORY
          </span>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: 'var(--text-heading)',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Diagnostic Services and Specialised Scans
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-charcoal)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 2rem'
          }}>
            Explore available diagnostic services and contact the centre to understand which examination may be appropriate for your needs.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '580px', margin: '0 auto', position: 'relative' }}>
            <Search 
              size={20} 
              style={{ 
                position: 'absolute', 
                left: '18px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#64748b' 
              }} 
            />
            <input
              type="text"
              placeholder="Search by test name, purpose, or condition (e.g. TIFFA, NT, Doppler, NIPT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.95rem 3rem 0.95rem 3rem',
                borderRadius: '999px',
                border: 'none',
                background: '#ffffff',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                color: '#1e293b'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#64748b'
                }}
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container" style={{ maxWidth: '1280px', marginTop: '2.5rem' }}>
        
        {/* Category Filter Pills */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '0.75rem',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <Filter size={16} /> Filter by Medical Category
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.6rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? '1px solid var(--primary-burgundy)' : '1px solid #eedee3',
                    background: isActive ? 'var(--primary-burgundy)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--text-charcoal)',
                    boxShadow: isActive ? '0 4px 12px rgba(173, 35, 72, 0.22)' : '0 1px 3px rgba(0,0,0,0.04)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>{cat}</span>
                  <span style={{
                    background: isActive ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                    color: isActive ? '#ffffff' : '#64748b',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '2px 7px',
                    borderRadius: '999px'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter / Active Filter Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '1.75rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          <div style={{ fontSize: '0.95rem', color: '#475569' }}>
            Showing <strong>{filteredServices.length}</strong> of <strong>{services.length}</strong> clinical procedures
            {selectedCategory !== 'All Scans & Tests' && (
              <span> in <em>{selectedCategory}</em></span>
            )}
            {searchQuery && (
              <span> matching &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
            )}
            <span style={{ marginLeft: '10px', fontSize: '0.85rem', color: '#64748b' }}>
              (Click any card to view detailed clinical breakdown)
            </span>
          </div>

          {(selectedCategory !== 'All Scans & Tests' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All Scans & Tests');
                setSearchQuery('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary)',
                fontWeight: 600,
                fontSize: '0.85rem',
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
            background: '#ffffff',
            borderRadius: '16px',
            padding: '4rem 2rem',
            textAlign: 'center',
            border: '1px dashed #cbd5e1',
            margin: '2rem 0'
          }}>
            <Stethoscope size={48} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '0.5rem' }}>No Matching Tests Found</h3>
            <p style={{ color: '#64748b', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
              We couldn&apos;t find any scan or diagnostic test matching your search criteria. Try a different keyword or view all categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Scans & Tests');
                setSearchQuery('');
              }}
              className="btn btn-primary"
              style={{ borderRadius: '999px', padding: '0.6rem 1.5rem' }}
            >
              View All 30 Tests
            </button>
          </div>
        )}

        {/* Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}>
          {filteredServices.map((service) => {
            const catStyles = categoryColorMap[service.category] || {
              badgeBg: '#f1f5f9',
              badgeText: '#334155',
              border: '#e2e8f0',
              accent: 'var(--primary)'
            };

            return (
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
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 30px -8px rgba(10, 37, 64, 0.12)';
                  e.currentTarget.style.borderColor = catStyles.accent;
                  const img = e.currentTarget.querySelector('.service-card-image');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  const img = e.currentTarget.querySelector('.service-card-image');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Card Top: Image Banner with Badges */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '195px',
                  backgroundColor: '#0a2540',
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
                  />

                  {/* Gradient Overlay for Legibility */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 37, 64, 0.75) 0%, rgba(10, 37, 64, 0.2) 50%, rgba(10, 37, 64, 0.4) 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top-Left: Test ID Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(10, 37, 64, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>#{service.id}</span>
                  </div>

                  {/* Top-Right: Category Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(8px)',
                    color: catStyles.badgeText,
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.3px',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: `1px solid ${catStyles.border}`,
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
                  }}>
                    {service.category.replace(' Scans', '').replace(' Diagnostic Tests', '')}
                  </div>

                  {/* Bottom-Right: Indicative Price Pill */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: '#ffffff',
                    color: 'var(--primary)',
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>₹{service.price}*</span>
                  </div>

                  {/* Bottom-Left: Quick Click Cue */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    color: '#ffffff',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                  }}>
                    <Eye size={14} /> Click for full details
                  </div>
                </div>

                {/* Card Body */}
                <div style={{
                  padding: '1.35rem 1.4rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  {/* Test Name */}
                  <h3 style={{
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '0.65rem',
                    lineHeight: 1.3
                  }}>
                    {service.name}
                  </h3>

                  {/* Purpose Snippet */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#475569',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {service.purpose}
                  </p>

                  {/* Key Highlights / Checks Summary */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '0.65rem 0.85rem',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: catStyles.accent,
                      textTransform: 'uppercase',
                      letterSpacing: '0.4px',
                      marginBottom: '4px'
                    }}>
                      <CheckCircle2 size={13} color="#10b981" />
                      Key Checks:
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#334155',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {service.whatItChecks.join(' • ')}
                    </div>
                  </div>

                  {/* Card Bottom CTA Row */}
                  {/* Card Actions Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid #f1f5f9',
                    marginTop: 'auto'
                  }}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalTest(service);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--primary-burgundy)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      View Details <ChevronRight size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(service.name);
                      }}
                      style={{
                        background: 'var(--bg-burgundy-light)',
                        color: 'var(--primary-burgundy)',
                        border: '1px solid rgba(173, 35, 72, 0.25)',
                        borderRadius: '999px',
                        padding: '0.4rem 0.95rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'all 0.2s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--primary-burgundy)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'var(--bg-burgundy-light)';
                        e.currentTarget.style.color = 'var(--primary-burgundy)';
                      }}
                    >
                      <CalendarCheck size={13} />
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guidance & Assistance Banner */}
        <div style={{
          marginTop: '4.5rem',
          background: 'linear-gradient(135deg, #F8E7EC 0%, #E8F4FB 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(173, 35, 72, 0.12)',
          padding: '2.5rem 2.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <span className="section-tag" style={{ marginBottom: '0.5rem' }}>
              PATIENT GUIDANCE & APPOINTMENTS
            </span>
            <h3 style={{ fontSize: '1.7rem', color: 'var(--text-heading)', marginTop: '0.25rem', marginBottom: '0.75rem', fontFamily: '"Playfair Display", serif' }}>
              Need Help Choosing the Right Scan?
            </h3>
            <p style={{ color: 'var(--text-charcoal)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Our fetal medicine specialists and staff are available to explain gestational timing, clinical requirements, and appropriate ultrasound protocols.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
            <a
              href="tel:+917799900248"
              className="btn btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.85rem 1.75rem'
              }}
            >
              <PhoneCall size={18} /> Call Clinic: +91 7799900248
            </a>
            <button
              onClick={() => openModal()}
              type="button"
              className="btn btn-outline"
              style={{
                backgroundColor: '#ffffff',
                width: '100%',
                justifyContent: 'center',
                padding: '0.85rem 1.75rem',
                cursor: 'pointer'
              }}
            >
              <CalendarCheck size={18} /> Schedule Doctor Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Full Clinical Content Modal when Card is Clicked */}
      {activeModalTest && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 25, 40, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.25rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setActiveModalTest(null)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              maxWidth: '660px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Banner with Service Image */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '210px',
              backgroundColor: '#0a2540',
              overflow: 'hidden'
            }}>
              <img
                src={activeModalTest.image || '/ultrasound.jpg'}
                alt={activeModalTest.name}
                onError={(e) => {
                  e.currentTarget.src = '/ultrasound.jpg';
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10, 37, 64, 0.88) 0%, rgba(10, 37, 64, 0.35) 60%, rgba(10, 37, 64, 0.5) 100%)'
              }} />

              {/* Close Button on Top Banner */}
              <button
                onClick={() => setActiveModalTest(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#0f172a',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#ffffff'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.92)'}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Banner Info (Bottom of Image) */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1.5rem',
                right: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(6px)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255, 255, 255, 0.4)'
                  }}>
                    TEST #{activeModalTest.id}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    background: 'var(--primary-burgundy)',
                    padding: '3px 12px',
                    borderRadius: '999px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}>
                    {activeModalTest.category}
                  </span>
                </div>

                <div style={{
                  background: '#ffffff',
                  color: 'var(--primary-burgundy)',
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  padding: '4px 14px',
                  borderRadius: '999px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                }}>
                  ₹{activeModalTest.price}*
                </div>
              </div>
            </div>

            {/* Modal Content Body */}
            <div style={{ padding: '1.75rem 2rem 2rem' }}>
              {/* Test Name */}
              <h2 style={{
                fontSize: '1.65rem',
                color: 'var(--text-heading)',
                fontFamily: '"Playfair Display", serif',
                marginBottom: '0.75rem',
                lineHeight: 1.25
              }}>
                {activeModalTest.name}
              </h2>

              {/* Price & Confirmation Guidance Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--bg-warm-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '0.75rem 1.25rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>
                    Indicative Examination Fee
                  </span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary-burgundy)', fontFamily: '"Playfair Display", serif' }}>
                    ₹{activeModalTest.price}*
                  </span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary-blue)', background: 'var(--bg-skyblue-pale)', padding: '4px 12px', borderRadius: '999px', fontWeight: 600, border: '1px solid rgba(37, 137, 196, 0.25)' }}>
                  Please contact the centre to confirm the current fee.
                </span>
              </div>

              {/* Structure Section 1: Purpose */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '0.35rem'
                }}>
                  <Info size={16} color="var(--primary)" /> Purpose of Test
                </h4>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#1e293b',
                  lineHeight: 1.5,
                  background: '#f1f5f9',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  margin: 0
                }}>
                  {activeModalTest.purpose}
                </p>
              </div>

              {/* Structure Section 2: How It Is Performed */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '0.35rem'
                }}>
                  <Activity size={16} color="var(--primary)" /> How It Is Performed (Procedure)
                </h4>
                <p style={{
                  fontSize: '0.92rem',
                  color: '#334155',
                  lineHeight: 1.55,
                  margin: 0
                }}>
                  {activeModalTest.procedure}
                </p>
              </div>

              {/* Structure Section 3: What It Checks */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '0.5rem'
                }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> What It Checks
                </h4>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem'
                }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: 0, padding: 0 }}>
                    {activeModalTest.whatItChecks.map((item, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.88rem',
                        color: '#1e293b'
                      }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--primary)',
                          marginTop: '7px',
                          flexShrink: 0
                        }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Patient Preparation Instructions */}
              {activeModalTest.preparation && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: '#475569',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '0.35rem'
                  }}>
                    <Clock size={16} color="#0284c7" /> Patient Preparation
                  </h4>
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#0369a1',
                    background: '#f0f9ff',
                    border: '1px solid #bae6fd',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    margin: 0
                  }}>
                    {activeModalTest.preparation}
                  </p>
                </div>
              )}

              {/* Important Clinical Note Alert */}
              {activeModalTest.importantNote && (
                <div style={{
                  background: '#fffbeb',
                  border: '1px solid #fde68a',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  <AlertTriangle size={20} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: '#92400e', marginBottom: '2px' }}>
                      Important Clinical Information
                    </strong>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#78350f', lineHeight: 1.45 }}>
                      {activeModalTest.importantNote}
                    </p>
                  </div>
                </div>
              )}

              {/* Modal Bottom Actions */}
              <div style={{
                display: 'flex',
                gap: '10px',
                paddingTop: '1.25rem',
                borderTop: '1px solid #f1f5f9',
                flexWrap: 'wrap'
              }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    padding: '0.85rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    const testName = activeModalTest.name;
                    setActiveModalTest(null);
                    openModal(testName);
                  }}
                >
                  <CalendarCheck size={18} />
                  <span>Book This Test (₹{activeModalTest.price})</span>
                </button>

                <a
                  href="tel:+917799900248"
                  style={{
                    background: '#f1f5f9',
                    color: '#0a2540',
                    border: '1px solid #cbd5e1',
                    borderRadius: '999px',
                    padding: '0.85rem 1.25rem',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <PhoneCall size={16} />
                  <span>Call Us</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalTest(null)}
                  style={{
                    background: '#f8fafc',
                    color: '#64748b',
                    border: '1px solid #e2e8f0',
                    borderRadius: '999px',
                    padding: '0.85rem 1.35rem',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
