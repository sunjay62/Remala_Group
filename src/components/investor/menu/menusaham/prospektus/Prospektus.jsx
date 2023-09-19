import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Prospektus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div data-aos="fade-left">
      <h1>Prospektus</h1>
    </div>
  );
};

export default Prospektus;
