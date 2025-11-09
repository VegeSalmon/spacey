import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'TikTok',
      position: 'left',
      height: 'high',
      icon: <img src={process.env.PUBLIC_URL + "/tiktok_icon.svg"} alt="TikTok" />
    },
    {
      name: 'Instagram',
      position: 'center',
      height: 'low',
      icon: <img src={process.env.PUBLIC_URL + "/Instagram_logo_2022.svg"} alt="Instagram" />
    },
    {
      name: 'Facebook',
      position: 'right',
      height: 'medium',
      icon: <img src={process.env.PUBLIC_URL + "/2021_Facebook_icon.svg"} alt="Facebook" />
    }
  ];

  return (
    <section className="contact-section" id="kontakt">
      <div className="contact-container">
        <div className="contact-content">
          <div className="social-links-container">
            <h2 className="contact-title rotated-title" style={{transform: 'rotate(-6deg)'}}>
              Kontakt:
            </h2>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <div key={index} className={`social-link social-link-${link.position} social-link-${link.height}`}>
                  <div className="social-icon">
                    {link.icon}
                  </div>
                  <div className="social-name">
                    {link.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="donation-card">
            <div className="card-content">
              <div className="card-title">
                Pomóż nam!
              </div>
              <div className="card-description">
                Lörem ipsum diskade negon. Davis musk deciskade megagen. Viskap vajäl, i plal donde.
              </div>
              <button className="donation-button">
                <div className="button-background"></div>
                <div className="button-text">
                  Nasza zrzutka
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
