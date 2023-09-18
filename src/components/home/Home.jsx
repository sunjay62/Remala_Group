import React from 'react';
import './home.css';
import tachyon from '../../assets/home/logotachyonnew.png';
import nethome from '../../assets/home/logonethomee.png';
import Swiper from '../swiper/Swiper';
import Footer from '../footer/Footer';
import imgBoc from '../../assets/home/item/boc.png';
import imgBod from '../../assets/home/item/bod.png';
import imgAnnual from '../../assets/home/item/annual.png';
import imgCompany from '../../assets/home/item/company.png';
import imgContact from '../../assets/home/item/contactus.png';
import imgEarning from '../../assets/home/item/earnings.png';
import imgFinancial from '../../assets/home/item/financial.png';
import imgIdx from '../../assets/home/item/idx.png';
import imgPress from '../../assets/home/item/press.png';
import imgOwnership from '../../assets/home/item/ownership.png';

const Home = () => {
  return (
    <div className="homeMainContainer">
      <div className="content-title-home d-flex justify-content-center align-items-center">
        <div className="container">
          <p className="">MEMBERIKAN KONEKTIVITAS TERBAIK DENGAN INFRASFRUKTUR TERPERCAYA</p>
        </div>
      </div>
      <div className="front-content">
        <div className="all-item-home">
          <div className="item-home">
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgBoc} alt="BOC" />
              </div>
              <p className="text-center">Board of Commisioners</p>
            </div>
            <div className=" col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgBod} alt="BOD" />
              </div>
              <p className="text-center">Board of Director</p>
            </div>
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgOwnership} alt="Ownership" />
              </div>
              <p className="text-center">Ownership Groups</p>
            </div>
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgCompany} alt="Company" />
              </div>
              <p className="text-center">Company Profile</p>
            </div>
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgAnnual} alt="Annual" />
              </div>
              <p className="text-center">Annual Reports</p>
            </div>
          </div>
          <div className="item-home">
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgFinancial} alt="Financial" />
              </div>
              <p className="text-center">Financial Statements</p>
            </div>
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgPress} alt="Press" />
              </div>
              <p className="text-center">Press Relase</p>
            </div>
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgIdx} alt="IDX" />
              </div>
              <p className="text-center">IDX Announcements</p>
            </div>
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgEarning} alt="Earnings" />
              </div>
              <p className="text-center">Earnings Webinars</p>
            </div>
            <div className="col-md-1 col-5">
              <div className="boxitem-home col-12">
                <img src={imgContact} alt="ContatUs" />
              </div>
              <p className="text-center">Contact Us</p>
            </div>
          </div>
        </div>

        <div className="content-home-products">
          <h3>Temukan Konektivitas Untuk Kebutuhan Anda</h3>
          <p>Memberikan Solusi Kebutuhan Digital</p>
          <div className="m-auto d-block ">
            <div className="d-flex justify-content-center mainImgContainer">
              <div className="tachyon col-5 d-flex align-items-center">
                <div className="col-6 secondImgContainer1">
                  <div className="col-12 imgContainer">
                    <img src={nethome} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tachyon2 col-5 d-flex align-items-center">
                <div className="col-4 secondImgContainer2">
                  <div className="col-12 imgContainer2">
                    <img src={tachyon} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="company-milestone">
            <h3>Temukan Konektivitas Untuk Kebutuhan Anda</h3>
            <p>Memberikan Solusi Kebutuhan Digital Anda</p>
            <div className="d-flex justify-content-around flex-wrap flex-md-nowrap">
              <div className="boxmile col-md-4 col-11 mt-md-0 mt-3">
                <div>
                  <h2>
                    <span className="amount">8500</span> KM
                  </h2>
                  <h4>Jaringan Yang Sudah Tersebar</h4>
                </div>
              </div>
              <div className="boxmile col-md-4 col-11 mt-md-0 mt-3 mx-md-2">
                <div>
                  <h2>
                    <span className="amountyear">20</span>Th
                  </h2>
                  <h4 className="year">YEARS</h4>
                </div>
              </div>
              <div className="boxmile col-md-4 col-11 mt-md-0 mt-3">
                <div>
                  <h1>
                    <span className="amount">150+</span>
                  </h1>
                  <h4>Base Transceiver Station</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="containerSwipper">
          <div className="slideShow">
            <h3>Seputar Remala Abadi</h3>
            <p>Aktivitas Perusahaan</p>
            <Swiper />
          </div>
        </div>

        <div className="partner">
          <h3 className="text-center">Our Partner</h3>
          <div className="line m-auto d-block"></div>
          <div className="boxpartner m-auto d-block">
            <div className="d-flex justify-content-evenly">
              <div className="item-partner"></div>
              <div className="item-partner"></div>
              <div className="item-partner"></div>
              <div className="item-partner"></div>
              <div className="item-partner"></div>
              <div className="item-partner"></div>
            </div>
          </div>
          <h3 className="text-center mt-5">Our Client</h3>
          <div className="line m-auto d-block"></div>
          <div className="boxpartner m-auto d-block">
            <div className="d-flex justify-content-evenly">
              <div className="item-partner"></div>
              <div className="item-partner"></div>
              <div className="item-partner"></div>
              <div className="item-partner"></div>
              <div className="item-partner"></div>
              <div className="item-partner"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
