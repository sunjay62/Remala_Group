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
          <h4 className="text-center">Company Profile</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PT Remala Abadi has been established since 2004, engaged in trade and services. We have established two flagship subsidiaries, Tachyon Network Indonesia and Nethome Indonesia, which are
            companies in the field of internet access, telecommunications, and multimedia services. We are committed to developing a reliable infrastructure to provide the best services and solutions, applying creative and innovative
            thinking and working responsibly.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We have a fiber optic infrastructure and operate it as both a network backbone and a service medium with excellence. Along with Remala Abadi Group, previously established as a company focused
            on infrastructure and fiber optic network solutions, Fiber Media Indonesia (FMI).
          </p>
          <p>
            Remala's topology covers JABODETABEK (Jakarta, Bogor, Depok, Tangerang, and Bekasi), which is the primary focus and will begin to expand to Java Island and surrounding areas. Up to now, Remala Abadi has connected to over 70% of
            Datacenters in JABODETABEK and more than 25,000 companies and households.
          </p>
          <p>
            Our customer segmentation includes ISPs as partners, companies, SMEs, SOHOs, government, and housing. To expand our offerings to customers, we have other products such as Cloud, Virtual Private Network, IoT, CCTV, IP Domain, IP
            Public, Email Solution, and Managed Services, etc.
          </p>
          <p>Our group of companies currently includes several companies:</p>
          <ol>
            <li>Fiber Media Indonesia</li>
            <li>PC 24 Cyber Indonesia </li>
            <li>Solusi Aplikasi Andalan Semesta </li>
            <li>Akselerasi Informasi Indonesia</li>
          </ol>
        </div>

        <div className="key-features" data-aos="fade-up">
          <div className="content-key-features col-8 m-auto d-block">
            <h2 className="fw-bold">Company Profile</h2>
            <p>
              With our capabilities and maximum support from all our partner-workers, we believe that PT Remala Abadi will be able to provide maximum services at a much more competitive cost. PT. Remala Abadi intends to grow together with
              partner-workers, customers, and employees.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="content-visi-misi col-8 d-flex">
              <div className="visi col-6">
                <h2 className="fw-bold">Vision</h2>
                <p> To become the leading Internet Service and Solution provider in Indonesia (Ultimate Internet Solution).</p>
              </div>
              <div className="misi col-6">
                <h2 className="fw-bold">Mision</h2>
                <p>To provide the right and reliable services and solutions to all customers by always maintaining commitment and working creatively and innovatively.</p>
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
