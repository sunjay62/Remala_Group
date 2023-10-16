import React, { useState, useEffect, useRef } from 'react';
import menuItems from './MenuItems';
import './navbar.scss';
import logoremala from '../../assets/navbar/logoremala.png';
import { Link } from 'react-router-dom';
import Indonesia from '../../assets/navbar/indonesia.png';
import Uk from '../../assets/navbar/uk.png';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleMenuItemClick = () => {
    setActive(false);
  };

  const navbarRef = useRef(null);

  const handleClickOutside = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setActive(false);
    }
  };

  const handleScroll = () => {
    if (active) {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
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
      <nav ref={navbarRef} className={`navbar  ${scrolled ? 'scrolled' : ''}`}>
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
                <Link
                  to={item.url}
                  className={item.cName}
                  onClick={() => {
                    scrollToTop();
                    handleMenuItemClick();
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <span></span>
        <div className="language">
          <Tooltip title="Indonesia" className="tooltipContainer">
            <button className={`language-button ${selectedLanguage === 'id' ? 'active' : ''}`} onClick={() => handleLanguageChange('id')}>
              <img width="15" height="15" src={Indonesia} />
            </button>
          </Tooltip>
          <Tooltip title="English" className="tooltipContainer">
            <button className={`language-button ${selectedLanguage === 'en' ? 'active' : ''}`} onClick={() => handleLanguageChange('en')}>
              <img width="15" height="15" src={Uk} />
            </button>
          </Tooltip>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
