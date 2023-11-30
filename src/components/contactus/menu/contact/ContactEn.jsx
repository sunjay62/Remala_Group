import React, { useEffect } from 'react';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import './contact.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerContact" data-aos="fade-up">
        <div className="location">
          <LocationOnIcon className="icon" />
          <p>Location</p>
        </div>
        <div className="phone">
          <PhoneInTalkIcon className="icon" />
          <p>Phone</p>
        </div>
        <div className="email">
          <AttachEmailIcon className="icon" />
          <p>E-mail</p>
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default Contact;
