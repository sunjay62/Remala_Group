import React, { useState, useEffect, useRef } from 'react';
import './investor.scss';
import Saham from './menu/saham/Saham';
import Berita from './menu/berita/Berita';
import Laporan from './menu/laporan/Laporan';

const Investor = () => {
  const [renderContent, setRenderContent] = useState(<Laporan />);
  const laporanButtonRef = useRef(null);

  useEffect(() => {
    laporanButtonRef.current.classList.add('clicked');
  }, []);

  const handleButtonClick = (component) => {
    setRenderContent(component);

    // Hapus kelas 'clicked' dari semua tombol
    const buttons = document.querySelectorAll('.btnMenu');
    buttons.forEach((button) => button.classList.remove('clicked'));

    // Tambahkan kelas 'clicked' ke tombol yang diklik
    const clickedButton = document.querySelector(`button[data-component="${component.type.name}"]`);
    clickedButton.classList.add('clicked');
  };

  return (
    <div className="contentInvestor">
      <div className="laporan-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero">MENJUNJUNG TINGGI INTEGRITAS</h2>
          <h2 className="textHero">DAN KOMITMEN DALAM BEKERJA</h2>
        </div>
      </div>
      <div className="buttons">
        <div className="containerAbout">
          <button className="btnMenu" onClick={() => handleButtonClick(<Laporan />)} data-component="Laporan" ref={laporanButtonRef}>
            Laporan-Laporan
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<Saham />)} data-component="Saham">
            Informasi Saham
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<Berita />)} data-component="Berita">
            Berita & Kegiatan
          </button>
        </div>
        <div className="isi-content-investor">{renderContent}</div>
      </div>
    </div>
  );
};

export default Investor;
