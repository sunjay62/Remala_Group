import React, { useState, useEffect, useRef } from 'react';
import './contactus.scss';
import Contact from './menu/contact/Contact';
import Faq from './menu/faq/Faq';
import MenuRegulasi from './menu/menuregulasi/MenuRegulasi';

const ContactUs = () => {
  const [renderContent, setRenderContent] = useState(<Contact />);

  const handleButtonClick = (component) => {
    setRenderContent(component);

    // Hapus kelas 'clicked' dari semua tombol
    const buttons = document.querySelectorAll('.btnMenu');
    buttons.forEach((button) => button.classList.remove('clicked'));

    // Tambahkan kelas 'clicked' ke tombol yang diklik
    const clickedButton = document.querySelector(`button[data-component="${component.type.name}"]`);
    clickedButton.classList.add('clicked');
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
          <button className="btnMenu" onClick={() => handleButtonClick(<MenuRegulasi />)} data-component="MenuRegulasi">
            Regulasi
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<Faq />)} data-component="Faq">
            FAQ
          </button>
        </div>
        <div className="isi-content-contactUs">{renderContent}</div>
      </div>
    </div>
  );
};

export default ContactUs;
