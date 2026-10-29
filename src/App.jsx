import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import FloatingContact from './components/FloatingContact';
import { AppointmentModalProvider } from './components/AppointmentModal';

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
    <AppointmentModalProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <FloatingContact />
        <Navbar />
        <main style={{ flex: 1, paddingTop: isHome ? 0 : '4.5rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<Facilities />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppointmentModalProvider>
  );
}

export default App;
