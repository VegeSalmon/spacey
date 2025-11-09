import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={process.env.PUBLIC_URL + "/Logo.png"} alt="Logo" />
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h3 className="footer-section-title">Wsparcie:</h3>
              <ul className="footer-links">
                <li><a href="#help">Pomoc</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-section-title">Kontakt:</h3>
              <ul className="footer-links">
                <li><a href="mailto:kontakt@spacey.pl">Email</a></li>
                <li><a href="tel:+48123456789">Telefon</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-section-title">Media:</h3>
              <ul className="footer-links">
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#tiktok">TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
          Design by Patryk Mitręga<br></br>
          Made by Jacek Wiaterek
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
