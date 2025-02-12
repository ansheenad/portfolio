import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SmallHeader from './components/SmallHeader';
import LandingPage from './pages/LandingPage';
import About from './components/About';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && <Header />}
      {location.pathname === '/about' && <SmallHeader />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
