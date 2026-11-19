import { useState, useEffect, useCallback } from 'react';
import { appointmentService } from '../services/appointmentService';

export const useAppointments = (initialFilters = {}) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState({
    status: 'all',
    search: '',
    service: 'all',
    date: '',
    sortBy: 'created_at',
    sortAsc: false,
    page: 1,
    pageSize: 15,
    ...initialFilters
  });

  const fetchAppointments = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await appointmentService.getAppointments(filters);
      setAppointments(res.appointments);
      setTotalCount(res.totalCount);
      setTotalPages(res.totalPages);
      setCurrentPage(res.currentPage);
    } catch (err) {
      console.error('Failed to fetch appointments:', err);
      setError(err.message || 'Unable to load appointments from server.');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
      // Reset to page 1 if search/filter changes unless page is explicitly set
      page: newFilters.page !== undefined ? newFilters.page : 1
    }));
  };

  return {
    appointments,
    loading,
    error,
    totalCount,
    totalPages,
    currentPage,
    filters,
    updateFilters,
    refresh: fetchAppointments
  };
};
