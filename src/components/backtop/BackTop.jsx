import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './backtop.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BackTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="backTopContainer" data-aos="fade-up">
      {showBackToTop && (
        <IconButton onClick={scrollToTop} aria-label="Back to Top">
          <KeyboardArrowUpIcon className="arrowBackTop" />
        </IconButton>
      )}
    </div>
  );
};

export default BackTop;
