import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import dataNewsEn from '../data/dataNewsEn';
import './newsdetail.scss';
import FooterId from '../../footer/FooterId';
import FooterEn from '../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import CopyToClipboard from 'react-copy-to-clipboard';
import Twitter from '../../../assets/news/twittericon.png';
import Facebook from '../../../assets/news/facebookicon.png';
import Share from '../../../assets/news/shareicon.png';
import Instagram from '../../../assets/news/instagramicon.png';
import Whatsapp from '../../../assets/news/waicon.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsDetail = () => {
  const [t] = useTranslation('global');
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);

    // Initialize AOS
    AOS.init({
      duration: 1300,
    });
  }, []);

  // Find the news item with the matching id
  const selectedNews = dataNewsEn.find((news) => news.id === parseInt(id, 10));

  if (!selectedNews) {
    // If the news with the specified id is not found, you can handle it here
    return (
      <div>
        <h2>{t('translation.text-news.notFound')}</h2>
      </div>
    );
  }

  const shareUrl = window.location.href;

  const handleCopyToClipboard = () => {
    setCopied(true);
    // Show toast when copy is successful
    toast.success('Link copied to clipboard!', {
      position: 'bottom-center',
      autoClose: 2000, // 2 seconds
    });
  };

  const handleInstagramShare = () => {
    const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;

    // Buka Instagram dengan URL scheme
    window.open(instagramShareUrl, '_blank');
  };

  return (
    <div className="contentNewsDetail" data-aos="fade-down">
      <div className="newsDetail-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero" data-aos="fade-up">
            NEWS
          </h2>
        </div>
      </div>
      <div className="bottomNewsDetail">
        <h1>{selectedNews.titleDetail}</h1>
        <div className="shareContent">
          <p>Bagikan Artikel</p>
          <div className="shareIcon">
            <WhatsappShareButton url={shareUrl} className="linkIcon">
              <img src={Whatsapp} alt="" className="imgIcon" />
            </WhatsappShareButton>
            <FacebookShareButton url={shareUrl} className="linkIcon">
              <img src={Facebook} alt="" className="imgIcon" />
            </FacebookShareButton>
            <Link className="linkIcon" onClick={handleInstagramShare}>
              <img src={Instagram} alt="" className="imgIcon" />
            </Link>
            <TwitterShareButton url={shareUrl} className="linkIcon">
              <img src={Twitter} alt="" className="imgIcon" />
            </TwitterShareButton>
            <CopyToClipboard text={shareUrl} onCopy={handleCopyToClipboard}>
              <div className="linkIcon" style={{ cursor: 'pointer' }}>
                <img src={Share} alt="" className="imgIcon" />
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <img src={selectedNews.image} alt={selectedNews.title} className="heroImageNews" />
        <h5>{selectedNews.date}</h5>
        <p>{selectedNews?.descriptionDetail}</p>
        <br />
        {(selectedNews.paragraph1 || []).map((paragraph, index) => (
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
        <br />
        {(selectedNews.paragraph2 || []).map((paragraph, index) => (
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
        <br />
        {(selectedNews.paragraph3 || []).map((paragraph, index) => (
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
        <br />
        {(selectedNews.paragraph4 || []).map((paragraph, index) => (
          <div key={index}>
            <h6>{paragraph.title}</h6>
            <p>{paragraph.description}</p>
            <p>{paragraph.description1}</p>
            <div className="containerChillImg">
              {(paragraph.images || []).map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt="#" className="chillImg" />
              ))}
            </div>
            <br />
            <p>{paragraph.description2}</p>
          </div>
        ))}
        <br />
        {(selectedNews.paragraph5 || []).map((paragraph, index) => (
          <div key={index}>
            <h6>{paragraph.title}</h6>
            <p>{paragraph.description1}</p>
            <div className="containerChillImg">
              {(paragraph.images || []).map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt="#" className="chillImg" />
              ))}
            </div>
            <br />
            <p>{paragraph.description2}</p>
          </div>
        ))}
        <br />
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </div>
  );
};

export default NewsDetail;
