import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Verah from '../../../../../assets/fotoprofile/verah-wahyudi.png';
import Alamsyah from '../../../../../assets/fotoprofile/alamsyah.png';
import './dewankomisaris.scss';

const profiles = [
  {
    name: 'Verah Wahyudi Singgih Wong',
    image: Verah,
    role: 'President Commissioner',
    description:
      "My name is Verah Wahyudi Singgih Wong. I earned my Bachelor's degree in Financial Management from the University of Surabaya in the years 1997-2001.<br /><br />Throughout my career, I have held various roles, contributing to my growth and expertise. Presently, I serve as the President Commissioner of the company. Prior to this, I held the position of Finance Director at PT. Remala Abadi from 2006 to 2022. In the years 2002 to 2005, I served as a Finance Controller at PT. Wings Surya in Surabaya. Additionally, from 2000 to 2002, I worked as a Tour Planning Staff at Orient Express Travel in Surabaya.",
  },
  {
    name: 'Alamsyah Saragih',
    image: Alamsyah,
    role: 'Independent Commissioner',
    description:
      "My name is Ahmad Alamsyah Saragih, S.E. I obtained my Bachelor's degree in Economics from Universitas Padjadjaran, Bandung, in the years 1988-1992.<br /><br />Throughout my career, I have held significant roles contributing to various sectors. Presently, I serve as an Independent Commissioner for the company. Additionally, since 2021, I have been working as a GCG Advisor for the INDONESIAN BATTERY INDUSTRY.<br /><br />My past roles include serving as a member of OMBUDSMAN REPUBLIK INDONESIA from 2016 to 2021, where I contributed in various capacities such as Economic Sector II Member (2016-2018), Economic Sector I Member (2018-2021), and Special Examination Field Member (2017-2020). Prior to that, I was involved in the Komisi Informasi Pusat Republik Indonesia from 2009 to 2013, where I served as the Chairman from 2009 to 2011 and as a Member from 2011 to 2013.<br /><br />Before my involvement in public service, I worked as a Local Governance Specialist at The World Bank, Jakarta, from 2002 to 2007.",
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
            <h6>{profile.name}</h6>
            <p>{profile.role}</p>
            <p dangerouslySetInnerHTML={{ __html: profile.description }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default DewanKomisaris;
