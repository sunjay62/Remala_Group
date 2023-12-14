import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './swiper.scss';
import swiperDataId from './swipercomponent/data/swiperDataId';
import { Modal } from 'antd';

const SimpleSlider = () => {
  const slidesPerView = window.innerWidth > 860 ? 4 : 1;
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
        <h3>Seputar Remala Abadi</h3>
        <p>Aktivitas Perusahaan</p>
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
          {swiperDataId.map((slide) => (
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
