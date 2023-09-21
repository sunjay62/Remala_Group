import React, { useEffect } from 'react';
import './partner.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerPartner">
        <h3 className="text-center" data-aos="fade-up">
          Our Partner
        </h3>
        <div className="line m-auto d-block" data-aos="fade-up"></div>
        <div className="boxpartner m-auto d-block">
          <div className="d-flex justify-content-evenly">
            <div className="item-partner" data-aos="fade-right"></div>
            <div className="item-partner" data-aos="fade-right"></div>
            <div className="item-partner" data-aos="fade-right"></div>
            <div className="item-partner" data-aos="fade-left"></div>
            <div className="item-partner" data-aos="fade-left"></div>
            <div className="item-partner" data-aos="fade-left"></div>
          </div>
        </div>
        <h3 className="text-center mt-5" data-aos="fade-up">
          Our Client
        </h3>
        <div className="line m-auto d-block" data-aos="fade-up"></div>
        <div className="boxpartner m-auto d-block">
          <div className="d-flex justify-content-evenly">
            <div className="item-partner" data-aos="fade-right"></div>
            <div className="item-partner" data-aos="fade-right"></div>
            <div className="item-partner" data-aos="fade-right"></div>
            <div className="item-partner" data-aos="fade-left"></div>
            <div className="item-partner" data-aos="fade-left"></div>
            <div className="item-partner" data-aos="fade-left"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
