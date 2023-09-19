import React, { useState, useEffect } from 'react';
import './laporan.scss';
import Sec from '../menulaporan/sec/Sec';
import Tahunan from '../menulaporan/tahunan/Tahunan';
import Keberlanjutan from '../menulaporan/keberlanjutan/Keberlanjutan';
import Keuangan from '../menulaporan/keuangan/Keuangan';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Laporan = () => {
  const [content, setContent] = useState(<Sec />);
  const [isTap, setIsTap] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  useEffect(() => {
    handleClick(0, <Sec />);
  }, []);

  const handleClick = (boxIndex, pageRender) => {
    setContent(pageRender);
    setIsTap(boxIndex);
  };

  return (
    <>
      <div className="d-flex mainContainerLaporan">
        <div className="menuStruktur" data-aos="fade-right">
          <div className={isTap === 0 ? 'choose' : ' '} onClick={() => handleClick(0, <Sec />)}>
            <p>Laporan SEC</p>
          </div>
          <div className={isTap === 1 ? 'choose' : ' '} onClick={() => handleClick(1, <Keuangan />)}>
            <p>Laporan Keuangan</p>
          </div>
          <div className={isTap === 2 ? 'choose' : ' '} onClick={() => handleClick(2, <Tahunan />)}>
            <p>Laporan Tahunan</p>
          </div>
          <div className={isTap === 3 ? 'choose' : ' '} onClick={() => handleClick(3, <Keberlanjutan />)}>
            <p>Laporan Keberlanjutan</p>
          </div>
        </div>
        <div className="content-byMenu col-7">{content}</div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Laporan;
