import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RevMind</h4>
            <p>AI-powered analytics for Indian MSMEs</p>
            <p className="tagline-small">Smarter Decisions, Instantly</p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#workflow">How It Works</a></li>
              <li><a href="#contact">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#whatsapp">WhatsApp Support</a></li>
              <li><a href="#docs">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 RevMind. All rights reserved.</p>
          <p>Empowering Indian MSMEs with AI-driven intelligence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
