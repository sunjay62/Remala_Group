import React from 'react';
import './footer.scss';
import logo from '../../assets/navbar/logoremala.png';
import awardsIntegrasi from '../../assets/iso/Integrasi.png';
import awards9001 from '../../assets/iso/ISO-9001.png';
import awards14001 from '../../assets/iso/ISO-14001.png';
import awards27001 from '../../assets/iso/ISO-27001.png';
import awards37001 from '../../assets/iso/ISO-37001.png';
import awards45001 from '../../assets/iso/ISO-45001.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterEn = () => {
  return (
    <>
      <div className="mainFooter stickyFooter">
        <div className="footerTop">
          <div className="footerLeft">
            <div className="firstLeft">
              <img src={logo} alt="Remala" className="logoFooter" />
              <div className="awardsImage">
                <img src={awardsIntegrasi} alt="Remala" className="awards" />
                <img src={awards9001} alt="Remala" className="awards" />
                <img src={awards14001} alt="Remala" className="awards" />
              </div>
              <div className="awardsImage">
                <img src={awards27001} alt="Remala" className="awards" />
                <img src={awards37001} alt="Remala" className="awards" />
                <img src={awards45001} alt="Remala" className="awards" />
              </div>
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
