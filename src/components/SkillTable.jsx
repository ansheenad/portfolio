import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiCloud, FiTool, FiPieChart, FiUsers } from "react-icons/fi";

const SkillTable = () => {
  const skillCategories = [
    { icon: <FiCode />, title: "Programming Languages", skills: ["Java", "C/C++"] },
    { icon: <FiCode />, title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
    { icon: <FiTool />, title: "Frameworks & Libraries", skills: ["Django", "MERN Stack"] },
    { icon: <FiDatabase />, title: "Databases", skills: ["MongoDB", "MySQL"] },
    { icon: <FiTool />, title: "Development Tools", skills: ["Git", "VS Code", "Windows 11"] },
    { icon: <FiPieChart />, title: "Data Analysis", skills: ["Power BI", "Advanced Excel", "Google Sheets"] },
    { icon: <FiCloud />, title: "Cloud & Storage", skills: ["MongoDB Atlas", "Firebase"] },
  ];

  const softSkills = [
    { icon: <FiUsers />, text: "Teamwork and Collaboration" },
    { icon: <FiTool />, text: "Problem-Solving and Critical Thinking" },
    { icon: <FiCode />, text: "Adaptability and Quick Learning" },
    { icon: <FiPieChart />, text: "Time Management" },
    { icon: <FiUsers />, text: "User-Centric Design Thinking" },
  ];

  return (
    <div style={styles.container}>
      {/* Technical Skills Section */}
      <h3 style={styles.heading}>
        <span style={styles.accent}>//</span> Technical Skills
      </h3>
      
      <div style={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            style={styles.skillCategory}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div style={styles.categoryHeader}>
              <span style={styles.categoryIcon}>{category.icon}</span>
              <h4 style={styles.categoryTitle}>{category.title}</h4>
            </div>
            <div style={styles.skillsList}>
              {category.skills.map((skill, i) => (
                <span key={i} style={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Soft Skills Section */}
      <h3 style={styles.heading}>
        <span style={styles.accent}>//</span> Soft Skills
      </h3>
      
      <div style={styles.softSkillsGrid}>
        {softSkills.map((skill, index) => (
          <motion.div 
            key={index}
            style={styles.softSkillItem}
            whileHover={{ scale: 1.05 }}
          >
            <span style={styles.softSkillIcon}>{skill.icon}</span>
            {skill.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    maxWidth: "1000px",
    margin: "40px auto",
    border: "1px solid rgba(252, 46, 32, 0.1)",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0 0 30px 0",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  accent: {
    color: "#FC2E20",
    fontWeight: "700",
    fontSize: "24px",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginBottom: "40px",
  },
  skillCategory: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    border: "1px solid rgba(252, 46, 32, 0.1)",
  },
  categoryHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "15px",
    paddingBottom: "15px",
    borderBottom: "2px solid rgba(252, 46, 32, 0.1)",
  },
  categoryIcon: {
    color: "#FC2E20",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
  },
  categoryTitle: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
  },
  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  skillItem: {
    backgroundColor: "rgba(252, 46, 32, 0.08)",
    color: "#FC2E20",
    padding: "8px 15px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
  },
  divider: {
    height: "2px",
    background: "linear-gradient(90deg, rgba(252,46,32,0) 0%, #FC2E20 50%, rgba(252,46,32,0) 100%)",
    margin: "40px 0",
  },
  softSkillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  softSkillItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    backgroundColor: "#fff",
    padding: "15px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
    fontSize: "16px",
    fontWeight: "500",
    color: "#444",
    transition: "all 0.3s ease",
  },
  softSkillIcon: {
    color: "#FC2E20",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
  },
};

export default SkillTable;