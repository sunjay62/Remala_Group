import React, { useEffect } from 'react';
import './manajemenmutu.scss';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import dataMutuEn from './data/dataMutuEn';

const ManajemenMutu = () => {
  const isIdPath = window.location.pathname.startsWith('/en');

  const dataEn = dataMutuEn;

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerManajemen" data-aos="fade-up">
        <div className="boxManajemen">
          {dataEn.map((item) => (
            <div key={item.id} className="pdfContainerNew">
              <img src={item.image} alt={item.title} /> {/* tambahkan alt */}
              <div className="descContainer">
                <div className="top">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="bottom">
                  <Link to={`/en/governance-corporate/quality-management/${item.id}/${encodeURIComponent(item.url)}`}>VIEW MORE</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default ManajemenMutu;
