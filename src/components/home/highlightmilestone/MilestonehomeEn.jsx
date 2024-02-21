import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import './milestonehome.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Milestonehome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerHighlightMilestone">
        <div className="company-milestone">
          <h3 data-aos="fade-up">Discover Connectivity for Your Needs</h3>
          <p data-aos="fade-up">Providing Digital Solutions for Your Needs</p>
          <div className="d-flex justify-content-around flex-wrap flex-md-nowrap">
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3" data-aos="fade-right">
              <div>
                <h2>
                  <CountUp className="amount" start={0} end={8500} duration={8} separator=" " />
                  KM
                </h2>
                <h4>Distributed Network</h4>
              </div>
            </div>
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3 mx-md-2" data-aos="fade-up">
              <div>
                <h2>
                  <CountUp className="amountyear" start={0} end={20} duration={13} separator=" " />
                  Th
                </h2>
                <h4 className="year">Years</h4>
              </div>
            </div>
            <div className="boxmile col-md-4 col-11 mt-md-0 mt-3" data-aos="fade-left">
              <div>
                <h1>
                  <CountUp className="amount" start={0} end={150} duration={8} separator=" " />
                </h1>
                <h4>Attendance Point</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Milestonehome;
