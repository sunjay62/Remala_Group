import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Richard from '../../../../../assets/fotoprofile/richard.png';
import Samuel from '../../../../../assets/fotoprofile/samuel.png';

const profiles = [
  {
    name: 'Richard Kartawijaya',
    image: Richard,
    role: 'Chief Executive Officer',
    description:
      "My name is Richard Kartawijaya, I pursued my Master's degree in Marketing Business at Universitas Esa Unggul, completing my studies in the years 1989-1993. Prior to that, I earned my Bachelor's degree in Electrical Engineering from Universitas Katolik Atmajaya in the years 1978-1982.<br /><br />Currently, I hold the position of Chief Executive Officer (CEO) at PT. Remala Abadi, where I have been serving as the Chief Executive Officer since 2022 and as the Chief Executive Director since 2023. Additionally, I am the Owner of BEATUS Home Living, a role I have held since 2020.<br /><br />In my previous roles, I served as the CEO & President Director at PT. Graha Teknologi Nusantara from 2015 to 2017, and as the CEO at PT. Link Net, Tbk from 2013 to 2015. Before that, I held the position of CEO at PT. Ander Cakra Buana from 2009 to 2013.",
  },
  {
    name: 'Samuel Adi Mulia',
    image: Samuel,
    role: 'Chief Financial Officer',
    description:
      "My name is Samuel Adi Mulia, I earned my Bachelor's degree in Accounting from Universitas Trisakti, completing my studies in the years 1989-1993.<br /><br />In my professional journey, I have garnered valuable experience in various roles. Presently, I serve as the Finance Director at PT. Remala Abadi, a position I have held since 2023. Prior to this, I worked as the Internal Control Manager (Function Strategic & Cost Control Manager) at PT. Satria Antaran Prima Tbk from 2019 to 2020. During this time, my responsibilities included overseeing strategic and cost control initiatives. In the years 2017 to 2019, I assumed the role of Finance Director at both PT. Klaai Dendan Lestari and PT. Pat Petulai Energi. Furthermore, from 2012 to 2017, I held the position of Finance Director at PT. Intan Baruprana Finance Tbk.",
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
