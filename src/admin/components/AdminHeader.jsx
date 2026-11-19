import React from 'react';
import { Menu, Sun, Moon, Stethoscope, ChevronRight, UserCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';

export const AdminHeader = ({ title = 'Dashboard', onToggleSidebar, onOpenDoctorProfile }) => {
  const { profile, user, role } = useAuth();
  const { theme, toggleTheme, isDark, colors } = useTheme();

  return (
    <header
      style={{
        background: colors.headerBg,
        height: '70px',
        borderBottom: `1px solid ${colors.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.75rem',
        position: 'sticky',
        top: 0,
        zIndex: 30,
        boxShadow: isDark ? '0 2px 10px rgba(0, 0, 0, 0.25)' : '0 2px 10px rgba(0, 0, 0, 0.02)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          type="button"
          onClick={onToggleSidebar}
          style={{
            background: 'none',
            border: 'none',
            color: colors.textPrimary,
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="admin-menu-toggle"
        >
          <Menu size={22} />
        </button>

        <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: colors.textPrimary }}>
          {title}
        </h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Theme Toggle (Light / Dark) */}
        <button
          type="button"
          onClick={toggleTheme}
          title={isDark ? 'Switch to Light Clinical Theme' : 'Switch to Modern Dark Theme'}
          style={{
            background: colors.subtleBg,
            border: `1px solid ${colors.border}`,
            color: colors.textPrimary,
            cursor: 'pointer',
            padding: '7px 12px',
            borderRadius: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.82rem',
            fontWeight: 600,
            transition: 'all 0.15s ease'
          }}
        >
          {isDark ? <Sun size={16} style={{ color: '#F59E0B' }} /> : <Moon size={16} style={{ color: '#6366F1' }} />}
          <span>{isDark ? 'Light' : 'Dark'}</span>
        </button>

        {/* Clickable Doctor Profile Area */}
        <div
          onClick={onOpenDoctorProfile}
          role="button"
          tabIndex={0}
          title="Click to view and edit Consultant Doctor profile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '5px 12px',
            borderRadius: '9999px',
            background: colors.subtleBg,
            border: `1px solid ${colors.border}`,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.brandPrimary;
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = colors.border;
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <img
            src="/dr-sai-kiranmai.jpg"
            alt="Dr. T. Sai Kiranmai"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: `1.5px solid ${colors.brandPrimary}`
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontSize: '0.84rem', fontWeight: 700, color: colors.textPrimary }}>
              {profile?.full_name || 'Dr. T. Sai Kiranmai'}
            </span>
            <span style={{ fontSize: '0.72rem', color: colors.brandPrimary, fontWeight: 600 }}>
              Edit Profile
            </span>
          </div>
          <ChevronRight size={14} style={{ color: colors.textMuted }} />
        </div>
      </div>
    </header>
  );
};
