import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  RefreshCw, 
  ShieldAlert,
  Phone
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { LoadingState } from '../components/LoadingState';
import { EmptyState } from '../components/EmptyState';
import { formatDateTime } from '../utils/dateUtils';
import { canAllocateAppointments } from '../utils/permissions';
import { useAuth } from '../hooks/useAuth';

export const WhatsAppLogsPage = () => {
  const { role } = useAuth();
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
    const notes = prompt('Enter follow-up resolution notes (e.g. "Called patient on alternative number, confirmed appointment."):');
    if (!notes || notes.trim().length < 3) {
      alert('A valid resolution note (minimum 3 characters) is required.');
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
      alert(err.message || 'Unable to resolve WhatsApp follow-up.');
    } finally {
      setResolvingId(null);
    }
  };

  if (loading) {
    return <LoadingState message="Retrieving WhatsApp dispatch audit records..." />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: '#1B2430' }}>
            WhatsApp Notifications &amp; Communication Logs
          </h2>
          <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: '#59616B' }}>
            Audit trail of patient booking confirmations, reminder notifications, and delivery flags.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchLogs}
          style={{
            padding: '0.6rem 1.15rem',
            borderRadius: '10px',
            border: '1px solid #D1D5DB',
            background: '#FFFFFF',
            color: '#374151',
            fontSize: '0.84rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <RefreshCw size={14} /> Refresh Logs
        </button>
      </div>

      {/* Honest Status Banner regarding Meta API */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          borderRadius: '16px',
          background: '#FFF8E1',
          border: '1px solid rgba(183, 129, 3, 0.25)',
          color: '#B78103',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}
      >
        <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ margin: '0 0 0.35rem', fontSize: '1rem', fontWeight: 700, color: '#B78103' }}>
            WhatsApp Cloud API Integration: Pending Configuration
          </h4>
          <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.5, color: '#664D03' }}>
            Meta WhatsApp Business API credentials have not been configured on the backend yet. No outgoing WhatsApp messages are actively sent. All database tables and nurse follow-up audit queues are fully implemented and ready for live credentials.
          </p>
        </div>
      </div>

      {/* WhatsApp Logs Table */}
      {messages.length === 0 ? (
        <EmptyState
          icon={MessageSquare}
          title="No Outbound WhatsApp Messages Logged"
          description="Messages queued after appointment slot allocation will appear here once WhatsApp webhook events are triggered."
        />
      ) : (
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
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '750px' }}>
              <thead>
                <tr style={{ background: '#FAF8F9', borderBottom: '1.5px solid rgba(173, 35, 72, 0.12)' }}>
                  <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                    Recipient
                  </th>
                  <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                    Template / Type
                  </th>
                  <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                    Delivery Status
                  </th>
                  <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                    Dispatched At
                  </th>
                  <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase' }}>
                    Follow-up Required?
                  </th>
                  {canResolve && (
                    <th style={{ padding: '0.9rem 1.1rem', fontSize: '0.8rem', fontWeight: 600, color: '#59616B', textTransform: 'uppercase', textAlign: 'right' }}>
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr
                    key={msg.id}
                    style={{ borderBottom: '1px solid #F3F4F6', transition: 'background-color 0.15s ease' }}
                  >
                    <td style={{ padding: '1rem 1.1rem' }}>
                      <div style={{ fontWeight: 600, color: '#1B2430', fontSize: '0.9rem' }}>
                        {msg.patient_name}
                      </div>
                      <div style={{ color: '#59616B', fontSize: '0.8rem' }}>
                        {msg.recipient_phone}
                      </div>
                    </td>

                    <td style={{ padding: '1rem 1.1rem', fontSize: '0.85rem', color: '#1B2430' }}>
                      <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>
                        {msg.message_type?.replace('_', ' ')}
                      </span>
                      <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>
                        Template: {msg.template_name}
                      </div>
                    </td>

                    <td style={{ padding: '1rem 1.1rem' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          background: msg.status === 'delivered' ? '#E8F5E9' : msg.status === 'failed' ? '#FEE2E2' : '#F1F5F9',
                          color: msg.status === 'delivered' ? '#2E7D32' : msg.status === 'failed' ? '#DC2626' : '#475569',
                          textTransform: 'capitalize'
                        }}
                      >
                        {msg.status}
                      </span>
                    </td>

                    <td style={{ padding: '1rem 1.1rem', color: '#59616B', fontSize: '0.82rem' }}>
                      {formatDateTime(msg.created_at)}
                    </td>

                    <td style={{ padding: '1rem 1.1rem' }}>
                      {msg.requires_reception_followup ? (
                        <span style={{ color: '#DC2626', fontWeight: 700, fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <AlertCircle size={13} /> Needs Nurse Call
                        </span>
                      ) : msg.followup_notes ? (
                        <div style={{ fontSize: '0.8rem', color: '#2E7D32' }}>
                          Resolved: {msg.followup_notes}
                        </div>
                      ) : (
                        <span style={{ color: '#6B7280', fontSize: '0.8rem' }}>No Flag</span>
                      )}
                    </td>

                    {canResolve && (
                      <td style={{ padding: '1rem 1.1rem', textAlign: 'right' }}>
                        {msg.requires_reception_followup && (
                          <button
                            type="button"
                            disabled={resolvingId === msg.id}
                            onClick={() => handleResolveFollowup(msg.id)}
                            style={{
                              padding: '5px 10px',
                              borderRadius: '6px',
                              border: 'none',
                              background: '#2E7D32',
                              color: '#FFFFFF',
                              fontSize: '0.76rem',
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}
                          >
                            Resolve Flag
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
