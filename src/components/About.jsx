import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SkillTable from './SkillTable';
import Projects from './Projects';
import Certificates from './Certificates';

const About = () => {
  const location = useLocation();
  const [imageLoaded, setImageLoaded] = useState(true);

  // 🚀 Smooth scrolling to sections
  useEffect(() => {
    if (location.hash) {
      const timeout = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Delay ensures rendering is complete

      return () => clearTimeout(timeout); // Cleanup function
    }
  }, [location]);

  return (
    <section>
      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <h2 style={styles.header}>About Me</h2>
        <div style={styles.container}>
          <div style={styles.photoContainer}>
            {imageLoaded ? (
              <img 
                src="/profile.jpg" 
                alt="Ansheena D" 
                style={styles.photo} 
                onError={() => setImageLoaded(false)} // Handle broken image
              />
            ) : (
              <p style={styles.imageError}>Profile image not available</p> // Fallback text
            )}
          </div>
          <div style={styles.descriptionContainer}>
            <p style={styles.description}>
              Hello, I'm <b>Ansheena D.</b>, a recent graduate with a Master’s in Computer Science. I specialize in full-stack development, data analysis, and software engineering.
            </p>
            <p style={styles.description}>
              I have experience working with technologies like the MERN stack, Python (Django), and React.js. During my internships, I built web applications like a job recruitment platform and a home care management system, focusing on improving user experience and efficiency.
            </p>
            <p style={styles.description}>
              I enjoy learning new technologies and applying my skills to solve real-world problems. As a fresher, I am eager to contribute and grow in a dynamic organization.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.header}>Skills</h2>
        <SkillTable />
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.header}>Projects</h2>
        <Projects />
      </section>

      {/* Certificates Section */}
      <section id="certificates" style={styles.section}>
        <h2 style={styles.header}>Certificates</h2>
        <Certificates />
      </section>
    </section>
  );
};

const styles = {
  aboutSection: { padding: '50px', textAlign: 'center' },
  header: { fontSize: '2rem', marginBottom: '20px' },
  container: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' },
  photoContainer: { width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden' },
  photo: { width: '100%', height: '100%', objectFit: 'cover' },
  descriptionContainer: { maxWidth: '600px', textAlign: 'left' },
  description: { fontSize: '1rem', lineHeight: '1.5' },
  imageError: { color: 'red', fontStyle: 'italic' },
  section: { padding: '50px', textAlign: 'center' },
};

export default About;
