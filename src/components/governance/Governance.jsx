import React, { useState, useEffect, useRef } from 'react';
import './governance.scss';
import PrinsipStruktur from './menu/prinsipstruktur/PrinsipStruktur';
import ManajemenMutu from './menu/manajemenmutu/ManajemenMutu';
import KodeEtik from './menu/kodeetik/KodeEtik';

const Governance = () => {
  const [activeButton, setActiveButton] = useState('PrinsipStruktur');
  const components = {
    PrinsipStruktur: <PrinsipStruktur />,
    KodeEtik: <KodeEtik />,
    ManajemenMutu: <ManajemenMutu />,
  };

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
  };

  return (
    <div className="contentGovernance">
      <div className="prinsip-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero">MENJUNJUNG TINGGI INTEGRITAS</h2>
          <h2 className="textHero">DAN KOMITMEN DALAM BEKERJA</h2>
        </div>
      </div>
      <div className="buttons">
        <div className="containerGovernance">
          <button className={`btnMenu ${activeButton === 'PrinsipStruktur' ? 'clicked' : ''}`} onClick={() => handleButtonClick('PrinsipStruktur')}>
            Prinsip & Struktur
          </button>
          <button className={`btnMenu ${activeButton === 'KodeEtik' ? 'clicked' : ''}`} onClick={() => handleButtonClick('KodeEtik')}>
            Kode Etik
          </button>
          <button className={`btnMenu ${activeButton === 'ManajemenMutu' ? 'clicked' : ''}`} onClick={() => handleButtonClick('ManajemenMutu')}>
            Manajemen Mutu
          </button>
        </div>
        <div className="isi-content-governance">{components[activeButton]}</div>
      </div>
    </div>
  );
};

export default Governance;
