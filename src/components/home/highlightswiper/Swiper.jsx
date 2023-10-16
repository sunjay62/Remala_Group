import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import itembanner1 from './bisnis.jpg';
import itembanner2 from './bisnis2.jpeg';
import itembanner3 from './bisnis3.jpg';
import itembanner4 from './bisnis4.jpg';
import itembanner5 from './bisnis5.jpg';
import './swiper.scss';

const SimpleSlider = () => {
  const slidesPerView = window.innerWidth > 860 ? 4 : 1;

  return (
    <div className="containerSwiper">
      <div className="slideShow">
        <h3>Seputar Remala Abadi</h3>
        <p>Aktivitas Perusahaan</p>
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
            <img src={itembanner1} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner2} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner3} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner4} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner5} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner1} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner2} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner3} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner4} alt="#" className="imgSwiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={itembanner5} alt="#" className="imgSwiper" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleSlider;
