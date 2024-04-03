import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Maureen from '../../../../../assets/fotoprofile/maureen.png';

const profiles = [
  {
    name: 'Maureen Graciela',
    image: Maureen,
    role: 'Corporate Secretary',
    description:
      'My name is Maureen Graciela. I am currently pursuing my education at Binus University, focusing on a field relevant to my experiences and interests. Previously, I obtained an Associate Degree in Office Administration from the College of Communication Sciences and Tarakanita Secretarial School in 2021. The combination of formal education and practical experience has provided me with a solid foundation to develop my professional career in the fields of administration, management, and communication.<br><br>' +
      'My professional career has been focused on administrative and management functions, with specific expertise in corporate secretarial duties, business administration, and data analysis. Currently, I serve as the Corporate Secretary at PT Remala Abadi since 2024. Prior to this role, I worked as a Personal Assistant at PT Remala Abadi in 2023.',
  },
];

const SekretarisPerusahaan = () => {
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

export default SekretarisPerusahaan;
