import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './volume.scss';

const Volume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerVolume">
        <div className="volumeTop" data-aos="fade-left">
          <h1>Harga & Volume Saham</h1>
          <p>Berikut adalah informasi harga & volume saham Remala Group yang bisa anda lihat secara rinci. </p>
        </div>
        <div className="volumeBottome"></div>
      </div>
    </>
  );
};

export default Volume;
