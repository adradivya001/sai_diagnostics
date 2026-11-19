import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, Mail, AlertCircle, Loader2, ShieldCheck, Stethoscope } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Sign-in error:', err);
      setErrorMessage(
        err.message === 'Invalid login credentials'
          ? 'Invalid staff email or password. Please verify your credentials.'
          : err.message || 'Authentication failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FAF8F9 0%, #F5EEF2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          background: '#FFFFFF',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(173, 35, 72, 0.08)',
          border: '1.5px solid rgba(173, 35, 72, 0.12)',
          padding: '2.5rem',
          boxSizing: 'border-box'
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #AD2348 0%, #781530 100%)',
              color: '#FFFFFF',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(173, 35, 72, 0.25)',
              marginBottom: '1rem'
            }}
          >
            <Stethoscope size={28} />
          </div>
          <h1 style={{ margin: '0 0 0.4rem', fontSize: '1.4rem', fontWeight: 700, color: '#1B2430' }}>
            Sai Diagnostics
          </h1>
          <p style={{ margin: 0, fontSize: '0.86rem', color: '#59616B', fontWeight: 500 }}>
            Centralized Hospital Administration Portal
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div
            style={{
              background: '#FEE2E2',
              border: '1px solid rgba(220, 38, 38, 0.25)',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
              color: '#DC2626',
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}
          >
            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>{errorMessage}</div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.4rem' }}>
              Staff Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail
                size={16}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9CA3AF'
                }}
              />
              <input
                type="email"
                placeholder="staff@saidiagnostics.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem 0.7rem 2.25rem',
                  borderRadius: '10px',
                  border: '1.5px solid #D1D5DB',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.4rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock
                size={16}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9CA3AF'
                }}
              />
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.7rem 0.85rem 0.7rem 2.25rem',
                  borderRadius: '10px',
                  border: '1.5px solid #D1D5DB',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: '0.5rem',
              padding: '0.8rem',
              borderRadius: '12px',
              border: 'none',
              background: '#AD2348',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(173, 35, 72, 0.3)',
              transition: 'background 0.15s ease'
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                Authenticating...
              </>
            ) : (
              'Sign In to Dashboard'
            )}
          </button>
        </form>

        {/* Security Notice */}
        <div
          style={{
            marginTop: '2rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid #F3F4F6',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#6B7280',
            fontSize: '0.78rem'
          }}
        >
          <ShieldCheck size={16} style={{ color: '#2E7D32', flexShrink: 0 }} />
          <span>Restricted to authorized hospital personnel. All sessions and actions are securely audited.</span>
        </div>
      </div>
    </div>
  );
};
