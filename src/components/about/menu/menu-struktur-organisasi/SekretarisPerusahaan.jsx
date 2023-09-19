import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SekretarisPerusahaan = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="col-profile d-flex" data-aos="fade-left">
        <div className="col-6 profile-box "></div>
        <div className="mx-4">
          <h6>Chintia Hong</h6>
          <p>Sekretaris Perusahaan</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget imperdiet turpis. Nulla placerat arcu ligula, nec elementum massa accumsan nec. In maximus ornare lectus eu rutrum. Pellentesque eget elit eros. Phasellus
            maximus lacinia dolor et gravida. Ut mollis scelerisque ipsum eu sollicitudin. Integer bibendum metus nec orci eleifend, .
          </p>
        </div>
      </div>
    </>
  );
};

export default SekretarisPerusahaan;
