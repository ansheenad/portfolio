import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header style={styles.header}>
      <motion.h1 
        style={styles.logo}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span style={styles.firstPart}>A</span>
        NSHEENA
        <span style={styles.lastPart}>.D</span>
      </motion.h1>
      <nav style={styles.nav}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/about" style={styles.link}>
            <span style={styles.linkAccent}>//</span> About
          </Link>
        </motion.div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: "'Bebas Neue', sans-serif",
    background: 'linear-gradient(45deg, #FC2E20 30%, #ff6b6b 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
  },
  linkAccent: {
    color: '#FC2E20',
    fontWeight: '700',
  }
};

export default Header;