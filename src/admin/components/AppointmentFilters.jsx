import React from 'react';
import { Search, Filter, Calendar, RotateCcw } from 'lucide-react';
import { services } from '../../data/services';
import { useTheme } from '../context/ThemeContext';

export const AppointmentFilters = ({
  filters,
  onFilterChange,
  onReset
}) => {
  const { colors, isDark } = useTheme();

  return (
    <div
      style={{
        background: colors.cardBg,
        borderRadius: '16px',
        padding: '1.2rem',
        border: `1.5px solid ${colors.border}`,
        boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(173, 35, 72, 0.04)',
        marginBottom: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0.85rem',
          alignItems: 'center'
        }}
      >
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: colors.textMuted
            }}
          />
          <input
            type="text"
            placeholder="Search patient, phone, or ID..."
            value={filters.search || ''}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem 0.6rem 2.25rem',
              borderRadius: '10px',
              border: `1.5px solid ${colors.border}`,
              background: colors.inputBg,
              color: colors.textPrimary,
              fontSize: '0.88rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={filters.status || 'all'}
            onChange={(e) => onFilterChange({ status: e.target.value })}
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem',
              borderRadius: '10px',
              border: `1.5px solid ${colors.border}`,
              background: colors.inputBg,
              color: colors.textPrimary,
              fontSize: '0.88rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            <option value="all">All Appointment Statuses</option>
            <option value="pending">Pending Review</option>
            <option value="time_assigned">Time Assigned</option>
            <option value="confirmed">Confirmed</option>
            <option value="rescheduled">Rescheduled</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Service Filter */}
        <div>
          <select
            value={filters.service || 'all'}
            onChange={(e) => onFilterChange({ service: e.target.value })}
            style={{
              width: '100%',
              padding: '0.6rem 0.85rem',
              borderRadius: '10px',
              border: `1.5px solid ${colors.border}`,
              background: colors.inputBg,
              color: colors.textPrimary,
              fontSize: '0.88rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            <option value="all">All Diagnostic Services</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Filter */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input
            type="date"
            value={filters.date || ''}
            onChange={(e) => onFilterChange({ date: e.target.value })}
            style={{
              flex: 1,
              padding: '0.6rem 0.85rem',
              borderRadius: '10px',
              border: `1.5px solid ${colors.border}`,
              background: colors.inputBg,
              color: colors.textPrimary,
              fontSize: '0.88rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          {filters.date && (
            <button
              type="button"
              onClick={() => onFilterChange({ date: '' })}
              style={{
                padding: '0.6rem 0.85rem',
                borderRadius: '10px',
                border: `1px solid ${colors.border}`,
                background: colors.subtleBg,
                color: colors.textSecondary,
                fontSize: '0.8rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              Clear Date
            </button>
          )}
        </div>
      </div>

      {/* Sorting bar & Reset */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          paddingTop: '0.75rem',
          borderTop: `1px solid ${colors.border}`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.82rem', color: colors.textSecondary }}>
          <span>Sort By:</span>
          <select
            value={filters.sortBy || 'created_at'}
            onChange={(e) => onFilterChange({ sortBy: e.target.value })}
            style={{
              padding: '0.35rem 0.65rem',
              borderRadius: '8px',
              border: `1px solid ${colors.border}`,
              background: colors.inputBg,
              color: colors.textPrimary,
              fontSize: '0.82rem',
              outline: 'none'
            }}
          >
            <option value="created_at">Request Date (Created)</option>
            <option value="appointment_date">Preferred Date</option>
            <option value="assigned_date">Assigned Date</option>
            <option value="patient_name">Patient Name</option>
            <option value="status">Status</option>
          </select>
          <button
            type="button"
            onClick={() => onFilterChange({ sortAsc: !filters.sortAsc })}
            style={{
              padding: '0.35rem 0.65rem',
              borderRadius: '8px',
              border: `1px solid ${colors.border}`,
              background: colors.subtleBg,
              color: colors.textPrimary,
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            {filters.sortAsc ? 'Ascending (A–Z / Oldest)' : 'Descending (Z–A / Newest)'}
          </button>
        </div>

        <button
          type="button"
          onClick={onReset}
          style={{
            background: 'none',
            border: 'none',
            color: colors.brandPrimary,
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <RotateCcw size={13} /> Reset All Filters
        </button>
      </div>
    </div>
  );
};
