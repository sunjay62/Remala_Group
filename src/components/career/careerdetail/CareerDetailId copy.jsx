import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import './careerdetail.scss';
import dataCareerId from '../data/dataCareerId';

const CareerDetailId = ({ selectedLoker, open, setOpen }) => {
  const [careerData, setCareerData] = useState(null);

  useEffect(() => {
    if (selectedLoker) {
      const selectedCareer = dataCareerId.find((career) => career.id === selectedLoker);
      setCareerData(selectedCareer);
    }
  }, [selectedLoker]);

  return (
    <div>
      <Modal className="modalContainer" centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={1000}>
        {careerData && (
          <div className="containerLoker">
            <h1 className="headLoker">{careerData.name}</h1>
            <div className="roleContainer">
              <h5>Tentang Peran</h5> <p>{careerData.role}</p>
            </div>
            <div className="willDoContainer">
              <h5>Apa yang Akan Anda Lakukan</h5>{' '}
              <ul>
                {careerData.willdo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="requirementContainer">
              <h5>Apa yang Anda Butuhkan</h5>{' '}
              <ul>
                {careerData.requirement.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="teamContainer">
              <h5>Tentang Tim</h5> <p>{careerData.team}</p>
            </div>
            <div className="btnContainerJob">
              <button className="btnApply">
                <span>Lamar Pekerjaan Ini</span>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CareerDetailId;
