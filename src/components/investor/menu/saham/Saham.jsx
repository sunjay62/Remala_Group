import React, { useState, useEffect } from 'react';
import './saham.scss';
import Volume from '../menusaham/volume/Volume';
import Prospektus from '../menusaham/prospektus/Prospektus';
import Pencatatan from '../menusaham/pencatatan/Pencatatan';
import Komposisi from '../menusaham/komposisi/Komposisi';
import Footer from '../../../footer/Footer';

const Saham = () => {
  const [content, setContent] = useState(<Volume />);
  const [isTap, setIsTap] = useState(0);

  useEffect(() => {
    handleClick(0, <Volume />);
  }, []);

  const handleClick = (boxIndex, pageRender) => {
    setContent(pageRender);
    setIsTap(boxIndex);
  };

  return (
    <>
      <div className="d-flex mainContainerSaham">
        <div className="menuStruktur">
          <div className={isTap === 0 ? 'choose' : ' '} onClick={() => handleClick(0, <Volume />)}>
            <p>Harga & Volume Saham</p>
          </div>
          <div className={isTap === 1 ? 'choose' : ' '} onClick={() => handleClick(1, <Pencatatan />)}>
            <p>Kronologis Pencatatan Saham</p>
          </div>
          <div className={isTap === 2 ? 'choose' : ' '} onClick={() => handleClick(2, <Prospektus />)}>
            <p>Prospektus Penawaran Umum</p>
          </div>
          <div className={isTap === 3 ? 'choose' : ' '} onClick={() => handleClick(3, <Komposisi />)}>
            <p>Komposisi Pemegang Saham</p>
          </div>
        </div>
        <div className="content-byMenu col-7">{content}</div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Saham;
