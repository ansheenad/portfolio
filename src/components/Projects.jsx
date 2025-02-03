import React, { useState } from 'react';
import './ProjectPortfolio.css';

const ProjectPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      title: 'Home Care',
      category: 'web',
      period: 'Feb 2024 – May 2024',
      company: 'RITS GLOBAL, UAE / India',
      description: 'A comprehensive web application for managing medical and non-medical home care services in the UAE.',
      technologies: ['Python (Django)', 'MongoDB', 'React.js'],
      highlights: [
        'Built a full-stack web application enhancing service delivery for clients',
        'Integrated robust user authentication and authorization features',
        'Designed responsive frontend with React.js for cross-device accessibility'
      ],
      type: 'Internship'
    },
    {
      title: 'Job Quest',
      category: 'web',
      period: 'Jun 2024 – Sep 2024',
      company: 'ICT Academy of Kerala',
      description: 'A job search and recruitment platform to enhance user experience and reduce time-to-hire.',
      technologies: ['MERN (MongoDB, Express.js, React.js, Node.js)'],
      highlights: [
        'Developed a MERN-based job search web app',
        'Collaborated in a team of 4 to implement RESTful APIs',
        'Used MongoDB Atlas for efficient data management'
      ],
      type: 'Internship',
      githubLink: 'https://github.com/ansheenad/job-portal'  // Added GitHub link
    },
    {
      title: 'Evenzo',
      category: 'mobile',
      period: 'Apr 2024 – Jun 2024',
      company: 'Farook College, Kozhikode',
      description: 'A mobile application for managing college events, built with React Native and Firebase.',
      technologies: ['React Native', 'Firebase'],
      highlights: [
        'Developed a mobile app for a college event management platform',
        'Implemented real-time data synchronization using Firebase',
        'Designed a user-friendly interface ensuring seamless navigation on Android devices'
      ],
      type: 'Project',
      githubLink: 'https://github.com/ansheenad/events'  // Added GitHub link
    },
    {
      title: 'Data Visualization for Business Insights',
      category: 'analytics',
      period: 'Jun 2024 – Sep 2024',
      company: 'Tata Group (Simulation)',
      description: 'Created data visualizations to help executives make informed, data-driven decisions.',
      technologies: ['Data Visualization', 'Business Strategy', 'Forage Simulation'],
      highlights: [
        'Cleaned and analyzed data to identify key trends and customer insights',
        'Designed visuals for marketing, inventory planning, and expansion strategies',
        'Produced actionable insights for decision-making at the executive level'
      ],
      type: 'Project',
      linkedinLink: 'https://www.linkedin.com/posts/ansheena-d-0536081b2_dataanalysis-businessstrategy-marketinsights-activity-7275920913903112195-UMwe?utm_source=share&utm_medium=member_desktop'
    },
    {
      title: 'First Microsoft Fabric Project',
      category: 'analytics',
      period: 'Jun 2024 – Sep 2024',
      company: 'KSR Datavizon Bootcamp',
      description: 'Built a comprehensive Uber Performance Summary Report using Microsoft Fabric and Power BI.',
      technologies: ['Microsoft Fabric', 'Power BI', 'ETL Processes', 'Data Pipelines'],
      highlights: [
        'Built a Lakehouse and Warehouse in Microsoft Fabric to centralize and manage data',
        'Automated ETL processes with Data Pipelines and ingested data from multiple formats',
        'Created interactive visual reports and dashboards with Power BI'
      ],
      type: 'Project',
      linkedinLink: 'https://www.linkedin.com/posts/ansheena-d-0536081b2_microsoftfabric-powerbi-dataanalytics-activity-7273643978552459264-zfC_?utm_source=share&utm_medium=member_desktop'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'analytics', label: 'Data Analytics' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="category-buttons">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`category-button ${activeCategory === id ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.length === 0 ? (
          <p className="no-projects-message">No projects available in this category.</p>
        ) : (
          filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-type">{project.type}</span>
                </div>
                {project.period && <p className="project-period">{project.period}</p>}
                {project.company && <p className="project-company">{project.company}</p>}
                <p className="project-description">{project.description}</p>
                <div className="technologies-section">
                  <h4 className="section-title">Key Technologies</h4>
                  <div className="technologies-list">
                    {project.technologies.length > 0 ? (
                      project.technologies.map((tech, i) => (
                        <span key={i} className="technology-tag">
                          {tech}
                        </span>
                      ))
                    ) : (
                      <p>No technologies listed</p>
                    )}
                  </div>
                </div>
                <div className="highlights-section">
                  <h4 className="section-title">Highlights</h4>
                  <ul className="highlights-list">
                    {project.highlights.length > 0 ? (
                      project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))
                    ) : (
                      <p>No highlights available</p>
                    )}
                  </ul>
                </div>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    View on GitHub
                  </a>
                )}
                {project.linkedinLink && (
                  <a href={project.linkedinLink} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    View on LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectPortfolio;
