import React from 'react';
import './footerold.css';
import logo from '../../assets/navbar/logoremala.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <div className="mainFooter">
        <div className="footerTop">
          <div className="footerLeft">
            <div className="box">
              <p>
                <strong>Graha Mustika Ratu</strong>
              </p>
              <p>Jl. Gatot Subroto No 74-75, RT 02/ RW 01.</p>
              <p>Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan,</p>
              <p>Daerah Khusus Ibukota Jakarta 12870</p>
              <p>Telepon : (021) 83709269</p>
              <p>Email : noc@tachyon.net.id</p>
              {/* <p>
                <h5>Visit Our Office :</h5>
              </p>
              <p>Monday – Saturday</p>
              <p>09 AM – 05 PM</p> */}
            </div>
          </div>
          <div className="footerMidle">
            <div className="midleTop">
              <img src={logo} className="logoFooter" />
            </div>
            <div className="midleBottom">
              <div className="socials">
                <a href="https://www.instagram.com/tachyon.net.id_/?hl=id" target="_blank">
                  <InstagramIcon className="icon" />
                </a>
                <a href="https://www.facebook.com/tachyon.net.id/?locale=id_ID" target="_blank">
                  <FacebookOutlinedIcon className="icon" />
                </a>
                <a href="https://twitter.com/tachyonnetwork" target="_blank">
                  <YouTubeIcon className="icon" />
                </a>
                <a href="https://www.linkedin.com/company/pt-remala-abadi/mycompany/" target="_blank">
                  <LinkedInIcon className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="footerRight">
            <div className="tautan">
              <h6>Tautan Penting</h6>
              <a href="#">Tentang</a>
              <a href="#">Hubungan Investor</a>
              <a href="#">Manajemen</a>
            </div>
            <div className="pengumuman">
              <h6>Pengumuman</h6>
              <a href="#">Pengumuman RUPS</a>
              <a href="#">Pengumuman Paparan Publik</a>
              <a href="#">Pengumuman Emiten</a>
            </div>
            <div className="laporan">
              <h6>Laporan</h6>
              <a href="#">Laporan Keuangan</a>
              <a href="#">Laporan Berkelanjutan</a>
              <a href="#">Laporan Tahunan</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footerBottom">
          <p>Copyright &copy; Remala Group 2023 All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
