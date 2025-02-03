import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaDiscord, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm('service_wthzu8t', 'template_bpqr62i', e.target, '6R-1dZptXTfE_9Zlz')
      .then((result) => {
        setSending(false);
        setStatus('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        setShowForm(false);
      }, (error) => {
        setSending(false);
        setStatus('Message failed to send, please try again.');
      });
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          {/* Say Hello Button */}
          <button onClick={() => setShowForm(true)} style={styles.button}>Say Hello!</button>

          {/* Social Icons */}
          <div style={styles.socialIcons}>
            <a href="https://www.instagram.com/ansheena__d" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/ansheenad" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/ansheena-d-0536081b2" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaLinkedin size={24} />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/ansheena_d" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaTwitter size={24} />
            </a>
            <a href="https://discord.com/users/ansheena" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaDiscord size={24} />
            </a>
            <a href="https://wa.me/+962780191310" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaWhatsapp size={24} />
            </a>
            <a href="mailto:your-ansheenad@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Pop-up Form */}
      {showForm && (
        <div style={styles.overlay}>
          <div style={styles.popupContent}>
            <button onClick={() => setShowForm(false)} style={styles.closeButton}>X</button>
            <form style={styles.form} onSubmit={handleSubmit}>
              {status && <p style={styles.statusMessage}>{status}</p>}
              <h3 style={styles.formHeading}>Connect with Me</h3>
              <label style={styles.label}>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
                style={styles.input}
              />
              <label style={styles.label}>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                style={styles.input}
              />
              <label style={styles.label}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                style={styles.input}
              />
              <label style={styles.label}>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here"
                style={styles.textarea}
              ></textarea>
              <button type="submit" disabled={sending} style={styles.submitButton}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>© 2025 ANSHEENA D. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    backgroundColor: '#010100',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    justifyItems: 'center',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FC2E20',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '10px',
  },
  icon: {
    color: '#fff',
    fontSize: '24px',
    transition: 'color 0.3s ease',
  },
  iconHover: {
    color: '#FC2E20', // Highlight color on hover
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  popupContent: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '400px',
    padding: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#FC2E20',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '18px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  formHeading: {
    color: '#FC2E20',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  label: {
    textAlign: 'left',
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    border: '2px solid #FC2E20',
    borderRadius: '5px',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    border: '2px solid #FC2E20',
    borderRadius: '5px',
    fontSize: '16px',
    height: '120px',
  },
  submitButton: {
    backgroundColor: '#FC2E20',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  statusMessage: {
    color: '#28a745', // Green for success
    marginTop: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  copyright: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#888',
  },
};

export default Footer;