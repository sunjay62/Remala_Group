import React, { useState, useEffect } from 'react';
import './governance.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

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
    navigate(`/en/governance-corporate/${componentName.toLowerCase()}`);
  };

  return (
    <div className="contentGovernance" data-aos="fade-down">
      <div className="prinsip-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero" data-aos="fade-left">
            UPHOLDING INTEGRITY
          </h2>
          <h2 className="textHero" data-aos="fade-right">
            AND COMMITMENT IN
          </h2>
        </div>
      </div>
      <div className="buttons">
        <div className="containerGovernance">
          <button className={`btnMenu ${activeButton === 'principle-strucktur' ? 'clicked' : ''}`} onClick={() => handleButtonClick('principle-strucktur')}>
            Principles & Structure
          </button>
          {/* <button className={`btnMenu ${activeButton === 'code-ethics' ? 'clicked' : ''}`} onClick={() => handleButtonClick('code-ethics')}>
            Code of Ethics
          </button> */}
          <button className={`btnMenu ${activeButton === 'quality-management' ? 'clicked' : ''}`} onClick={() => handleButtonClick('quality-management')}>
            Quality Management
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
