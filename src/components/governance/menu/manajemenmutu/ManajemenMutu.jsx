import React, { useEffect } from 'react';
import './manajemenmutu.scss';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ManajemenMutu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  // Data untuk masing-masing elemen
  const dataManajemen = [
    {
      title: 'Sertifikat ISO Manajemen Mutu',
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
    {
      title: 'Sertifikat ISO Anti Penyuapan',
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
    {
      title: 'Sertifikat ISO Manajemen Layanan Teknologi Informasi',
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
    {
      title: 'Sertifikat ISO Manajemen Lingkungan',
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
    {
      title: 'Sertifikat ISO Manajemen Keselamatan dan Kesehatan Kerja',
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
  ];

  return (
    <>
      <div className="containerManajemen" data-aos="fade-up">
        <div className="boxManajemen">
          {dataManajemen.map((item, index) => (
            <div className="contentManajemen" key={index}>
              <div className="contentLeft" data-aos="fade-right">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <p>{item.content}</p>
              </div>
              <div className="contentRight" data-aos="fade-left"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default ManajemenMutu;
