import React, { useState, useEffect } from 'react';
import './laporan.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Laporan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [t] = useTranslation('global');
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/investor-relation/report/${componentName.toLowerCase()}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="mainContainerLaporan">
        <div className="menuStrukturLaporan" data-aos="fade-right">
          <div className={`btnLaporan ${activeButton === 'sec-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('sec-report')}>
            {t('translation.text-investor.btn-reports.sec')}
          </div>
          <div className={`btnLaporan ${activeButton === 'financial-statements' ? 'clicked' : ''}`} onClick={() => handleButtonClick('financial-statements')}>
            {t('translation.text-investor.btn-reports.finance')}
          </div>
          <div className={`btnLaporan ${activeButton === 'annual-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('annual-report')}>
            {t('translation.text-investor.btn-reports.annual')}
          </div>
          <div className={`btnLaporan ${activeButton === 'sustainability-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('sustainability-report')}>
            {t('translation.text-investor.btn-reports.sustainability')}
          </div>
        </div>
        <div className="outletReport">
          <Outlet />
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Laporan;
