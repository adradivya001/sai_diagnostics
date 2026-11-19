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
  Plus
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
        dashboardService.getPendingRequests(6),
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

    // Listen for custom events triggered by AddAppointmentModal or DoctorProfileModal
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
    return <LoadingState message="Loading hospital appointment statistics..." />;
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      
      {/* Welcome Banner */}
      <div
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
            : 'linear-gradient(135deg, #AD2348 0%, #781530 100%)',
          borderRadius: '24px',
          padding: '1.75rem 2rem',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          border: isDark ? `1.5px solid ${colors.border}` : 'none',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}
      >
        <div>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: isDark ? '#F43F5E' : 'rgba(255, 255, 255, 0.9)' }}>
            Centralized Hospital Administration
          </span>
          <h2 style={{ margin: '0.3rem 0 0.4rem', fontSize: '1.6rem', fontWeight: 700 }}>
            Welcome, {profile?.full_name || 'Staff Member'}
          </h2>
          <p style={{ margin: 0, fontSize: '0.88rem', opacity: 0.9, maxWidth: '620px', lineHeight: 1.5 }}>
            Shared appointment coordinator workspace for Sai Diagnostics &amp; Fetal Medicine Centre.
            Manage patient intake, coordinate slot allocation with {doctor?.name || 'Dr. T. Sai Kiranmai'}, and monitor appointment outcomes.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {onOpenAddAppointment && (
            <button
              type="button"
              onClick={onOpenAddAppointment}
              style={{
                padding: '0.75rem 1.3rem',
                borderRadius: '12px',
                border: 'none',
                background: colors.brandPrimary,
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(173, 35, 72, 0.35)'
              }}
            >
              <Plus size={16} /> Add Appointment
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate('/admin/appointments')}
            style={{
              padding: '0.75rem 1.3rem',
              borderRadius: '12px',
              border: isDark ? `1px solid ${colors.border}` : 'none',
              background: isDark ? colors.cardBg : '#FFFFFF',
              color: isDark ? colors.textPrimary : colors.brandPrimary,
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            Manage Appointments <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Primary KPI Stats Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem'
        }}
      >
        <StatCard
          title="Total Requests"
          value={stats?.total || 0}
          icon={Users}
          color={colors.textPrimary}
          bgColor={colors.subtleBg}
          onClick={() => navigate('/admin/appointments')}
        />
        <StatCard
          title="Pending Review"
          value={stats?.pending || 0}
          subtitle="Needs nurse intake"
          icon={Clock}
          color={colors.warning}
          bgColor={colors.warningBg}
          onClick={() => navigate('/admin/appointments?status=pending')}
        />
        <StatCard
          title="Today's Appointments"
          value={stats?.today || 0}
          subtitle="Scheduled today"
          icon={Calendar}
          color={colors.info}
          bgColor={colors.infoBg}
          onClick={() => navigate('/admin/appointments?filter=today')}
        />
        <StatCard
          title="Confirmed Slots"
          value={stats?.confirmed || 0}
          icon={CheckCircle2}
          color={colors.success}
          bgColor={colors.successBg}
          onClick={() => navigate('/admin/appointments?status=confirmed')}
        />
        <StatCard
          title="Rescheduled"
          value={stats?.rescheduled || 0}
          icon={CalendarClock}
          color="#9333EA"
          bgColor="rgba(147, 51, 234, 0.15)"
          onClick={() => navigate('/admin/appointments?status=rescheduled')}
        />
        <StatCard
          title="Completed"
          value={stats?.completed || 0}
          icon={CheckCircle2}
          color={colors.textSecondary}
          bgColor={colors.subtleBg}
          onClick={() => navigate('/admin/appointments?status=completed')}
        />
      </div>

      {/* Two Column Section: Today's Schedule & Pending Requests */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {/* Today's Appointments */}
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
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: colors.textPrimary }}>
                Today's Appointments
              </h3>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', color: colors.textSecondary }}>
                Consultations and scans assigned for today
              </p>
            </div>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '9999px',
                background: colors.infoBg,
                color: colors.info
              }}
            >
              {todayAppts.length} Today
            </span>
          </div>

          {todayAppts.length === 0 ? (
            <EmptyState
              title="No Appointments Scheduled Today"
              description="There are currently no confirmed appointments on today's calendar."
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
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: colors.textPrimary, fontSize: '0.92rem' }}>
                      {appt.patient_name}
                    </div>
                    <div style={{ color: colors.textSecondary, fontSize: '0.8rem', marginTop: '2px' }}>
                      {appt.service} • {appt.assigned_time ? formatTime(appt.assigned_time) : 'Time Pending'}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <StatusBadge status={appt.status} size="small" />
                    <button
                      type="button"
                      onClick={() => setSelectedAppt(appt)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
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

        {/* Pending Requests Requiring Nurse Review */}
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
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: colors.textPrimary }}>
                Pending Review Queue
              </h3>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', color: colors.textSecondary }}>
                Incoming patient booking requests requiring slot allocation
              </p>
            </div>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '9999px',
                background: colors.warningBg,
                color: colors.warning
              }}
            >
              {pendingAppts.length} Pending
            </span>
          </div>

          {pendingAppts.length === 0 ? (
            <EmptyState
              title="Queue is Clear"
              description="No incoming patient requests currently waiting for nurse intake."
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {pendingAppts.map((appt) => (
                <div
                  key={appt.id}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: `1px solid ${colors.warning}40`,
                    background: colors.warningBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: colors.textPrimary, fontSize: '0.92rem' }}>
                      {appt.patient_name} <span style={{ fontWeight: 400, color: colors.textSecondary, fontSize: '0.82rem' }}>({appt.mobile_number})</span>
                    </div>
                    <div style={{ color: colors.textSecondary, fontSize: '0.8rem', marginTop: '2px' }}>
                      {appt.service} • Pref: {formatDate(appt.appointment_date)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAllocatingAppt(appt)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: colors.brandPrimary,
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(173, 35, 72, 0.2)'
                    }}
                  >
                    Allocate Slot
                  </button>
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
          role={role}
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

      {/* Confirmation: Mark Completed */}
      <ConfirmationDialog
        isOpen={Boolean(completingAppt)}
        title="Mark Appointment Completed"
        message={`Confirm that the clinical scan/consultation for "${completingAppt?.patient_name}" has been completed?`}
        confirmLabel="Mark Completed"
        isLoading={actionLoading}
        onConfirm={handleCompleteConfirm}
        onCancel={() => setCompletingAppt(null)}
      />

      {/* Confirmation: Cancel Appointment */}
      <ConfirmationDialog
        isOpen={Boolean(cancellingAppt)}
        title="Cancel Patient Appointment"
        message={`Are you sure you want to cancel the appointment for "${cancellingAppt?.patient_name}"? A valid reason is required.`}
        confirmLabel="Cancel Appointment"
        isDestructive={true}
        isLoading={actionLoading}
        onConfirm={handleCancelConfirm}
        onCancel={() => {
          setCancellingAppt(null);
          setCancelReason('');
        }}
      >
        <div style={{ marginTop: '0.85rem' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.35rem' }}>
            Cancellation Reason *
          </label>
          <input
            type="text"
            placeholder="e.g. Patient requested cancellation, Doctor leave..."
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem',
              borderRadius: '8px',
              border: `1.5px solid ${colors.border}`,
              background: colors.inputBg,
              color: colors.textPrimary,
              fontSize: '0.88rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </ConfirmationDialog>
    </div>
  );
};
