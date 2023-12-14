import React, { useEffect } from 'react';
import './produk.scss';
import tachyon from '../../../assets/home/logotachyonnew.png';
import nethome from '../../../assets/home/logonethomee.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Produk = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerProduk">
        <h3 data-aos="fade-up">Discover Connectivity for Your Needs</h3>
        <p data-aos="fade-up">Providing Digital Solutions for Your Needs</p>
        <div className="m-auto d-block " data-aos="fade-up">
          <div className="d-flex justify-content-center mainImgContainer">
            <div className="tachyon col-5 d-flex align-items-center" data-aos="fade-right">
              <div className="col-6 secondImgContainer1">
                <Link to="https://nethome.id/" target="_blank" rel="noopener noreferrer">
                  <div className="col-12 imgContainer">
                    <img src={nethome} className="img-fluid" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="tachyon2 col-5 d-flex align-items-center" data-aos="fade-left">
              <div className="col-4 secondImgContainer2">
                <Link to="https://tachyon.net.id/" target="_blank" rel="noopener noreferrer">
                  <div className="col-12 imgContainer2">
                    <img src={tachyon} className="img-fluid" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produk;
