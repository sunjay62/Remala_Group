import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Verah from '../../../../../assets/fotoprofile/veranew.png';
import Alamsyah from '../../../../../assets/fotoprofile/alamysahnew.png';
import './dewankomisaris.scss';

const profiles = [
  {
    name: 'Verah Wahyudi Singgih Wong',
    image: Verah,
    role: 'President Commissioner',
    description:
      "Verah Wahyudi Singgih Wong studied Financial Management and earned his Bachelor's degree in Financial Management from the University of Surabaya in 2001.<br /><br />Verah Wahyudi Singgih Wong holds the position of President Commissioner of the company, where Verah leads with exceptional strategic vision and wisdom. Previously, Verah had led as Finance Director at PT Remala Abadi for 16 years (2006 - 2022). He also served as Finance Controller at PT. Wing Surya Surabaya (2002 - 2005).",
  },
  {
    name: 'Alamsyah Saragih',
    image: Alamsyah,
    role: 'Independent Commissioner',
    description:
      "Ahmad Alamsyah Saragih, S.E., studied Economics at Padjadjaran University then earned his Bachelor of Economics degree from Padjadjaran University Bandung in 1992.<br /><br />Ahmad Alamsyah Saragih serves as the Company's Independent Commissioner. In addition, Alamsyah is also active as GCG Advisor at INDONESIA BATTERY INDUSTRIES since 2021, Previously, Alamsyah has held various important roles at OMBUDSMAN REPUBLIK INDONESIA (2016 - 2021), where Alamsyah was involved in various capacities, including Member of Economics and Member of Special Examinations. Alamsyah has been involved in the Central Information Commission of the Republic of Indonesia (2009 - 2013), where he has served as Chairman and Member. He has also accumulated valuable experience as a Local Governance Specialist at the World Bank Jakarta (2002 - 2007).",
  },
];

const DewanKomisaris = () => {
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

export default DewanKomisaris;
