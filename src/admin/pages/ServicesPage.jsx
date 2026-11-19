import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  ShieldAlert, 
  Clock, 
  Search,
  Check,
  XCircle,
  Loader2
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { services as staticServices } from '../../data/services';
import { LoadingState } from '../components/LoadingState';
import { canManageServices } from '../utils/permissions';
import { useAuth } from '../hooks/useAuth';

export const ServicesPage = () => {
  const { role } = useAuth();
  const isAdmin = canManageServices(role);

  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [updatingId, setUpdatingId] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: dbErr } = await supabase
        .from('approved_services')
        .select('*')
        .order('name');

      if (dbErr) {
        console.warn('Could not query approved_services table directly:', dbErr.message);
        // Fallback: use staticServices mapped to default model
        const mapped = staticServices.map((s, idx) => ({
          id: `static-${idx}`,
          name: s.name,
          category: s.category || 'Diagnostic Scans',
          duration_mins: 30,
          is_duration_verified: false,
          is_active: true
        }));
        setServicesList(mapped);
      } else {
        setServicesList(data || []);
      }
    } catch (err) {
      console.error('Failed to load services:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Admin action: Toggle duration verification
  const handleToggleVerification = async (service) => {
    if (!isAdmin) {
      alert('Only hospital administrators can verify or unverify service durations.');
      return;
    }

    setUpdatingId(service.id);
    try {
      const nextVerified = !service.is_duration_verified;
      const { error: updateErr } = await supabase
        .from('approved_services')
        .update({ is_duration_verified: nextVerified })
        .eq('id', service.id);

      if (updateErr) throw updateErr;

      setServicesList(prev =>
        prev.map(s => (s.id === service.id ? { ...s, is_duration_verified: nextVerified } : s))
      );
    } catch (err) {
      alert(err.message || 'Unable to update duration verification status in database.');
    } finally {
      setUpdatingId(null);
    }
  };

  // Admin action: Toggle active status
  const handleToggleActive = async (service) => {
    if (!isAdmin) {
      alert('Only hospital administrators can activate or deactivate diagnostic services.');
      return;
    }

    setUpdatingId(service.id);
    try {
      const nextActive = !service.is_active;
      const { error: updateErr } = await supabase
        .from('approved_services')
        .update({ is_active: nextActive })
        .eq('id', service.id);

      if (updateErr) throw updateErr;

      setServicesList(prev =>
        prev.map(s => (s.id === service.id ? { ...s, is_active: nextActive } : s))
      );
    } catch (err) {
      alert(err.message || 'Unable to update service status.');
    } finally {
      setUpdatingId(null);
    }
  };

  // Filter list
  const filteredServices = servicesList.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = categoryFilter === 'all' || s.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const categories = Array.from(new Set(servicesList.map(s => s.category).filter(Boolean)));

  if (loading) {
    return <LoadingState message="Loading approved diagnostic services directory..." />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Page Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: '#1B2430' }}>
            Diagnostic Services Directory
          </h2>
          <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: '#59616B' }}>
            Catalog of all 28 approved scans, tests, and clinical durations.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              background: '#FFF9F5',
              border: '1px solid rgba(173, 35, 72, 0.2)',
              color: '#AD2348',
              fontSize: '0.84rem',
              fontWeight: 600
            }}
          >
            {servicesList.length} Total Services
          </span>
        </div>
      </div>

      {/* Info notice about duration verification */}
      <div
        style={{
          padding: '1rem 1.25rem',
          borderRadius: '14px',
          background: '#FFF9F5',
          border: '1px solid rgba(173, 35, 72, 0.15)',
          color: '#59616B',
          fontSize: '0.88rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px'
        }}
      >
        <ShieldCheck size={20} style={{ color: '#AD2348', flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: '#1B2430' }}>Clinical Duration Verification Requirement:</strong> All 28 diagnostic scans are available for online patient request intake. However, appointment slot allocation requires verified clinical durations sign-off by hospital administration.
        </div>
      </div>

      {/* Search and Filters */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '1.25rem',
          border: '1.5px solid rgba(173, 35, 72, 0.12)',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
          <input
            type="text"
            placeholder="Search diagnostic scan or test name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 0.85rem 0.65rem 2.25rem',
              borderRadius: '10px',
              border: '1.5px solid #E5E7EB',
              fontSize: '0.88rem',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ minWidth: '200px' }}>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 0.85rem',
              borderRadius: '10px',
              border: '1.5px solid #E5E7EB',
              fontSize: '0.88rem',
              backgroundColor: '#FFFFFF',
              boxSizing: 'border-box'
            }}
          >
            <option value="all">All Clinical Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Services Table */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1.5px solid rgba(173, 35, 72, 0.12)',
          boxShadow: '0 4px 16px rgba(173, 35, 72, 0.04)',
          overflow: 'hidden'
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
            <thead>
              <tr style={{ background: '#FAF8F9', borderBottom: '1.5px solid rgba(173, 35, 72, 0.12)' }}>
                <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                  Service Name
                </th>
                <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                  Category
                </th>
                <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                  Duration
                </th>
                <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                  Duration Verified?
                </th>
                <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                  Status
                </th>
                {isAdmin && (
                  <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase', textAlign: 'right' }}>
                    Admin Controls
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service) => {
                const isVerified = service.is_duration_verified;
                const isActive = service.is_active;

                return (
                  <tr
                    key={service.id}
                    style={{ borderBottom: '1px solid #F3F4F6', transition: 'background-color 0.15s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFBFB')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <td style={{ padding: '1rem 1.1rem' }}>
                      <strong style={{ color: '#1B2430', fontSize: '0.92rem' }}>{service.name}</strong>
                    </td>

                    <td style={{ padding: '1rem 1.1rem', color: '#59616B', fontSize: '0.85rem' }}>
                      {service.category}
                    </td>

                    <td style={{ padding: '1rem 1.1rem', color: '#1B2430', fontSize: '0.88rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} style={{ color: '#AD2348' }} />
                        <span>{service.duration_mins || 30} mins</span>
                      </div>
                    </td>

                    <td style={{ padding: '1rem 1.1rem' }}>
                      {isVerified ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: '#2E7D32',
                            background: '#E8F5E9',
                            padding: '3px 8px',
                            borderRadius: '9999px'
                          }}
                        >
                          <CheckCircle2 size={12} /> Verified
                        </span>
                      ) : (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: '#B78103',
                            background: '#FFF8E1',
                            padding: '3px 8px',
                            borderRadius: '9999px'
                          }}
                        >
                          <AlertCircle size={12} /> Pending Signoff
                        </span>
                      )}
                    </td>

                    <td style={{ padding: '1rem 1.1rem' }}>
                      {isActive ? (
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2E7D32' }}>Active</span>
                      ) : (
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#DC2626' }}>Inactive</span>
                      )}
                    </td>

                    {isAdmin && (
                      <td style={{ padding: '1rem 1.1rem', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '6px' }}>
                          <button
                            type="button"
                            disabled={updatingId === service.id}
                            onClick={() => handleToggleVerification(service)}
                            style={{
                              padding: '5px 10px',
                              borderRadius: '6px',
                              border: isVerified ? '1px solid #D1D5DB' : 'none',
                              background: isVerified ? '#FFFFFF' : '#2E7D32',
                              color: isVerified ? '#374151' : '#FFFFFF',
                              fontSize: '0.76rem',
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}
                          >
                            {isVerified ? 'Unverify' : 'Verify Duration'}
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
