import React, { useState, useEffect } from 'react';
import './investor.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Investor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const [t] = useTranslation('global');

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/investor-relation/${componentName.toLowerCase()}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div className="contentInvestor" data-aos="fade-down">
      <div className="laporan-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero" data-aos="fade-left">
            {t('translation.text-investor.title1')}
          </h2>
          <h2 className="textHero" data-aos="fade-right">
            {t('translation.text-investor.title2')}
          </h2>
        </div>
      </div>
      <div className="buttonsInvestor">
        <div className="containerAbout">
          <button className={`btnMenu ${activeButton === 'report/sec-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('report/sec-report')}>
            {t('translation.text-investor.btn-report')}
          </button>
          <button className={`btnMenu ${activeButton === 'stock-information/stock-volume' ? 'clicked' : ''}`} onClick={() => handleButtonClick('stock-information/stock-volume')}>
            {t('translation.text-investor.btn-information')}
          </button>
          <button className={`btnMenu ${activeButton === 'news/rups' ? 'clicked' : ''}`} onClick={() => handleButtonClick('news/rups')}>
            {t('translation.text-investor.btn-news')}
          </button>
        </div>
        <div className="isi-content-investor">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Investor;
