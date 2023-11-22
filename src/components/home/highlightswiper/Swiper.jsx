import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './swiper.scss';
import { useTranslation } from 'react-i18next';
import swiperData from './swipercomponent/data/swiperData';
import { Modal } from 'antd';

const SimpleSlider = () => {
  const slidesPerView = window.innerWidth > 860 ? 4 : 1;
  const [t] = useTranslation('global');
  const [visible, setVisible] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const handleSlideClick = (slide) => {
    setSelectedSlide(slide);
    setVisible(true);
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  return (
    <div className="containerSwiper">
      <div className="slideShow">
        <h3>{t('translation.text-swiper.title')}</h3>
        <p>{t('translation.text-swiper.text')}</p>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {swiperData.map((slide) => (
            <SwiperSlide key={slide.id} onClick={() => handleSlideClick(slide)}>
              <img src={slide.image} alt="#" className="imgSwiper" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal width={1000} title={selectedSlide?.title} open={visible} onCancel={handleModalClose} footer={null} className="modalSwiper">
        {selectedSlide && (
          <>
            <img src={selectedSlide?.banner} alt="#" className="imgModal" />
            <p>{selectedSlide?.description}</p>
            {(selectedSlide.paragraph1 || []).map((paragraph, index) => (
              <div key={index}>
                <h6>{paragraph.title}</h6>
                <p>{paragraph.description}</p>
                <div className="containerChillImg">
                  {(paragraph.images || []).map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="#" className="chillImg" />
                  ))}
                </div>
              </div>
            ))}
            {(selectedSlide.paragraph2 || []).map((paragraph, index) => (
              <div key={index}>
                <h6>{paragraph.title}</h6>
                <p>{paragraph.description}</p>
                <div className="containerChillImg">
                  {(paragraph.images || []).map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="#" className="chillImg" />
                  ))}
                </div>
              </div>
            ))}
            {(selectedSlide.paragraph3 || []).map((paragraph, index) => (
              <div key={index}>
                <h6>{paragraph.title}</h6>
                <p>{paragraph.description}</p>
                <div className="containerChillImg">
                  {(paragraph.images || []).map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="#" className="chillImg" />
                  ))}
                </div>
              </div>
            ))}
            {(selectedSlide.paragraph4 || []).map((paragraph, index) => (
              <div key={index}>
                <h6>{paragraph.title}</h6>
                <p>{paragraph.description}</p>
                <p>{paragraph.description1}</p>
                <div className="containerChillImg">
                  {(paragraph.images || []).map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="#" className="chillImg" />
                  ))}
                </div>
                <p>{paragraph.description2}</p>
              </div>
            ))}
            {(selectedSlide.paragraph5 || []).map((paragraph, index) => (
              <div key={index}>
                <h6>{paragraph.title}</h6>
                <p>{paragraph.description1}</p>
                <div className="containerChillImg">
                  {(paragraph.images || []).map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="#" className="chillImg" />
                  ))}
                </div>
                <p>{paragraph.description2}</p>
              </div>
            ))}
          </>
        )}
      </Modal>
    </div>
  );
};

export default SimpleSlider;
