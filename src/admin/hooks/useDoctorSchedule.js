import { useState, useEffect, useCallback } from 'react';
import { doctorService } from '../services/doctorService';

export const useDoctorSchedule = () => {
  const [doctor, setDoctor] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoctorData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const doc = await doctorService.getPrimaryDoctor();
      setDoctor(doc);

      if (doc?.id) {
        const [scheds, hols] = await Promise.all([
          doctorService.getDoctorSchedules(doc.id),
          doctorService.getHolidayExceptions(doc.id)
        ]);
        setSchedules(scheds);
        setHolidays(hols);
      }
    } catch (err) {
      console.error('Failed to load doctor schedule:', err);
      setError(err.message || 'Unable to load doctor schedule information.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDoctorData();
  }, [fetchDoctorData]);

  return {
    doctor,
    schedules,
    holidays,
    loading,
    error,
    refresh: fetchDoctorData
  };
};
