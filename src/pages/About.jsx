import React from 'react';

const About = () => {
  return (
    <section style={styles.aboutSection}>
      <h2 style={styles.header}>About Me</h2>
      <div style={styles.container}>
        {/* First Column: Photo */}
        <div style={styles.photoContainer}>
          <img
            src="src\assets\PXL_20250105_072632695~4.jpg" // Replace with your photo URL
            alt="Ansheenad"
            style={styles.photo}
          />
        </div>

        {/* Second Column: Description */}
        <div style={styles.descriptionContainer}>
          <p style={styles.description}>
            Hello, I'm Ansheena D., a passionate web developer with a keen interest in
            creating clean, efficient, and user-friendly applications. I have a background
            in Computer Science and a strong foundation in web technologies such as React,
            JavaScript, and CSS. I'm always looking for opportunities to learn and grow
            as a developer.
          </p>
          <p style={styles.description}>
            In addition to coding, I enjoy exploring new technologies, contributing to
            open-source projects, and collaborating with like-minded individuals. I am
            also interested in Data Science and AI, which I believe have the potential to
            revolutionize the way we interact with the world.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  aboutSection: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'black',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  photoContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #FC2E20',
  },
  descriptionContainer: {
    flex: 2,
    textAlign: 'left',
    color: '#333',
    fontSize: '18px',
    lineHeight: '1.6',
  },
  description: {
    marginBottom: '20px',
  },
};

export default About;
