import React from 'react';

const Contact = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Contact Me</h1>
      <p style={styles.text}>Feel free to reach out at: example@example.com</p>
    </section>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
  },
};

export default Contact;
