import React, { useState, useEffect } from 'react';
import './laporan.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Footer from '../../../footer/FooterId';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';

const Laporan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const isIdPath = window.location.pathname.startsWith('/en');

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
            Laporan SEC
          </div>
          <div className={`btnLaporan ${activeButton === 'financial-statements' ? 'clicked' : ''}`} onClick={() => handleButtonClick('financial-statements')}>
            Laporan Keuangan
          </div>
          <div className={`btnLaporan ${activeButton === 'annual-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('annual-report')}>
            Laporan Tahunan
          </div>
          <div className={`btnLaporan ${activeButton === 'sustainability-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('sustainability-report')}>
            Laporan Keberlanjutan
          </div>
        </div>
        <div className="outletReport">
          <Outlet />
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default Laporan;
