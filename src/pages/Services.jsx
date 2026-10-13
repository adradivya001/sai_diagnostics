import { useState, useRef } from 'react';
import { services } from '../data/services';
import { X, ChevronRight } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = (service) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setSelectedService(service);
    }, 450);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <div className="container py-12" style={{
      background: 'linear-gradient(rgba(251, 249, 244, 0.85), rgba(251, 249, 244, 0.95)), url("/ultrasound.jpg") center/cover fixed no-repeat',
      minHeight: '100vh'
    }}>
      <div className="text-center mb-12">
        <h1 className="mb-4" style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', color: 'var(--primary)' }}>Fetal Medicine Center</h1>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>Our Scans & Tests</h2>
        <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--text-muted)' }}>
          Click on any service to view pricing details and book an appointment.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
        {services.map((service) => (
          <button 
            key={service.id} 
            onClick={() => setSelectedService(service)}
            style={{ 
              background: '#fff', 
              border: '1px solid var(--border)', 
              borderRadius: '12px', 
              padding: '1rem', 
              textAlign: 'left',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => { 
              handleMouseEnter(service);
              e.currentTarget.style.borderColor = 'var(--primary)'; 
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.querySelector('.arrow-icon').style.transform = 'translateX(0)';
              e.currentTarget.querySelector('.arrow-icon').style.opacity = '1';
            }}
            onMouseLeave={(e) => { 
              handleMouseLeave();
              e.currentTarget.style.borderColor = 'var(--border)'; 
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.querySelector('.arrow-icon').style.transform = 'translateX(-10px)';
              e.currentTarget.querySelector('.arrow-icon').style.opacity = '0';
            }}
          >
            <div style={{ background: '#e4edea', color: 'var(--primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', flexShrink: 0 }}>
              {service.id}
            </div>
            <span style={{ fontWeight: 500, color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.3, flex: 1 }}>{service.name}</span>
            <div className="arrow-icon" style={{ 
              color: 'var(--primary)', 
              transition: 'all 0.3s ease',
              transform: 'translateX(-10px)',
              opacity: 0,
              display: 'flex',
              alignItems: 'center'
            }}>
              <ChevronRight size={20} />
            </div>
          </button>
        ))}
      </div>

      {/* Modal / Popup */}
      {selectedService && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '1rem', backdropFilter: 'blur(4px)' }} onClick={() => setSelectedService(null)}>
          <div className="animate-fade-in-up" style={{ background: '#fff', borderRadius: '24px', padding: '2.5rem 2rem', width: '100%', maxWidth: '400px', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedService(null)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#f1f5f9', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#e2e8f0'} onMouseOut={(e) => e.currentTarget.style.background = '#f1f5f9'}>
              <X size={20} />
            </button>
            
            <div style={{ background: '#e4edea', color: 'var(--primary)', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1.5rem', boxShadow: '0 4px 14px rgba(43, 92, 75, 0.15)' }}>
              {selectedService.id}
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>{selectedService.name}</h3>
            
            <div style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
              <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>Price</span>
              <strong style={{ fontSize: '2.5rem', color: 'var(--primary)', fontFamily: '"Playfair Display", serif' }}>₹{selectedService.price}</strong>
            </div>

            <button className="btn btn-primary" style={{ width: '100%', borderRadius: '999px', padding: '1rem', fontSize: '1.1rem', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '8px' }} onClick={() => { alert('Booking functionality coming soon!'); setSelectedService(null); }}>
              Book Appointment →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
