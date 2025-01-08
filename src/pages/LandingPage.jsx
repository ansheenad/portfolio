import React, { useState } from 'react';
import { MdDownload } from 'react-icons/md'; // Using Material Design Icons for Resume
import { BiCodeAlt } from 'react-icons/bi'; // Using BiIcons for Explore

import './LandingPage.css';

const LandingPage = () => {
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleClick = (icon) => {
    setClickedIcon(icon === clickedIcon ? null : icon);
  };

  return (
    <section className="landing-container">
      <h1 className="main-name">ANSHEENA D</h1>
      <p className="subtitle">Software Developer | MERN Stack Enthusiast | Problem Solver</p>
      <div className="line-separator"></div>
      <div className="icons-container">
        <div
          className={`icon-circle ${clickedIcon === 'resume' ? 'clicked' : ''}`}
          onClick={() => handleClick('resume')}
          data-tooltip="Download Resume" // Tooltip text
        >
          <MdDownload size={20} />
          <span className="icon-text">Resume</span>
        </div>
        <a href="your-projects-link" target="_blank" rel="noopener noreferrer">
          <div
            className={`icon-circle ${clickedIcon === 'explore' ? 'clicked' : ''}`}
            onClick={() => handleClick('explore')}
            data-tooltip="Explore Projects" // Tooltip text
          >
            <BiCodeAlt size={20} />
            <span className="icon-text">Explore More</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default LandingPage;