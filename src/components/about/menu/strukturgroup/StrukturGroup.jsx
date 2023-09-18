import React from 'react';
import './strukturgrup.scss';
import StrukturTelkom from '../../../../assets/home/strukturtelkom.png';
import StrukturLinknet from '../../../../assets/home/strukturlinknet.png';
import Footer from '../../../footer/Footer';

const StrukturGroup = () => {
  return (
    <>
      <div className="containerStruktur">
        <div className="containerTop">
          <h3>REMALA ABADI GRUP</h3>
        </div>
        <div className="containerBottom">
          <img src={StrukturTelkom} alt="" className="imgStrukturOne" />
          <img src={StrukturLinknet} alt="" className="imgStrukturTwo" />
        </div>
      </div>
      <div className="Footer">{<Footer />}</div>
    </>
  );
};

export default StrukturGroup;
