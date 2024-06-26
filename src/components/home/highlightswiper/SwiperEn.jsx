import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './swiper.scss';
import swiperDataEn from './swipercomponent/data/swiperDataEn';
import { Link, useNavigate } from 'react-router-dom';

const SimpleSlider = () => {
  const slidesPerView = window.innerWidth > 860 ? 4 : 1;
  const navigate = useNavigate(); // Use navigate hook

  const handleReadMore = (id, url) => {
    const encodedurl = encodeURIComponent(url);
    navigate(`/news/${id}/${encodedurl}`);
  };

  return (
    <div className="containerSwiper">
      <div className="slideShow">
        <h3>About Remala Abadi</h3>
        <p>Company Activities</p>
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
          {swiperDataEn.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link to={`/en/news/${slide.id}/${encodeURIComponent(slide.url)}`} onClick={() => handleReadMore(slide.id, slide.url)}>
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
