import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SmallHeader from './components/SmallHeader';
import LandingPage from './pages/LandingPage';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();

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
  <Router basename="/portfolio"> {/* Set basename to '/portfolio' for production */}
    <App />
  </Router>
);
