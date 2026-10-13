import { useState } from 'react';
import { MessageCircle, Phone, Mail, Plus } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: '2rem', 
        right: '2rem', 
        zIndex: 9999, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '1rem' 
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transformOrigin: 'bottom'
      }}>
        {/* WhatsApp */}
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noreferrer" 
          style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', transition: 'transform 0.2s', textDecoration: 'none' }} 
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} 
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          title="WhatsApp Us"
        >
          <MessageCircle size={24} />
        </a>
        
        {/* Phone */}
        <a 
          href="tel:+1234567890" 
          style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', transition: 'transform 0.2s', textDecoration: 'none' }} 
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} 
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          title="Call Us"
        >
          <Phone size={24} />
        </a>
        
        {/* Email */}
        <a 
          href="mailto:contact@saidiagnostics.com" 
          style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', transition: 'transform 0.2s', textDecoration: 'none' }} 
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} 
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          title="Email Us"
        >
          <Mail size={24} />
        </a>
      </div>

      <button style={{ 
        width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(43, 92, 75, 0.4)', transition: 'transform 0.3s'
      }}>
        <Plus size={30} style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
      </button>
    </div>
  );
};

export default FloatingContact;
