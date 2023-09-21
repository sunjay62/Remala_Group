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
      <div className="d-flex mainContainerLaporan">
        <div className="menuStruktur" data-aos="fade-right">
          <div className={`btnNews ${activeButton === 'sec-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('sec-report')}>
            <p>Laporan SEC</p>
          </div>
          <div className={`btnNews ${activeButton === 'financial-statements' ? 'clicked' : ''}`} onClick={() => handleButtonClick('financial-statements')}>
            <p>Laporan Keuangan</p>
          </div>
          <div className={`btnNews ${activeButton === 'annual-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('annual-report')}>
            <p>Laporan Tahunan</p>
          </div>
          <div className={`btnNews ${activeButton === 'sustainability-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('sustainability-report')}>
            <p>Laporan Keberlanjutan</p>
          </div>
        </div>
        <div className="content-byMenu col-7">
          <Outlet />
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Laporan;
