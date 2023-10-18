import React, { useEffect } from 'react';
import './profile.scss';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerProfile">
        <div className="company-profile-text" data-aos="fade-up">
          <h4 className="text-center">{t('translation.text-profile.title1')}</h4>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('translation.text-profile.text1')}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('translation.text-profile.text2')}</p>
          <p>{t('translation.text-profile.text3')}</p>
          <p>{t('translation.text-profile.text4')}</p>
          <p>{t('translation.text-profile.text5')}</p>
          <ol>
            <li>Fiber Media Indonesia</li>
            <li>PC 24 Cyber Indonesia </li>
            <li>Solusi Aplikasi Andalan Semesta </li>
            <li>Akselerasi Informasi Indonesia</li>
          </ol>
        </div>

        <div className="key-features" data-aos="fade-up">
          <div className="content-key-features col-8 m-auto d-block">
            <h2 className="fw-bold">{t('translation.text-profile.key-features')}</h2>
            <p>{t('translation.text-profile.text-features')}</p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="content-visi-misi col-8 d-flex">
              <div className="visi col-6">
                <h2 className="fw-bold">{t('translation.text-profile.visi')}</h2>
                <p> {t('translation.text-profile.text-visi')}</p>
              </div>
              <div className="misi col-6">
                <h2 className="fw-bold">{t('translation.text-profile.misi')}</h2>
                <p>{t('translation.text-profile.text-misi')}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <h1 className="text-center mt-5">MILESTONE CONTENT</h1> */}
        <div className="milestoneContainer"></div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Profile;
