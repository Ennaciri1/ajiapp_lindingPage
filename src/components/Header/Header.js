import React from 'react';
import './Header.css';
import ajiLogoImage from '../../assets/aji-logo.svg';

const Header = () => {
  return (
    <header className="header">
      {/* .container + .header-content pour limiter la largeur et 
          aligner les éléments en flex */}
      <div className="container header-content">

        {/* Logo */}
        <div className="header-logo">
          <img src={ajiLogoImage} alt="Aji" />
        </div>

        {/* Navigation */}
        
        <nav className="header-nav hide-on-mobile">

          <ul>
            <li><a href="#whyaji">Why Aji</a></li>
            <li><a href="#howitworks">How It Works</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>

        {/* Bouton d'action (CTA) */}
        <div className="header-cta">
          <a href="#download" className="btn">
            Download App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
