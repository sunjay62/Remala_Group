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
            <h3>Appointing the following individuals as Chairman and members of the Nomination and Remuneration Committee of PT. REMALA ABADI Tbk.</h3>
          </div>
          <br />
          <br />
          <div className="middle">
            <h5>
              <strong>Chairman of the Nomination and Remuneration Committee</strong>
            </h5>
            <ul>
              <li> Ahmad Alamsyah Saragih, SE</li>
            </ul>
          </div>
          <br />
          <div className="bottom">
            <h5>
              <strong>Member of the Nomination and Remuneration Committee</strong>
            </h5>
            <ul>
              <li>Verah Wahyudi S. Wong</li>
              <li>Syaiful Salamia</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default KomiteNominasi;
