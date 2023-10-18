import React, { useEffect } from 'react';
import './strukturgrup.scss';
import StrukturImage from '../../../../assets/home/organization-strucktur.png';
import Footer from '../../../footer/Footer';
import StrukturPdf from '../../../../assets/pdf/Detail-Struktur-Kepemilikan-Saham-PT.REMALA-ABADI-per-September-2023.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const StrukturGroup = () => {
  const [t] = useTranslation('global');

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
          <h3>{t('translation.text-group.title1')}</h3>
          <p>
            {t('translation.text-group.text1')} <br /> {t('translation.text-group.text2')}
          </p>
        </div>
        <div className="containerMiddle">
          <img src={StrukturImage} alt="" className="imgStrukturOne" data-aos="fade-up" />
        </div>
        <div className="containerBottom">
          <h6>{t('translation.text-group.title2')}</h6>
          <button onClick={downloadPdf}>{t('translation.text-group.btn-download')}</button>
        </div>
      </div>
      <div className="Footer">{<Footer />}</div>
    </>
  );
};

export default StrukturGroup;
