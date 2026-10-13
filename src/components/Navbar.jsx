import { Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar" style={{ background: 'var(--background)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', padding: '0.5rem 1.5rem', height: 'auto' }}>
        
        {/* Logo Section */}
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Sai Diagnostics Logo" style={{ height: '85px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />
        </Link>
        
        {/* Center Links */}
        <div className="nav-links" style={{ justifyContent: 'center', alignItems: 'center', gap: '2rem', fontSize: '1rem' }}>
          <a href="#" style={{ background: '#e4edea', padding: '0.5rem 1rem', borderRadius: '20px', color: 'var(--primary)', fontWeight: 600 }}>Home</a>
          <a href="#services" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Services</a>
          <a href="#doctors" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Doctors</a>
          <a href="#dashboard" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Dashboard</a>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn btn-outline" style={{ borderRadius: '999px', padding: '0.5rem 1.25rem', borderColor: '#ccc', color: 'var(--primary)' }}>
            +91 7799900248
          </button>
          <button className="btn btn-primary" style={{ borderRadius: '999px', padding: '0.5rem 1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Book Appointment
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
