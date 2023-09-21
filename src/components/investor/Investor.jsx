import React, { useState } from 'react';
import './investor.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const Investor = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/investor-relation/${componentName.toLowerCase()}`);
  };

  return (
    <div className="contentInvestor">
      <div className="laporan-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero">MENJUNJUNG TINGGI INTEGRITAS</h2>
          <h2 className="textHero">DAN KOMITMEN DALAM BEKERJA</h2>
        </div>
      </div>
      <div className="buttons">
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
