import React, { useState, useEffect } from 'react';
import './strukturorganisasi.css';
import DewanKomisaris from '../menu-struktur-organisasi/DewanKomisaris';
import JajaranDireksi from '../menu-struktur-organisasi/JajaranDireksi';
import SekretarisPerusahaan from '../menu-struktur-organisasi/SekretarisPerusahaan';
import KomiteAudit from '../menu-struktur-organisasi/KomiteAudit';
import KomiteNominasi from '../menu-struktur-organisasi/KomiteNominasi';
import KomiteEvaluasi from '../menu-struktur-organisasi/KomiteEvaluasi';
import Footer from '../../../footer/Footer';

const StrukturOrganisasi = () => {
  const [content, setContent] = useState(<DewanKomisaris />);
  const [isTap, setIsTap] = useState(0);

  useEffect(() => {
    handleClick(0, <DewanKomisaris />);
  }, []);

  const handleClick = (boxIndex, pageRender) => {
    setContent(pageRender);
    setIsTap(boxIndex);
  };

  return (
    <>
      <div className="d-flex mainContainerOrganisasi">
        <div className="menuStruktur">
          <div className={isTap === 0 ? 'choose' : ' '} onClick={() => handleClick(0, <DewanKomisaris />)}>
            <p>Dewan Komaris</p>
          </div>
          <div className={isTap === 1 ? 'choose' : ' '} onClick={() => handleClick(1, <JajaranDireksi />)}>
            <p>Jajaran Direksi</p>
          </div>
          <div className={isTap === 2 ? 'choose' : ' '} onClick={() => handleClick(2, <SekretarisPerusahaan />)}>
            <p>Sekretaris Perusahaan</p>
          </div>
          <div className={isTap === 3 ? 'choose' : ' '} onClick={() => handleClick(3, <KomiteAudit />)}>
            <p>Komite Audit</p>
          </div>
          <div className={isTap === 4 ? 'choose' : ' '} onClick={() => handleClick(4, <KomiteNominasi />)}>
            <p>Komite Nominasi dan Remunerasi</p>
          </div>
          <div className={isTap === 5 ? 'choose' : ' '} onClick={() => handleClick(5, <KomiteEvaluasi />)}>
            <p>Komite Evaluasi, Monitoring Perencanaan dan Resiko</p>
          </div>
        </div>
        <div className="content-byMenu col-7">{content}</div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default StrukturOrganisasi;
