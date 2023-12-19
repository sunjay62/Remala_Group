import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import './about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutId = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  // Update activeButton based on the current route
  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    setActiveButton(currentPath);
  }, [location.pathname]);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/aboutus/${componentName.toLowerCase()}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div className="content" data-aos="fade-down">
      <div className="profile-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero" data-aos="fade-left">
            PT. REMALA ABADI
          </h2>
          <h2 className="textHero" data-aos="fade-right">
            Grup Perusahaan
          </h2>
        </div>
      </div>
      <div className="buttons">
        <div className="containerAbout">
          <button className={`btnMenuAbout ${activeButton === 'profile' ? 'clicked' : ''}`} onClick={() => handleButtonClick('profile')}>
            Profil
          </button>
          <button className={`btnMenuAbout ${activeButton === 'organization-strucktur' ? 'clicked' : ''}`} onClick={() => handleButtonClick('organization-strucktur')}>
            Struktur Organisasi
          </button>
          <button className={`btnMenuAbout ${activeButton === 'group-strucktur' ? 'clicked' : ''}`} onClick={() => handleButtonClick('group-strucktur')}>
            Struktur Group
          </button>
          {/* <button className={`btnMenuAbout ${activeButton === 'articles-of-association' ? 'clicked' : ''}`} onClick={() => handleButtonClick('articles-of-association')}>
            Anggaran Dasar
          </button> */}
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

export default AboutId;
