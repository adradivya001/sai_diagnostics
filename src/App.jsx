import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import FloatingContact from './components/FloatingContact';
import MobileBottomBar from './components/MobileBottomBar';
import { AppointmentModalProvider } from './components/AppointmentModal';

// Admin Theme & Auth Context
import { ThemeProvider } from './admin/context/ThemeContext';
import { AuthProvider } from './admin/hooks/useAuth';

// Admin Dashboard Components & Pages (for unified routing if accessed via /admin on main site)
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

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <ThemeProvider>
      <AuthProvider>
        <AppointmentModalProvider>
          <ScrollToTop />
          <Routes>
            {/* Admin routes accessible on main port as well */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminOverview />} />
              <Route path="appointments" element={<AppointmentsPage />} />
              <Route path="appointments/:id" element={<AppointmentDetailsPage />} />
              <Route path="schedule" element={<DoctorSchedulePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="whatsapp" element={<WhatsAppLogsPage />} />
            </Route>

            {/* Public Patient Website Routes with Standard Hospital Chrome */}
            <Route
              path="*"
              element={
                <div className="flex flex-col min-h-screen">
                  <FloatingContact />
                  <Navbar />
                  <main
                    className={`site-main-content ${isHome ? 'is-home' : ''}`}
                    style={{ flex: 1, paddingTop: isHome ? 0 : '5rem' }}
                  >
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/doctors" element={<Doctors />} />
                      <Route path="/services" element={<ServiceDetailPage />} />
                      <Route path="/services/:slug" element={<ServiceDetailPage />} />
                      <Route path="/services-directory" element={<Services />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/facilities" element={<Facilities />} />
                    </Routes>
                  </main>
                  <Footer />
                  <MobileBottomBar />
                </div>
              }
            />
          </Routes>
        </AppointmentModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
