import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingState = ({ message = 'Loading records...' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        minHeight: '220px',
        color: '#59616B'
      }}
    >
      <Loader2
        size={36}
        style={{
          color: '#AD2348',
          animation: 'spin 1s linear infinite',
          marginBottom: '0.85rem'
        }}
      />
      <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 500 }}>{message}</p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
