import React, { useEffect } from 'react';
import './home.scss';
import Swiper from './highlightswiper/Swiper';
import Footer from '../footer/Footer';
import Menuitem from './highlightmenuitem/Menuitem';
import Produk from './highlightproduk/Produk';
import HighlightMilestone from './highlightmilestone/Milestonehome';
import Partner from './highlightpartner/Partner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from './highlighttestimonial/Testimonial';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div className="homeMainContainer">
      <div className="content-title-home d-flex justify-content-center align-items-center" data-aos="fade-down">
        <div className="container">
          <p data-aos="fade-left">MEMBERIKAN KONEKTIVITAS TERBAIK </p>
          <p data-aos="fade-right">DENGAN INFRASFRUKTUR TERPERCAYA</p>
        </div>
      </div>
      {/* <div className="perseroanHome">
        <div className="isiContent">
          <h1>Leading National Internet Business Group in Indonesia</h1>
        </div>
      </div> */}
      <div className="front-content">
        <div className="containerMenuProduct">
          <div className="menuItemHome">
            <Menuitem />
          </div>
          <div className="produkHome">
            <Produk />
          </div>
        </div>
        <div className="milestoneHome" data-aos="fade-up">
          <HighlightMilestone />
        </div>
        <div className="swiperHome" data-aos="fade-up">
          <Swiper />
        </div>
        <div className="partnerHome">
          <Partner />
        </div>
        <div className="testimonialHome">
          <Testimonial />
        </div>
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
