import React, { useEffect, useState } from 'react';
import './milestonehome.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Milestonehome = () => {
  const [countYears, setCountYears] = useState(0);
  const [countEstablish, setCountEstablish] = useState(0);
  const [countPresence, setCountPresence] = useState(0);
  const targetCountYears = 20;
  const targetCountEstablish = 8500;
  const targetCountPresence = 150;
  const interval = 15;
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const updateCounts = async () => {
    const promises = [];

    if (countYears < targetCountYears) {
      promises.push(updateCount(setCountYears, targetCountYears));
    }
    if (countEstablish < targetCountEstablish) {
      promises.push(updateCount(setCountEstablish, targetCountEstablish));
    }
    if (countPresence < targetCountPresence) {
      promises.push(updateCount(setCountPresence, targetCountPresence));
    }

    await Promise.all(promises);
  };

  const updateCount = (setter, target) => {
    return new Promise((resolve) => {
      const timer = setInterval(() => {
        setter((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount >= target) {
            clearInterval(timer);
            resolve();
            return target;
          }
          return newCount;
        });
      }, interval);
    });
  };

  useEffect(() => {
    updateCounts();
  }, []);

  return (
    <>
      <div className="containerHighlightMilestone">
        <div className="company-milestone">
          <h3 data-aos="fade-up">{t('translation.text-milestone.title')}</h3>
          <p data-aos="fade-up">{t('translation.text-milestone.text')}</p>
          <div className="d-flex justify-content-around flex-wrap flex-md-nowrap">
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3" data-aos="fade-right">
              <div>
                <h2>
                  <span className="amount">{countEstablish}</span> KM
                </h2>
                <h4>{t('translation.text-milestone.text1')}</h4>
              </div>
            </div>
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3 mx-md-2" data-aos="fade-up">
              <div>
                <h2>
                  <span className="amountyear">{countYears}</span>Th
                </h2>
                <h4 className="year">{t('translation.text-milestone.text2')}</h4>
              </div>
            </div>
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3" data-aos="fade-left">
              <div>
                <h1>
                  <span className="amount">{countPresence}+</span>
                </h1>
                <h4>{t('translation.text-milestone.text3')}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Milestonehome;
