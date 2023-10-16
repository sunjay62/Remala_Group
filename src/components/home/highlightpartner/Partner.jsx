import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Pagination, Autoplay } from 'swiper/modules';
import alfamartIcon from '../../../assets/partner/alfamart.png';
import bpkIcon from '../../../assets/partner/bpk-penabur.png';
import bsiIcon from '../../../assets/partner/bsi.png';
import budiLuhurIcon from '../../../assets/partner/budi-luhur.png';
import dkiJakartaIcon from '../../../assets/partner/dki-jakarta.png';
import fajarMitraIndahIcon from '../../../assets/partner/fajar-mitra-indah.png';
import hutamaKaryaIcon from '../../../assets/partner/hutama-karya.png';
import iconMediaIcon from '../../../assets/partner/iconmedia.png';
import rsudKabBekasiIcon from '../../../assets/partner/rsud-kab-bekasi.png';
import univPrasetyaMulyaIcon from '../../../assets/partner/univ-prasetya-mulya.png';
import './partner.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partner = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });

    const handleResize = () => {
      if (window.innerWidth < 860) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(6);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="containerPartner">
        <h3 className="text-center" data-aos="fade-up">
          Our Partner
        </h3>
        <div className="line m-auto d-block" data-aos="fade-up"></div>
        <div className="boxpartner m-auto d-block">
          <div className="d-flex justify-content-evenly">
            <Swiper
              grabCursor={true}
              slidesPerView={slidesPerView}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper3"
              data-aos="fade-up"
            >
              <SwiperSlide>
                <div className="item-partner">
                  <img src={alfamartIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={bpkIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={bsiIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={budiLuhurIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={dkiJakartaIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={fajarMitraIndahIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={hutamaKaryaIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={iconMediaIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={rsudKabBekasiIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={univPrasetyaMulyaIcon} alt="" srcset="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <h3 className="text-center mt-5" data-aos="fade-up">
          Our Client
        </h3>
        <div className="line m-auto d-block" data-aos="fade-up"></div>
        <div className="boxpartner m-auto d-block">
          <Swiper
            grabCursor={true}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper3"
            data-aos="fade-up"
          >
            <SwiperSlide>
              <div className="item-partner">
                <img src={alfamartIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={bpkIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={bsiIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={budiLuhurIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={dkiJakartaIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={fajarMitraIndahIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={hutamaKaryaIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={iconMediaIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={rsudKabBekasiIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={univPrasetyaMulyaIcon} alt="" srcset="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
