import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import './careerdetail.scss';
import dataCareerEn from '../data/dataCareerEn';

const CareerDetailEn = ({ selectedLoker, open, setOpen }) => {
  const [careerData, setCareerData] = useState(null);

  useEffect(() => {
    if (selectedLoker) {
      const selectedCareer = dataCareerEn.find((career) => career.id === selectedLoker);
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
              <h5>About the Role</h5>
              <p>{careerData.role}</p>
            </div>
            <div className="willDoContainer">
              <h5>What You Will Do</h5>
              <ul>
                {careerData.willdo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="requirementContainer">
              <h5>What You Will Need</h5>
              <ul>
                {careerData.requirement.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="teamContainer">
              <h5>About The Team</h5>
              <p>{careerData.team}</p>
            </div>
            <div className="btnContainerJob">
              <button className="btnApply">
                <span>Apply for this Job</span>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CareerDetailEn;
