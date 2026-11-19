import React from 'react';
import { 
  Clock, 
  CheckCircle2, 
  CalendarClock, 
  XCircle, 
  AlertCircle 
} from 'lucide-react';

const STATUS_CONFIG = {
  pending: {
    label: 'Pending Review',
    bg: '#FFF8E1',
    color: '#B78103',
    border: 'rgba(183, 129, 3, 0.25)',
    icon: Clock
  },
  time_assigned: {
    label: 'Time Assigned',
    bg: '#E0F2FE',
    color: '#0284C7',
    border: 'rgba(2, 132, 199, 0.25)',
    icon: CalendarClock
  },
  confirmed: {
    label: 'Confirmed',
    bg: '#E8F5E9',
    color: '#2E7D32',
    border: 'rgba(46, 125, 50, 0.25)',
    icon: CheckCircle2
  },
  rescheduled: {
    label: 'Rescheduled',
    bg: '#F3E8FF',
    color: '#7E22CE',
    border: 'rgba(126, 34, 206, 0.25)',
    icon: CalendarClock
  },
  completed: {
    label: 'Completed',
    bg: '#F1F5F9',
    color: '#475569',
    border: 'rgba(71, 85, 105, 0.25)',
    icon: CheckCircle2
  },
  cancelled: {
    label: 'Cancelled',
    bg: '#FEE2E2',
    color: '#DC2626',
    border: 'rgba(220, 38, 38, 0.25)',
    icon: XCircle
  }
};

export const StatusBadge = ({ status, size = 'normal' }) => {
  const config = STATUS_CONFIG[status?.toLowerCase()] || {
    label: status || 'Unknown',
    bg: '#F1F5F9',
    color: '#64748B',
    border: 'rgba(100, 116, 139, 0.2)',
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
        fontSize: isSmall ? '0.72rem' : '0.8rem',
        fontWeight: 600,
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
