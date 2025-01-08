import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      image: 'https://via.placeholder.com/150',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      image: 'https://via.placeholder.com/150',
      link: '#',
    },
  ];

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img src={project.image} alt={project.title} style={styles.image} />
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            <a href={project.link} style={styles.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  title: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
  },
};

export default Projects;
