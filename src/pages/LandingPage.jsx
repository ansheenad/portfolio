import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFolder } from 'react-icons/fi';
import { Link } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="landing-container">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="content-container"
      >
        <motion.h1 variants={itemVariants} className="main-name">
          ANSHEENA D
        </motion.h1>
        
        <motion.p variants={itemVariants} className="sub-text">
          Software Developer | MERN Stack Enthusiast | Problem Solver
        </motion.p>
        
        <motion.div variants={itemVariants} className="icon-group">
          {/* Download Resume Button */}
          <motion.a
            href="/Ansheena_resume(1).pdf" 
            download 
            className="icon-container"
            data-tooltip="Download resume"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="icon-circle">
              <FiDownload className="icon" />
            </div>
            <span className="icon-label">Download Resume</span>
          </motion.a>

          {/* View Projects Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/about#projects" className="icon-container" data-tooltip="View Projects">
              <div className="icon-circle">
                <FiFolder className="icon" />
              </div>
              <span className="icon-label">View Projects</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
