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
      'Nama saya Richard Kartawijaya, Saya menempuh pendidikan Magister Bisnis Pemasaran di Universitas Esa Unggul, menyelesaikan studi pada tahun 1989-1993. Sebelumnya saya meraih gelar Sarjana Teknik Elektro dari Universitas Katolik Atmajaya pada tahun 1978-1982.<br /><br />Saat ini saya menjabat sebagai Chief Executive Officer (CEO) di PT. Remala Abadi, dimana saya menjabat sebagai Chief Executive Officer sejak tahun 2022 dan sebagai Chief Executive Director sejak tahun 2023. Selain itu, saya adalah Pemilik BEATUS Home Living, peran yang saya pegang sejak tahun 2020.<br /><br />Dalam peran saya sebelumnya, saya menjabat sebagai CEO & Presiden Direktur di PT. Graha Teknologi Nusantara pada tahun 2015 hingga 2017, dan sebagai CEO di PT. Link Net, Tbk dari tahun 2013 hingga 2015. Sebelumnya saya menjabat sebagai CEO di PT. Ander Cakra Buana dari tahun 2009 hingga 2013.',
  },
  {
    name: 'Samuel Adi Mulia',
    image: Samuel,
    role: 'Direktur Keuangan',
    description:
      'Nama saya Samuel Adi Mulia, Saya memperoleh gelar Sarjana Akuntansi dari Universitas Trisakti, menyelesaikan studi pada tahun 1989-1993.<br /><br />Dalam perjalanan profesional saya, saya telah mengumpulkan pengalaman berharga dalam berbagai peran. Saat ini saya menjabat sebagai Direktur Keuangan di PT. Remala Abadi, posisi yang saya jabat sejak tahun 2023. Sebelumnya saya bekerja sebagai Internal Control Manager (Function Strategic & Cost Control Manager) di PT. Satria Antaran Prima Tbk dari tahun 2019 hingga 2020. Selama ini, tanggung jawab saya termasuk mengawasi inisiatif strategis dan pengendalian biaya. Pada tahun 2017 hingga 2019, saya menjabat sebagai Direktur Keuangan di kedua PT. Klaai Dendan Lestari dan PT. Pat Petulai Energi. Selanjutnya pada tahun 2012 hingga 2017, saya menjabat sebagai Direktur Keuangan di PT. Intan Baruprana Finance Tbk.',
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
