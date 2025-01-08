import React from 'react';

const LandingPage = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Welcome to My Portfolio</h1>
      <p style={styles.subtitle}>
        Software Developer | Problem Solver | Tech Enthusiast
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => alert('Resume Coming Soon!')}>
          View Resume
        </button>
        <button style={styles.button} onClick={() => alert('Projects Section Below!')}>
          Explore My Work
        </button>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default LandingPage;
