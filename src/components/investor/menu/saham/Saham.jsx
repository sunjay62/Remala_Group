import React, { useState, useEffect } from 'react';
import './saham.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Saham = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const [t] = useTranslation('global');

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/investor-relation/stock-information/${componentName.toLowerCase()}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="mainContainerSaham">
        <div className="menuStrukturSaham" data-aos="fade-right">
          <div className={`btnStock ${activeButton === 'stock-volume' ? 'clicked' : ''}`} onClick={() => handleButtonClick('stock-volume')}>
            {t('translation.text-investor.btn-share.price')}
          </div>
          <div className={`btnStock ${activeButton === 'stock-record' ? 'clicked' : ''}`} onClick={() => handleButtonClick('stock-record')}>
            {t('translation.text-investor.btn-share.pencatatan')}
          </div>
          <div className={`btnStock ${activeButton === 'public-prospectus' ? 'clicked' : ''}`} onClick={() => handleButtonClick('public-prospectus')}>
            {t('translation.text-investor.btn-share.prospektus')}
          </div>
          <div className={`btnStock ${activeButton === 'shareholder-composition' ? 'clicked' : ''}`} onClick={() => handleButtonClick('shareholder-composition')}>
            {t('translation.text-investor.btn-share.komposisi')}
          </div>
        </div>
        <div className="outletStock">
          <Outlet />
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Saham;
