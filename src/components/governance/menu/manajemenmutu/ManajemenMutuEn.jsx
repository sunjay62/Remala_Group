import React, { useEffect } from 'react';
import './manajemenmutu.scss';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import iso20000 from '../../../../assets/iso/ISO20000-1-ACS.jpeg';
import iso00452 from '../../../../assets/iso/EMS-00452.jpg';
import iso00025 from '../../../../assets/iso/ISMS-00025.jpg';
import iso00252 from '../../../../assets/iso/OHS-00252.jpg';
import iso02073 from '../../../../assets/iso/QSC-02073.jpg';
import iso00147 from '../../../../assets/iso/SAB-00147.jpg';

const ManajemenMutu = () => {
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  // // Data untuk masing-masing elemen
  // const dataManajemen = [
  //   {
  //     title: t('translation.text-governance.text-quality.title1'),
  //     description: 'Deskripsi :',
  //     content:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
  //   },
  //   {
  //     title: t('translation.text-governance.text-quality.title2'),
  //     description: 'Deskripsi :',
  //     content:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
  //   },
  //   {
  //     title: t('translation.text-governance.text-quality.title3'),
  //     description: 'Deskripsi :',
  //     content:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
  //   },
  //   {
  //     title: t('translation.text-governance.text-quality.title4'),
  //     description: 'Deskripsi :',
  //     content:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
  //   },
  //   {
  //     title: t('translation.text-governance.text-quality.title5'),
  //     description: 'Deskripsi :',
  //     content:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
  //   },
  // ];

  return (
    <>
      <div className="containerManajemen" data-aos="fade-up">
        <div className="boxManajemen">
          {/* {dataManajemen.map((item, index) => (
            <div className="contentManajemen" key={index}>
              <div className="contentLeft" data-aos="fade-right">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <p>{item.content}</p>
              </div>
              <div className="contentRight" data-aos="fade-left"></div>
            </div>
          ))} */}
          <div className="PdfContainer">
            <img src={iso00452} />
          </div>
          <div className="PdfContainer">
            <img src={iso00025} />
          </div>
          <div className="PdfContainer">
            <img src={iso00252} />
          </div>
          <div className="PdfContainer">
            <img src={iso02073} />
          </div>
          <div className="PdfContainer">
            <img src={iso00147} />
          </div>
          <div>
            <img className="isoAcs" src={iso20000} />
          </div>
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default ManajemenMutu;
