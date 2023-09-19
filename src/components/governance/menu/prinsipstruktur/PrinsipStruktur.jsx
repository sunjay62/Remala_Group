import React, { useEffect } from 'react';
import './prinsipstruktur.scss';
import StrukturTatakelola from '../../../../assets/home/strukturtatakelola.png';
import Footer from '../../../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrinsipStruktur = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerPrinsip" data-aos="fade-up">
        <div className="contentPrinsip">
          <h5>Prinsip Tata Kelola Perusahaan</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt voluptas optio aperiam quibusdam quae id provident autem, illo fugiat, ipsa veniam est consequuntur recusandae?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste praesentium atque ducimus ipsam! Modi aut sed distinctio optio cupiditate? Laudantium ratione reiciendis, ullam accusamus omnis non? Sapiente, neque laboriosam quos
            cupiditate provident a inventore. A, provident. Eos pariatur error nisi quia architecto blanditiis ad vero corrupti sapiente possimus. Expedita, accusamus?
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt voluptas optio aperiam quibusdam quae id provident autem, illo fugiat, ipsa veniam est consequuntur recusandae?</p>
          <br />
          <h5>Struktur Tata Kelola Perusahaan</h5>
          <img src={StrukturTatakelola} alt="Tata Kelola" className="imgTatakelola" />
          <br />
          <h5>RAPAT UMUM PEMEGANG SAHAM</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum, ipsam unde laborum in ad dolorem asperiores quis. Cupiditate modi ratione et, maxime aspernatur illum unde aperiam, reiciendis laboriosam nostrum non
            deserunt repudiandae adipisci veniam.
          </p>
          <br />
          <h5>DEWAN KOMISARIS</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum, ipsam unde laborum in ad dolorem asperiores quis. Cupiditate modi ratione et, maxime aspernatur illum unde aperiam, reiciendis laboriosam nostrum non
            deserunt repudiandae adipisci veniam.
          </p>
          <br />
          <h5>AUDIT COMMITTEE</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt voluptas optio aperiam quibusdam quae id provident autem, illo fugiat, ipsa veniam est consequuntur recusandae?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste praesentium atque ducimus ipsam! Modi aut sed distinctio optio cupiditate? Laudantium ratione reiciendis, ullam accusamus omnis non? Sapiente, neque laboriosam quos
            cupiditate provident a inventore. A, provident. Eos pariatur error nisi quia architecto blanditiis ad vero corrupti sapiente possimus. Expedita, accusamus?
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt voluptas optio aperiam quibusdam quae id provident autem, illo fugiat, ipsa veniam est consequuntur recusandae?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt voluptas </p>
          <ul>
            <li>Ketua : </li>
            <li>Anggota : </li>
          </ul>
          <br />
          <h5>KOMITE NOMINASI DAN REMUNERASI</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste praesentium atque ducimus ipsam! Modi aut sed distinctio optio cupiditate? Laudantium ratione reiciendis, ullam accusamus omnis non? Sapiente, neque laboriosam quos
            cupiditate provident a inventore. A, provident. Eos pariatur error nisi quia architecto blanditiis ad vero corrupti sapiente possimus. Expedita, accusamus?
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nesciunt voluptas optio aperiam quibusdam quae id provident autem, illo fugiat, ipsa veniam est consequuntur recusandae?</p>
          <ul>
            <li>Ketua : </li>
            <li>Anggota : </li>
          </ul>
          <br />
          <h5>DIREKSI</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum, ipsam unde laborum in ad dolorem asperiores quis. Cupiditate modi ratione et, maxime aspernatur illum unde aperiam, reiciendis laboriosam nostrum non
            deserunt repudiandae adipisci veniam.
          </p>
          <br />
          <h5>SEKRETARIS PERUSAHAAN</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum, ipsam unde laborum in ad dolorem asperiores quis. Cupiditate modi ratione et, maxime aspernatur illum unde aperiam, reiciendis laboriosam nostrum non
            deserunt repudiandae adipisci veniam.
          </p>
          <br />
          <h5>UNIT AUDIT INTERNAL</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum, ipsam unde laborum in ad dolorem asperiores quis. Cupiditate modi ratione et, maxime aspernatur illum unde aperiam, reiciendis laboriosam nostrum non
            deserunt repudiandae adipisci veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum, ipsam unde laborum in ad dolorem asperiores quis. Cupiditate modi ratione et, maxime aspernatur illum unde aperiam, reiciendis laboriosam nostrum non
            deserunt repudiandae adipisci veniam.
          </p>
          <br />
          <h5>AUDITOR INDEPENDEN</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum, ipsam unde laborum in ad dolorem asperiores quis. Cupiditate modi ratione et, maxime aspernatur illum unde aperiam, reiciendis laboriosam nostrum non
            deserunt repudiandae adipisci veniam.
          </p>
          <br />
        </div>
      </div>
      <div className="footer">{<Footer />}</div>
    </>
  );
};

export default PrinsipStruktur;
