import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JajaranDireksi = () => {
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
          <h6>Richard Kartawijaya</h6>
          <p>Direktur Utama</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget imperdiet turpis. Nulla placerat arcu ligula, nec elementum massa accumsan nec. In maximus ornare lectus eu rutrum. Pellentesque eget elit eros. Phasellus
            maximus lacinia dolor et gravida. Ut mollis scelerisque ipsum eu sollicitudin. Integer bibendum metus nec orci eleifend, .
          </p>
        </div>
      </div>
      <div className="col-profile d-flex mt-5" data-aos="fade-left">
        <div className="col-6 profile-box"></div>
        <div className="mx-4">
          <h6>Nama Lengkap</h6>
          <p>Direktur Keuangan dan Manajemen Risiko</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget imperdiet turpis. Nulla placerat arcu ligula, nec elementum massa accumsan nec. In maximus ornare lectus eu rutrum. Pellentesque eget elit eros. Phasellus
            maximus lacinia dolor et gravida. Ut mollis scelerisque ipsum eu sollicitudin. Integer bibendum metus nec orci eleifend, .
          </p>
        </div>
      </div>
      <div className="col-profile d-flex mt-5" data-aos="fade-left">
        <div className="col-6 profile-box"></div>
        <div className="mx-4">
          <h6>Nama Lengkap</h6>
          <p>Direktur Marketing</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget imperdiet turpis. Nulla placerat arcu ligula, nec elementum massa accumsan nec. In maximus ornare lectus eu rutrum. Pellentesque eget elit eros. Phasellus
            maximus lacinia dolor et gravida. Ut mollis scelerisque ipsum eu sollicitudin. Integer bibendum metus nec orci eleifend, .
          </p>
        </div>
      </div>
      <div className="col-profile d-flex mt-5" data-aos="fade-left">
        <div className="col-6 profile-box"></div>
        <div className="mx-4">
          <h6>Nama Lengkap</h6>
          <p>Direktur Projek</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget imperdiet turpis. Nulla placerat arcu ligula, nec elementum massa accumsan nec. In maximus ornare lectus eu rutrum. Pellentesque eget elit eros. Phasellus
            maximus lacinia dolor et gravida. Ut mollis scelerisque ipsum eu sollicitudin. Integer bibendum metus nec orci eleifend, .
          </p>
        </div>
      </div>
      <div className="col-profile d-flex mt-5" data-aos="fade-left">
        <div className="col-6 profile-box"></div>
        <div className="mx-4">
          <h6>Sulihno</h6>
          <p>Direktur Operasional</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget imperdiet turpis. Nulla placerat arcu ligula, nec elementum massa accumsan nec. In maximus ornare lectus eu rutrum. Pellentesque eget elit eros. Phasellus
            maximus lacinia dolor et gravida. Ut mollis scelerisque ipsum eu sollicitudin. Integer bibendum metus nec orci eleifend, .
          </p>
        </div>
      </div>
      <div className="col-profile d-flex mt-5" data-aos="fade-left">
        <div className="col-6 profile-box"></div>
        <div className="mx-4">
          <h6>Nama Lengkap</h6>
          <p>Direktur Network & IT Solution</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget imperdiet turpis. Nulla placerat arcu ligula, nec elementum massa accumsan nec. In maximus ornare lectus eu rutrum. Pellentesque eget elit eros. Phasellus
            maximus lacinia dolor et gravida. Ut mollis scelerisque ipsum eu sollicitudin. Integer bibendum metus nec orci eleifend, .
          </p>
        </div>
      </div>
    </>
  );
};

export default JajaranDireksi;
