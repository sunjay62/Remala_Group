import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Maureen from '../../../../../assets/fotoprofile/maureen.png';

const profiles = [
  {
    name: 'Maureen Graciela',
    image: Maureen,
    role: 'Sekretaris Perusahaan',
    description:
      'Saat ini saya sedang menempuh pendidikan di Binus University, dengan fokus pada bidang yang relevan dengan pengalaman dan minat saya. Sebelumnya, saya berhasil meraih gelar Ahli Madya dalam Administrasi Perkantoran di Sekolah Tinggi Ilmu Komunikasi dan Sekretari Tarakanita pada tahun 2021. Kombinasi pendidikan formal dan pengalaman praktis telah memberikan saya fondasi yang kokoh untuk mengembangkan karir profesionalnya dalam bidang administrasi, manajemen, dan komunikasi.<br><br>' +
      'Karier profesional saya berpengalaman dalam fungsi administratif dan manajemen, dengan keahlian khusus dalam sekretaris korporat, administrasi bisnis, dan analisis data. Saat ini saya menjabat sebagai Corporate Secretary di PT Remala Abadi sejak tahun 2024. Sebelumnya di PT Remala Abadi saya menajabat sebagai Personal Assistant  pada tahun 2023 di PT Remala Abadi.<br><br>',
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
