import React, { useEffect } from 'react';
import './home.scss';
import SwiperId from './highlightswiper/SwiperId';
import FooterId from '../footer/FooterId';
import MenuitemId from './highlightmenuitem/MenuitemId';
import ProdukId from './highlightproduk/ProdukId';
import HighlightMilestoneId from './highlightmilestone/MilestonehomeId';
import PartnerId from './highlightpartner/PartnerId';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialId from './highlighttestimonial/TestimonialId';
import { Helmet } from 'react-helmet';

const HomeId = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>PT. Remala Abadi Tbk. - Home ID</title>
        <link rel="canonical" href="/" />
        <meta name="description" content="Ini adalah halaman utama website kami." />
        <meta property="og:title" content="PT. Remala Abadi Tbk. - Home<" />
        <meta property="og:description" content="Ini adalah halaman utama website kami." />
        <meta property="og:image" content="https://remala.id/metaimage.png" />
        <meta property="og:url" content="https://remala.id/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="homeMainContainer">
        <div className="content-title-home d-flex justify-content-center align-items-center" data-aos="fade-down">
          <div className="container">
            <h1 data-aos="fade-left">MEMBERIKAN KONEKTIVITAS TERBAIK</h1>
            <h1 data-aos="fade-right">DENGAN INFRASTRUKTUR TERPERCAYA</h1>
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
            <MenuitemId />
          </div> */}
            <div className="produkHome">
              <ProdukId />
            </div>
          </div>
          <div className="milestoneHome" data-aos="fade-up">
            <HighlightMilestoneId />
          </div>
          <div className="swiperHome" data-aos="fade-up">
            <SwiperId />
          </div>
          <div className="partnerHome">
            <PartnerId />
          </div>
          <div className="testimonialHome">
            <TestimonialId />
          </div>
        </div>
        <div className="containerFooter">
          <FooterId />
        </div>
      </div>
    </div>
  );
};

export default HomeId;
