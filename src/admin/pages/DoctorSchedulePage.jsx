import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Coffee, 
  AlertCircle, 
  CalendarX, 
  CheckCircle2, 
  Plus, 
  Loader2 
} from 'lucide-react';
import { useDoctorSchedule } from '../hooks/useDoctorSchedule';
import { LoadingState } from '../components/LoadingState';
import { formatTime, formatDate } from '../utils/dateUtils';
import { supabase } from '../../lib/supabaseClient';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const DoctorSchedulePage = () => {
  const { doctor, schedules, holidays, loading, error, refresh } = useDoctorSchedule();

  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [holidayDate, setHolidayDate] = useState('');
  const [holidayReason, setHolidayReason] = useState('');
  const [submittingHoliday, setSubmittingHoliday] = useState(false);
  const [holidayError, setHolidayError] = useState(null);

  const handleAddHoliday = async (e) => {
    e.preventDefault();
    if (!holidayDate) return;
    setHolidayError(null);
    setSubmittingHoliday(true);

    try {
      const { error: insertErr } = await supabase
        .from('holiday_exceptions')
        .insert([{
          doctor_id: doctor?.id || null,
          exception_date: holidayDate,
          is_available: false,
          allow_clinic_override: false,
          reason: holidayReason.trim() || 'Hospital Holiday / Leave'
        }]);

      if (insertErr) throw insertErr;

      setShowHolidayModal(false);
      setHolidayDate('');
      setHolidayReason('');
      refresh();
    } catch (err) {
      console.error('Failed to add holiday:', err);
      setHolidayError(err.message || 'Unable to record holiday exception.');
    } finally {
      setSubmittingHoliday(false);
    }
  };

  if (loading) {
    return <LoadingState message="Loading doctor consultation schedules and holidays..." />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: '#1B2430' }}>
            Doctor Schedule &amp; Working Hours
          </h2>
          <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: '#59616B' }}>
            Consultant radiologist consultation timetable, break hours, and clinic holiday exceptions.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowHolidayModal(true)}
          style={{
            padding: '0.65rem 1.25rem',
            borderRadius: '10px',
            border: 'none',
            background: '#AD2348',
            color: '#FFFFFF',
            fontWeight: 600,
            fontSize: '0.88rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(173, 35, 72, 0.25)'
          }}
        >
          <Plus size={16} /> Add Holiday Exception
        </button>
      </div>

      {/* Doctor Card */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          border: '1.5px solid rgba(173, 35, 72, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#FFF9F5',
              border: '1.5px solid rgba(173, 35, 72, 0.2)',
              color: '#AD2348',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}
          >
            DR
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#1B2430' }}>
              {doctor?.name || 'Dr. T. Sai Kiranmai (M.B.B.S., DMRD)'}
            </h3>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.84rem', color: '#59616B' }}>
              {doctor?.title || 'Consultant Radiologist & Fetal Medicine Specialist'} • {doctor?.qualifications || 'M.B.B.S., DMRD'}
            </p>
          </div>
        </div>

        <span
          style={{
            padding: '4px 12px',
            borderRadius: '9999px',
            background: '#E8F5E9',
            color: '#2E7D32',
            fontSize: '0.8rem',
            fontWeight: 700
          }}
        >
          Active Consultant
        </span>
      </div>

      {/* Two Column Layout: Weekly Schedule & Holiday Exceptions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        
        {/* Weekly Working Days */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1.5px solid rgba(173, 35, 72, 0.12)',
            boxShadow: '0 4px 18px rgba(173, 35, 72, 0.04)'
          }}
        >
          <h3 style={{ margin: '0 0 1.25rem', fontSize: '1.1rem', fontWeight: 700, color: '#1B2430' }}>
            Weekly Consultation Timetable
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {DAYS.map((dayName, dayIndex) => {
              const schedule = schedules.find(s => s.day_of_week === dayIndex);
              const isWorkingDay = Boolean(schedule && schedule.is_active);

              return (
                <div
                  key={dayName}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                    background: isWorkingDay ? '#FAF8F9' : '#F9FAFB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: isWorkingDay ? '#2E7D32' : '#9CA3AF'
                      }}
                    />
                    <span style={{ fontWeight: 600, color: isWorkingDay ? '#1B2430' : '#6B7280', fontSize: '0.9rem' }}>
                      {dayName}
                    </span>
                  </div>

                  {isWorkingDay ? (
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1B2430' }}>
                        {formatTime(schedule.start_time)} – {formatTime(schedule.end_time)}
                      </div>
                      {schedule.break_start_time && (
                        <div style={{ fontSize: '0.75rem', color: '#B78103' }}>
                          Break: {formatTime(schedule.break_start_time)} – {formatTime(schedule.break_end_time)}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 500 }}>
                      No OPD Consultation
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Holiday Exceptions */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1.5px solid rgba(173, 35, 72, 0.12)',
            boxShadow: '0 4px 18px rgba(173, 35, 72, 0.04)'
          }}
        >
          <h3 style={{ margin: '0 0 1.25rem', fontSize: '1.1rem', fontWeight: 700, color: '#1B2430' }}>
            Scheduled Holidays &amp; Clinic Closures
          </h3>

          {holidays.length === 0 ? (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#6B7280', fontSize: '0.88rem' }}>
              <CalendarX size={32} style={{ margin: '0 auto 0.5rem', color: '#9CA3AF' }} />
              No upcoming clinic holidays or doctor leave dates recorded.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {holidays.map((h) => (
                <div
                  key={h.id}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(220, 38, 38, 0.2)',
                    background: '#FEF2F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <strong style={{ color: '#DC2626', fontSize: '0.9rem', display: 'block' }}>
                      {formatDate(h.exception_date)}
                    </strong>
                    <span style={{ color: '#4B5563', fontSize: '0.82rem' }}>
                      {h.reason || 'Clinic Holiday'}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      background: '#FEE2E2',
                      color: '#DC2626'
                    }}
                  >
                    Closed
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Holiday Modal */}
      {showHolidayModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(27, 36, 48, 0.55)',
            backdropFilter: 'blur(3px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowHolidayModal(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '450px',
              padding: '1.5rem',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(173, 35, 72, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.15rem', fontWeight: 600, color: '#1B2430' }}>
              Add Holiday / Clinic Closure
            </h3>

            {holidayError && (
              <div style={{ padding: '0.75rem', borderRadius: '8px', background: '#FEE2E2', color: '#DC2626', fontSize: '0.85rem', marginBottom: '1rem' }}>
                {holidayError}
              </div>
            )}

            <form onSubmit={handleAddHoliday} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.35rem' }}>
                  Holiday Date *
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={holidayDate}
                  onChange={(e) => setHolidayDate(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    border: '1.5px solid #D1D5DB',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#1B2430', marginBottom: '0.35rem' }}>
                  Reason (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Festival Holiday, Doctor Conference, Renovation"
                  value={holidayReason}
                  onChange={(e) => setHolidayReason(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    border: '1.5px solid #D1D5DB',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setShowHolidayModal(false)}
                  disabled={submittingHoliday}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #D1D5DB',
                    background: '#FFFFFF',
                    color: '#374151',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingHoliday}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#AD2348',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {submittingHoliday ? 'Recording...' : 'Save Exception'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
