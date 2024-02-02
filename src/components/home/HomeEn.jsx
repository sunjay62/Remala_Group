import React, { useEffect } from 'react';
import './home.scss';
import SwiperEn from './highlightswiper/SwiperEn';
import FooterEn from '../footer/FooterEn';
import MenuitemEn from './highlightmenuitem/MenuitemEn';
import ProdukEn from './highlightproduk/ProdukEn';
import HighlightMilestoneEn from './highlightmilestone/MilestonehomeEn';
import PartnerEn from './highlightpartner/PartnerEn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialEn from './highlighttestimonial/TestimonialEn';
import { Helmet } from 'react-helmet';

const HomeEn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>PT. Remala Abadi Tbk. - Home EN</title>
        <meta
          name="description"
          content="PT Remala Abadi has been established since 2004, engaged in trade and services. We have established two flagship subsidiaries, Tachyon Network Indonesia and Nethome Indonesia, which are companies in the field of internet access, telecommunications, and multimedia services."
        />
        <link rel="canonical" href="/en" />
        <meta property="og:title" content="PT. Remala Abadi Tbk. - Home" />
        <meta
          property="og:description"
          content="PT Remala Abadi has been established since 2004, engaged in trade and services. We have established two flagship subsidiaries, Tachyon Network Indonesia and Nethome Indonesia, which are companies in the field of internet access, telecommunications, and multimedia services.."
        />
        <meta property="og:image" content="https://remala.id/metaimage.png" />
        <meta property="og:url" content="https://remala.id/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="homeMainContainer">
        <div className="content-title-home d-flex justify-content-center align-items-center" data-aos="fade-down">
          <div className="container">
            <h1 data-aos="fade-left">PROVIDING THE BEST CONNECTIVITY</h1>
            <h1 data-aos="fade-right">WITH RELIABLE INFRASTRUCTURE</h1>
          </div>
        </div>
        {/* <div className="perseroanHome">
        <div className="isiContent">
          <h1>Leading National Internet Business Group in Indonesia</h1>
        </div>
      </div> */}
        <div className="front-content">
          <div className="containerMenuProduct">
            {/* <div className="menuItemHome">
            <MenuitemEn />
          </div> */}
            <div className="produkHome">
              <ProdukEn />
            </div>
          </div>
          <div className="milestoneHome" data-aos="fade-up">
            <HighlightMilestoneEn />
          </div>
          <div className="swiperHome" data-aos="fade-up">
            <SwiperEn />
          </div>
          <div className="partnerHome">
            <PartnerEn />
          </div>
          <div className="testimonialHome">
            <TestimonialEn />
          </div>
        </div>
        <div className="containerFooter">
          <FooterEn />
        </div>
      </div>
    </div>
  );
};

export default HomeEn;
