import React from 'react';
import './Footer.css';

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Lahiru Pramuditha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
