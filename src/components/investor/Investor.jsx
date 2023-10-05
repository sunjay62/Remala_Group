import React, { useState, useEffect } from 'react';
import './investor.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Investor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

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
            MENJUNJUNG TINGGI INTEGRITAS
          </h2>
          <h2 className="textHero" data-aos="fade-right">
            DAN KOMITMEN DALAM BEKERJA
          </h2>
        </div>
      </div>
      <div className="buttonsInvestor">
        <div className="containerAbout">
          <button className={`btnMenu ${activeButton === 'report/sec-report' ? 'clicked' : ''}`} onClick={() => handleButtonClick('report/sec-report')}>
            Laporan - Laporan
          </button>
          <button className={`btnMenu ${activeButton === 'stock-information/stock-volume' ? 'clicked' : ''}`} onClick={() => handleButtonClick('stock-information/stock-volume')}>
            Informasi Saham
          </button>
          <button className={`btnMenu ${activeButton === 'news/rups' ? 'clicked' : ''}`} onClick={() => handleButtonClick('news/rups')}>
            Berita & Kegiatan
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
