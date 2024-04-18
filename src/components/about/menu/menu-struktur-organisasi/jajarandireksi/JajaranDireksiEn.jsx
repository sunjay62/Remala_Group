import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Richard from '../../../../../assets/fotoprofile/richard.png';
import Samuel from '../../../../../assets/fotoprofile/samuelnew.png';

const profiles = [
  {
    name: 'Richard Kartawijaya',
    image: Richard,
    role: 'Chief Executive Officer',
    description:
      "Richard Kartawijaya earned his Master's degree in Business Marketing at Esa Unggul University in 1993, having previously earned his Bachelor's degree in Electrical Engineering from Atmajaya Catholic University in 1982.<br /><br />Richard Kartawijaya has served as Chief Executive Officer (CEO) of PT Remala Abadi since 2022, and then as Chief Executive Director since 2023. In addition, Richard has also been active as an Owner at BEATUS Home Living since 2020, Prior to that, Richard served as CEO & President Director at PT Graha Teknologi Nusantara (2015 - 2017), as CEO at PT Link Net, Tbk from (2013 - 2015). As well as leading PT Ander Cakra Buana from (2009 - 2013).",
  },
  {
    name: 'Samuel Adi Mulia',
    image: Samuel,
    role: 'Chief Financial Officer',
    description:
      'Samuel Adi Mulia studied Finance at Trisakti University and then earned his Bachelor of Accounting degree from Trisakti University in 1993.<br /><br />Samuel Adi Mulia has served as Finance Director at PT Remala Abadi since 2023. Previously, Samuel was responsible as Internal Control Manager (Function Strategic & Cost Control Manager) at PT Satria Antaran Prima Tbk (2019 - 2020), Finance Director at PT Klaai Dendan Lestari and PT Pat Petulai Energi (2017 - 2019) and PT Intan Baruprana Finance Tbk (2012 - 2017).',
  },
];

const JajaranDireksi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      {profiles.map((profile, index) => (
        <div className="col-profile d-flex mt-5" data-aos="fade-left" key={index}>
          <div className="col-6 profile-box">{profile.image && <img src={profile.image} alt={profile.name} />}</div>
          <div className="mx-4">
            <div className="nameDivision">
              <h6>{profile.name}</h6>
              <p>{profile.role}</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: profile.description }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default JajaranDireksi;
