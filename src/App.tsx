import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DestinationDetail from './components/DestinationDetail';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<DestinationsPage />} />
          <Route path="/destino/:id" element={<DestinationDetail />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;