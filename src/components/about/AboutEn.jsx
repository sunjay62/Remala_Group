import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import './about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const AboutEn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const [t] = useTranslation('global');

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/en/aboutus/${componentName.toLowerCase()}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
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
          <button className={`btnMenuAbout ${activeButton === 'organitation-strucktur/board-of-commissioners' ? 'clicked' : ''}`} onClick={() => handleButtonClick('organitation-strucktur/board-of-commissioners')}>
            Organizational Structure
          </button>
          <button className={`btnMenuAbout ${activeButton === 'group-strucktur' ? 'clicked' : ''}`} onClick={() => handleButtonClick('group-strucktur')}>
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
  );
};

export default AboutEn;
