import React, { useEffect } from 'react';
import './menuAbout.css';
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PT. Remala Abadi Adalah salah satu Internet Service Provider yang mana telah berdiri sejak tahun 2007 dibawah manajemen PT. Remala Abadi. Kami melayanai kebutuhan Akses Internet, Network & IT
            Solution yang menjadikan sebuah layanan Managed Services yang didukung dengan sumber daya manuasia yang profesional dan dukungan infrastruktur jaringan yang handal yang berupa jaringan Fiber Optic maupun Wireless yang
            menggunakan teknologi terbaru. Dengan selalu berfikir kreatif dan inovatif serta yakin dan optimis untuk dapat memberikan layanan serta solusi yang tepat, handal dan tentunya efektif dan efisien.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kami telah mempunyai infrastruktur fiber optic dan telah mengoperasikannya sebagai backbone jaringan sekaligus sebagai media layanan dengan sangat baik, bersama dengan perusahaan Remala Abadi
            Group yang sebelumnya telah di dirikan untuk fokus sebagai perusahaan layanan dibidang infrastruktur dan solusi jaringan fiber optic, yaitu Fiber Media Indonesia (FMI)
          </p>
          <p>Adapun group perusahaan kami saat ini meliputi beberapa perusahaan : </p>
          <ol>
            <li>PT. Remala Abadi</li>
            <li>PT. PC 24 Cyber Indonesia </li>
            <li>PT. Solusi Aplikasi Andalan Semesta </li>
            <li>PT. Jaringan Fiber Indonesia </li>
            <li>PT. Accel Works Indonesia </li>
          </ol>
        </div>

        <div className="key-features" data-aos="fade-up">
          <div className="content-key-features col-7 m-auto d-block">
            <h2 className="fw-bold">Key Features</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries,.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="content-visi-misi col-7 d-flex">
              <div className="visi col-6">
                <h2 className="fw-bold">Visi</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
              <div className="misi col-6">
                <h2 className="fw-bold">Misi</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
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
