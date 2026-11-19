import React from 'react';
import { FolderOpen } from 'lucide-react';

export const EmptyState = ({
  icon: Icon = FolderOpen,
  title = 'No records found',
  description = 'There are no items matching your criteria at this moment.',
  action = null
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3.5rem 1.5rem',
        textAlign: 'center',
        background: '#FAF8F9',
        borderRadius: '16px',
        border: '1.5px dashed rgba(173, 35, 72, 0.18)',
        margin: '1rem 0'
      }}
    >
      <div
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'rgba(173, 35, 72, 0.08)',
          color: '#AD2348',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}
      >
        <Icon size={28} />
      </div>
      <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.1rem', fontWeight: 600, color: '#1B2430' }}>
        {title}
      </h3>
      <p style={{ margin: '0 0 1.25rem', fontSize: '0.9rem', color: '#59616B', maxWidth: '380px' }}>
        {description}
      </p>
      {action}
    </div>
  );
};
