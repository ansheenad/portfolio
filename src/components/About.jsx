import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SkillTable from './SkillTable';
import Projects from './Projects';
import Certificates from './Certificates';

const About = () => {
  const location = useLocation();

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
            {/* ✅ Corrected Image Path */}
            <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Ansheena D" style={styles.photo} />
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

export default About;
