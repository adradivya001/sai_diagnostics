import React from 'react';
import { 
  Clock, 
  CheckCircle2, 
  CalendarClock, 
  XCircle, 
  AlertCircle,
  UserCheck
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const StatusBadge = ({ status, size = 'normal' }) => {
  const { isDark } = useTheme();

  const STATUS_CONFIG = {
    pending: {
      label: 'Action Needed: Unscheduled',
      bg: isDark ? 'rgba(245, 158, 11, 0.2)' : '#FFF8E1',
      color: isDark ? '#FBBF24' : '#B45309',
      border: isDark ? 'rgba(245, 158, 11, 0.35)' : 'rgba(180, 83, 9, 0.25)',
      icon: Clock
    },
    time_assigned: {
      label: 'Scheduled',
      bg: isDark ? 'rgba(14, 165, 233, 0.2)' : '#E0F2FE',
      color: isDark ? '#38BDF8' : '#0369A1',
      border: isDark ? 'rgba(14, 165, 233, 0.35)' : 'rgba(3, 105, 161, 0.25)',
      icon: CalendarClock
    },
    confirmed: {
      label: 'Confirmed',
      bg: isDark ? 'rgba(34, 197, 94, 0.2)' : '#E8F5E9',
      color: isDark ? '#4ADE80' : '#15803D',
      border: isDark ? 'rgba(34, 197, 94, 0.35)' : 'rgba(21, 128, 61, 0.25)',
      icon: CheckCircle2
    },
    arrived: {
      label: 'Patient Arrived',
      bg: isDark ? 'rgba(99, 102, 241, 0.2)' : '#EEF2FF',
      color: isDark ? '#818CF8' : '#4338CA',
      border: isDark ? 'rgba(99, 102, 241, 0.35)' : 'rgba(67, 56, 202, 0.25)',
      icon: UserCheck
    },
    rescheduled: {
      label: 'Rescheduled',
      bg: isDark ? 'rgba(168, 85, 247, 0.2)' : '#F3E8FF',
      color: isDark ? '#C084FC' : '#7E22CE',
      border: isDark ? 'rgba(168, 85, 247, 0.35)' : 'rgba(126, 34, 206, 0.25)',
      icon: CalendarClock
    },
    completed: {
      label: 'Completed',
      bg: isDark ? 'rgba(100, 116, 139, 0.2)' : '#F1F5F9',
      color: isDark ? '#94A3B8' : '#475569',
      border: isDark ? 'rgba(100, 116, 139, 0.35)' : 'rgba(71, 85, 105, 0.25)',
      icon: CheckCircle2
    },
    cancelled: {
      label: 'Cancelled',
      bg: isDark ? 'rgba(239, 68, 68, 0.2)' : '#FEE2E2',
      color: isDark ? '#F87171' : '#B91C1C',
      border: isDark ? 'rgba(239, 68, 68, 0.35)' : 'rgba(185, 28, 28, 0.25)',
      icon: XCircle
    }
  };

  const config = STATUS_CONFIG[status?.toLowerCase()] || {
    label: status || 'Unknown',
    bg: isDark ? 'rgba(100, 116, 139, 0.2)' : '#F1F5F9',
    color: isDark ? '#94A3B8' : '#64748B',
    border: isDark ? 'rgba(100, 116, 139, 0.3)' : 'rgba(100, 116, 139, 0.2)',
    icon: AlertCircle
  };

  const Icon = config.icon;
  const isSmall = size === 'small';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '4px' : '6px',
        padding: isSmall ? '3px 8px' : '5px 12px',
        borderRadius: '9999px',
        fontSize: isSmall ? '0.74rem' : '0.82rem',
        fontWeight: 700,
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
        whiteSpace: 'nowrap',
        lineHeight: 1
      }}
    >
      <Icon size={isSmall ? 12 : 14} />
      <span>{config.label}</span>
    </span>
  );
};
