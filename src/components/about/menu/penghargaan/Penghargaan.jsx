import React from 'react';
import './penghargaan.css';
import Footer from '../../../footer/Footer';

const Penghargaan = () => {
  return (
    <>
      <div className="containerPenghargaan">
        <div className="containerAwards">
          <div className="col-md-2">
            <div className="penghargaan-img m-auto d-block"></div>
            <h5 className="text-center mt-3">Nama Penghargaan</h5>
          </div>
          <div className="col-md-2">
            <div className="penghargaan-img m-auto d-block"></div>
            <h5 className="text-center mt-3">Nama Penghargaan</h5>
          </div>
          <div className="col-md-2">
            <div className="penghargaan-img m-auto d-block"></div>
            <h5 className="text-center mt-3">Nama Penghargaan</h5>
          </div>
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Penghargaan;
