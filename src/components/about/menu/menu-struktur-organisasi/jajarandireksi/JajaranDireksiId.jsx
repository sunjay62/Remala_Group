import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Richard from '../../../../../assets/fotoprofile/richard.png';
import Samuel from '../../../../../assets/fotoprofile/samuelnew.png';

const profiles = [
  {
    name: 'Richard Kartawijaya',
    image: Richard,
    role: 'Direktur Utama',
    description:
      'Richard Kartawijaya menempuh pendidikan Magister Bisnis Pemasaran di Universitas Esa Unggul pada tahun 1993, setelah sebelumnya meraih gelar Sarjana Teknik Elektro dari Universitas Katolik Atmajaya pada tahun 1982.<br /><br />Richard Kartawijaya menjabat sebagai Chief Executive Officer (CEO) di PT. Remala Abadi sejak tahun 2022, dan kemudian menjabat sebagai Chief Executive Director sejak tahun 2023. Selain itu, Richard juga aktif sebagai Pemilik di BEATUS Home Living sejak tahun 2020, Sebelum, Richard pernah menjabat sebagai CEO & Presiden Direktur di PT. Graha Teknologi Nusantara (2015 – 2017), Sebagai CEO di PT. Link Net, Tbk dari tahun (2013 – 2015). Serta memimpin PT. Ander Cakra Buana dari tahun (2009 – 2013).',
  },
  {
    name: 'Samuel Adi Mulia',
    image: Samuel,
    role: 'Direktur Keuangan',
    description:
      'Samuel Adi Mulia menempuh Pendidikan dibidang Keuangan di Universitas Trisakti kemudian meraih gelar Sarjana Akuntansi dari Universitas Trisakti pada tahun 1993.<br /><br />Samuel Adi Mulia menjabat sebagai Direktur Keuangan di PT. Remala Abadi sejak tahun 2023. Sebelumnya, Samuel pernah bertanggung jawab sebagai Internal Control Manager (Function Strategic & Cost Control Manager) di PT. Satria Antaran Prima Tbk (2019 - 2020), Direktur Keuangan di PT. Klaai Dendan Lestari dan PT. Pat Petulai Energi (2017 – 2019) serta PT. Intan Baruprana Finance Tbk (2012 – 2017).',
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
