import React, { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { AdminSidebar } from '../components/AdminSidebar';
import { AdminHeader } from '../components/AdminHeader';
import { AddAppointmentModal } from '../components/AddAppointmentModal';
import { DoctorProfileModal } from '../components/DoctorProfileModal';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';
import { LoadingState } from '../components/LoadingState';

export const AdminLayout = () => {
  const { user, loading } = useAuth();
  const { colors, isDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addAppointmentOpen, setAddAppointmentOpen] = useState(false);
  const [doctorProfileOpen, setDoctorProfileOpen] = useState(false);
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: colors.pageBg }}>
        <LoadingState message="Verifying healthcare staff session..." />
      </div>
    );
  }

  // Protect all dashboard routes
  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  const getPageTitle = (pathname) => {
    if (pathname === '/admin' || pathname === '/') return 'Dashboard Overview';
    if (pathname.includes('/appointments/')) return 'Appointment Details';
    if (pathname.endsWith('/appointments')) return 'Appointment Management';
    if (pathname.endsWith('/schedule')) return 'Doctor Schedule & Holidays';
    if (pathname.endsWith('/services')) return 'Approved Services Directory';
    if (pathname.endsWith('/whatsapp')) return 'WhatsApp Audit Logs';
    return 'Admin Workspace';
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: colors.pageBg, color: colors.textPrimary, transition: 'background-color 0.2s ease' }}>
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpenAddAppointment={() => setAddAppointmentOpen(true)}
      />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '270px',
          minWidth: 0,
          transition: 'margin-left 0.3s ease'
        }}
        className="admin-main-wrapper"
      >
        <AdminHeader
          title={getPageTitle(location.pathname)}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onOpenDoctorProfile={() => setDoctorProfileOpen(true)}
        />

        <main style={{ flex: 1, padding: '1.75rem', maxWidth: '1440px', width: '100%', boxSizing: 'border-box' }}>
          <Outlet context={{ onOpenAddAppointment: () => setAddAppointmentOpen(true) }} />
        </main>
      </div>

      {/* Add Appointment Modal */}
      {addAppointmentOpen && (
        <AddAppointmentModal
          isOpen={addAppointmentOpen}
          onClose={() => setAddAppointmentOpen(false)}
          onSuccess={() => {
            setAddAppointmentOpen(false);
            // Refresh window or let active page hook trigger
            window.dispatchEvent(new CustomEvent('sai_appointment_added'));
          }}
        />
      )}

      {/* Doctor Profile View/Edit Modal */}
      {doctorProfileOpen && (
        <DoctorProfileModal
          isOpen={doctorProfileOpen}
          onClose={() => setDoctorProfileOpen(false)}
          onUpdated={() => {
            window.dispatchEvent(new CustomEvent('sai_doctor_updated'));
          }}
        />
      )}

      <style>{`
        @media (max-width: 1024px) {
          .admin-sidebar {
            transform: translateX(-100%);
          }
          .admin-sidebar.open {
            transform: translateX(0);
          }
          .admin-main-wrapper {
            margin-left: 0 !important;
          }
          .admin-menu-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 1025px) {
          .admin-menu-toggle {
            display: none !important;
          }
          .admin-sidebar-close {
            display: none !important;
          }
          .admin-mobile-overlay {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
