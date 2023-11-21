import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import agustusImg from '../../../assets/activities/17agustus.jpg';
import idmImg from '../../../assets/activities/idm.jpg';
import image1 from './bisnis.jpg';
import image2 from './bisnis5.jpg';
import image3 from './bisnis3.jpg';
import './swiper.scss';
import { useTranslation } from 'react-i18next';

const SimpleSlider = () => {
  const slidesPerView = window.innerWidth > 860 ? 4 : 1;
  const [t] = useTranslation('global');

  return (
    <div className="containerSwiper">
      <div className="slideShow">
        <h3>{t('translation.text-swiper.title')}</h3>
        <p>{t('translation.text-swiper.text')}</p>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image2} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={agustusImg} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={idmImg} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="#" className="imgSwiper" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleSlider;
