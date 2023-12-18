import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const KomiteNominasi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="col-profile d-flex mt-5" data-aos="fade-left">
        <div className="mx-4">
          <div className="top">
            <h3>Mengangkat nama - nama berikut ini sebagai Ketua dan anggota Komite Nominasi dan Remunerasi PT. REMALA ABADI Tbk.</h3>
          </div>
          <br />
          <br />
          <div className="middle">
            <h5>
              <strong>Ketua Komite Nominasi dan Remunerasi</strong>
            </h5>
            <ul>
              <li> Ahmad Alamsyah Saragih, SE</li>
            </ul>
          </div>
          <br />
          <div className="bottom">
            <h5>
              <strong>Anggota Komite Nominasi dan Remunerasi</strong>
            </h5>
            <ul>
              <li>Sudarmana</li>
              <li>Sundara Ichsan</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default KomiteNominasi;
