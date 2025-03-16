import React from 'react';
import './Footer.css';
import AjiLogo from '../../assets/logo.svg';
import EmailIcon from '../../assets/email-icon.svg';

const Footer = () => {
  return (
    <footer id="footer" className="aji-footer">
      {/* Logo seul, centré en haut */}
      <div className="footer-logo">
        <img src={AjiLogo} alt="AJI logo" />
      </div>

      {/* Conteneur pour la partie divisée en deux colonnes */}
      <div className="footer-content">
        {/* Bloc gauche : icône, titre + e-mail */}
        <div className="footer-left">
          <img src={EmailIcon} alt="email icon" className="email-icon" />
          <div className="email-text">
            <div className="email-label">Email Us</div>
            <a href="mailto:Aji@ajiapp.com" className="email-link">
              Aji@ajiapp.com
            </a>
          </div>
        </div>

        {/* Bloc droit : texte libre (exemple) */}
        <div className="footer-right">
          <p>© 2025 AJI | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
