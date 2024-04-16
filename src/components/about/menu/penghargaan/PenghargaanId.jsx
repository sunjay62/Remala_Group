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
import { useNavigate } from 'react-router-dom';

const Penghargaan = () => {
  const isIdPath = window.location.pathname.startsWith('/en');
  const navigate = useNavigate();

  const handleToIntegrasi = () => {
    navigate(`/governance-corporate/quality-management/7/ims-00241`);
  };

  const handleTo9001 = () => {
    navigate(`/governance-corporate/quality-management/4/iso-9001`);
  };

  const handleTo37001 = () => {
    navigate(`/governance-corporate/quality-management/5/iso-37001`);
  };

  const handleTo27001 = () => {
    navigate(`/governance-corporate/quality-management/2/iso-27001`);
  };

  const handleTo45001 = () => {
    navigate(`/governance-corporate/quality-management/3/iso-45001`);
  };

  const handleTo14001 = () => {
    navigate(`/governance-corporate/quality-management/1/iso-14001`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerAwards">
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block" onClick={handleToIntegrasi}>
            <img src={awardsIntegrasi} />
          </div>
          <h5 className="text-center mt-3">ISO Integrasi </h5>
        </div>
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block" onClick={handleTo9001}>
            <img src={awards9001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO 9001:2015 </h5>
        </div>
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block" onClick={handleTo37001}>
            <img src={awards37001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO 37001:2016 </h5>
        </div>
      </div>
      <div className="containerAwards">
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block" onClick={handleTo27001}>
            <img src={awards27001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO/IEC 27001:2022 </h5>
        </div>
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block" onClick={handleTo45001}>
            <img src={awards45001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO 45001:2018 </h5>
        </div>
        <div className="col-md-2" data-aos="fade-up">
          <div className="penghargaan m-auto d-block" onClick={handleTo14001}>
            <img src={awards14001} />
          </div>
          <h5 className="text-center mt-3">SNI ISO/IEC 14001:2015 </h5>
        </div>
      </div>

      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default Penghargaan;
