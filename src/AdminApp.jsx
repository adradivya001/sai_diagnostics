import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Admin Theme & Auth Context
import { ThemeProvider } from './admin/context/ThemeContext';
import { AuthProvider } from './admin/hooks/useAuth';

// Admin Dashboard Components & Pages
import { AdminLayout } from './admin/layouts/AdminLayout';
import { AdminLogin } from './admin/pages/AdminLogin';
import { AdminOverview } from './admin/pages/AdminOverview';
import { AppointmentsPage } from './admin/pages/AppointmentsPage';
import { AppointmentDetailsPage } from './admin/pages/AppointmentDetailsPage';
import { DoctorSchedulePage } from './admin/pages/DoctorSchedulePage';
import { ServicesPage } from './admin/pages/ServicesPage';
import { WhatsAppLogsPage } from './admin/pages/WhatsAppLogsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AdminApp() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Support root path redirect on port 5174 directly to login / dashboard */}
          <Route path="/" element={<AdminLogin />} />
          <Route path="/login" element={<AdminLogin />} />

          {/* Support both root-relative /login and /admin/login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Dashboard workspace layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminOverview />} />
            <Route path="appointments" element={<AppointmentsPage />} />
            <Route path="appointments/:id" element={<AppointmentDetailsPage />} />
            <Route path="schedule" element={<DoctorSchedulePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="whatsapp" element={<WhatsAppLogsPage />} />
          </Route>

          {/* Fallback to login for any other unknown path on port 5174 */}
          <Route path="*" element={<AdminLogin />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
