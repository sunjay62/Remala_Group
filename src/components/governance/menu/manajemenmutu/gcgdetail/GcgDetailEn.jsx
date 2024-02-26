import React, { useEffect } from 'react';
import './gcgdetail.scss';
import FooterEn from '../../../../footer/FooterEn';
import FooterId from '../../../../footer/FooterId';
import dataMutuEn from '../data/dataMutuEn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';

const GcgDetailEn = () => {
  const { id } = useParams();
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1300,
    });
  }, []);

  // Find the news item with the matching id
  const selectedMutu = dataMutuEn.find((news) => news.id === parseInt(id, 10));

  return (
    <div>
      <div className="contentGcgDetail" data-aos="fade-down">
        <div className="newsDetail-content d-flex align-items-center justify-content-center">
          <div className="content-text">
            <h2 className="textHero" data-aos="fade-left">
              MENJUNJUNG TINGGI INTEGRITAS
            </h2>
            <h2 className="textHero" data-aos="fade-right">
              DAN KOMITMEN DALAM BEKERJA
            </h2>
          </div>
        </div>
      </div>
      <div className="bottomMutuDetail">
        <h1>{selectedMutu.title}</h1>
        <p>{selectedMutu.description}</p>
        <img src={selectedMutu.image} alt="Cert" />
        <p>{selectedMutu.scope}</p>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </div>
  );
};

export default GcgDetailEn;
