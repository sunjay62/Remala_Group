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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PT. Remala Abadi Tbk has been established since 2004 and operates in the ISP (Internet Service Provider) sector, providing Internet services including Broadband internet, Local Link services,
            Managed Services (IP CAM setup, VOIP, WiFi Device), Server Colocation, as well as Fiber Optic Business to Business connectivity/installation and multimedia services. We are committed to developing reliable infrastructure to
            deliver the best services and solutions to all customers while maintaining our commitment and working creatively and innovatively.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remala's topology covers JABODETABEK (Jakarta, Bogor, Depok, Tangerang, and Bekasi), which is our main focus, and we are beginning to expand to Java Island and surrounding areas. To date,
            Remala Abadi has connected to more than 70% of Datacenters in JABODETABEK and linked to over 25,000 companies and residences.
          </p>
          <p>
            Our customer segmentation includes ISPs as partners, Corporations, SMEs, SOHOs, Government and Residential sectors. To expand our offerings to customers, we have other products such as Cloud services, Virtual Private Networks,
            IoT, CCTV, IP Domain, IP Public, Email Solutions, and Managed Services, etc.
          </p>
          <p>Our group of companies currently includes several companies:</p>
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
