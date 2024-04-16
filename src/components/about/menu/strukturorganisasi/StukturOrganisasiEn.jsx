import React, { useState } from 'react';
import './strukturorganisasi.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import 'aos/dist/aos.css';

const StrukturOrganisasi = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const isIdPath = window.location.pathname.startsWith('/en');

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/en/aboutus/organization-structure/${componentName.toLowerCase()}`);
  };

  return (
    <>
      <div className="mainContainerOrganisasi">
        <div className="menuStrukturOrganisasi">
          <div className={`btnOrganisasi ${activeButton === 'board-of-commissioners' ? 'clicked' : ''}`} onClick={() => handleButtonClick('board-of-commissioners')}>
            Board of Commissioners
          </div>
          <div className={`btnOrganisasi ${activeButton === 'board-of-director' ? 'clicked' : ''}`} onClick={() => handleButtonClick('board-of-director')}>
            Board of Directors
          </div>
          {/* <div className={`btnOrganisasi ${activeButton === 'corporate-secretary' ? 'clicked' : ''}`} onClick={() => handleButtonClick('corporate-secretary')}>
            Corporate Secretary
          </div>
          <div className={`btnOrganisasi ${activeButton === 'audit-committee' ? 'clicked' : ''}`} onClick={() => handleButtonClick('audit-committee')}>
            Audit Committee
          </div>
          <div className={`btnOrganisasi ${activeButton === 'nomination-committee' ? 'clicked' : ''}`} onClick={() => handleButtonClick('nomination-committee')}>
            Nomination and Remuneration Committee
          </div> */}
          {/* <div className={`btnOrganisasi ${activeButton === 'evaluation-committee' ? 'clicked' : ''}`} onClick={() => handleButtonClick('evaluation-committee')}>
            Komite Evaluasi, Monitoring Perencanaan dan Resiko
          </div> */}
        </div>
        <div className="outletOrganization ">
          <Outlet />
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default StrukturOrganisasi;
