import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import './about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import metaThumbnail from '../data/images/meta/homeimage.png';
import MetaDecorator from '../Util/MetaDecorator';

const aboutus = require('../data/json/aboutus.json');

const AboutEn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  // Update activeButton based on the current route
  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    setActiveButton(currentPath);
  }, [location.pathname]);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/en/aboutus/${componentName.toLowerCase()}`);

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

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <MetaDecorator description={aboutus.pageDescriptionEn} title={aboutus.pageTitleEn} imageUrl={metaThumbnail} imageAlt={aboutus.metaImageAltEn} />
      <div className="content" data-aos="fade-down">
        <div className="profile-content d-flex align-items-center justify-content-center">
          <div className="content-text">
            <h2 className="textHero" data-aos="fade-left">
              PT. REMALA ABADI
            </h2>
            <h2 className="textHero" data-aos="fade-right">
              Company Group
            </h2>
          </div>
        </div>
        <div className="buttons">
          <div className="containerAbout">
            <button className={`btnMenuAbout ${activeButton === 'profile' ? 'clicked' : ''}`} onClick={() => handleButtonClick('profile')}>
              Profile
            </button>
            <button className={`btnMenuAbout ${activeButton === 'organization-structure' ? 'clicked' : ''}`} onClick={() => handleButtonClick('organization-structure')}>
              Organizational Structure
            </button>
            <button className={`btnMenuAbout ${activeButton === 'group-structure' ? 'clicked' : ''}`} onClick={() => handleButtonClick('group-structure')}>
              Group Structure
            </button>
            {/* <button className={`btnMenuAbout ${activeButton === 'articles-of-association' ? 'clicked' : ''}`} onClick={() => handleButtonClick('articles-of-association')}>
            Articles of Association
          </button> */}
            <button className={`btnMenuAbout ${activeButton === 'award' ? 'clicked' : ''}`} onClick={() => handleButtonClick('award')}>
              Awards
            </button>
          </div>
          <div className="isi-content-about">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEn;
