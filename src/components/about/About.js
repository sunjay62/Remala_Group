import React, { useState } from 'react';
import './about.css';
import Profile from './menu/profile/Profile';
import StrukturOrganisasi from './menu/strukturorganisasi/StukturOrganisasi';
import StrukturGroup from './menu/strukturgroup/StrukturGroup';
import AnggaranDasar from './menu/anggarandasar/AnggaranDasar';
import Penghargaan from './menu/penghargaan/Penghargaan';

const About = () => {
  const [activeButton, setActiveButton] = useState('Profile');
  const components = {
    Profile: <Profile />,
    StrukturOrganisasi: <StrukturOrganisasi />,
    StrukturGroup: <StrukturGroup />,
    AnggaranDasar: <AnggaranDasar />,
    Penghargaan: <Penghargaan />,
  };

  const handleButtonClick = (componentName) => {
    setActiveButton(componentName);
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
          <button className={`btnMenu ${activeButton === 'Profile' ? 'clicked' : ''}`} onClick={() => handleButtonClick('Profile')}>
            Profile
          </button>
          <button className={`btnMenu ${activeButton === 'StrukturOrganisasi' ? 'clicked' : ''}`} onClick={() => handleButtonClick('StrukturOrganisasi')}>
            Struktur Organisasi
          </button>
          <button className={`btnMenu ${activeButton === 'StrukturGroup' ? 'clicked' : ''}`} onClick={() => handleButtonClick('StrukturGroup')}>
            Struktur Group
          </button>
          <button className={`btnMenu ${activeButton === 'AnggaranDasar' ? 'clicked' : ''}`} onClick={() => handleButtonClick('AnggaranDasar')}>
            Anggaran Dasar
          </button>
          <button className={`btnMenu ${activeButton === 'Penghargaan' ? 'clicked' : ''}`} onClick={() => handleButtonClick('Penghargaan')}>
            Penghargaan
          </button>
        </div>
        <div className="isi-content-about">{components[activeButton]}</div>
      </div>
    </div>
  );
};

export default About;
