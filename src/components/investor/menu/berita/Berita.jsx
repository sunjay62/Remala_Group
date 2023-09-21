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
      <div className="d-flex mainContainerBerita">
        <div className="menuStruktur" data-aos="fade-right">
          <div className={`btnNews ${activeButton === 'rups' ? 'clicked' : ''}`} onClick={() => handleButtonClick('rups')}>
            <p>RUPS</p>
          </div>
          <div className={`btnNews ${activeButton === 'investor-calender' ? 'clicked' : ''}`} onClick={() => handleButtonClick('investor-calender')}>
            <p>Kalender Investor</p>
          </div>
          <div className={`btnNews ${activeButton === 'issuer-announcement' ? 'clicked' : ''}`} onClick={() => handleButtonClick('issuer-announcement')}>
            <p>Pengumuman Emiten</p>
          </div>
          <div className={`btnNews ${activeButton === 'public-exposure' ? 'clicked' : ''}`} onClick={() => handleButtonClick('public-exposure')}>
            <p>Pengumuman Paparan Publik</p>
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
