import { Link } from 'react-router-dom';
import { FileText, Stethoscope, Clock, ShieldAlert, Star, Users, Award, ShieldCheck, PhoneCall, CalendarCheck } from 'lucide-react';
import HomeHero from '../components/home/HomeHero';

const Home = () => {
  return (
    <div>
      {/* Hero Section & Trust Strip (Single-Fold Viewport Fit) */}
      <HomeHero />

      {/* Featured Services Preview */}
      <section className="py-12" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="text-center mb-8">
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
              SPECIALIZED SCANS & DIAGNOSTICS
            </span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.4rem', color: '#0a2540', marginTop: '0.5rem' }}>
              Fetal Medicine & Advanced Imaging
            </h2>
            <p style={{ maxWidth: '620px', margin: '0.75rem auto 0', color: 'var(--text-muted)' }}>
              Precision ultrasound scans, fetal wellbeing assessments, and specialized prenatal diagnostics performed by experienced clinicians.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div className="card" style={{ padding: '1.75rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-info mb-2">12-14 Weeks</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0a2540' }}>NT Scan (Nuchal Translucency)</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Early screening for chromosomal conditions and fetal anatomical assessment.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <strong style={{ fontSize: '1.3rem', color: 'var(--primary)', fontFamily: '"Playfair Display", serif' }}>₹1,500</strong>
                <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>Details →</Link>
              </div>
            </div>

            <div className="card" style={{ padding: '1.75rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-success mb-2">18-22 Weeks</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0a2540' }}>Anomaly / TIFFA Scan</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Detailed fetal anatomy survey examining all organs and structural development.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <strong style={{ fontSize: '1.3rem', color: 'var(--primary)', fontFamily: '"Playfair Display", serif' }}>₹1,800</strong>
                <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>Details →</Link>
              </div>
            </div>

            <div className="card" style={{ padding: '1.75rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-warning mb-2">Specialized</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0a2540' }}>Advanced Fetal Echo</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Comprehensive 4-chamber cardiovascular evaluation for fetal cardiac structure.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <strong style={{ fontSize: '1.3rem', color: 'var(--primary)', fontFamily: '"Playfair Display", serif' }}>₹2,500</strong>
                <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>Details →</Link>
              </div>
            </div>

            <div className="card" style={{ padding: '1.75rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-info mb-2">3rd Trimester</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0a2540' }}>Growth & Obstetric Doppler</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Monitoring fetal weight, amniotic fluid volume (AFI), and placental blood flow.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <strong style={{ fontSize: '1.3rem', color: 'var(--primary)', fontFamily: '"Playfair Display", serif' }}>₹1,500</strong>
                <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>Details →</Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/services" className="btn btn-primary" style={{ borderRadius: '999px', padding: '0.85rem 2.25rem', fontSize: '1rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              Explore All 30+ Diagnostic Scans & Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor & Facilities Preview Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}>
            {/* Doctor Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2.25rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  LEAD CLINICAL SPECIALIST
                </span>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.75rem', color: '#0a2540', marginTop: '0.4rem', marginBottom: '0.25rem' }}>
                  Dr. T. Sai Kiranmai
                </h3>
                <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.25rem' }}>
                  M.B.B.S., DMRD • Fellowship in Fetal Ultrasound
                </div>
                <p style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                  Consultant Radiologist & Fetal Medicine Specialist with 12+ years of dedicated practice in maternal-fetal scans, prenatal screening, and high-resolution imaging.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 500 }}>TIFFA Scans</span>
                  <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 500 }}>NT Screening</span>
                  <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 500 }}>Fetal Echo</span>
                  <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '999px', fontWeight: 500 }}>Doppler Studies</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Link to="/doctors" className="btn btn-primary" style={{ flex: 1, borderRadius: '999px', padding: '0.75rem 1.25rem', fontSize: '0.9rem', textAlign: 'center', textDecoration: 'none' }}>
                  View Doctor Profile & Timings →
                </Link>
              </div>
            </div>

            {/* Clinic Reception & Facilities Card */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{ borderRadius: '14px', overflow: 'hidden', height: '180px', marginBottom: '1.25rem' }}>
                <img src="/modern-waiting-room.png" alt="Sai Diagnostics Facilities" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0284c7', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  PATIENT AMENITIES
                </span>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#0a2540', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                  Modern Diagnostic Facilities
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', margin: '0 0 1.25rem' }}>
                  Tranquil mother lounge with custom maternal-fetal art, GE Voluson ultrasound suites, and private counselling rooms.
                </p>
              </div>
              <Link to="/facilities" className="btn btn-outline" style={{ borderRadius: '999px', padding: '0.75rem 1.25rem', fontSize: '0.9rem', borderColor: 'var(--primary)', color: 'var(--primary)', textAlign: 'center', textDecoration: 'none' }}>
                Explore Center Facilities →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div style={{ background: '#e0f2fe', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--primary)' }}>
                <Clock size={32} />
              </div>
              <h4>1. Book Appointment</h4>
              <p>Schedule your test online or over the phone.</p>
            </div>
            <div className="text-center">
              <div style={{ background: '#e0f2fe', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--primary)' }}>
                <FileText size={32} />
              </div>
              <h4>2. Take Test</h4>
              <p>Visit our center for your diagnostic test.</p>
            </div>
            <div className="text-center">
              <div style={{ background: '#e0f2fe', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--primary)' }}>
                <ShieldAlert size={32} />
              </div>
              <h4>3. Get Reports</h4>
              <p>Receive your accurate results promptly.</p>
            </div>
            <div className="text-center">
              <div style={{ background: '#e0f2fe', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--primary)' }}>
                <Stethoscope size={32} />
              </div>
              <h4>4. Consult</h4>
              <p>Discuss the findings with our specialist doctors.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-12" style={{ background: 'linear-gradient(135deg, #163026 0%, #2b5c4b 100%)', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#a7d3c0', background: 'rgba(255,255,255,0.08)', padding: '4px 14px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', marginBottom: '0.75rem' }}>WHY CHOOSE US</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#ffffff', marginBottom: '0.75rem' }}>Trusted by Thousands of Families</h2>
            <p style={{ color: '#c8e6da', maxWidth: '580px', margin: '0 auto', fontSize: '1rem' }}>Anantapur's most specialized fetal medicine and diagnostic imaging center — built on clinical accuracy, advanced technology, and genuine compassion.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { icon: <Users size={30} />, stat: '12,000+', label: 'Patients Served' },
              { icon: <Award size={30} />, stat: '12+ Years', label: 'Clinical Experience' },
              { icon: <ShieldCheck size={30} />, stat: '30+', label: 'Diagnostic Services' },
              { icon: <Star size={30} />, stat: 'GE Voluson', label: 'Advanced Imaging' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.14)', padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{ color: '#a7d3c0', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>{item.stat}</div>
                <div style={{ fontSize: '0.88rem', color: '#c8e6da', fontWeight: 500 }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              'Expert Fetal Medicine Specialist with Fellowship training',
              'GE Voluson premium ultrasound systems for superior image clarity',
              'Accurate TIFFA, NT, Fetal Echo, and Doppler reporting',
              'Transparent pricing — no hidden charges on any test',
              'Private, air-conditioned consultation rooms for every scan',
              'Prenatal genetic counselling and amniocentesis services'
            ].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2ece6' }}>
                <ShieldCheck size={17} style={{ flexShrink: 0, marginTop: '2px', color: '#a7d3c0' }} />
                <span style={{ fontSize: '0.92rem' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12" style={{ background: '#fbf9f4' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(43,92,75,0.06)', padding: '4px 14px', borderRadius: '999px', marginBottom: '0.75rem' }}>PATIENT TESTIMONIALS</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0a2540' }}>What Our Patients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Padmavathi R.', tag: 'TIFFA Scan Patient', text: 'Dr. Kiranmai explained every detail of our anomaly scan with exceptional patience. The equipment quality and the calm atmosphere made what could have been a stressful visit genuinely reassuring.' },
              { name: 'Sridevi L.', tag: 'NT Scan + Double Marker', text: 'From the moment we walked in, the staff made us feel at ease. The scan was thorough and the report was ready promptly. We felt completely confident in the clinical team here.' },
              { name: 'Anitha M.', tag: 'Fetal Echocardiography', text: 'We drove from Kurnool specifically for the Fetal Echo — well worth every kilometer. Dr. Kiranmai\'s expertise and willingness to explain every cardiac view gave us tremendous peace of mind.' }
            ].map((t, i) => (
              <div key={i} style={{ background: '#ffffff', borderRadius: '18px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.25rem' }}>"{t.text}"</p>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                  <strong style={{ color: '#0a2540', fontSize: '0.95rem' }}>{t.name}</strong>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 500, marginTop: '2px' }}>{t.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: '#fff', padding: '3.5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#0a2540', marginBottom: '0.75rem' }}>Ready to Book Your Scan?</h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '560px', margin: '0 auto 2rem' }}>Call us directly or visit our clinic in Anantapur. Same-day appointments available for most scans.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+917799900248" className="btn btn-primary" style={{ borderRadius: '999px', padding: '0.85rem 2rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><PhoneCall size={18} /> Call: +91 7799900248</a>
            <Link to="/contact" className="btn btn-outline" style={{ borderRadius: '999px', padding: '0.85rem 2rem', fontWeight: 600, borderColor: 'var(--primary)', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}><CalendarCheck size={18} /> Book Appointment</Link>
          </div>
        </div>
      </section>

      {/* Emergency Disclaimer */}
      <section className="py-12">
        <div className="container">
          <div className="alert alert-warning">
            <ShieldAlert size={24} style={{ flexShrink: 0 }} />
            <div>
              <strong>Emergency Safety Warning:</strong>
              <p style={{ margin: 0 }}>If you are experiencing severe chest pain, difficulty breathing, sudden weakness, or any other life-threatening symptoms, please contact local emergency services immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" style={{ background: 'var(--background)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ background: '#fff', borderRadius: '24px', padding: '3rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <h2 className="text-center mb-8" style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem' }}>Visit Our Clinic</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/maternal-fetal-medicine-logo.png" 
                  alt="Sai Diagnostics & Fetal Medicine Center" 
                  style={{ height: '90px', width: 'auto', objectFit: 'contain', marginBottom: '1.5rem' }} 
                />
                
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: 'var(--primary)' }}>📍</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Address:</strong>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                      9th Cross Rd, Sai Nagar,<br />
                      Anantapur, Andhra Pradesh 515001
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: 'var(--primary)' }}>📞</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Phone:</strong>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>+91 7799900248</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--primary)' }}>🕒</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Timings:</strong>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>Mon - Sat: 9:00 AM – 8:30 PM</p>
                  </div>
                </div>
              </div>
              
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '350px', boxShadow: 'var(--shadow-md)' }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0" 
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=9th%20Cross%20Rd,%20Sai%20Nagar,%20Anantapur,%20Andhra%20Pradesh%20515001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
