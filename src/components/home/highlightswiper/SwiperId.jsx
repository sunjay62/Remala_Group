import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './swiper.scss';
import swiperDataId from './swipercomponent/data/swiperDataId';
import { Link, useNavigate } from 'react-router-dom';

const SimpleSlider = () => {
  const slidesPerView = window.innerWidth > 860 ? 4 : 1;
  const navigate = useNavigate();

  const handleReadMore = (id, url) => {
    const encodedurl = encodeURIComponent(url);
    navigate(`/news/${id}/${encodedurl}`);
  };

  return (
    <div className="containerSwiper">
      <div className="slideShow">
        <h3>Seputar Remala Abadi</h3>
        <p>Aktivitas Perusahaan</p>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {swiperDataId.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link to={`/news/${slide.id}/${encodeURIComponent(slide.url)}`} onClick={() => handleReadMore(slide.id, slide.url)}>
                <img src={slide.image} alt="#" className="imgSwiper" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleSlider;
