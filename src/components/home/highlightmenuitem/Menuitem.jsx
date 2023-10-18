import React, { useEffect } from 'react';
import './menuitem.scss';
import imgBoc from '../../../assets/home/item/boc.png';
import imgBod from '../../../assets/home/item/bod.png';
import imgAnnual from '../../../assets/home/item/annual.png';
import imgCompany from '../../../assets/home/item/company.png';
import imgContact from '../../../assets/home/item/contactus.png';
import imgEarning from '../../../assets/home/item/earnings.png';
import imgFinancial from '../../../assets/home/item/financial.png';
import imgIdx from '../../../assets/home/item/idx.png';
import imgPress from '../../../assets/home/item/press.png';
import imgOwnership from '../../../assets/home/item/ownership.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Menuitem = () => {
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerMenuItem">
        <div className="item-home" data-aos="fade-right">
          <div className="col-md-1 col-5">
            <Link to="/aboutus/organitation-strucktur/board-of-commissioners">
              <div className="boxitem-home col-12">
                <img src={imgBoc} alt="BOC" />
              </div>
            </Link>
            <p className="text-center">{t('translation.menu-item.boc')}</p>
          </div>
          <div className=" col-md-1 col-5">
            <Link to="/aboutus/organitation-strucktur/board-of-director">
              <div className="boxitem-home col-12">
                <img src={imgBod} alt="BOD" />
              </div>
            </Link>
            <p className="text-center">{t('translation.menu-item.bod')}</p>
          </div>
          <div className="col-md-1 col-5">
            <div className="boxitem-home col-12">
              <img src={imgOwnership} alt="Ownership" />
            </div>
            <p className="text-center">{t('translation.menu-item.ownership')}</p>
          </div>
          <div className="col-md-1 col-5">
            <div className="boxitem-home col-12">
              <img src={imgCompany} alt="Company" />
            </div>
            <p className="text-center">{t('translation.menu-item.company')}</p>
          </div>
          <div className="col-md-1 col-5">
            <Link to="/investor-relation/report/annual-report">
              <div className="boxitem-home col-12">
                <img src={imgAnnual} alt="Annual" />
              </div>
            </Link>
            <p className="text-center">{t('translation.menu-item.annual')}</p>
          </div>
        </div>
        <div className="item-home" data-aos="fade-left">
          <div className="col-md-1 col-5">
            <Link to="/investor-relation/report/financial-statements">
              <div className="boxitem-home col-12">
                <img src={imgFinancial} alt="Financial" />
              </div>
            </Link>
            <p className="text-center">{t('translation.menu-item.financial')}</p>
          </div>
          <div className="col-md-1 col-5">
            <div className="boxitem-home col-12">
              <img src={imgPress} alt="Press" />
            </div>
            <p className="text-center">{t('translation.menu-item.press')}</p>
          </div>
          <div className="col-md-1 col-5">
            <div className="boxitem-home col-12">
              <img src={imgIdx} alt="IDX" />
            </div>
            <p className="text-center">{t('translation.menu-item.idx')}</p>
          </div>
          <div className="col-md-1 col-5">
            <div className="boxitem-home col-12">
              <img src={imgEarning} alt="Earnings" />
            </div>
            <p className="text-center">{t('translation.menu-item.earnings')}</p>
          </div>
          <div className="col-md-1 col-5">
            <Link to="/contactus">
              <div className="boxitem-home col-12">
                <img src={imgContact} alt="ContatUs" />
              </div>
            </Link>
            <p className="text-center">{t('translation.menu-item.contact')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menuitem;
