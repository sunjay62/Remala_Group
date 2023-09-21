import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import './about.css';

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/aboutus/${componentName.toLowerCase()}`);
  };

  return (
    <div className="content">
      <div className="profile-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h1 className="text-center-hero fw-600">PT. REMALA ABADI</h1>
          <h5 className="text-center-hero fs-1">Company Group</h5>
        </div>
      </div>
      <div className="buttons">
        <div className="containerAbout">
          <button className={`btnMenuAbout ${activeButton === 'profile' ? 'clicked' : ''}`} onClick={() => handleButtonClick('profile')}>
            Profile
          </button>
          <button className={`btnMenuAbout ${activeButton === 'organitation-strucktur/board-of-commissioners' ? 'clicked' : ''}`} onClick={() => handleButtonClick('organitation-strucktur/board-of-commissioners')}>
            Struktur Organisasi
          </button>
          <button className={`btnMenuAbout ${activeButton === 'group-strucktur' ? 'clicked' : ''}`} onClick={() => handleButtonClick('group-strucktur')}>
            Struktur Group
          </button>
          <button className={`btnMenuAbout ${activeButton === 'articles-of-association' ? 'clicked' : ''}`} onClick={() => handleButtonClick('articles-of-association')}>
            Anggaran Dasar
          </button>
          <button className={`btnMenuAbout ${activeButton === 'award' ? 'clicked' : ''}`} onClick={() => handleButtonClick('award')}>
            Penghargaan
          </button>
        </div>
        <div className="isi-content-about">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
