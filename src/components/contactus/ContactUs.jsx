import React, { useState, useEffect } from 'react';
import './contactus.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [t] = useTranslation('global');
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/contactus/${componentName.toLowerCase()}`);
  };

  return (
    <div className="contentContactUs" data-aos="fade-down">
      <div className="contact-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero" data-aos="fade-left">
            {t('translation.text-contact.title1')}
          </h2>
          <h2 className="textHero" data-aos="fade-right">
            {t('translation.text-contact.title2')}
          </h2>
        </div>
      </div>
      <div className="buttons">
        <div className="containerAbout">
          <button className={`btnMenu ${activeButton === 'regulations-menu' ? 'clicked' : ''}`} onClick={() => handleButtonClick('regulations-menu')}>
            {t('translation.text-contact.btn-regulasi')}
          </button>
          <button className={`btnMenu ${activeButton === 'faq' ? 'clicked' : ''}`} onClick={() => handleButtonClick('faq')}>
            {t('translation.text-contact.btn-faq')}
          </button>
        </div>
        <div className="isi-content-contactUs">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
