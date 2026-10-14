import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

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
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917799900248" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#22c55e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(34, 197, 94, 0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 18px rgba(34, 197, 94, 0.5)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(34, 197, 94, 0.4)';
        }}
        title="WhatsApp Us"
      >
        <MessageCircle size={22} />
      </a>
      
      {/* Phone Floating Button */}
      <a 
        href="tel:+917799900248"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#0d9488',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 18px rgba(13, 148, 136, 0.5)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(13, 148, 136, 0.4)';
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
          border: '1px solid rgba(10, 37, 64, 0.12)',
          color: '#0a2540',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
          transition: 'transform 0.2s ease, background 0.2s ease'
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.backgroundColor = '#f8fafc';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#ffffff';
        }}
        title="Scroll to Top"
      >
        <ArrowUp size={20} strokeWidth={2.4} />
      </button>
    </div>
  );
};

export default FloatingContact;
