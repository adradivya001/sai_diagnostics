import React from 'react';
import { 
  ShieldCheck, 
  User, 
  Mail, 
  Lock, 
  Server, 
  Database,
  Building,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export const AdminSettings = () => {
  const { profile, user, role } = useAuth();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
      
      {/* Header */}
      <div>
        <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: '#1B2430' }}>
          Hospital Administration Settings
        </h2>
        <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: '#59616B' }}>
          Operational profile, security controls, and clinic connectivity.
        </p>
      </div>

      {/* Staff Profile Card */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '1.75rem',
          border: '1.5px solid rgba(173, 35, 72, 0.12)',
          boxShadow: '0 4px 18px rgba(173, 35, 72, 0.04)'
        }}
      >
        <h3 style={{ margin: '0 0 1.25rem', fontSize: '1.1rem', fontWeight: 700, color: '#1B2430', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <User size={18} style={{ color: '#AD2348' }} />
          Active Staff Account
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Staff Member</span>
            <strong style={{ color: '#1B2430', fontSize: '0.98rem' }}>{profile?.full_name || 'Clinic Staff'}</strong>
          </div>

          <div>
            <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Email Address</span>
            <span style={{ color: '#1B2430', fontSize: '0.92rem' }}>{user?.email}</span>
          </div>

          <div>
            <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Hospital Role</span>
            <span style={{ color: '#AD2348', fontWeight: 700, textTransform: 'capitalize' }}>
              {profile?.role || role || 'Authorized Staff'}
            </span>
          </div>

          <div>
            <span style={{ fontSize: '0.78rem', color: '#59616B', textTransform: 'uppercase', display: 'block' }}>Department</span>
            <span style={{ color: '#1B2430' }}>{profile?.department || 'Fetal Medicine & Diagnostics'}</span>
          </div>
        </div>
      </div>

      {/* Clinic System Architecture */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '1.75rem',
          border: '1.5px solid rgba(173, 35, 72, 0.12)',
          boxShadow: '0 4px 18px rgba(173, 35, 72, 0.04)'
        }}
      >
        <h3 style={{ margin: '0 0 1.25rem', fontSize: '1.1rem', fontWeight: 700, color: '#1B2430', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Building size={18} style={{ color: '#AD2348' }} />
          Clinic Operating Structure
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem', color: '#59616B' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={16} style={{ color: '#2E7D32', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#1B2430' }}>Single Consultant Structure:</strong> OPD and diagnostic scans are exclusively scheduled for <strong>Dr. T. Sai Kiranmai (M.B.B.S., DMRD)</strong>.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={16} style={{ color: '#2E7D32', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#1B2430' }}>Two-Nurse Shared Administration:</strong> Nurse 1 and Nurse 2 manage the centralized intake queue simultaneously. All slot allocations and rescheduling operations acquire database transactional advisory locks to prevent race conditions.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={16} style={{ color: '#2E7D32', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#1B2430' }}>Database-Enforced Access (Zero-Trust):</strong> Anonymous visitors can only submit appointment requests through <code>submit_appointment_request</code> RPC. Direct reads on <code>appointments</code> table are denied to anon roles.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
