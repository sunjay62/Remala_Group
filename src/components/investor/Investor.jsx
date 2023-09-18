import React, { useState, useEffect, useRef } from 'react';
import './investor.scss';
import Saham from './menu/saham/Saham';
import Berita from './menu/berita/Berita';
import Laporan from './menu/laporan/Laporan';

const Investor = () => {
  const [activeButton, setActiveButton] = useState('Laporan');
  const components = {
    Saham: <Saham />,
    Berita: <Berita />,
    Laporan: <Laporan />,
  };

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
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
          <button className={`btnMenu ${activeButton === 'Laporan' ? 'clicked' : ''}`} onClick={() => handleButtonClick('Laporan')}>
            Laporan-Laporan
          </button>
          <button className={`btnMenu ${activeButton === 'Saham' ? 'clicked' : ''}`} onClick={() => handleButtonClick('Saham')}>
            Informasi Saham
          </button>
          <button className={`btnMenu ${activeButton === 'Berita' ? 'clicked' : ''}`} onClick={() => handleButtonClick('Berita')}>
            Berita & Kegiatan
          </button>
        </div>
        <div className="isi-content-investor">{components[activeButton]}</div>
      </div>
    </div>
  );
};

export default Investor;
