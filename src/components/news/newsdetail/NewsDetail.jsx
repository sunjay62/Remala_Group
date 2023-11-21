import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import dummyNews from '../dummyNews';
import './newsdetail.scss';
import Footer from '../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Twitter from '../../../assets/news/twittericon.png';
import Facebook from '../../../assets/news/facebookicon.png';
import Share from '../../../assets/news/shareicon.png';
import Instagram from '../../../assets/news/instagramicon.png';
import Whatsapp from '../../../assets/news/waicon.png';

const NewsDetail = () => {
  const [t] = useTranslation('global');
  const { id } = useParams();

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);

    // Initialize AOS
    AOS.init({
      duration: 1300,
    });
  }, []);

  // Find the news item with the matching id
  const selectedNews = dummyNews.find((news) => news.id === parseInt(id, 10));

  if (!selectedNews) {
    // If the news with the specified id is not found, you can handle it here
    return (
      <div>
        <h2>{t('translation.text-news.notFound')}</h2>
      </div>
    );
  }

  return (
    <div className="contentNewsDetail" data-aos="fade-down">
      <div className="newsDetail-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero" data-aos="fade-up">
            {t('translation.text-news.title')}
          </h2>
        </div>
      </div>
      <div className="bottomNewsDetail">
        <h1>{selectedNews.title}</h1>
        <div className="shareContent">
          <p>Bagikan Artikel</p>
          <div className="shareIcon">
            <Link className="linkIcon">
              <img src={Whatsapp} alt="" srcset="" />
            </Link>
            <Link className="linkIcon">
              <img src={Facebook} alt="" srcset="" />
            </Link>
            <Link className="linkIcon">
              <img src={Instagram} alt="" srcset="" />
            </Link>
            <Link className="linkIcon">
              <img src={Twitter} alt="" srcset="" />
            </Link>
            <Link className="linkIcon">
              <img src={Share} alt="" srcset="" />
            </Link>
          </div>
        </div>
        <img src={selectedNews.image} alt={selectedNews.title} />
        <h5>{selectedNews.date}</h5>
        <p>{selectedNews.description}</p>
      </div>
      <div className="footer">{<Footer />}</div>
    </div>
  );
};

export default NewsDetail;
