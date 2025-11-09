import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setActiveLink(hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getLinkClass = (hash) => {
    return `nav-link ${activeLink === hash ? 'active' : ''}`;
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : 'transparent'} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="SpaceY Logo" />
          </a>
        </div>
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <a href="#projekt" className={getLinkClass('projekt')} onClick={closeMenu}>Projekt</a>
          <a href="#dzialania" className={getLinkClass('dzialania')} onClick={closeMenu}>Działania</a>
          <a href="#partnerzy" className={getLinkClass('partnerzy')} onClick={closeMenu}>Partnerzy</a>
          <a href="#zespol" className={getLinkClass('zespol')} onClick={closeMenu}>Zespół</a>
          <a href="#kontakt" className={getLinkClass('kontakt')} onClick={closeMenu}>Kontakt</a>
        </nav>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
