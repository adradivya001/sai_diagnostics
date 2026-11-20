import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { 
  Users, 
  Clock, 
  CheckCircle2, 
  CalendarClock, 
  XCircle, 
  Calendar, 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Stethoscope,
  Plus,
  Phone,
  UserCheck,
  Check
} from 'lucide-react';
import { dashboardService } from '../services/dashboardService';
import { appointmentService } from '../services/appointmentService';
import { doctorService } from '../services/doctorService';
import { StatCard } from '../components/StatCard';
import { StatusBadge } from '../components/StatusBadge';
import { LoadingState } from '../components/LoadingState';
import { EmptyState } from '../components/EmptyState';
import { AppointmentAllocationModal } from '../components/AppointmentAllocationModal';
import { AppointmentDetails } from '../components/AppointmentDetails';
import { ConfirmationDialog } from '../components/ConfirmationDialog';
import { formatDate, formatTime } from '../utils/dateUtils';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';

export const AdminOverview = () => {
  const navigate = useNavigate();
  const outletContext = useOutletContext();
  const onOpenAddAppointment = outletContext?.onOpenAddAppointment;

  const { role, profile } = useAuth();
  const { colors, isDark } = useTheme();

  const [stats, setStats] = useState(null);
  const [todayAppts, setTodayAppts] = useState([]);
  const [pendingAppts, setPendingAppts] = useState([]);
  const [upcomingAppts, setUpcomingAppts] = useState([]);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal states
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [allocatingAppt, setAllocatingAppt] = useState(null);
  const [completingAppt, setCompletingAppt] = useState(null);
  const [cancellingAppt, setCancellingAppt] = useState(null);
  const [cancelReason, setCancelReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [statsData, todayData, pendingData, upcomingData, docData] = await Promise.all([
        dashboardService.getDashboardStats(),
        dashboardService.getTodayAppointments(),
        dashboardService.getPendingRequests(8),
        dashboardService.getUpcomingAppointments(6),
        doctorService.getPrimaryDoctor()
      ]);

      setStats(statsData);
      setTodayAppts(todayData);
      setPendingAppts(pendingData);
      setUpcomingAppts(upcomingData);
      setDoctor(docData);
    } catch (err) {
      console.error('Failed to load dashboard overview:', err);
      setError(err.message || 'Unable to fetch dashboard statistics from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    const handleApptAdded = () => loadData();
    const handleDocUpdated = () => {
      doctorService.getPrimaryDoctor().then(d => setDoctor(d));
    };

    window.addEventListener('sai_appointment_added', handleApptAdded);
    window.addEventListener('sai_doctor_updated', handleDocUpdated);

    return () => {
      window.removeEventListener('sai_appointment_added', handleApptAdded);
      window.removeEventListener('sai_doctor_updated', handleDocUpdated);
    };
  }, []);

  const handleCompleteConfirm = async () => {
    if (!completingAppt) return;
    setActionLoading(true);
    try {
      await appointmentService.updateStatus({
        appointmentId: completingAppt.id,
        newStatus: 'completed'
      });
      setCompletingAppt(null);
      loadData();
    } catch (err) {
      alert(err.message || 'Failed to complete appointment.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleCancelConfirm = async () => {
    if (!cancellingAppt || !cancelReason.trim()) return;
    setActionLoading(true);
    try {
      await appointmentService.updateStatus({
        appointmentId: cancellingAppt.id,
        newStatus: 'cancelled',
        cancellationReason: cancelReason.trim()
      });
      setCancellingAppt(null);
      setCancelReason('');
      loadData();
    } catch (err) {
      alert(err.message || 'Failed to cancel appointment.');
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return <LoadingState message="Loading hospital appointment queue..." />;
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', background: colors.dangerBg, borderRadius: '16px', color: colors.danger }}>
        <AlertTriangle size={32} style={{ margin: '0 auto 0.5rem' }} />
        <h3 style={{ margin: '0 0 0.5rem' }}>Failed to Load Dashboard Data</h3>
        <p style={{ margin: '0 0 1rem' }}>{error}</p>
        <button
          type="button"
          onClick={loadData}
          style={{
            padding: '0.6rem 1.2rem',
            borderRadius: '10px',
            border: 'none',
            background: colors.brandPrimary,
            color: '#FFFFFF',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Nurse-Friendly Action Welcome Header */}
      <div
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
            : 'linear-gradient(135deg, #FAF0F3 0%, #FFF9F5 100%)',
          borderRadius: '20px',
          padding: '1.5rem',
          border: `1.5px solid ${colors.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(173, 35, 72, 0.06)'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '1.25rem' }}>👋</span>
            <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800, color: colors.textPrimary }}>
              Sai Diagnostics Clinic Desk
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: '0.9rem', color: colors.textSecondary, maxWidth: '640px', lineHeight: 1.4 }}>
            Consultant: <strong>{doctor?.name || 'Dr. T. Sai Kiranmai (M.B.B.S., DMRD)'}</strong>. Use this desk to book patients, assign appointment times, and mark completions.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {onOpenAddAppointment && (
            <button
              type="button"
              onClick={onOpenAddAppointment}
              style={{
                padding: '0.75rem 1.4rem',
                borderRadius: '12px',
                border: 'none',
                background: colors.brandPrimary,
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(173, 35, 72, 0.35)'
              }}
            >
              <Plus size={18} strokeWidth={2.5} /> Book New Patient
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate('/admin/appointments')}
            style={{
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              border: `1px solid ${colors.border}`,
              background: colors.cardBg,
              color: colors.textPrimary,
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            All Appointments <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Action-First Summary Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}
      >
        <StatCard
          title="Action Needed: Unscheduled"
          value={stats?.pending || 0}
          subtitle="Waiting for slot assignment"
          icon={Clock}
          color="#D97706"
          bgColor={isDark ? 'rgba(217, 119, 6, 0.2)' : '#FEF3C7'}
          urgent={(stats?.pending || 0) > 0}
          onClick={() => navigate('/admin/appointments?status=pending')}
        />
        <StatCard
          title="Today's Patients"
          value={stats?.today || 0}
          subtitle="Consultations today"
          icon={Calendar}
          color="#0284C7"
          bgColor={isDark ? 'rgba(2, 132, 199, 0.2)' : '#E0F2FE'}
          onClick={() => navigate('/admin/appointments?filter=today')}
        />
        <StatCard
          title="Confirmed Appointments"
          value={stats?.confirmed || 0}
          subtitle="Upcoming booked slots"
          icon={CheckCircle2}
          color="#16A34A"
          bgColor={isDark ? 'rgba(22, 163, 74, 0.2)' : '#DCFCE7'}
          onClick={() => navigate('/admin/appointments?status=confirmed')}
        />
        <StatCard
          title="Completed Today / Total"
          value={stats?.completed || 0}
          subtitle="Finished scans"
          icon={UserCheck}
          color={colors.textSecondary}
          bgColor={colors.subtleBg}
          onClick={() => navigate('/admin/appointments?status=completed')}
        />
      </div>

      {/* Priority 1 & 2 Queues: Pending Actions & Today's Schedule */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {/* Priority 1: Pending Intake Queue (Always First) */}
        <div
          style={{
            background: colors.cardBg,
            borderRadius: '20px',
            padding: '1.5rem',
            border: (pendingAppts.length > 0)
              ? `2px solid ${isDark ? '#D97706' : '#F59E0B'}`
              : `1.5px solid ${colors.border}`,
            boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 18px rgba(173, 35, 72, 0.04)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={18} style={{ color: '#D97706' }} />
                <h3 style={{ margin: 0, fontSize: '1.18rem', fontWeight: 800, color: colors.textPrimary }}>
                  Pending Requests ({pendingAppts.length})
                </h3>
              </div>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: colors.textSecondary }}>
                Patients waiting for nurse to assign consultation time
              </p>
            </div>
            {pendingAppts.length > 0 && (
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: isDark ? 'rgba(217, 119, 6, 0.25)' : '#FEF3C7',
                  color: isDark ? '#FBBF24' : '#B45309'
                }}
              >
                Needs Action
              </span>
            )}
          </div>

          {pendingAppts.length === 0 ? (
            <EmptyState
              title="All Caught Up! Queue is Clear"
              description="No incoming patient requests currently waiting for nurse appointment scheduling."
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {pendingAppts.map((appt) => (
                <div
                  key={appt.id}
                  style={{
                    padding: '1rem',
                    borderRadius: '14px',
                    border: `1.5px solid ${colors.border}`,
                    background: isDark ? '#1E293B' : '#FFFDF9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <strong style={{ color: colors.textPrimary, fontSize: '0.98rem' }}>
                        {appt.patient_name}
                      </strong>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: colors.textSecondary, fontSize: '0.82rem' }}>
                        <Phone size={12} /> {appt.mobile_number}
                      </span>
                    </div>
                    <div style={{ color: colors.brandPrimary, fontSize: '0.86rem', fontWeight: 700, marginTop: '3px' }}>
                      {appt.service}
                    </div>
                    <div style={{ color: colors.textMuted, fontSize: '0.8rem', marginTop: '2px' }}>
                      Preferred Date: <strong>{formatDate(appt.appointment_date)}</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAllocatingAppt(appt)}
                    style={{
                      padding: '0.65rem 1.15rem',
                      borderRadius: '10px',
                      border: 'none',
                      background: colors.brandPrimary,
                      color: '#FFFFFF',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      flexShrink: 0,
                      boxShadow: '0 3px 10px rgba(173, 35, 72, 0.28)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <CalendarClock size={15} /> Book Time
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Priority 2: Today's Scheduled Appointments */}
        <div
          style={{
            background: colors.cardBg,
            borderRadius: '20px',
            padding: '1.5rem',
            border: `1.5px solid ${colors.border}`,
            boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 18px rgba(173, 35, 72, 0.04)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={18} style={{ color: '#0284C7' }} />
                <h3 style={{ margin: 0, fontSize: '1.18rem', fontWeight: 800, color: colors.textPrimary }}>
                  Today's Schedule ({todayAppts.length})
                </h3>
              </div>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: colors.textSecondary }}>
                Patients booked for consultations and scans today
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/admin/appointments?filter=today')}
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '8px',
                background: colors.subtleBg,
                border: `1px solid ${colors.border}`,
                color: colors.textPrimary,
                cursor: 'pointer'
              }}
            >
              View Full List
            </button>
          </div>

          {todayAppts.length === 0 ? (
            <EmptyState
              title="No Appointments Scheduled Today"
              description="There are currently no patients booked on today's calendar."
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {todayAppts.map((appt) => (
                <div
                  key={appt.id}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: `1px solid ${colors.border}`,
                    background: colors.subtleBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: colors.cardBg,
                          border: `1px solid ${colors.border}`,
                          color: colors.brandPrimary
                        }}
                      >
                        {appt.assigned_time ? formatTime(appt.assigned_time) : 'Time Pending'}
                      </span>
                      <strong style={{ color: colors.textPrimary, fontSize: '0.94rem' }}>
                        {appt.patient_name}
                      </strong>
                    </div>
                    <div style={{ color: colors.textSecondary, fontSize: '0.82rem', marginTop: '3px' }}>
                      {appt.service} • {appt.mobile_number}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                    <StatusBadge status={appt.status} size="small" />
                    
                    {appt.status !== 'completed' && (
                      <button
                        type="button"
                        onClick={() => setCompletingAppt(appt)}
                        title="Mark Finished"
                        style={{
                          padding: '5px 10px',
                          borderRadius: '8px',
                          border: 'none',
                          background: colors.success,
                          color: '#FFFFFF',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}
                      >
                        <Check size={13} strokeWidth={3} /> Done
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedAppt(appt)}
                      style={{
                        padding: '5px 9px',
                        borderRadius: '8px',
                        border: `1px solid ${colors.border}`,
                        background: colors.cardBg,
                        color: colors.textPrimary,
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Appointment Allocation Modal */}
      {allocatingAppt && (
        <AppointmentAllocationModal
          isOpen={Boolean(allocatingAppt)}
          appointment={allocatingAppt}
          onClose={() => setAllocatingAppt(null)}
          onSuccess={() => {
            setAllocatingAppt(null);
            loadData();
          }}
        />
      )}

      {/* Appointment Full Details Modal */}
      {selectedAppt && (
        <AppointmentDetails
          appointment={selectedAppt}
          onClose={() => setSelectedAppt(null)}
          onAllocate={() => {
            setAllocatingAppt(selectedAppt);
            setSelectedAppt(null);
          }}
          onComplete={() => {
            setCompletingAppt(selectedAppt);
            setSelectedAppt(null);
          }}
          onCancel={() => {
            setCancellingAppt(selectedAppt);
            setSelectedAppt(null);
          }}
        />
      )}

      {/* Complete Confirmation Dialog */}
      {completingAppt && (
        <ConfirmationDialog
          isOpen={Boolean(completingAppt)}
          title="Mark Appointment as Completed?"
          message={`Are you sure you want to mark the appointment for ${completingAppt.patient_name} (${completingAppt.service}) as completed? This confirms that the scan or consultation was conducted.`}
          confirmText="Yes, Mark Completed"
          confirmColor="green"
          loading={actionLoading}
          onConfirm={handleCompleteConfirm}
          onCancel={() => setCompletingAppt(null)}
        />
      )}

      {/* Cancel Appointment Dialog with Reason */}
      {cancellingAppt && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: colors.modalOverlay,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setCancellingAppt(null)}
        >
          <div
            style={{
              background: colors.cardBg,
              borderRadius: '16px',
              maxWidth: '480px',
              width: '100%',
              padding: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              border: `1px solid ${colors.border}`
            }}
            onClick={e => e.stopPropagation()}
          >
            <h3 style={{ margin: '0 0 0.5rem', color: colors.danger, fontSize: '1.15rem', fontWeight: 700 }}>
              Cancel Appointment
            </h3>
            <p style={{ margin: '0 0 1rem', fontSize: '0.86rem', color: colors.textSecondary }}>
              Please specify the cancellation reason for <strong>{cancellingAppt.patient_name}</strong>:
            </p>
            <input
              type="text"
              placeholder="e.g. Patient requested cancellation, duplicate request..."
              value={cancelReason}
              onChange={e => setCancelReason(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: `1.5px solid ${colors.border}`,
                background: colors.inputBg,
                color: colors.textPrimary,
                fontSize: '0.88rem',
                marginBottom: '1.25rem',
                outline: 'none'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setCancellingAppt(null)}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  border: `1px solid ${colors.border}`,
                  background: colors.cardBg,
                  color: colors.textSecondary,
                  cursor: 'pointer'
                }}
              >
                Go Back
              </button>
              <button
                type="button"
                disabled={actionLoading || !cancelReason.trim()}
                onClick={handleCancelConfirm}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: colors.danger,
                  color: '#FFFFFF',
                  fontWeight: 600,
                  cursor: actionLoading || !cancelReason.trim() ? 'not-allowed' : 'pointer',
                  opacity: actionLoading || !cancelReason.trim() ? 0.6 : 1
                }}
              >
                {actionLoading ? 'Cancelling...' : 'Confirm Cancellation'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
