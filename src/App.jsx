// SmallHeader.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header'; // Regular header for LandingPage
import SmallHeader from './components/SmallHeader'; // Small header for About Page
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation(); // Get the current location (path)

  return (
    <div>
      {/* Render Header only on LandingPage */}
      {location.pathname === '/' && <Header />}
      {/* Render SmallHeader only on About Page */}
      {location.pathname === '/about' && <SmallHeader />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
