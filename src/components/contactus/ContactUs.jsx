import React, { useState } from 'react';
import './contactus.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/contactus/${componentName.toLowerCase()}`);
  };

  return (
    <div className="contentContactUs">
      <div className="contact-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero">GET 24/7 SUPPORT</h2>
          <h2 className="textHero">AND INFORMATION</h2>
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
