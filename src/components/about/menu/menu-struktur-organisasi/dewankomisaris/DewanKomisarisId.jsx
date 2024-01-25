import React, { useEffect } from 'react';
import AOS from 'aos';
import './dewankomisaris.scss';
import 'aos/dist/aos.css';
import Verah from '../../../../../assets/fotoprofile/verah-wahyudi.png';
import Alamsyah from '../../../../../assets/fotoprofile/alamsyah.png';

const profiles = [
  {
    name: 'Verah Wahyudi Singgih Wong',
    image: Verah,
    role: 'Komisaris Utama',
    description:
      'Nama saya Verah Wahyudi Singgih Wong, Saya memperoleh gelar Sarjana Manajemen Keuangan dari Universitas Surabaya pada tahun 1997-2001.<br /><br />Sepanjang karir saya, saya telah memegang berbagai peran, berkontribusi terhadap pertumbuhan dan keahlian saya. Saat ini, saya menjabat sebagai Presiden Komisaris perusahaan. Sebelumnya saya menjabat sebagai Direktur Keuangan di PT. Remala Abadi dari tahun 2006 hingga 2022. Pada tahun 2002 hingga 2005, saya menjabat sebagai Finance Controller di PT. Sayap Surya di Surabaya. Selain itu, dari tahun 2000 hingga 2002, saya bekerja sebagai Staf Perencanaan Tur di Orient Express Travel di Surabaya.',
  },
  {
    name: 'Alamsyah Saragih',
    image: Alamsyah,
    role: 'Komisaris Independen',
    description:
      'Nama saya Ahmad Alamsyah Saragih, S.E., Saya memperoleh gelar Sarjana Ekonomi dari Universitas Padjadjaran Bandung pada tahun 1988-1992.<br /><br />Sepanjang karir saya, saya telah memegang peran penting yang berkontribusi pada berbagai sektor. Saat ini saya menjabat sebagai Komisaris Independen perusahaan. Selain itu, sejak tahun 2021, saya bekerja sebagai GCG Advisor di INDUSTRI BATERAI INDONESIA.<br /><br />Peran saya sebelumnya antara lain menjabat sebagai anggota OMBUDSMAN REPUBLIK INDONESIA pada tahun 2016 hingga 2021, dimana saya berkontribusi dalam berbagai kapasitas seperti Anggota Bidang Ekonomi II (2016-2018), Anggota Bidang Ekonomi I (2018-2021), dan Anggota Bidang Ujian Khusus (2017-2020). Sebelumnya, saya pernah terlibat di Komisi Informasi Pusat Republik Indonesia pada tahun 2009 hingga 2013, menjabat sebagai Ketua pada tahun 2009 hingga 2011, dan sebagai Anggota pada tahun 2011 hingga 2013.<br /><br />Sebelum terlibat dalam pelayanan publik, saya bekerja sebagai Local Governance Specialist di Bank Dunia, Jakarta, dari tahun 2002 hingga 2007.',
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
