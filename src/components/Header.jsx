import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('projekt');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['projekt', 'partnerzy', 'zespol', 'kontakt'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
        <nav className="navigation">
          <a href="#projekt" className={`nav-link ${activeSection === 'projekt' ? 'active' : ''}`}>
            Nasz Projekt
          </a>
          <a href="#partnerzy" className={`nav-link ${activeSection === 'partnerzy' ? 'active' : ''}`}>
            Partnerzy
          </a>
          <a href="#zespol" className={`nav-link ${activeSection === 'zespol' ? 'active' : ''}`}>
            Zespół
          </a>
          <a href="#kontakt" className={`nav-link ${activeSection === 'kontakt' ? 'active' : ''}`}>
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
