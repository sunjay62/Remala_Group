import React, { useEffect } from 'react';
import './manajemenmutu.scss';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import iso27001 from '../../../../assets/iso/ISO27001-ACS.jpeg';
import iso9001 from '../../../../assets/iso/ISO9001-ACS.jpeg';
import iso20000 from '../../../../assets/iso/ISO20000-1-ACS.jpeg';
import iso45001 from '../../../../assets/iso/ISO45001-ACS.jpeg';

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
            <img src={iso27001} />
          </div>
          <hr />
          <div className="PdfContainer">
            <img src={iso9001} />
          </div>
          <hr />
          <div className="PdfContainer">
            <img src={iso20000} />
          </div>
          <hr />
          <div className="PdfContainer">
            <img src={iso45001} />
          </div>
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default ManajemenMutu;
