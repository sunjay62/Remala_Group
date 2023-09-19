import React, { useState, useEffect } from 'react';
import './berita.scss';
import Rups from '../menuberita/rups/Rups';
import PaparanPublik from '../menuberita/paparanpublik/PaparanPublik';
import KalenderInvestor from '../menuberita/kalenderinvestor/KalenderInvestor';
import PengumumanEmiten from '../menuberita/pengumumanemiten/PengumumanEmiten';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Berita = () => {
  const [content, setContent] = useState(<Rups />);
  const [isTap, setIsTap] = useState(0);

  useEffect(() => {
    handleClick(0, <Rups />);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const handleClick = (boxIndex, pageRender) => {
    setContent(pageRender);
    setIsTap(boxIndex);
  };

  return (
    <>
      <div className="d-flex mainContainerBerita">
        <div className="menuStruktur" data-aos="fade-right">
          <div className={isTap === 0 ? 'choose' : ' '} onClick={() => handleClick(0, <Rups />)}>
            <p>RUPS</p>
          </div>
          <div className={isTap === 1 ? 'choose' : ' '} onClick={() => handleClick(1, <KalenderInvestor />)}>
            <p>Kalender Investor</p>
          </div>
          <div className={isTap === 2 ? 'choose' : ' '} onClick={() => handleClick(2, <PengumumanEmiten />)}>
            <p>Pengumuman Emiten</p>
          </div>
          <div className={isTap === 3 ? 'choose' : ' '} onClick={() => handleClick(3, <PaparanPublik />)}>
            <p>Pengumuman Paparan Publik</p>
          </div>
        </div>
        <div className="content-byMenu col-7">{content}</div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Berita;
