import React, { useState, useEffect } from 'react';
import './saham.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Saham = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);
  const isIdPath = window.location.pathname.startsWith('/en');

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
    navigate(`/investor-relation/stock-information/${componentName.toLowerCase()}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="mainContainerSaham">
        <div className="menuStrukturSaham" data-aos="fade-right">
          <div className={`btnStock ${activeButton === 'stock-volume' ? 'clicked' : ''}`} onClick={() => handleButtonClick('stock-volume')}>
            Harga & Volume Saham
          </div>
          <div className={`btnStock ${activeButton === 'stock-record' ? 'clicked' : ''}`} onClick={() => handleButtonClick('stock-record')}>
            Kronologis Pencatatan Saham
          </div>
          <div className={`btnStock ${activeButton === 'public-prospectus' ? 'clicked' : ''}`} onClick={() => handleButtonClick('public-prospectus')}>
            Prospektus Penawaran Umum
          </div>
          <div className={`btnStock ${activeButton === 'shareholder-composition' ? 'clicked' : ''}`} onClick={() => handleButtonClick('shareholder-composition')}>
            Komposisi Pemegang Saham
          </div>
        </div>
        <div className="outletStock">
          <Outlet />
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default Saham;
