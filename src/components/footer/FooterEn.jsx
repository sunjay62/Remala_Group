import React from 'react';
import './footer.scss';
import logo from '../../assets/navbar/logoremala.png';
import awardsIntegrasi from '../../assets/iso/Integrasi.png';
import awards9001 from '../../assets/iso/ISO-9001.png';
import awards14001 from '../../assets/iso/ISO-14001.png';
import awards27001 from '../../assets/iso/ISO-27001.png';
import awards37001 from '../../assets/iso/ISO-37001.png';
import awards45001 from '../../assets/iso/ISO-45001.png';
import awards20000 from '../../assets/iso/ISO-20000.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, useNavigate } from 'react-router-dom';

const FooterEn = () => {
  const navigate = useNavigate();

  const handleToIntegrasi = () => {
    navigate(`/en/news/3/ims`);
  };

  const handleTo9001 = () => {
    navigate(`/en/news/4/iso-9001:2015`);
  };

  const handleTo37001 = () => {
    navigate(`/en/news/6/iso-37001:2016`);
  };

  const handleTo27001 = () => {
    navigate(`/en/news/5/iso-27001:2022`);
  };

  const handleTo45001 = () => {
    navigate(`/en/news/7/iso-45001:2018`);
  };

  const handleTo14001 = () => {
    navigate(`/en/news/8/iso-14001:2015`);
  };

  const handleTo20000 = () => {
    navigate(`/news/9/iso-20000-1:2018`);
  };

  return (
    <>
      <div className="mainFooter stickyFooter">
        <div className="footerTop">
          <div className="footerLeft">
            <div className="firstLeft">
              <img src={logo} alt="Remala" className="logoFooter" />
              <div className="awardsImage">
                <img src={awardsIntegrasi} alt="Remala" className="awards" onClick={handleToIntegrasi} />
                <img src={awards9001} alt="Remala" className="awards" onClick={handleTo9001} />
                <img src={awards37001} alt="Remala" className="awards" onClick={handleTo37001} />
              </div>
              <div className="awardsImage">
                <img src={awards27001} alt="Remala" className="awards" onClick={handleTo27001} />
                <img src={awards45001} alt="Remala" className="awards" onClick={handleTo45001} />
                <img src={awards14001} alt="Remala" className="awards" onClick={handleTo14001} />
              </div>
              <img src={awards20000} alt="iso20000" className="logoAcs" onClick={handleTo20000} />
            </div>
            <div className="twoLeft">
              <h6>
                <strong>PT. Remala Abadi</strong>
              </h6>
              <p>Graha Mustika Ratu</p>
              <p>
                Jl. Gatot Subroto No 74-75, RT 02/ RW 01. <br />
                Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, <br />
                Daerah Khusus Ibukota Jakarta 12870
              </p>
              <br />
              <p>Phone : (021) 83708889</p>
              <p>Email : corporatesecretary@remala.id</p>
              {/* <p>
                <h5>Visit Our Office :</h5>
              </p>
              <p>Monday – Saturday</p>
              <p>09 AM – 05 PM</p> */}
            </div>
          </div>
          <span className="borderLine"></span>
          <div className="footerMidle">
            <div className="tautan">
              <h6>Important Links</h6>
              <a href="#">About Us</a>
              <a href="#">Investor Relations</a>
              <a href="#">Management</a>
            </div>
            <div className="laporan">
              <h6>Reports</h6>
              <a href="#">Financial Reports</a>
              <a href="#">Sustainability Reports</a>
              <a href="#">Annual Reports</a>
            </div>
            <div className="pengumuman">
              <h6>Announcements</h6>
              <a href="#">RUPS Announcements</a>
              <a href="#">Public Disclosure Announcements</a>
              <a href="#">Issuer Announcements</a>
            </div>
          </div>

          <div className="footerRight">
            <div className="rightTop">
              <h3>FOLLOW US</h3>
            </div>
            <div className="rightBottom">
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
        <hr />
        <div className="footerBottom">
          <p>Copyright &copy; Remala Group 2024 All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default FooterEn;
