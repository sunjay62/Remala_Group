import React, { useEffect } from 'react';
import './strukturgrup.scss';
// import StrukturTelkom from '../../../../assets/home/strukturtelkom.png';
// import StrukturLinknet from '../../../../assets/home/strukturlinknet.png';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StrukturGroup = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerStruktur">
        <div className="containerTop" data-aos="fade-right">
          <h3>REMALA ABADI GRUP</h3>
        </div>
        <div className="containerBottom">
          {/* <img src={StrukturTelkom} alt="" className="imgStrukturOne" data-aos="fade-up" />
          <img src={StrukturLinknet} alt="" className="imgStrukturTwo" data-aos="fade-up" />
        */}
        </div>
      </div>
      <div className="Footer">{<Footer />}</div>
    </>
  );
};

export default StrukturGroup;
