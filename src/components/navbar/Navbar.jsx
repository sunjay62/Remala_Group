import React, { useState, useEffect } from 'react';
import menuItems from './MenuItems';
import './navbar.scss';
import logoremala from '../../assets/navbar/logoremala.png';
import { Link } from 'react-router-dom';
import Indonesia from '../../assets/navbar/indonesia.png';
import Uk from '../../assets/navbar/uk.png';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="navbar-logo">
          <img
            src={logoremala}
            style={{ width: '70px' }}
            onClick={() => {
              window.location.href = '/';
              scrollToTop();
            }}
          />
        </h1>

        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName} onClick={scrollToTop}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <p></p>
        <div className="language">
          <button className={`language-button ${selectedLanguage === 'id' ? 'active' : ''}`} onClick={() => handleLanguageChange('id')}>
            <img width="15" height="15" src={Indonesia} />
          </button>
          <button className={`language-button ${selectedLanguage === 'en' ? 'active' : ''}`} onClick={() => handleLanguageChange('en')}>
            <img width="15" height="15" src={Uk} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
