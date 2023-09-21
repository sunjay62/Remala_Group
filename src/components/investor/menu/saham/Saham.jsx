import React, { useState, useEffect } from 'react';
import './saham.scss';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Saham = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();
  const [activeButton, setActiveButton] = useState(currentPath);

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
      <div className="d-flex mainContainerSaham">
        <div className="menuStruktur" data-aos="fade-right">
          <div className={`btnStock ${activeButton === 'stock-volume' ? 'clicked' : ''}`} onClick={() => handleButtonClick('stock-volume')}>
            <p>Harga & Volume Saham</p>
          </div>
          <div className={`btnStock ${activeButton === 'stock-record' ? 'clicked' : ''}`} onClick={() => handleButtonClick('stock-record')}>
            <p>Kronologis Pencatatan Saham</p>
          </div>
          <div className={`btnStock ${activeButton === 'public-prospectus' ? 'clicked' : ''}`} onClick={() => handleButtonClick('public-prospectus')}>
            <p>Prospektus Penawaran Umum</p>
          </div>
          <div className={`btnStock ${activeButton === 'shareholder-composition' ? 'clicked' : ''}`} onClick={() => handleButtonClick('shareholder-composition')}>
            <p>Komposisi Pemegang Saham</p>
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

export default Saham;
