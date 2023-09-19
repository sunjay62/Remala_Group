import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sec = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div data-aos="fade-left">
      <h4>Annual report berisi deskripsi akan kondisi operasional dan finansial suatu perusahan.</h4>
    </div>
  );
};

export default Sec;
