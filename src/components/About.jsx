import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SkillTable from './SkillTable';
import Projects from './Projects';
import Certificates from './Certificates';

const About = () => {
  const location = useLocation();

  // 🔄 Fix for GitHub Pages: Redirect to index.html on reload
  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState({}, '', '/about#about');
    }
  }, []);

  // 🚀 Smooth scrolling to sections
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Delay to ensure rendering is complete
    }
  }, [location]);

  return (
    <section>
      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <h2 style={styles.header}>About Me</h2>
        <div style={styles.container}>
          <div style={styles.photoContainer}>
            {/* ✅ Fixed Image Path */}
            <img src="/assets/PXL_20250105_072632695~4.jpg" alt="Ansheena D" style={styles.photo} />
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

// 🔥 CSS Styling
const styles = {
  aboutSection: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#FC2E20',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
    border: '4px solid #FC2E20',
    boxShadow: '0 4px 15px rgba(252, 46, 32, 0.3)',
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
