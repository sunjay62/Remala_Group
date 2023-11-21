import React, { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import logoremala from '../../assets/navbar/logoremala.png';
import { Link } from 'react-router-dom';
import Indonesia from '../../assets/navbar/indonesia.png';
import Uk from '../../assets/navbar/uk.png';
import { Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import LoadingScreen from '../loadingscreen/LoadingScreen';
import { DownOutlined } from '@ant-design/icons';
import tachyon from '../../assets/home/logotachyonnew.png';
import nethome from '../../assets/home/logonethomee.png';

// Inside your component
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 860);
  const [t, i18n] = useTranslation('global');
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLoading(true);
    scrollToTop();
    setTimeout(() => {
      i18n.changeLanguage(language);
      setLoading(false);
    }, 500);
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

  // Fungsi untuk mengubah state isMobile berdasarkan lebar layar
  const handleResize = () => {
    setIsMobile(window.innerWidth < 860);
  };

  useEffect(() => {
    // Tambahkan event listener untuk memantau perubahan lebar layar
    window.addEventListener('resize', handleResize);

    // Hapus event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
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

        <div className="navbarRight">
          <div className={active ? 'nav-menu active' : 'nav-menu'}>
            <Link
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              <span>
                {t('translation.navbar.about')}
                <DownOutlined className="dropdown-arrow" />
              </span>
              <div className="dropdown-content">
                <Link
                  className="dropdown-links"
                  to="/aboutus/profile"
                  onClick={() => {
                    scrollToTop();
                    handleMenuItemClick();
                  }}
                >
                  {t('translation.text-about.profile')}
                </Link>
                <Link
                  className="dropdown-links"
                  to="/aboutus/organitation-strucktur/board-of-commissioners"
                  onClick={() => {
                    scrollToTop();
                    handleMenuItemClick();
                  }}
                >
                  {t('translation.text-about.organization')}
                </Link>
                <Link
                  className="dropdown-links"
                  to="/aboutus/group-strucktur"
                  onClick={() => {
                    scrollToTop();
                    handleMenuItemClick();
                  }}
                >
                  {t('translation.text-about.group')}
                </Link>
                <Link
                  className="dropdown-links"
                  to="/aboutus/articles-of-association"
                  onClick={() => {
                    scrollToTop();
                    handleMenuItemClick();
                  }}
                >
                  {t('translation.text-about.anggaran')}
                </Link>
                <Link
                  className="dropdown-links"
                  to="/aboutus/award"
                  onClick={() => {
                    scrollToTop();
                    handleMenuItemClick();
                  }}
                >
                  {t('translation.text-about.awards')}
                </Link>
              </div>
            </Link>

            <Link
              to="/governance-corporate/principle-strucktur"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              {t('translation.navbar.gcg')}
            </Link>

            <Link
              to="/investor-relation/report/sec-report"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              {t('translation.navbar.relations')}
            </Link>

            <Link
              to="#"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              <span>
                {t('translation.navbar.business')}
                <DownOutlined className="dropdown-arrow" />
              </span>
              <div className="dropdown-content">
                <Link className="dropdown-links2">
                  <div className="imgMenuLinks">
                    <div className="containerLogo">
                      <img src={nethome} />
                    </div>
                  </div>
                </Link>
                <Link className="dropdown-links2">
                  <div className="imgMenuLinks2">
                    <div className="containerLogo">
                      <img src={tachyon} />
                    </div>
                  </div>
                </Link>
              </div>
            </Link>

            <Link
              to="/news"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              {t('translation.navbar.news')}
            </Link>

            <Link
              to="/contactus"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              {t('translation.navbar.contact')}
            </Link>

            <Link
              to="#"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              {t('translation.navbar.career')}
            </Link>

            {/* Tampilkan div dengan class "language" di dalam ul jika layar berukuran lebih kecil dari 860px */}
            {isMobile && (
              <div className="language">
                <Tooltip title="Indonesia" arrow className="tooltipContainer">
                  <button className={`language-button ${selectedLanguage === 'id' ? 'active' : ''}`} onClick={() => handleLanguageChange('id')}>
                    <img width="15" height="15" src={Indonesia} />
                  </button>
                </Tooltip>
                <Tooltip title="English" arrow className="tooltipContainer">
                  <button className={`language-button ${selectedLanguage === 'en' ? 'active' : ''}`} onClick={() => handleLanguageChange('en')}>
                    <img width="15" height="15" src={Uk} />
                  </button>
                </Tooltip>
              </div>
            )}
          </div>
          {!isMobile && (
            <div className="language">
              <Tooltip title="Indonesia" arrow className="tooltipContainer">
                <button className={`language-button ${selectedLanguage === 'id' ? 'active' : ''}`} onClick={() => handleLanguageChange('id')}>
                  <img width="15" height="15" src={Indonesia} />
                </button>
              </Tooltip>
              <Tooltip title="English" arrow className="tooltipContainer">
                <button className={`language-button ${selectedLanguage === 'en' ? 'active' : ''}`} onClick={() => handleLanguageChange('en')}>
                  <img width="15" height="15" src={Uk} />
                </button>
              </Tooltip>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
