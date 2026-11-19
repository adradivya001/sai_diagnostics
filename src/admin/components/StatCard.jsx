import React from 'react';

export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color = '#AD2348',
  bgColor = 'rgba(173, 35, 72, 0.08)',
  onClick = null,
  active = false
}) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        padding: '1.25rem',
        border: active ? `2px solid ${color}` : '1.5px solid rgba(173, 35, 72, 0.12)',
        boxShadow: active ? '0 8px 24px rgba(173, 35, 72, 0.12)' : '0 4px 16px rgba(173, 35, 72, 0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease'
      }}
    >
      <div>
        <p style={{ margin: '0 0 0.35rem', fontSize: '0.85rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {title}
        </p>
        <h3 style={{ margin: 0, fontSize: '1.85rem', fontWeight: 700, color: '#1B2430', lineHeight: 1.1 }}>
          {value}
        </h3>
        {subtitle && (
          <p style={{ margin: '0.35rem 0 0', fontSize: '0.78rem', color: '#6B7280' }}>
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
