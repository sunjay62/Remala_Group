import React, { useEffect } from 'react';
import './penghargaan.scss';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import awardsIntegrasi from '../../../../assets/iso/Integrasi.png';
import awards9001 from '../../../../assets/iso/ISO-9001.png';
import awards14001 from '../../../../assets/iso/ISO-14001.png';
import awards27001 from '../../../../assets/iso/ISO-27001.png';
import awards37001 from '../../../../assets/iso/ISO-37001.png';
import awards45001 from '../../../../assets/iso/ISO-45001.png';

const Penghargaan = () => {
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerAwards">
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block">
            <img src={awardsIntegrasi} />
          </div>
          <h5 className="text-center mt-3">ISO Integrasi </h5>
        </div>
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block">
            <img src={awards9001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO 9001:2015 </h5>
        </div>
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block">
            <img src={awards14001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO/IEC 14001:2015 </h5>
        </div>
      </div>
      <div className="containerAwards">
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block">
            <img src={awards27001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO/IEC 27001:2022 </h5>
        </div>
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block">
            <img src={awards37001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO 37001:2016 </h5>
        </div>
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block">
            <img src={awards45001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO 45001:2018 </h5>
        </div>
      </div>

      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default Penghargaan;
