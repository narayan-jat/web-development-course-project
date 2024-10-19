import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href="https://github.com/narayan-jat" className="icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/narayan-jat/" className="icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:nj223958@gmail.com" className="icon">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p className="footer-text">© 2024 Narayan Jat. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
