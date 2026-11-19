import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarDays, 
  CalendarClock, 
  Stethoscope, 
  MessageSquare, 
  LogOut, 
  X,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { path: '/admin', label: 'Overview', icon: LayoutDashboard, exact: true },
  { path: '/admin/appointments', label: 'Appointments', icon: CalendarDays },
  { path: '/admin/schedule', label: 'Doctor Schedule', icon: CalendarClock },
  { path: '/admin/services', label: 'Services Directory', icon: Stethoscope },
  { path: '/admin/whatsapp', label: 'WhatsApp Logs', icon: MessageSquare }
];

export const AdminSidebar = ({ isOpen, onClose, onOpenAddAppointment }) => {
  const { user, profile, role, logout } = useAuth();
  const { colors, isDark } = useTheme();

  const getRoleBadge = (r) => {
    switch (r) {
      case 'hospital_admin': return { label: 'Admin', color: colors.warning, bg: colors.warningBg };
      case 'doctor': return { label: 'Doctor', color: colors.info, bg: colors.infoBg };
      case 'nurse': return { label: 'Nurse', color: colors.success, bg: colors.successBg };
      case 'receptionist': return { label: 'Receptionist', color: '#9333EA', bg: 'rgba(147, 51, 234, 0.15)' };
      default: return { label: 'Staff', color: colors.textSecondary, bg: colors.subtleBg };
    }
  };

  const badge = getRoleBadge(role);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: colors.modalOverlay,
            zIndex: 40,
            display: 'block'
          }}
          className="admin-mobile-overlay"
        />
      )}

      <aside
        style={{
          width: '270px',
          background: colors.sidebarBg,
          borderRight: `1px solid ${colors.border}`,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 50,
          transition: 'transform 0.3s ease, background-color 0.2s ease',
          boxShadow: isDark ? '2px 0 20px rgba(0, 0, 0, 0.4)' : '2px 0 16px rgba(173, 35, 72, 0.04)'
        }}
        className={`admin-sidebar ${isOpen ? 'open' : ''}`}
      >
        {/* Hospital Branding Header with Real Logo */}
        <div
          style={{
            padding: '1.25rem 1.4rem',
            borderBottom: `1px solid ${colors.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: colors.cardBg
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/maternal-fetal-medicine-logo.png"
              alt="Sai Diagnostics & Fetal Medicine Centre"
              style={{
                height: '42px',
                width: 'auto',
                maxWidth: '180px',
                objectFit: 'contain',
                filter: isDark ? 'brightness(1.15) contrast(1.05)' : 'none'
              }}
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: colors.textSecondary,
              cursor: 'pointer',
              padding: '4px'
            }}
            className="admin-sidebar-close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Add Appointment Button in Sidebar */}
        {onOpenAddAppointment && (
          <div style={{ padding: '1rem 1.25rem 0.5rem' }}>
            <button
              type="button"
              onClick={() => {
                onOpenAddAppointment();
                if (onClose) onClose();
              }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0.7rem 1rem',
                borderRadius: '12px',
                border: 'none',
                background: colors.brandPrimary,
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.86rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(173, 35, 72, 0.3)',
                transition: 'transform 0.15s ease'
              }}
            >
              <Plus size={16} /> New Appointment
            </button>
          </div>
        )}

        {/* Staff Identity Card */}
        <div
          style={{
            margin: '0.5rem 1.25rem 0.75rem',
            padding: '0.85rem 1rem',
            background: colors.subtleBg,
            borderRadius: '12px',
            border: `1px solid ${colors.border}`
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: colors.textPrimary }}>
              {profile?.full_name || user?.email?.split('@')[0] || 'Clinic Staff'}
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '9999px',
                background: badge.bg,
                color: badge.color,
                textTransform: 'uppercase'
              }}
            >
              {badge.label}
            </span>
          </div>
          <p style={{ margin: '3px 0 0', fontSize: '0.75rem', color: colors.textSecondary, textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {user?.email}
          </p>
        </div>

        {/* Navigation Items (Settings Removed) */}
        <nav style={{ padding: '0.5rem 0.85rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                onClick={onClose}
                className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '0.65rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? colors.brandPrimary : colors.textSecondary,
                  backgroundColor: isActive ? colors.accentBg : 'transparent',
                  border: isActive ? `1px solid ${colors.brandPrimary}33` : '1px solid transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                })}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer Logout */}
        <div style={{ padding: '1rem 0.85rem', borderTop: `1px solid ${colors.border}` }}>
          <button
            type="button"
            onClick={logout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0.65rem 1rem',
              borderRadius: '12px',
              fontSize: '0.86rem',
              fontWeight: 600,
              color: colors.danger,
              background: colors.dangerBg,
              border: `1px solid ${colors.danger}33`,
              cursor: 'pointer',
              transition: 'background 0.15s ease'
            }}
          >
            <LogOut size={16} />
            <span>Sign Out Session</span>
          </button>
        </div>
      </aside>
    </>
  );
};
