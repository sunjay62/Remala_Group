import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Pagination, Autoplay } from 'swiper/modules';
import './testimonial.scss';
import PlazaAuto from '../../../assets/logoclient/plazaauto.png';
import UnivBsi from '../../../assets/logoclient/bsiuniv.png';
// import BpkPenabur from '../../../assets/logoclient/bpk-penabur.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Plaza Auto - Bapak Fuad',
    position: 'IT SPV Group Plaza Auto',
    description:
      '"We have collaborated with Remala Abadi as an Internet network provider, which supports the network connection we need to run the company ERP system. Our ERP system runs well and is connected between our sales branches to facilitate sales and administration processes."',
    image: PlazaAuto,
  },
  {
    id: 2,
    name: 'Bina Sarana Informatika University',
    position: '',
    description:
      '"PT Remala Abadi provides good internet service for us at BSI Group. It is easy to contact the Support team and we also been contact by the after sales team that contact and put attention to us every month. The internet can accommodate whole interactive and digital activities that we need on our beloved campus and if there are problems, we are alert by the Customer Service team and we received quick and best solution for our network issue.We hope to continue the service which has been deliver since 2014 with PT. Remala Abadi"',
    image: UnivBsi,
  },
  // {
  //   id: 3,
  //   name: 'BPK Penabur',
  //   position: 'BPK Penabur Team',
  //   description:
  //     '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorum voluptates? Similique quia veritatis nemo, id, ea aut modi earum libero veniam ullam, odit at aliquam sint ut facere. Eum!Similique quia veritatis nemo, id, ea aut modi earum libero veniam ullam, odit at aliquam sint ut facere. Eum!"',
  //   image: BpkPenabur,
  // },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div className="containerTestimoni">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="mySwiper2"
        data-aos="fade-right"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide className="sliderCard" key={testimonial.id}>
            <div className="topCard">
              <img src={testimonial.image} alt="" />
              <div className="identity">
                <h5>{testimonial.name}</h5>
                <p>{testimonial.position}</p>
              </div>
            </div>
            <div className="bottomCard">
              <p>{testimonial.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonialHeaders" data-aos="fade-left">
        <h3>CUSTOMER TESTIMONIALS</h3>
        <h4>What they say about us?</h4>
        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque numquam quae ea atque tempore labore facere excepturi expedita beatae ipsam.</p> */}
      </div>
    </div>
  );
};

export default Testimonial;
