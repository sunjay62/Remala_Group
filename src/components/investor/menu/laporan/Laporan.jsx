import React, { useState, useEffect } from 'react';
import './laporan.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Laporan = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
        <div className="content-byMenu">
          <Outlet />
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Laporan;
