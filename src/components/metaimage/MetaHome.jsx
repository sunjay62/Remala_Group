import React from 'react';
import './metahome.scss';
import HomeImage from '../../assets/meta/homeimage.png';

const MetaHome = () => {
  return (
    <div className="containerMetaHome">
      <img src={HomeImage} alt="Home" />
    </div>
  );
};

export default MetaHome;
