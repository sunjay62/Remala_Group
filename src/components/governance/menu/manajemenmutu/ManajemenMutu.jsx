import React, { useEffect } from 'react';
import './manajemenmutu.scss';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const ManajemenMutu = () => {
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  // Data untuk masing-masing elemen
  const dataManajemen = [
    {
      title: t('translation.text-governance.text-quality.title1'),
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
    {
      title: t('translation.text-governance.text-quality.title2'),
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
    {
      title: t('translation.text-governance.text-quality.title3'),
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
    {
      title: t('translation.text-governance.text-quality.title4'),
      description: 'Deskripsi :',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quam earum dolor non adipisci quis vero doloremque odio unde natus, ratione ab assumenda! Adipisci veniam quidem delectus ducimus aliquid provident facere, id nulla consectetur cupiditate odit atque maxime nisi, iusto ut dicta ea beatae. Minus voluptatum nihil id at maxime.',
    },
    {
      title: t('translation.text-governance.text-quality.title5'),
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
