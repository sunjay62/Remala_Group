import React, { useEffect } from 'react';
import Footer from '../../../footer/Footer';
import './contact.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('global');

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
          <p>{t('translation.text-contact.text-location')}</p>
        </div>
        <div className="phone">
          <PhoneInTalkIcon className="icon" />
          <p>{t('translation.text-contact.text-phone')}</p>
        </div>
        <div className="email">
          <AttachEmailIcon className="icon" />
          <p>{t('translation.text-contact.text-mail')}</p>
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Contact;
