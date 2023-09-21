import React, { useState } from 'react';
import './governance.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const Governance = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/governance-corporate/${componentName.toLowerCase()}`);
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
          <button className={`btnMenu ${activeButton === 'principle-strucktur' ? 'clicked' : ''}`} onClick={() => handleButtonClick('principle-strucktur')}>
            Prinsip & Struktur
          </button>
          <button className={`btnMenu ${activeButton === 'code-ethics' ? 'clicked' : ''}`} onClick={() => handleButtonClick('code-ethics')}>
            Kode Etik
          </button>
          <button className={`btnMenu ${activeButton === 'quality-management' ? 'clicked' : ''}`} onClick={() => handleButtonClick('quality-management')}>
            Manajemen Mutu
          </button>
        </div>
        <div className="isi-content-governance">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Governance;
