import React, { useState, useEffect } from 'react';
import './berita.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Berita = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const isIdPath = window.location.pathname.startsWith('/en');

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/en/investor-relation/news/${componentName.toLowerCase()}`);
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
            GMS (General Meeting of Shareholders)
          </div>
          <div className={`btnNews ${activeButton === 'investor-calender' ? 'clicked' : ''}`} onClick={() => handleButtonClick('investor-calender')}>
            Investor Calendar
          </div>
          <div className={`btnNews ${activeButton === 'issuer-announcement' ? 'clicked' : ''}`} onClick={() => handleButtonClick('issuer-announcement')}>
            Issuer Announcements
          </div>
          <div className={`btnNews ${activeButton === 'public-exposure' ? 'clicked' : ''}`} onClick={() => handleButtonClick('public-exposure')}>
            Public Disclosures
          </div>
        </div>
        <div className="outletNews">
          <Outlet />
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default Berita;
