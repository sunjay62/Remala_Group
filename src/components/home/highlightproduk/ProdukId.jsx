import React, { useEffect } from 'react';
import './produk.scss';
import tachyon from '../../../assets/home/logotachyonnew.png';
import nethome from '../../../assets/home/logonethomee.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Produk = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerProduk">
        <h3 data-aos="fade-up">Temukan Konektivitas Untuk Kebutuhan Anda</h3>
        <p data-aos="fade-up">Memberikan Solusi Kebutuhan Digital</p>
        <div className="m-auto d-block " data-aos="fade-up">
          <div className="d-flex justify-content-center mainImgContainer">
            <div className="tachyon col-5 d-flex align-items-center" data-aos="fade-right">
              <div className="col-6 secondImgContainer1">
                <div className="col-12 imgContainer">
                  <img src={nethome} className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tachyon2 col-5 d-flex align-items-center" data-aos="fade-left">
              <div className="col-4 secondImgContainer2">
                <div className="col-12 imgContainer2">
                  <img src={tachyon} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produk;
