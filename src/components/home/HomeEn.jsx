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
import metaThumbnail from '../data/images/meta/homeimage.png';
import MetaDecorator from '../Util/MetaDecorator';

const home = require('../data/json/home.json');

const HomeEn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div>
      <MetaDecorator description={home.pageDescriptionEn} title={home.pageTitle} imageUrl={metaThumbnail} imageAlt={home.metaImageAltEn} />
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
