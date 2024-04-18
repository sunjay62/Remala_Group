import React, { useEffect } from 'react';
import AOS from 'aos';
import './dewankomisaris.scss';
import 'aos/dist/aos.css';
import Verah from '../../../../../assets/fotoprofile/veranew.png';
import Alamsyah from '../../../../../assets/fotoprofile/alamysahnew.png';

const profiles = [
  {
    name: 'Verah Wahyudi Singgih Wong',
    image: Verah,
    role: 'Komisaris Utama',
    description:
      'Verah Wahyudi Singgih Wong menempuh Pendidikan di bidang Manajemen Keuangan kemudian meraih gelar Sarjana Manajemen Keuangan dari Universitas Surabaya pada tahun 2001.<br /><br />Verah Wahyudi Singgih Wong memegang posisi sebagai Presiden Komisaris perusahaan, di mana Verah memimpin dengan visi strategis dan kebijaksanaan yang luar biasa. Sebelumnya, Verah pernah memimpin sebagai Direktur Keuangan di PT. Remala Abadi selama 16 tahun (2006 – 2022). Serta pernah menjabat sebagai Finance Controller di PT. Wing Surya Surabaya (2002 – 2005).',
  },
  {
    name: 'Alamsyah Saragih',
    image: Alamsyah,
    role: 'Komisaris Independen',
    description:
      'Ahmad Alamsyah Saragih, S.E., Menempuh pendidikan dibidang Ekonomi di Universitas Padjadjaran kemudian meraih gelar Sarjana Ekonomi dari Universitas Padjadjaran Bandung pada tahun 1992.<br /><br />Ahmad Alamsyah Saragih menjabat sebagai Komisaris Independen Perusahaan. Selain itu, Alamsyah juga aktif sebagai GCG Advisor di INDUSTRI BATERAI INDONESIA sejak tahun 2021, Sebelumnya, Alamsyah telah memegang berbagai peran penting di OMBUDSMAN REPUBLIK INDONESIA (2016 – 2021), dimana Alamsyah terlibat dalam berbagai kapasitas, termasuk Anggota Bidang Ekonomi dan Anggota Bidang Ujian Khusus. Alamsyah Pernah terlibat di Komisi Informasi Pusat Republik Indonesia (2009 – 2013), di mana telah menjabat sebagai Ketua dan Anggota. Serta telah mengumpulkan pengalaman berharga sebagai Local Governance Specialist di Bank Dunia Jakarta (2002 – 2007).',
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
