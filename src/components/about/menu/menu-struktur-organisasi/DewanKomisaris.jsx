import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Verah from '../../../../assets/fotoprofile/verah-wahyudi.png';
import Alamsyah from '../../../../assets/fotoprofile/alamsyah.png';
import { useTranslation } from 'react-i18next';

const profiles = [
  {
    name: 'Verah Wahyudi Singgih Wong',
    image: Verah,
  },
  {
    name: 'Alamsyah Saragih',
    image: Alamsyah,
  },
];

const DewanKomisaris = () => {
  const { t } = useTranslation('global');

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
            <h6>{profile.name}</h6>
            <p>{t(`translation.text-organization.commissioners.role${index + 1}`)}</p>
            <p>{t(`translation.text-organization.commissioners.description${index + 1}`)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DewanKomisaris;
