import React, { useState, useEffect } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import { 
  CalendarDays, 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle 
} from 'lucide-react';
import { useAppointments } from '../hooks/useAppointments';
import { appointmentService } from '../services/appointmentService';
import { AppointmentTable } from '../components/AppointmentTable';
import { AppointmentFilters } from '../components/AppointmentFilters';
import { AppointmentDetails } from '../components/AppointmentDetails';
import { AppointmentAllocationModal } from '../components/AppointmentAllocationModal';
import { ConfirmationDialog } from '../components/ConfirmationDialog';
import { LoadingState } from '../components/LoadingState';
import { EmptyState } from '../components/EmptyState';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';
import { getTodayDateString } from '../utils/dateUtils';

export const AppointmentsPage = () => {
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get('status') || 'all';
  const filterParam = searchParams.get('filter');
  const initialDate = filterParam === 'today' ? getTodayDateString() : (searchParams.get('date') || '');

  const outletContext = useOutletContext();
  const onOpenAddAppointment = outletContext?.onOpenAddAppointment;

  const { role } = useAuth();
  const { colors, isDark } = useTheme();

  const {
    appointments,
    loading,
    error,
    totalCount,
    totalPages,
    currentPage,
    filters,
    updateFilters,
    refresh
  } = useAppointments({ 
    status: initialStatus,
    date: initialDate
  });

  // Modal states
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [allocatingAppt, setAllocatingAppt] = useState(null);
  const [completingAppt, setCompletingAppt] = useState(null);
  const [cancellingAppt, setCancellingAppt] = useState(null);
  const [cancelReason, setCancelReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const handleAdded = () => refresh();
    window.addEventListener('sai_appointment_added', handleAdded);
    return () => window.removeEventListener('sai_appointment_added', handleAdded);
  }, [refresh]);

  const handleCompleteConfirm = async () => {
    if (!completingAppt) return;
    setActionLoading(true);
    try {
      await appointmentService.updateStatus({
        appointmentId: completingAppt.id,
        newStatus: 'completed'
      });
      setCompletingAppt(null);
      refresh();
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
      refresh();
    } catch (err) {
      alert(err.message || 'Failed to cancel appointment.');
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      
      {/* Top Header & Overview */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: colors.textPrimary }}>
            Patient Appointment Management
          </h2>
          <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: colors.textSecondary }}>
            Review patient requests, allocate available doctor slots, and track completion states.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {onOpenAddAppointment && (
            <button
              type="button"
              onClick={onOpenAddAppointment}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '12px',
                border: 'none',
                background: colors.brandPrimary,
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.86rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(173, 35, 72, 0.3)'
              }}
            >
              <Plus size={16} /> Add Appointment
            </button>
          )}

          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: '9999px',
              background: colors.subtleBg,
              border: `1px solid ${colors.border}`,
              color: colors.brandPrimary
            }}
          >
            {totalCount} Total Records
          </span>
        </div>
      </div>

      {/* Filter Controls */}
      <AppointmentFilters
        filters={filters}
        onFilterChange={updateFilters}
        onReset={() => updateFilters({ status: 'all', search: '', service: 'all', date: '', page: 1 })}
      />

      {/* Main Table / State */}
      {loading ? (
        <LoadingState message="Fetching appointment records from clinic database..." />
      ) : error ? (
        <div style={{ padding: '2rem', textAlign: 'center', background: colors.dangerBg, borderRadius: '16px', color: colors.danger }}>
          <AlertTriangle size={32} style={{ margin: '0 auto 0.5rem' }} />
          <h3 style={{ margin: '0 0 0.5rem' }}>Could Not Load Appointments</h3>
          <p style={{ margin: '0 0 1rem' }}>{error}</p>
          <button
            type="button"
            onClick={refresh}
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
            Retry
          </button>
        </div>
      ) : appointments.length === 0 ? (
        <EmptyState
          icon={CalendarDays}
          title="No Appointments Found"
          description="There are no patient appointment requests matching your current search or filter criteria."
        />
      ) : (
        <>
          <AppointmentTable
            appointments={appointments}
            role={role}
            onViewDetails={(appt) => setSelectedAppt(appt)}
            onAllocate={(appt) => setAllocatingAppt(appt)}
            onComplete={(appt) => setCompletingAppt(appt)}
            onCancel={(appt) => setCancellingAppt(appt)}
          />

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 0.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <span style={{ fontSize: '0.85rem', color: colors.textSecondary }}>
                Showing page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({totalCount} appointments)
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => updateFilters({ page: currentPage - 1 })}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${colors.border}`,
                    background: colors.cardBg,
                    color: currentPage <= 1 ? colors.textMuted : colors.textPrimary,
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>

                <button
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => updateFilters({ page: currentPage + 1 })}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${colors.border}`,
                    background: colors.cardBg,
                    color: currentPage >= totalPages ? colors.textMuted : colors.textPrimary,
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Appointment Allocation Modal */}
      {allocatingAppt && (
        <AppointmentAllocationModal
          isOpen={Boolean(allocatingAppt)}
          appointment={allocatingAppt}
          onClose={() => setAllocatingAppt(null)}
          onSuccess={() => {
            setAllocatingAppt(null);
            refresh();
          }}
        />
      )}

      {/* Appointment Details Modal */}
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

      {/* Complete Confirmation */}
      <ConfirmationDialog
        isOpen={Boolean(completingAppt)}
        title="Mark Appointment Completed"
        message={`Confirm that the examination for "${completingAppt?.patient_name}" is finished and ready to be marked as completed?`}
        confirmLabel="Confirm Completed"
        isLoading={actionLoading}
        onConfirm={handleCompleteConfirm}
        onCancel={() => setCompletingAppt(null)}
      />

      {/* Cancel Confirmation */}
      <ConfirmationDialog
        isOpen={Boolean(cancellingAppt)}
        title="Cancel Patient Appointment"
        message={`Cancel the appointment for "${cancellingAppt?.patient_name}"? A valid reason is required.`}
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
            placeholder="e.g. Patient called to cancel, Doctor emergency..."
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
