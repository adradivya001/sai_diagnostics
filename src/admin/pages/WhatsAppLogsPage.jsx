import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  RefreshCw, 
  ShieldAlert,
  Phone,
  Check,
  AlertTriangle
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { LoadingState } from '../components/LoadingState';
import { EmptyState } from '../components/EmptyState';
import { formatDateTime } from '../utils/dateUtils';
import { canAllocateAppointments } from '../utils/permissions';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';

export const WhatsAppLogsPage = () => {
  const { role } = useAuth();
  const { colors, isDark } = useTheme();
  const canResolve = canAllocateAppointments(role);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resolvingId, setResolvingId] = useState(null);

  const fetchLogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: dbErr } = await supabase
        .from('whatsapp_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (dbErr) {
        console.warn('Could not fetch whatsapp_messages directly:', dbErr.message);
        setMessages([]);
      } else {
        setMessages(data || []);
      }
    } catch (err) {
      console.error('Failed to load WhatsApp logs:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleResolveFollowup = async (messageId) => {
    const notes = prompt('Enter follow-up resolution notes (e.g. "Called patient on phone, confirmed arrival instructions"):');
    if (!notes || notes.trim().length < 3) {
      alert('A valid follow-up note (minimum 3 characters) is required.');
      return;
    }

    setResolvingId(messageId);
    try {
      const { data, error: rpcErr } = await supabase.rpc('resolve_whatsapp_followup', {
        p_message_id: messageId,
        p_notes: notes.trim()
      });

      if (rpcErr) throw rpcErr;
      if (!data?.success) throw new Error(data?.error || 'Resolution failed.');

      fetchLogs();
    } catch (err) {
      alert(err.message || 'Unable to record manual follow-up.');
    } finally {
      setResolvingId(null);
    }
  };

  if (loading) {
    return <LoadingState message="Checking patient WhatsApp delivery logs..." />;
  }

  const failedCount = messages.filter(m => m.status === 'failed' || m.delivery_status === 'failed').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare size={22} style={{ color: '#25D366' }} />
            <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800, color: colors.textPrimary }}>
              WhatsApp Patient Notices &amp; Delivery
            </h2>
          </div>
          <p style={{ margin: '0.25rem 0 0', fontSize: '0.86rem', color: colors.textSecondary }}>
            Audit trail of patient booking confirmations, prep precautions, and follow-up flags.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchLogs}
          style={{
            padding: '0.65rem 1.25rem',
            borderRadius: '10px',
            border: `1px solid ${colors.border}`,
            background: colors.cardBg,
            color: colors.textPrimary,
            fontWeight: 700,
            fontSize: '0.86rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <RefreshCw size={15} /> Refresh Logs
        </button>
      </div>

      {/* Honest Integration Notice */}
      <div
        style={{
          background: colors.subtleBg,
          borderRadius: '14px',
          padding: '1.1rem 1.3rem',
          border: `1.5px solid ${colors.border}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}
      >
        <ShieldAlert size={20} style={{ color: colors.brandPrimary, flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: colors.textPrimary, fontSize: '0.92rem', display: 'block' }}>
            Truthful Delivery &amp; Privacy Policy
          </strong>
          <span style={{ fontSize: '0.84rem', color: colors.textSecondary, lineHeight: 1.4, display: 'block', marginTop: '2px' }}>
            WhatsApp notifications are sent strictly when a patient grants explicit opt-in consent during booking. If any message delivery fails, it is flagged here so clinic staff can place a quick phone call to ensure the patient receives their scan preparation guidelines.
          </span>
        </div>
      </div>

      {/* Failure Alert Banner if any failed */}
      {failedCount > 0 && (
        <div
          style={{
            background: colors.dangerBg,
            borderRadius: '14px',
            padding: '1rem 1.2rem',
            border: `1.5px solid ${colors.danger}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            color: colors.danger
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={18} />
            <strong style={{ fontSize: '0.9rem' }}>
              {failedCount} message(s) failed delivery — manual phone call recommended.
            </strong>
          </div>
        </div>
      )}

      {/* Messages List Table */}
      {messages.length === 0 ? (
        <EmptyState
          title="No WhatsApp Records Yet"
          description="Appointment messages will be logged here automatically once bookings are confirmed."
        />
      ) : (
        <div
          style={{
            background: colors.cardBg,
            borderRadius: '16px',
            border: `1.5px solid ${colors.border}`,
            overflow: 'hidden',
            boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.25)' : '0 4px 16px rgba(173, 35, 72, 0.04)'
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr
                  style={{
                    background: colors.subtleBg,
                    borderBottom: `1.5px solid ${colors.border}`,
                    color: colors.textSecondary,
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    fontWeight: 700
                  }}
                >
                  <th style={{ padding: '0.9rem 1.1rem' }}>Patient &amp; Phone</th>
                  <th style={{ padding: '0.9rem 1.1rem' }}>Message Type</th>
                  <th style={{ padding: '0.9rem 1.1rem' }}>Sent At</th>
                  <th style={{ padding: '0.9rem 1.1rem' }}>Delivery Status</th>
                  <th style={{ padding: '0.9rem 1.1rem', textAlign: 'right' }}>Follow-up Action</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, idx) => {
                  const isFailed = msg.status === 'failed' || msg.delivery_status === 'failed';
                  return (
                    <tr
                      key={msg.id || idx}
                      style={{
                        borderBottom: `1px solid ${colors.border}`,
                        background: isFailed 
                          ? (isDark ? 'rgba(239, 68, 68, 0.08)' : '#FEF2F2')
                          : (idx % 2 === 0 ? colors.cardBg : colors.subtleBg)
                      }}
                    >
                      {/* Patient & Phone */}
                      <td style={{ padding: '1rem 1.1rem' }}>
                        <div style={{ fontWeight: 700, color: colors.textPrimary, fontSize: '0.92rem' }}>
                          {msg.patient_name || 'Patient'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          <Phone size={12} style={{ color: colors.brandPrimary }} />
                          <span style={{ fontSize: '0.82rem', color: colors.textSecondary }}>
                            {msg.recipient_phone || msg.phone_number || '—'}
                          </span>
                        </div>
                      </td>

                      {/* Type */}
                      <td style={{ padding: '1rem 1.1rem', color: colors.textPrimary, fontSize: '0.88rem', fontWeight: 600, textTransform: 'capitalize' }}>
                        {msg.message_type?.replace(/_/g, ' ') || 'Appointment Confirmation'}
                      </td>

                      {/* Sent At */}
                      <td style={{ padding: '1rem 1.1rem', color: colors.textSecondary, fontSize: '0.82rem' }}>
                        {formatDateTime(msg.created_at || msg.sent_at)}
                      </td>

                      {/* Status */}
                      <td style={{ padding: '1rem 1.1rem' }}>
                        <span
                          style={{
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.76rem',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            background: isFailed ? colors.dangerBg : colors.successBg,
                            color: isFailed ? colors.danger : colors.success,
                            border: `1px solid ${isFailed ? colors.danger + '40' : colors.success + '40'}`
                          }}
                        >
                          {isFailed ? <AlertCircle size={12} /> : <CheckCircle2 size={12} />}
                          {isFailed ? 'Failed Delivery' : 'Delivered'}
                        </span>
                      </td>

                      {/* Action */}
                      <td style={{ padding: '1rem 1.1rem', textAlign: 'right' }}>
                        {isFailed ? (
                          <button
                            type="button"
                            onClick={() => handleResolveFollowup(msg.id)}
                            disabled={resolvingId === msg.id || !canResolve}
                            style={{
                              padding: '5px 11px',
                              borderRadius: '8px',
                              border: 'none',
                              background: colors.brandPrimary,
                              color: '#FFFFFF',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Mark Patient Called
                          </button>
                        ) : (
                          <span style={{ color: colors.textMuted, fontSize: '0.8rem' }}>No action needed</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
