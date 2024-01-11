import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Pagination, Autoplay } from 'swiper/modules';
import './testimonial.scss';
import PlazaAuto from '../../../assets/logoclient/plazaauto.png';
import BpkPenabur from '../../../assets/logoclient/bpk-penabur.png';
import Alfamart from '../../../assets/logoclient/alfamart.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Plaza Auto via Bapak Fuad',
    position: 'IT SPV Group Plaza Auto',
    description:
      'Kami telah berkolaborasi dengan Remala Abadi sebagai penyedia layanan jaringan internet yang mendukung koneksi jaringan yang kami butuhkan untuk menjalankan sistem ERP perusahaan kami. Sistem ERP kami dapat berjalan dengan baik dan terhubung antara cabang penjualan kami untuk memudahkan proses penjualan dan administrasi.',
    image: PlazaAuto,
  },
  {
    id: 2,
    name: 'Alfaria Team',
    position: 'Alfaria Team',
    description:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorum voluptates? Similique quia veritatis nemo, id, ea aut modi earum libero veniam ullam, odit at aliquam sint ut facere. Eum!Similique quia veritatis nemo, id, ea aut modi earum libero veniam ullam, odit at aliquam sint ut facere. Eum!"',
    image: Alfamart,
  },
  {
    id: 3,
    name: 'BPK Penabur',
    position: 'BPK Penabur Team',
    description:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorum voluptates? Similique quia veritatis nemo, id, ea aut modi earum libero veniam ullam, odit at aliquam sint ut facere. Eum!Similique quia veritatis nemo, id, ea aut modi earum libero veniam ullam, odit at aliquam sint ut facere. Eum!"',
    image: BpkPenabur,
  },
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
          delay: 3000,
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
        <h3>TESTIMONI PELANGGAN</h3>
        <h4>Apa yang mereka katakan tentang kami?</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque numquam quae ea atque tempore labore facere excepturi expedita beatae ipsam.</p>
      </div>
    </div>
  );
};

export default Testimonial;
