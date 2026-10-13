import { Link } from 'react-router-dom';
import { FileText, Stethoscope, Clock, ShieldAlert } from 'lucide-react';
import Services from './Services';
import Doctors from './Doctors';
import Dashboard from './Dashboard';
import CountUp from '../components/CountUp';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'var(--background)', color: 'var(--text-main)', padding: '4rem 0 2rem', borderBottom: 'none' }}>
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div>
            <div className="animate-fade-in-up" style={{ display: 'inline-block', background: '#fff', border: '1px solid #eee', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '1px' }}>
              • ESTABLISHED 1990S • ASHOK NAGAR, ANANTAPUR
            </div>
            
            <h1 className="animate-fade-in-up delay-1" style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem', color: '#111', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Holistic Healthcare, Rooted in <span style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Personalized Clinical Care.</span>
            </h1>
            
            <p className="animate-fade-in-up delay-2" style={{ fontSize: '1.1rem', color: '#444', fontWeight: 500, marginBottom: '1rem' }}>
              "To bring modern diagnostics to every being - Accurate, Effective and Timely Results for Natural healing."
            </p>
            
            <p className="animate-fade-in-up delay-2" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Personalized diagnostic care led by senior medical faculty at 9th Cross Road, Ashok Nagar, Anantapur.
            </p>

            <div className="animate-fade-in-up delay-3" style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <span style={{ background: '#e4edea', color: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 500 }}>33+ Yrs Experience</span>
              <span style={{ background: '#fdf6e3', color: '#b45309', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 500 }}>⭐ 4.9 (920+ Reviews)</span>
              <span style={{ background: '#e4edea', color: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 500 }}>Accessible OPD Care</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4 animate-fade-in-up delay-4">
              <Link to="/doctors" className="btn btn-primary" style={{ borderRadius: '999px', padding: '0.75rem 2rem' }}>Book Consultation →</Link>
              <button className="btn btn-outline" style={{ borderRadius: '999px', background: '#fff', border: '1px solid #eee' }}>📞 Call Clinic</button>
            </div>
            
            <div className="animate-fade-in-up delay-4" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem', flexWrap: 'wrap' }}>
              <span>📍 Beside Bank Of Maharastra, 9th Cross Road, Ashok Nagar, Anantapur-515001</span>
              <span>🕒 Mon - Sat: 9:00 AM–8:30 PM</span>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="animate-fade-in-up delay-2" style={{ position: 'relative' }}>
            <img src="/hero-clinic.avif" alt="Clinic Exterior" style={{ width: '100%', borderRadius: '24px', objectFit: 'cover', height: '500px', boxShadow: 'var(--shadow-lg)' }} />
            
            {/* Top Badges */}
            <div className="animate-float" style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#fff', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', boxShadow: 'var(--shadow-sm)' }}>
              📍 Anantapur Branch
            </div>
            <div className="animate-float-slow" style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#111', color: '#fff', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', boxShadow: 'var(--shadow-sm)' }}>
              ✓ Verified Clinic
            </div>
            
            {/* Bottom Rating Card */}
            <div className="animate-float-fast" style={{ position: 'absolute', bottom: '-1rem', left: '-1rem', background: '#fff', padding: '1rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'var(--primary)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⭐</div>
              <div>
                <div style={{ fontWeight: 700 }}>4.9 ★ <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-muted)' }}>Google Rating</span></div>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>920+ Patient Reviews</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--background)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ background: '#fff', borderRadius: '24px', padding: '2rem', display: 'flex', justifyContent: 'space-around', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#e4edea', color: 'var(--primary)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🏅</div>
              <span style={{ fontSize: '2rem', fontWeight: 700, fontFamily: '"Playfair Display", serif' }}><CountUp end={33} suffix="+" /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#fdf6e3', color: '#b45309', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⭐</div>
              <span style={{ fontSize: '2rem', fontWeight: 700, fontFamily: '"Playfair Display", serif' }}><CountUp end={4.9} decimals={1} suffix="★" /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#f3f4f6', color: '#4b5563', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👥</div>
              <span style={{ fontSize: '2rem', fontWeight: 700, fontFamily: '"Playfair Display", serif' }}><CountUp end={920} suffix="+" /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#e4edea', color: 'var(--primary)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>❤️</div>
              <span style={{ fontSize: '2rem', fontWeight: 700, fontFamily: '"Playfair Display", serif' }}><CountUp end={45} suffix="K+" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Pages */}
      <div id="services">
        <Services />
      </div>

      <div id="doctors" style={{ background: '#fff' }}>
        <Doctors />
      </div>

      <div id="dashboard">
        <Dashboard />
      </div>

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
                <img src="/logo.png" alt="Sai Diagnostics Logo" style={{ height: '110px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', marginBottom: '1.5rem' }} />
                
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
