import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color = '#AD2348',
  bgColor = 'rgba(173, 35, 72, 0.08)',
  onClick = null,
  active = false,
  urgent = false
}) => {
  const { colors, isDark } = useTheme();

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      style={{
        background: colors.cardBg,
        borderRadius: '16px',
        padding: '1.2rem',
        border: active 
          ? `2px solid ${color}` 
          : urgent 
            ? `2px solid #F59E0B` 
            : `1.5px solid ${colors.border}`,
        boxShadow: active 
          ? '0 8px 24px rgba(173, 35, 72, 0.15)' 
          : urgent
            ? '0 6px 20px rgba(245, 158, 11, 0.15)'
            : isDark ? '0 4px 16px rgba(0, 0, 0, 0.25)' : '0 4px 16px rgba(173, 35, 72, 0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {urgent && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: '#F59E0B'
          }}
        />
      )}

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.3rem' }}>
          <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 700, color: colors.textSecondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {title}
          </p>
          {urgent && (
            <span style={{ fontSize: '0.68rem', padding: '1px 6px', borderRadius: '4px', background: '#FEF3C7', color: '#B45309', fontWeight: 700 }}>
              Action Needed
            </span>
          )}
        </div>
        <h3 style={{ margin: 0, fontSize: '1.9rem', fontWeight: 800, color: colors.textPrimary, lineHeight: 1.1 }}>
          {value}
        </h3>
        {subtitle && (
          <p style={{ margin: '0.35rem 0 0', fontSize: '0.78rem', color: colors.textMuted }}>
            {subtitle}
          </p>
        )}
      </div>

      {Icon && (
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: bgColor,
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <Icon size={24} />
        </div>
      )}
    </div>
  );
};
