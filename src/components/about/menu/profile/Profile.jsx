import React, { useEffect } from 'react';
import './profile.scss';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerProfile">
        <div className="company-profile-text" data-aos="fade-up">
          <h4 className="text-center">Company Profile</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PT Remala Abadi telah berdiri sejak tahun 2004 yang bergerak dibidang perdagangan dan jasa, dan kami telah mendirikan dua anak perusahaan andalan yaitu Tachyon Network Indonesia dan Nethome
            Indonesia yang merupakan perusahaan dibidang penyedia akses internet, layanan telekomunikasi dan multimedia, yang berkomitmen untuk mengembangan infrastruktur yang handal supaya memberikan layanan serta solusi terbaik,
            menerapkan prinsip berfikir dan bekerja secara kreatif dan inovatif serta penuh tanggung jawab.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kami telah mempunyai infrastruktur fiber optic dan telah mengoperasikannya sebagai backbone jaringan sekaligus sebagai media layanan dengan sangat baik, bersama dengan perusahaan Remala Abadi
            group yang sebelumnya telah didirikan untuk fokus sebagai perusahaan layanan dibidang infrastruktur dan solusi jaringan fiber optic, yaitu Fiber Media Indonesia (FMI).
          </p>
          <p>
            Topologi Remala mencakup JABODETABEK ( Jakarta, Bogor, Depok, Tangerang and Bekasi ) yang merupakan fokus utama dan akan mulai berkembang ke pulau jawa dan area sekitarnya. Hingga sekarang Remala Abadi sudah terhubung lebih dari
            70% Datacenter di JABODETABEK dan terhubung lebih dari 25.000 perusahaan dan perumahaan.
          </p>
          <p>
            Segmentasi pelanggan kami antara ISP sebagai partner, Perusahaan, SMEs, SOHOs, Pemerintahan dan Perumahan, untuk memperluas penawaran kami kepada pelanggan kami memiliki produk lainnya seperti Cloud, Virtual Private Network,
            IoT, CCTV, IP Domain, IP Public, Email Splution and Managed Services, etc
          </p>
          <p>Adapun group perusahaan kami saat ini meliputi beberapa perusahaan : </p>
          <ol>
            <li>Fiber Media Indonesia</li>
            <li>PC 24 Cyber Indonesia </li>
            <li>Solusi Aplikasi Andalan Semesta </li>
            <li>Akselerasi Informasi Indonesia</li>
          </ol>
        </div>

        <div className="key-features" data-aos="fade-up">
          <div className="content-key-features col-8 m-auto d-block">
            <h2 className="fw-bold">Key Features</h2>
            <p>
              Dengan kemampuan kami, serta dukungan yang maksimal dari seluruh mitra-kerja kami, maka kami yakin bahwa PT Remala Abadi akan mampu memberikan pelayanan yang maksimal dengan biaya yang jauh lebih kompetitif. PT. Remala Abadi
              berniat untuk tumbuh bersama dengan mitra-kerja, pelanggan, dan karyawan
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="content-visi-misi col-8 d-flex">
              <div className="visi col-6">
                <h2 className="fw-bold">Visi</h2>
                <p>Menjadi Penyedia Layanan Internet & Solusi yang utama di Indonesia (Ultimate Internet Solution)</p>
              </div>
              <div className="misi col-6">
                <h2 className="fw-bold">Misi</h2>
                <p>Memberikan layanan dan solusi yang tepat dan handal kepada semua pelanggan dengan selalu menjaga komitmen serta selalu berfikir dan bekerja secara kreatif dan inovatif</p>
              </div>
            </div>
          </div>
        </div>
        {/* <h1 className="text-center mt-5">MILESTONE CONTENT</h1> */}
        <div className="milestoneContainer"></div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default Profile;
