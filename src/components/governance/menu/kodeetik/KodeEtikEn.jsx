import React, { useEffect } from 'react';
import './kodeetik.scss';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const KodeEtik = () => {
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerKodeEtik" data-aos="fade-up">
        <div className="contentKodeEtik">
          <h5>KODE ETIK</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste praesentium atque ducimus ipsam! Modi aut sed distinctio optio cupiditate? Laudantium ratione reiciendis, ullam accusamus omnis non? Sapiente, neque laboriosam quos
            cupiditate provident a inventore. A, provident. Eos pariatur error nisi quia architecto blanditiis ad vero corrupti sapiente possimus. Expedita, accusamus?
          </p>

          <br />
          <h5>Pokok-pokok Kode Etik Telkom antara lain mengatur mengenai :</h5>
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
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default KodeEtik;
