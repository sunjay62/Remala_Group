import React, { useEffect } from 'react';
import './strukturgrup.scss';
import StrukturImage from '../../../../assets/home/struktur-group.png';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import StrukturPdf from '../../../../assets/pdf/Struktur-Kepemilikan-Saham-PT.REMALA-ABADI-per-Des-2023.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const StrukturGroup = () => {
  const [t] = useTranslation('global');
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = StrukturPdf;
    link.download = 'Detail-Struktur-Kepemilikan-Saham-PT.REMALA-ABADI-per-September-2023.pdf';
    link.click();
  };

  return (
    <>
      <div className="containerStruktur">
        <div className="containerTop" data-aos="fade-right">
          <h3>REMALA ABADI GRUP</h3>
          <p>
            Struktur Kepemilikan Saham Kelompok Usaha PT. Remala Abadi Tbk. <br />
            dengan persentase kepemilikan lebih dari 50%
          </p>
        </div>
        <div className="containerMiddle">
          <img src={StrukturImage} alt="" className="imgStrukturOne" data-aos="fade-up" />
        </div>
        <div className="containerBottom">
          <h6>Detail persentase entitas saham : </h6>
          <button onClick={downloadPdf}>Unduh PDF</button>
        </div>
      </div>
      <div className="Footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default StrukturGroup;
