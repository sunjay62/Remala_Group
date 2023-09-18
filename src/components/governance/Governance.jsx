import React, { useState, useEffect, useRef } from 'react';
import './governance.scss';
import PrinsipStruktur from './menu/prinsipstruktur/PrinsipStruktur';
import ManajemenMutu from './menu/manajemenmutu/ManajemenMutu';
import KodeEtik from './menu/kodeetik/KodeEtik';

const Governance = () => {
  const [renderContent, setRenderContent] = useState(<PrinsipStruktur />);
  const prinsipButtonRef = useRef(null);

  useEffect(() => {
    prinsipButtonRef.current.classList.add('clicked');
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
    <div className="contentGovernance">
      <div className="prinsip-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero">MENJUNJUNG TINGGI INTEGRITAS</h2>
          <h2 className="textHero">DAN KOMITMEN DALAM BEKERJA</h2>
        </div>
      </div>
      <div className="buttons">
        <div className="containerGovernance">
          <button className="btnMenu" onClick={() => handleButtonClick(<PrinsipStruktur />)} data-component="PrinsipStruktur" ref={prinsipButtonRef}>
            Prinsip & Struktur
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<KodeEtik />)} data-component="KodeEtik">
            Kode Etik
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<ManajemenMutu />)} data-component="ManajemenMutu">
            Manajemen Mutu
          </button>
        </div>
        <div className="isi-content-governance">{renderContent}</div>
      </div>
    </div>
  );
};

export default Governance;
