import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import itembanner from './bisnis.jpg';
import itembanner2 from './bisnis2.jpeg';
import itembanner3 from './bisnis3.jpg';
import itembanner4 from './bisnis4.jpg';
import itembanner5 from './bisnis5.jpg';
import itembanner6 from './bisnis.jpg';
import './swiper.css';
const SimpleSlider = () => {
  const [idItem, setIdItem] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1257) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const NextArrow = ({ onClick }) => {
    return <div className="arrow next" onClick={onClick}></div>;
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: '#1960A9', borderRadius: '50%' }} onClick={onClick} />;
  }

  const PrevArrow = ({ onClick }) => {
    return <div className="arrow prev" onClick={onClick}></div>;
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', background: '#1960A9', borderRadius: '50%' }} onClick={onClick} />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mt-4 mt-md-0">
      <div className="boxswiper d-flex justify-content-center">
        <div>
          <div className="outsl">
            <div className="a align-self-center ">
              {/* <Slider {...settings} className="sl">
                <div className="slide-item">
                  <img src={itembanner} alt="Slide 1" />
                </div>
                <div className="slide-item">
                  <img src={itembanner2} alt="Slide 2" />
                </div>
                <div className="slide-item">
                  <img src={itembanner3} alt="Slide 3" />
                </div>
                <div className="slide-item">
                  <img src={itembanner4} alt="Slide 1" />
                </div>
                <div className="slide-item">
                  <img src={itembanner5} alt="Slide 1" />
                </div>
              </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
