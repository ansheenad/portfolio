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
          <button onClick={() => setShowForm(true)} style={styles.button}>Say Hello!</button>
          <div style={styles.socialIcons}>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaInstagram size={28} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaLinkedin size={28} />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaTwitter size={28} />
            </a>
            <a href="https://discord.com/users/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaDiscord size={28} />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaWhatsapp size={28} />
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaEnvelope size={28} />
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
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
                style={styles.input}
              />
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
                style={styles.input}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                style={styles.input}
              />
              <label>Message:</label>
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

const styles = {
  footer: {
    backgroundColor: '#010100',
    color: '#fff',
    padding: '40px 0',
    textAlign: 'center',
    marginTop: '40px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
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
    padding: '15px 30px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  socialIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '10px',
  },
  icon: {
    color: 'inherit',
    transition: 'color 0.3s ease',
    fontSize: '24px',
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
    padding: '20px',
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
    gap: '15px',
  },
  formHeading: {
    color: '#FC2E20',
    fontWeight: 'bold',
    marginBottom: '10px',
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
//   statusMessage: {
//     color: status === 'Message sent successfully!' ? '#28a745' : '#dc3545', // Green for success, red for failure
//     marginTop: '10px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//   },
  copyright: {
    marginTop: '20px',
  },
};

export default Footer;
