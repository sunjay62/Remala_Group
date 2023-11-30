import React, { useState, useEffect } from 'react';
import './contactus.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
            DAPATKAN DUKUNGAN 24/7
          </h2>
          <h2 className="textHero" data-aos="fade-right">
            DAN INFORMASI
          </h2>
        </div>
      </div>
      <div className="buttons">
        <div className="containerAbout">
          <button className={`btnMenu ${activeButton === 'regulations-menu' ? 'clicked' : ''}`} onClick={() => handleButtonClick('regulations-menu')}>
            Regulasi
          </button>
          <button className={`btnMenu ${activeButton === 'faq' ? 'clicked' : ''}`} onClick={() => handleButtonClick('faq')}>
            FAQ
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
