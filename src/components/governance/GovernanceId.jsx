import React, { useState, useEffect } from 'react';
import './governance.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import metaThumbnail from '../data/images/meta/homeimage.png';
import MetaDecorator from '../Util/MetaDecorator';

const gcg = require('../data/json/gcg.json');

const Governance = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/governance-corporate/${componentName.toLowerCase()}`);
  };

  return (
    <div>
      <MetaDecorator description={gcg.pageDescriptionId} title={gcg.pageTitleId} imageUrl={metaThumbnail} imageAlt={gcg.metaImageAltId} />
      <div className="contentGovernance" data-aos="fade-down">
        <div className="prinsip-content d-flex align-items-center justify-content-center">
          <div className="content-text">
            <h2 className="textHero" data-aos="fade-left">
              MENJUNJUNG TINGGI INTEGRITAS
            </h2>
            <h2 className="textHero" data-aos="fade-right">
              DAN KOMITMEN DALAM BEKERJA
            </h2>
          </div>
        </div>
        <div className="buttons">
          <div className="containerGovernance">
            {/* <button className={`btnMenu ${activeButton === 'principle-structure' ? 'clicked' : ''}`} onClick={() => handleButtonClick('principle-structure')}>
            Prinsip & Struktur
          </button> */}
            {/* <button className={`btnMenu ${activeButton === 'code-ethics' ? 'clicked' : ''}`} onClick={() => handleButtonClick('code-ethics')}>
            Kode Etik
          </button> */}
            <button className={`btnMenu ${activeButton === 'quality-management' ? 'clicked' : ''}`} onClick={() => handleButtonClick('quality-management')}>
              Manajemen Mutu
            </button>
          </div>
          <div className="isi-content-governance">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
