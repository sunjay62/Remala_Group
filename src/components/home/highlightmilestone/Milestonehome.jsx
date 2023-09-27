import React, { useEffect } from 'react';
import './milestonehome.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Milestonehome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerHighlightMilestone">
        <div className="company-milestone">
          <h3>Temukan Konektivitas Untuk Kebutuhan Anda</h3>
          <p>Memberikan Solusi Kebutuhan Digital Anda</p>
          <div className="d-flex justify-content-around flex-wrap flex-md-nowrap">
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3" data-aos="fade-right">
              <div>
                <h2>
                  <span className="amount">8500</span> KM
                </h2>
                <h4>Jaringan Yang Sudah Tersebar</h4>
              </div>
            </div>
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3 mx-md-2" data-aos="fade-up">
              <div>
                <h2>
                  <span className="amountyear">20</span>Th
                </h2>
                <h4 className="year">YEARS</h4>
              </div>
            </div>
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3" data-aos="fade-left">
              <div>
                <h1>
                  <span className="amount">150+</span>
                </h1>
                <h4>Point of Presence</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Milestonehome;
