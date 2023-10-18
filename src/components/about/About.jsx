import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import './about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const [t] = useTranslation('global');

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/aboutus/${componentName.toLowerCase()}`);
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
            {t('translation.text-about.title1')}
          </h2>
          <h2 className="textHero" data-aos="fade-right">
            {t('translation.text-about.title2')}
          </h2>
        </div>
      </div>
      <div className="buttons">
        <div className="containerAbout">
          <button className={`btnMenuAbout ${activeButton === 'profile' ? 'clicked' : ''}`} onClick={() => handleButtonClick('profile')}>
            {t('translation.text-about.profile')}
          </button>
          <button className={`btnMenuAbout ${activeButton === 'organitation-strucktur/board-of-commissioners' ? 'clicked' : ''}`} onClick={() => handleButtonClick('organitation-strucktur/board-of-commissioners')}>
            {t('translation.text-about.organization')}
          </button>
          <button className={`btnMenuAbout ${activeButton === 'group-strucktur' ? 'clicked' : ''}`} onClick={() => handleButtonClick('group-strucktur')}>
            {t('translation.text-about.group')}
          </button>
          <button className={`btnMenuAbout ${activeButton === 'articles-of-association' ? 'clicked' : ''}`} onClick={() => handleButtonClick('articles-of-association')}>
            {t('translation.text-about.anggaran')}
          </button>
          <button className={`btnMenuAbout ${activeButton === 'award' ? 'clicked' : ''}`} onClick={() => handleButtonClick('award')}>
            {t('translation.text-about.awards')}
          </button>
        </div>
        <div className="isi-content-about">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
