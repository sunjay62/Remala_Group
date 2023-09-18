import React, { useState, useEffect, useRef } from 'react';
import './contactus.scss';
import Contact from './menu/contact/Contact';
import Faq from './menu/faq/Faq';
import MenuRegulasi from './menu/menuregulasi/MenuRegulasi';

const ContactUs = () => {
  const [activeButton, setActiveButton] = useState('Contact');
  const components = {
    Contact: <Contact />,
    Faq: <Faq />,
    MenuRegulasi: <MenuRegulasi />,
  };

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
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
          <button className={`btnMenu ${activeButton === 'MenuRegulasi' ? 'clicked' : ''}`} onClick={() => handleButtonClick('MenuRegulasi')}>
            Regulasi
          </button>
          <button className={`btnMenu ${activeButton === 'Faq' ? 'clicked' : ''}`} onClick={() => handleButtonClick('Faq')}>
            FAQ
          </button>
        </div>
        <div className="isi-content-contactUs">{components[activeButton]}</div>
      </div>
    </div>
  );
};

export default ContactUs;
