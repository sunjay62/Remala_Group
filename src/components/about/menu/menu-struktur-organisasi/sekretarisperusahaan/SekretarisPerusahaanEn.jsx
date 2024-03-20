import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chintia from '../../../../../assets/fotoprofile/chintia.png';

const profiles = [
  {
    name: 'Chintia Hong',
    image: Chintia,
    role: 'Corporate Secretary',
    description:
      'My name is Chintia Hong, In my current role at PT. Remala Abadi, where I have been serving since August 2022, I hold the position of Corporate Secretary since November 2023. In my earlier role from November 2022 to November 2023, I served as the Head of Customer Relation Department. Prior to this, I started as the Personal Assistant to the Board of Director from August 2022 to November 2022. In these capacities, I have been responsible for executing and maintaining all necessary official corporate filings, documents, reports, and records in compliance with applicable laws and regulations. This includes managing shareholder relations, communicating with board members, and coordinating shareholder lists and registrations. Additionally, I actively maintain communication with our customers through various channels, employing Likert Scale-based surveys to gauge satisfaction rates.<br><br>' +
      'Previously, at XYNERGY REALTY INDONESIA, a Melbourne-based Property & Real Estate Company, I served as a Property Administrator Officer from February 2021 to August 2022. In this role, I processed renter applications, scheduled property inductions and open inspections through the IRE Application, sent welcome letters, and ensured accurate documentation in the database system. My responsibilities also involved close coordination with the Property Manager for application approvals and addressing any related issues.<br><br>' +
      'Before that, at ASTON CIREBON HOTEL & CONVENTION CENTER in West Java, I held the position of Account Payable Clerk from October 2020 to February 2021. My responsibilities included receiving original invoices, preparing payment documents, and ensuring timely payments to suppliers, along with maintaining accurate records and filing.<br><br>' +
      'In my role as a Purchasing Officer at SWISS-BELHOTEL JAYAPURA in Papua from August 2018 to July 2020, I managed the procurement process, negotiating prices, coordinating with users for specifications, and maintaining positive relationships with suppliers.<br><br>' +
      'Earlier in my career, I played a key role as the Manager at CAFÉ CARSTENSZ in Jayapura from 2013 to 2017. In this venture, I successfully established and operated the café, overseeing various aspects such as finance, operations, maintenance, and human resources.<br><br>' +
      'These diverse roles have equipped me with a comprehensive skill set, ranging from corporate governance and customer relations to property administration, accounts payable, and procurement, showcasing my ability to adapt and excel in various professional environments.',
  },
];

const SekretarisPerusahaan = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      {profiles.map((profile, index) => (
        <div className="col-profile d-flex mt-5" data-aos="fade-left" key={index}>
          <div className="col-6 profile-box"></div>
          <div className="mx-4">
            <div className="nameDivision">
              <h6></h6>
              <p></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SekretarisPerusahaan;
