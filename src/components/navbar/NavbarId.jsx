import React, { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import logoremala from '../../assets/navbar/logoremala.png';
import { Link } from 'react-router-dom';
import Indonesia from '../../assets/navbar/indonesia.png';
import Uk from '../../assets/navbar/uk.png';
import { Tooltip } from '@material-ui/core';
import LoadingScreen from '../loadingscreen/LoadingScreen';
import { DownOutlined } from '@ant-design/icons';
import tachyon from '../../assets/home/logotachyonnew.png';
import nethome from '../../assets/home/logonethomee.png';

// Inside your component
const NavbarId = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('id');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 860);
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLoading(true);

    // Get the current pathname
    const currentPathname = window.location.pathname;

    // Remove the existing language prefix from the pathname, if any
    const strippedPathname = currentPathname.replace(/^\/(en|id)/, '');

    // Get the base URL
    const base_url = window.location.origin;

    // Update the URL based on the selected language
    const newPath = language === 'id' ? `${base_url}${strippedPathname}` : `${base_url}/en${strippedPathname}`;
    window.history.pushState({}, '', newPath);

    // Reload the page to apply the language change
    window.location.reload();
  };

  const handleMenuItemClick = () => {
    setActive(false);
  };

  const handleSubMenuItemClick = () => {
    setActive(false);

    // Check current scroll position
    const currentScrollPosition = window.scrollY;

    // Scroll only if current scroll position is less than 400px
    if (currentScrollPosition < 400) {
      window.scrollTo({
        top: 400,
        behavior: 'smooth',
      });
    }
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
            <div className="nav-links">
              <span>
                Tentang Kami
                <DownOutlined className="dropdown-arrow" />
              </span>
              <div className="dropdown-content">
                <Link
                  className="dropdown-links"
                  to="/aboutus/profile"
                  onClick={() => {
                    handleSubMenuItemClick();
                  }}
                >
                  Profil
                </Link>
                <Link
                  className="dropdown-links"
                  to="/aboutus/organization-strucktur"
                  onClick={() => {
                    handleSubMenuItemClick();
                  }}
                >
                  Struktur Organisasi
                </Link>
                <Link
                  className="dropdown-links"
                  to="/aboutus/group-strucktur"
                  onClick={() => {
                    handleSubMenuItemClick();
                  }}
                >
                  Struktur Grup
                </Link>
                {/* <Link
                  className="dropdown-links"
                  to="/aboutus/articles-of-association"
                  onClick={() => {
                    scrollToTop();
                    handleSubMenuItemClick();
                  }}
                >
                  Anggaran Dasar
                </Link> */}
                <Link
                  className="dropdown-links"
                  to="/aboutus/award"
                  onClick={() => {
                    handleSubMenuItemClick();
                  }}
                >
                  Penghargaan
                </Link>
              </div>
            </div>

            <Link
              to="/governance-corporate/quality-management"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              Tata Kelola
            </Link>

            {/* <Link
              to="/investor-relation/report/sec-report"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              Hubungan Investor
            </Link> */}

            <div
              to="#"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              <span>
                Bisnis
                <DownOutlined className="dropdown-arrow" />
              </span>
              <div className="dropdown-content">
                <Link to="https://nethome.id/" className="dropdown-links2" target="_blank" rel="noopener noreferrer">
                  <div className="imgMenuLinks">
                    <div className="containerLogo">
                      <img src={nethome} alt="Nethome Logo" />
                    </div>
                  </div>
                </Link>

                <Link to="https://tachyon.net.id/" className="dropdown-links2" target="_blank" rel="noopener noreferrer">
                  <div className="imgMenuLinks2">
                    <div className="containerLogo">
                      <img src={tachyon} alt="Tachyon Logo" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              to="/news"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              Berita
            </Link>

            <Link
              to="/contactus"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              Hubungi Kami
            </Link>

            <Link
              to="#"
              className="nav-links"
              onClick={() => {
                scrollToTop();
                handleMenuItemClick();
              }}
            >
              Karir
            </Link>

            {!isMobile && (
              <div to="#" className="nav-links" id="languageContainer">
                <span className="span-menu">
                  <img width="18" height="18" src={Indonesia} />
                  <DownOutlined className="dropdown-arrow" />
                </span>
                <div className="dropdown-content">
                  <div className="languageDropdown">
                    <button className={`language-button-dropdown ${selectedLanguage === 'id' ? 'active' : ''}`} onClick={() => handleLanguageChange('id')}>
                      <img width="15" height="15" src={Indonesia} />
                      <p>Bahasa</p>
                    </button>
                    <button className={`language-button-dropdown ${selectedLanguage === 'en' ? 'active' : ''}`} onClick={() => handleLanguageChange('en')}>
                      <img width="15" height="15" src={Uk} />
                      <p>English</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

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
        </div>
      </nav>
    </>
  );
};

export default NavbarId;
