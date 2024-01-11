import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Pagination, Autoplay } from 'swiper/modules';
import alfamartIcon from '../../../assets/logoclient/alfamart.png';
import bpkIcon from '../../../assets/logoclient/bpk-penabur.png';
import budiLuhurIcon from '../../../assets/logoclient/budi-luhur.png';
import dkiJakartaIcon from '../../../assets/logoclient/dki-jakarta.png';
import fajarMitraIndahIcon from '../../../assets/logoclient/fajar-mitra-indah.png';
import hutamaKaryaIcon from '../../../assets/logoclient/hutama-karya.png';
import iconMediaIcon from '../../../assets/logoclient/iconmedia.png';
import rsudKabBekasiIcon from '../../../assets/logoclient/rsud-kab-bekasi.png';
import univPrasetyaMulyaIcon from '../../../assets/logoclient/univ-prasetya-mulya.png';
import bsiUnivIcon from '../../../assets/logoclient/bsiuniv.png';
import aswatamaIcon from '../../../assets/logopartner/aswatama.png';
import dcsIcon from '../../../assets/logopartner/dcs.png';
import grandstreamIcon from '../../../assets/logopartner/grandstream.png';
import juniperIcon from '../../../assets/logopartner/juniper.png';
import mikrotikIcon from '../../../assets/logopartner/mikrotik.png';
import pmIcon from '../../../assets/logopartner/pm.png';
import ruijieeIcon from '../../../assets/logopartner/ruijiee.png';
import sigmatelindoIcon from '../../../assets/logopartner/sigmatelindo.png';
import vokselIcon from '../../../assets/logopartner/voksel.png';
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
        <div className="topContainer">
          <h3 className="text-center mt-5" data-aos="fade-up">
            Mitratama Kami
          </h3>
        </div>
        <div className="boxpartner m-auto d-block">
          <div className="d-flex justify-content-evenly">
            <Swiper
              grabCursor={true}
              slidesPerView={slidesPerView}
              spaceBetween={25}
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
                  <img src={aswatamaIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={juniperIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={dcsIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={ruijieeIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={mikrotikIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={vokselIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={pmIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={grandstreamIcon} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-partner">
                  <img src={sigmatelindoIcon} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="topContainer">
          <h3 className="text-center mt-5" data-aos="fade-up">
            Pelanggan Kami
          </h3>
        </div>
        <div className="boxpartner m-auto d-block">
          <Swiper
            grabCursor={true}
            slidesPerView={slidesPerView}
            spaceBetween={25}
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
                <img src={alfamartIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={bpkIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={bsiUnivIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={budiLuhurIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={dkiJakartaIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={fajarMitraIndahIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={hutamaKaryaIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={iconMediaIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={rsudKabBekasiIcon} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item-partner">
                <img src={univPrasetyaMulyaIcon} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
