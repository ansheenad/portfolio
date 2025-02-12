import React from "react";
import { ExternalLink } from "lucide-react";
import "./Certificates.css";

const CertificateCard = ({ title, issuer, date, credentialId, link, skills }) => (
  <div className="certificate-card">
    <div className="certificate-header">
      <h2 className="certificate-title">{title}</h2>
      <div className="certificate-badge">{issuer}</div>
    </div>
    
    <div className="certificate-content">
      <p className="certificate-date">📅 {date}</p>
      {credentialId !== "N/A" && (
        <p className="certificate-id">🆔 Credential ID: {credentialId}</p>
      )}
      <div className="certificate-skills">
        🛠️ Skills: {skills || "Not specified"}
      </div>
    </div>
    
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
    // ... (your existing certificate data, remove logo property)
  ];

  return (
    <section className="certificates-section">
      <h2 className="section-title">Certifications & Achievements</h2>
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;