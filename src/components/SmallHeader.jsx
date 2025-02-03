import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const SmallHeader = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>
        <span style={styles.firstPart}>A</span>
        NSHEENA
        <span style={styles.lastPart}>.D</span>
      </h1>
      <nav style={styles.nav}>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          style={styles.link}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          style={styles.link}
        >
          Projects
        </Link>
        <Link
          to="certificates"
          smooth={true}
          duration={500}
          style={styles.link}
        >
          Certificates
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 5px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#FF5349',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: "'Bebas Neue', sans-serif",
    color: '#fff',
  },
  firstPart: {
    color: '#fff',
    transform: 'rotateZ(-5deg)',
    transition: 'transform 0.3s ease',
  },
  lastPart: {
    color: '#fff',
    transform: 'rotateZ(5deg)',
    transition: 'transform 0.3s ease',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
};

export default SmallHeader;
