import React from "react";
import { ExternalLink } from "lucide-react";
import "./Certificates.css";

const CertificateCard = ({ title, issuer, date, credentialId, link, logo, skills }) => (
  <div className="certificate-card">
    <img
      src={logo || "https://via.placeholder.com/64"}
      alt={`${issuer} logo`}
      className="certificate-logo"
      loading="lazy"
    />
    <h2 className="certificate-title">{title}</h2>
    <p className="certificate-issuer">{issuer}</p>
    <p className="certificate-date">Issued: {date}</p>
    {credentialId !== "N/A" && (
      <p className="certificate-id">Credential ID: {credentialId}</p>
    )}
    <p className="certificate-skills">Skills: {skills || "Not specified"}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-link"
    >
      View Certificate <ExternalLink size={16} />
    </a>
  </div>
);


const Certificates = () => {
  const certificates = [
    {
      title: "Wipro",
      issuer: "Teach Maven",
      date: "Issued Jan 2024 - Expires Jan 2025",
      credentialId: "TM00474",
      link: "https://www.teachmaven.com/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wipro_Primary_Logo_Color_RGB.svg",
      skills: "Data Science",
    },
    {
      title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      date: "December 2024",
      credentialId: "7teiDWLXi4LAeJcwF",
      link: "https://www.theforage.com/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/The_Forage_logo.png",
      skills: "Microsoft Power BI",
    },
    {
      title: "Data Visualization With Power BI",
      issuer: "Great Learning",
      date: "November 2024",
      credentialId: "N/A",
      link: "https://www.mygreatlearning.com/",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Great_Learning_logo.png",
      skills: "Microsoft Power BI",
    },
    {
      title: "Data Analysis using Microsoft Excel",
      issuer: "Coursera Project Network",
      date: "October 2024",
      credentialId: "RRYY0A3ZOJZP",
      link: "https://www.coursera.org/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Coursera-Logo.png",
      skills: "Advanced Microsoft Excel",
    },
    {
      title: "SheHacks Certificate of Appreciation",
      issuer: "TinkerHub Foundation",
      date: "2022",
      credentialId: "N/A",
      link: "https://www.linkedin.com/posts/ansheena-d-0536081b2_shehacks-activity-6913871770613686272-knKt",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/TinkerHub_Logo.svg",
      skills: "JavaScript, Project Development",
    },
    {
      title: "Foundation Course - Certificate of Appreciation",
      issuer: "TinkerHub Foundation",
      date: "2022",
      credentialId: "N/A",
      link: "https://www.linkedin.com/posts/ansheena-d-0536081b2_activity-6913871177027387392-Zizl",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/TinkerHub_Logo.svg",
      skills: "Portfolio Development, Web Development",
    },
  ];

  return (
    <section className="certificates-section">
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
