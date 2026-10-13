import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Dashboard from './pages/Dashboard';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingContact />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
