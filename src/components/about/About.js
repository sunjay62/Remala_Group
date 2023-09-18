import React, { useState, useEffect, useRef } from 'react';
import './about.css';
import Profile from './menu/profile/Profile';
import StrukturOrganisasi from './menu/strukturorganisasi/StukturOrganisasi';
import StrukturGroup from './menu/strukturgroup/StrukturGroup';
import AnggaranDasar from './menu/anggarandasar/AnggaranDasar';
import Penghargaan from './menu/penghargaan/Penghargaan';

const About = () => {
  const [renderContent, setRenderContent] = useState(<Profile />);
  const profileButtonRef = useRef(null);

  useEffect(() => {
    profileButtonRef.current.className.add('clicked');
  }, []);

  const handleButtonClick = (component) => {
    setRenderContent(component);

    // Hapus kelas 'clicked' dari semua tombol
    const buttons = document.querySelectorAll('.btnMenu');
    buttons.forEach((button) => button.className.remove('clicked'));

    // Tambahkan kelas 'clicked' ke tombol yang diklik
    const clickedButton = document.querySelector(`button[data-component="${component.type.name}"]`);
    clickedButton.className.add('clicked');
  };

  return (
    <div className="content">
      <div className="profile-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h1 className="text-center-hero fw-600">PT. REMALA ABADI</h1>
          <h5 className="text-center-hero fs-1">Company Group</h5>
        </div>
      </div>
      <div className="buttons">
        <div className="containerAbout">
          <button className="btnMenu" onClick={() => handleButtonClick(<Profile />)} data-component="Profile" ref={profileButtonRef}>
            Profile
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<StrukturOrganisasi />)} data-component="StrukturOrganisasi">
            Struktur Organisasi
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<StrukturGroup />)} data-component="StrukturGroup">
            Struktur Group
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<AnggaranDasar />)} data-component="AnggaranDasar">
            Anggaran Dasar
          </button>
          <button className="btnMenu" onClick={() => handleButtonClick(<Penghargaan />)} data-component="Penghargaan">
            Penghargaan
          </button>
        </div>
        <div className="isi-content-about">{renderContent}</div>
      </div>
    </div>
  );
};

export default About;
