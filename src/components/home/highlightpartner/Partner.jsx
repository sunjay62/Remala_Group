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
import { useTranslation } from 'react-i18next';

const Partner = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [t] = useTranslation('global');

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
            {t('translation.text-partner.title1')}
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
                  <img src={bsiIcon} />
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
        <div className="topContainer">
          <h3 className="text-center mt-5" data-aos="fade-up">
            {t('translation.text-partner.title2')}
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
                <img src={bsiIcon} />
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
