import React, { useState, useEffect } from 'react';
import './strukturorganisasi.css';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StrukturOrganisasi = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/aboutus/organitation-strucktur/${componentName.toLowerCase()}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="d-flex mainContainerOrganisasi">
        <div className="menuStruktur" data-aos="fade-right">
          <div className={`btnOrganisasi ${activeButton === 'board-of-commissioners' ? 'clicked' : ''}`} onClick={() => handleButtonClick('board-of-commissioners')}>
            <p>Dewan Komaris</p>
          </div>
          <div className={`btnOrganisasi ${activeButton === 'board-of-director' ? 'clicked' : ''}`} onClick={() => handleButtonClick('board-of-director')}>
            <p>Jajaran Direksi</p>
          </div>
          <div className={`btnOrganisasi ${activeButton === 'corporate-secretary' ? 'clicked' : ''}`} onClick={() => handleButtonClick('corporate-secretary')}>
            <p>Sekretaris Perusahaan</p>
          </div>
          <div className={`btnOrganisasi ${activeButton === 'audit-committee' ? 'clicked' : ''}`} onClick={() => handleButtonClick('audit-committee')}>
            <p>Komite Audit</p>
          </div>
          <div className={`btnOrganisasi ${activeButton === 'nomination-committee' ? 'clicked' : ''}`} onClick={() => handleButtonClick('nomination-committee')}>
            <p>Komite Nominasi dan Remunerasi</p>
          </div>
          <div className={`btnOrganisasi ${activeButton === 'evaluation-committee' ? 'clicked' : ''}`} onClick={() => handleButtonClick('evaluation-committee')}>
            <p>Komite Evaluasi, Monitoring Perencanaan dan Resiko</p>
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

export default StrukturOrganisasi;
