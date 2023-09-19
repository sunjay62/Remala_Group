import React, { useEffect } from 'react';
import './anggarandasar.scss';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnggaranDasar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerAnggaran">
        <div className="anggaranTop" data-aos="fade-up">
          <h3>Tachyon.Net</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio est ea asperiores magnam quod quas accusamus illo quo iusto fuga cumque nesciunt eius expedita, deleniti mollitia assumenda quaerat ipsa minus dolores
            placeat aut reiciendis. Maiores saepe voluptate nostrum omnis, facilis, hic rerum sapiente temporibus rem et itaque, maxime asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio est ea asperiores magnam quod quas accusamus illo quo iusto fuga cumque nesciunt eius expedita, deleniti mollitia assumenda quaerat ipsa minus dolores
            placeat aut reiciendis. Maiores saepe voluptate nostrum omnis, facilis, hic rerum sapiente temporibus rem et itaque, maxime asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio est ea asperiores magnam quod quas accusamus illo quo iusto fuga cumque nesciunt eius expedita, deleniti mollitia assumenda quaerat ipsa minus dolores
            placeat aut reiciendis. Maiores saepe voluptate nostrum omnis, facilis, hic rerum sapiente temporibus rem et itaque, maxime asperiores.
          </p>
        </div>
        <div className="anggaranBottom" data-aos="fade-up">
          <h3>Nethome</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio est ea asperiores magnam quod quas accusamus illo quo iusto fuga cumque nesciunt eius expedita, deleniti mollitia assumenda quaerat ipsa minus dolores
            placeat aut reiciendis. Maiores saepe voluptate nostrum omnis, facilis, hic rerum sapiente temporibus rem et itaque, maxime asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio est ea asperiores magnam quod quas accusamus illo quo iusto fuga cumque nesciunt eius expedita, deleniti mollitia assumenda quaerat ipsa minus dolores
            placeat aut reiciendis. Maiores saepe voluptate nostrum omnis, facilis, hic rerum sapiente temporibus rem et itaque, maxime asperiores.
          </p>
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default AnggaranDasar;
