import React, { useEffect } from 'react';
import './penghargaan.scss';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Penghargaan = () => {
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerPenghargaan">
        <div className="containerAwards">
          <div className="col-md-2" data-aos="fade-right">
            <div className="penghargaan-img m-auto d-block"></div>
            <h5 className="text-center mt-3">Nama Penghargaan</h5>
          </div>
          <div className="col-md-2" data-aos="fade-up">
            <div className="penghargaan-img m-auto d-block"></div>
            <h5 className="text-center mt-3">Nama Penghargaan</h5>
          </div>
          <div className="col-md-2" data-aos="fade-left">
            <div className="penghargaan-img m-auto d-block"></div>
            <h5 className="text-center mt-3">Nama Penghargaan</h5>
          </div>
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default Penghargaan;
