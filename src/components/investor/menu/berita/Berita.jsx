import React, { useState, useEffect } from 'react';
import './berita.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Berita = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/investor-relation/news/${componentName.toLowerCase()}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="mainContainerBerita">
        <div className="menuStrukturBerita" data-aos="fade-right">
          <div className={`btnNews ${activeButton === 'rups' ? 'clicked' : ''}`} onClick={() => handleButtonClick('rups')}>
            RUPS
          </div>
          <div className={`btnNews ${activeButton === 'investor-calender' ? 'clicked' : ''}`} onClick={() => handleButtonClick('investor-calender')}>
            Kalender Investor
          </div>
          <div className={`btnNews ${activeButton === 'issuer-announcement' ? 'clicked' : ''}`} onClick={() => handleButtonClick('issuer-announcement')}>
            Pengumuman Emiten
          </div>
          <div className={`btnNews ${activeButton === 'public-exposure' ? 'clicked' : ''}`} onClick={() => handleButtonClick('public-exposure')}>
            Paparan Publik
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

export default Berita;
