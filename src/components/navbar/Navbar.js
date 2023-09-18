import React, { useState, useEffect } from 'react';
import menuItems from './MenuItems';
import './navbar.css';
import logoremala from '../../assets/navbar/logoremala.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="navbar-logo">
        <img src={logoremala} style={{ width: '70px' }} onClick={() => (window.location.href = '/')} />
      </h1>

      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={active ? 'nav-menu active' : 'nav-menu'}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
