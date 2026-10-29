import { Phone, ArrowUp } from 'lucide-react';

const FloatingContact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '1.5rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      {/* Phone Helpline Floating Button (Primary Burgundy) */}
      <a 
        href="tel:+917799900248"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#AD2348',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(173, 35, 72, 0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 18px rgba(173, 35, 72, 0.55)';
          e.currentTarget.style.backgroundColor = '#8f1b3a';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(173, 35, 72, 0.4)';
          e.currentTarget.style.backgroundColor = '#AD2348';
        }}
        title="Call Helpline"
      >
        <Phone size={20} />
      </a>

      {/* Scroll to Top Floating Button */}
      <button 
        onClick={scrollToTop}
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          border: '1.5px solid rgba(173, 35, 72, 0.2)',
          color: '#AD2348',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(52, 57, 67, 0.1)',
          transition: 'transform 0.2s ease, background 0.2s ease'
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.backgroundColor = '#F8E7EC';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#ffffff';
        }}
        title="Scroll to Top"
        type="button"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default FloatingContact;
