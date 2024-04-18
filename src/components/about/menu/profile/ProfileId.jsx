import React, { useEffect } from 'react';
import './profile.scss';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const [t] = useTranslation('global');
  const isIdPath = window.location.pathname.startsWith('/en');
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerProfile">
        <div className="company-profile-text" data-aos="fade-up">
          <h4 className="text-center">Profil Perusahaan</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PT Remala Abadi Tbk telah berdiri sejak tahun 2004 yang bergerak dibidang ISP (Internet Service Provider) yaitu perusahaan Jasa Penyediaan Layanan Internet yang mencakup layanan internet
            Broadband, Layanan Local Link, Layanan Managed Services (setting IP CAM, VOIP, WiFi Device), Server Collocation, serta Penyediaan Konektivitas/Instalasi Fiber Optic Business to Business dan multimedia yang berkomitmen untuk
            mengembangkan infrastruktur yang handal supaya memberikan layanan serta solusi terbaik kepada semua pelanggan dengan selalu menjaga komitmen serta selalu bekerja secara kreatif dan inovatif.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Topologi Remala mencakup JABODETABEK ( Jakarta, Bogor, Depok, Tangerang and Bekasi ) yang merupakan fokus utama dan akan mulai berkembang ke pulau jawa dan area sekitarnya. Hingga sekarang
            Remala Abadi sudah terhubung lebih dari 70% Datacenter di JABODETABEK dan terhubung lebih dari 25.000 perusahaan dan perumahaan.
          </p>
          <p>
            Segmentasi pelanggan kami antara ISP sebagai partner, Perusahaan, SMEs, SOHOs, Pemerintahan dan Perumahan, untuk memperluas penawaran kami kepada pelanggan kami memiliki produk lainnya seperti Cloud, Virtual Private Network,
            IoT, CCTV, IP Domain, IP Public, Email Solution and Managed Services, etc
          </p>
          <p>Adapun group perusahaan kami saat ini meliputi beberapa perusahaan : </p>
          <ol>
            <li className="containerLi">
              <span className="singkatan">PT AII</span> <span>: PT Akselerasi Informasi Indonesia</span>
            </li>
            <li className="containerLi">
              <span className="singkatan">PT FMI</span> <span>: PT Fiber Media Indonesia</span>
            </li>
            <li className="containerLi">
              <span className="singkatan">PT JFI</span> <span>: PT Jaringan Fiber Indonesia</span>
            </li>
            <li className="containerLi">
              <span className="singkatan">PT PCCI</span>
              <span>: PT PC 24 Cyber Indonesia</span>
            </li>
            <li className="containerLi">
              <span className="singkatan">PT SAAS</span> <span>: PT Solusi Aplikasi Andalan Semesta</span>
            </li>
          </ol>
        </div>

        <div className="key-features" data-aos="fade-up">
          <div className="content-key-features col-8 m-auto d-block">
            <h2 className="fw-bold">Profil Perusahaan</h2>
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
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default Profile;
