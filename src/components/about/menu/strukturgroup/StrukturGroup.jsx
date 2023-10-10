import React, { useEffect } from 'react';
import './strukturgrup.scss';
import StrukturImage from '../../../../assets/home/organization-strucktur.png';
import Footer from '../../../footer/Footer';
import StrukturPdf from '../../../../assets/pdf/Detail-Struktur-Kepemilikan-Saham-PT.REMALA-ABADI-per-September-2023.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StrukturGroup = () => {
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
            Struktur kepemilikan saham kelompok usaha PT. Remala Abadi Tbk <br /> dengan persentase kepemilikan lebih dari 50%
          </p>
        </div>
        <div className="containerMiddle">
          <img src={StrukturImage} alt="" className="imgStrukturOne" data-aos="fade-up" />
        </div>
        <div className="containerBottom">
          <h6>Detail persentase entitas saham : </h6>
          <button onClick={downloadPdf}>Download PDF</button>
        </div>
      </div>
      <div className="Footer">{<Footer />}</div>
    </>
  );
};

export default StrukturGroup;
