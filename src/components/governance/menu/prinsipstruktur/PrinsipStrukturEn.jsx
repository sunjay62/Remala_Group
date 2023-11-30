import React, { useEffect } from 'react';
import './prinsipstruktur.scss';
import StrukturOrganisasi from '../../../../assets/home/strukturorganisasi.png';
import DocCsr1 from '../../../../assets/home/docscsr-1.jpeg';
import DocCsr2 from '../../../../assets/home/docscsr-2.jpeg';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrinsipStruktur = () => {
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerPrinsip" data-aos="fade-up">
        <div className="boxPrinsip">
          <div className="contentPrinsip">
            <h4>CORPORATE GOVERNANCE</h4>
            <br />
            <p>
              In conducting its business activities, the Company always pays attention to and complies with the principles of Good Corporate Governance (GCG) as regulated by the Financial Services Authority (OJK) and the Indonesia Stock
              Exchange. Good Corporate Governance ("GCG") is essentially created as a system of controls and regulations for a company, serving as a measure of a company's healthy performance through good work ethics and principles. This
              system ensures that the Company is managed in a directed manner to provide benefits to stakeholders. <br />
              <br />
              Management realizes that the implementation of corporate governance requires awareness, hard work, and support from third parties. Additionally, management is aware of the importance of consistency and improvement in
              implementing good corporate governance. <br /> <br />
              Matters related to Good Corporate Governance (GCG) are implemented by the Company through the application of principles in GCG, including transparency, professionalism, accountability, and responsibility. <br /> <br />
              To implement corporate governance, the Company prepares its components as follows: Board of Commissioners, including Independent Commissioners, Board of Directors, Corporate Secretary, Audit Committee, and Internal Audit Unit.
            </p>
            <br />
            <h5>Board of Commissioners</h5>
            <p>
              The Company has a Chief Commissioner and an Independent Commissioner. This fulfills the requirements of OJK Regulation No. 33/2014, which mandates having Independent Commissioners comprising at least 30% of the Board of
              Commissioners. According to OJK Regulation No. 33/2014, the Board of Commissioners is responsible for supervision and oversight of management policies, general management, both regarding the Company and its business, and
              advising the Board of Directors. <br /> <br />
              Policies regarding the conduct of Board of Commissioners meetings are determined in accordance with the Articles of Association and OJK Regulation No. 33/2014. The Board of Commissioners is required to hold meetings at least
              once every 2 (two) months and a combined meeting with the Board of Directors once every 4 (four) months. <br /> <br />
              Until the Statement of Securities Registration with the OJK, the Board of Commissioners has only held one meeting because the current Board of Commissioners was appointed in March 2023. In the future, the Board of
              Commissioners will hold meetings in accordance with OJK Regulation No. 33/2014.
            </p>
            <p>Here are the details of the Board of Commissioners' Meetings:</p>
            <table border="1" className="tableContainer">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Total Meetings</th>
                  <th>Total Attendance</th>
                  <th>Attendance Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Someone's Name</td>
                  <td>Someone's Position</td>
                  <td>Total Meetings</td>
                  <td>Total Attendance</td>
                  <td>Attendance Frequency</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Someone's Name</td>
                  <td>Someone's Position</td>
                  <td>Total Meetings</td>
                  <td>Total Attendance</td>
                  <td>Attendance Frequency</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>The Company's Board of Commissioners is committed to conducting meetings in accordance with applicable regulations.</p>
            <br />
            <p>The duties of the Board of Commissioners include:</p>
            <ul>
              <li>
                The Board of Commissioners supervises and is responsible for overseeing management policies, the general course of management, both regarding the Company and its business, and provides advice or guidance to the Board of
                Directors.
              </li>
              <li>The Board of Commissioners holds meetings to establish committees that assist in carrying out the duties and responsibilities of the Board of Directors.</li>
            </ul>
            <p>According to OJK Regulation No. 33/2014, the Board of Commissioners is required to hold meetings with the Board of Directors at least once every 4 (four) months.</p>
            <br />
            <h5>Board of Directors</h5>
            <p>The Company has a Chief Executive Officer and Directors who, together, are fully responsible for the implementation of the Company's business activities.</p>
            <br />
            <p>Based on OJK Regulation No. 33/2014, the following are the duties and responsibilities of the Board of Directors:</p>
            <ul>
              <li>Manage and be responsible for the management of the Company or Public Company for the benefit of the Company or Public Company as stipulated in the Articles of Association.</li>
              <li>Conduct annual General Meetings of Shareholders (RUPS) and other RUPS as regulated by laws and the Articles of Association.</li>
              <li>Evaluate the performance of committees at the end of each fiscal year.</li>
            </ul>
            <br />
            <p>
              The policy regarding the conduct of Board of Directors meetings is established in accordance with the Articles of Association and OJK Regulation No. 33/2014. The Board of Directors is required to hold regular meetings at least
              once a month and once every 4 (four) months for joint meetings with the Board of Commissioners.
              <br />
              <br />
              Until the Statement of Securities Registration with the OJK, the Board of Directors has only held one meeting because the current Board of Directors was appointed in March 2023. In the future, the Board of Directors will hold
              meetings in accordance with OJK Regulation No. 33/2014. Here are the details of the Board of Directors' Meetings in the last annual financial report period:
            </p>
            <br />
            <p>Here are the details of the Board of Directors' Meetings in the last annual financial report period:</p>
            <table border="1" className="tableContainer">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Total Meetings</th>
                  <th>Total Attendance</th>
                  <th>Attendance Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Someone's Name</td>
                  <td>Someone's Position</td>
                  <td>Total Meetings</td>
                  <td>Total Attendance</td>
                  <td>Attendance Frequency</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Someone's Name</td>
                  <td>Someone's Position</td>
                  <td>Total Meetings</td>
                  <td>Total Attendance</td>
                  <td>Attendance Frequency</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Someone's Name</td>
                  <td>Someone's Position</td>
                  <td>Total Meetings</td>
                  <td>Total Attendance</td>
                  <td>Attendance Frequency</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>The Board of Directors of the Company is committed to conducting meetings in accordance with applicable regulations.</p>
            <br />
            <p>
              The procedures for determining the amount of remuneration for the Board of Directors and Board of Commissioners are as follows: The Board of Commissioners holds a meeting attended by the majority of the Board of Commissioners,
              and one of the members of the Board of Commissioners is an Independent Commissioner. The results of the Board of Commissioners' meeting regarding remuneration are documented in the meeting minutes and recorded by the Company.
            </p>
            <br />
            <p>
              As of the date of this Prospectus, there have been no training programs to enhance the competence of the Directors. In the future, the Board of Directors will actively participate in training programs to enhance their
              competence.
            </p>
            <p>There are no contracts related to post-employment benefits for the Directors after their term ends.</p>
            <br />
            <h5>Corporate Secretary</h5>
            <p>
              In accordance with OJK Regulation No. 35/POJK.04/2014 dated December 8, 2014, concerning the Corporate Secretary of Issuers or Public Companies ("OJK Regulation No. 35/2014"), the Company has appointed ● as the Corporate
              Secretary effective from ● based on the Decree of the Board of Directors on the Appointment of the Corporate Secretary Number:
            </p>
            <p>The duties and responsibilities of the Corporate Secretary, referring to OJK Regulation No. 35/2014 dated December 8, 2014, concerning the Corporate Secretary of the Company or Public Company, include the following:</p>

            <ul className="listAlpha">
              <li>
                Provide input to the Company's Board of Directors to comply with applicable regulations, including but not limited to Law Number 40 of 2007 concerning Limited Liability Companies, Law Number 8 of 1995 concerning the Capital
                Market, and other regulations in force in the Republic of Indonesia, and in accordance with generally accepted corporate governance norms;
              </li>
              <li>Monitor developments in the Capital Market, especially regulations in the field of the Capital Market;</li>
              <li>Act as a liaison with the Financial Services Authority, Indonesia Stock Exchange, stakeholders, and the public;</li>
              <li>Maintain good relations between the Company and the media;</li>
              <li>Provide services to the public (investors) for any information needed by investors related to the Company's condition;</li>
              <li>Conduct activities that support the Company's operations, including Annual Reports, General Shareholders' Meetings, Information Disclosure, and others;</li>
              <li>Prepare Good Corporate Governance (GCG) practices within the Company;</li>
              <li>Keep and prepare the Company's documentation, including minutes of Board of Directors and Board of Commissioners Meetings, and related matters.</li>
            </ul>
            <br />
            <p>Information regarding the Company's Corporate Secretary:</p>
            <table border="1" className="tableContainerSekretaris">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Hong Chintia</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>Greenville Blok M no.9., RT 007/ RW 009, Kelurahan Duri Kepa, Kecamatan Kebon Jeruk, Jakarta Barat - DKI Jakarta</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>0822-38414168</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>corporatesecretary@remala.id</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>Here is the educational and professional background of the Company's Corporate Secretary:</p>
            <p>Education:</p>
            <p>Work History:</p>
            <br />
            <h5>Audit Committee</h5>
            <p>The Company has formed an Audit Committee and established an Audit Committee Charter. The Audit Committee Charter serves as a working guide for the Audit Committee.</p>

            <p>
              The Audit Committee is appointed as stipulated in OJK Regulation No. 55/2015, based on the Board of Commissioners' Decree of the Company regarding the Appointment of the Audit Committee Number: 1463/IPC-HO/III/2023 dated March
              30, 2023, with the term of office of the Audit Committee not exceeding the term of office of the Board of Commissioners as stipulated in the Company's Articles of Association and can be re-elected for only one subsequent
              period.
              <br />
              <br />
              This committee is tasked with providing independent professional opinions to the Company's Board of Commissioners regarding reports or matters presented by the Company's Board of Directors to the Board of Commissioners. It
              identifies matters that require the attention of the Company's Board of Commissioners, including:
            </p>
            <ul className="listAlpha">
              <li>Develop an annual activity plan approved by the Company's Board of Commissioners;</li>
              <li>Review financial information to be issued by the Company, such as financial statements, projections, and other financial information;</li>
              <li>Review the Company's compliance with laws and regulations related to the Company's activities;</li>
              <li>Review/assess the implementation of internal audit examinations and oversee the implementation of follow-up actions by the Company's Board of Directors on all internal auditor findings;</li>
              <li>Review and report to the Company's Board of Commissioners on complaints related to the Company;</li>
              <li>Maintain confidentiality with the Public Accountant regarding the Company's data and information;</li>
              <li>Oversee the relationship with the Public Accountant and hold meetings/discussions with the Public Accountant;</li>
              <li>Create, review, and update the Audit Committee guidelines as needed;</li>
              <li>Provide independent opinions in case of disagreements between management and the Public Accountant over the services provided;</li>
              <li>Recommend to the Company's Board of Commissioners the appointment of the Public Accountant, based on independence, scope of assignment, and fees;</li>
              <li>Review the activities of risk management carried out by the Company's Board of Directors, if the Company does not have a risk monitoring function under the Company's Board of Commissioners;</li>
              <li>Review and provide advice to the Company's Board of Commissioners regarding potential conflicts of interest of the Company.</li>
            </ul>
            <br />
            <h5>Audit Committee Authority</h5>
            <ul className="listAlpha">
              <li>Access documents, data, and information from the Issuer or Public Company about employees, funds, assets, and company resources as needed;</li>
              <li>Communicate directly with employees, including the Board of Directors and those performing internal audit, risk management, and related functions regarding the duties and responsibilities of the Audit Committee;</li>
              <li>Engage independent parties outside the Audit Committee members as needed to assist in performing their duties (if required).</li>
            </ul>
            <p>The composition of the Company's Audit Committee members is as follows:</p>
            <p>Brief information about the education and work experience of the Audit Committee Chairman can be found in the Company's Management and Oversight sub-section.</p>

            <table border="1" className="tableContainerAudit">
              <tbody>
                <tr>
                  <th>Chairman</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Member 1</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Education</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Work History</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Member 2</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Member 1</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Education</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>
              To comply with Article 12 of OJK Regulation No. 55/2015, the Company has a Charter for the Audit Committee dated ●.
              <br />
              <br />
              In accordance with OJK Regulation No. 55/2015, Audit Committee meetings are held regularly at least 1 (one) time every 3 (three months) and attended by more than 50% (fifty percent) of the total members. Due to the recent
              effective date of ●, Audit Committee member meetings and the implementation of Audit Committee activities have not been held.
              <br />
              <br />
              Discussions related to Audit Committee member meetings include discussing and comprehensively preparing a work program for overseeing the performance of the Board of Directors.
            </p>
            <br />
            <h5>Internal Audit Unit</h5>
            <p>
              The Company has also established an Internal Audit Unit and created an Internal Audit Charter to develop and conduct annual internal audits and other matters related to financial reports and internal controls in accordance
              with its duties and responsibilities.
            </p>
            <p>
              In accordance with OJK No. 56, the Company has established the Internal Audit Unit in accordance with applicable regulations. Based on the Board of Directors Appointment Letter of the Company Number ● dated ●.
              <br />
              <br />
              The Company's internal audit charter has been prepared in accordance with OJK No. 56 regarding the establishment and guidelines for the preparation of internal audit charters.
            </p>
            <p>The Internal Audit Unit has the following duties and responsibilities:</p>
            <ul className="listAlpha">
              <li>Develop and implement an annual Internal Audit plan;</li>
              <li>Examine and evaluate the implementation of internal controls and risk management systems in accordance with the Company's policies;</li>
              <li>Examine and assess the efficiency and effectiveness in the financial, accounting, operational, human resources, marketing, information technology, and other areas;</li>
              <li>Provide improvement suggestions and objective information about the activities examined at all management levels;</li>
              <li>Create audit result reports and submit them to the President Director and Board of Commissioners;</li>
              <li>Monitor, analyze, and report on the implementation of suggested corrective actions;</li>
              <li>Collaborate with the Audit Committee;</li>
              <li>Develop a program to evaluate the quality of its internal audit activities; and</li>
              <li>Conduct special examinations when necessary.</li>
            </ul>
            <br />
            <h5>Internal Audit Unit Authority:</h5>
            <ul>
              <li>Access all relevant information about the Company related to its tasks and functions;</li>
              <li>Communicate directly with the Board of Directors, Board of Commissioners, and/or the Audit Committee as well as members of the Board of Directors, Board of Commissioners, and/or the Audit Committee;</li>
              <li>Hold regular and incidental meetings with the Board of Directors, Board of Commissioners, and/or the Audit Committee; and</li>
              <li>Coordinate its activities with the external auditors.</li>
            </ul>
            <br />
            <p>The Internal Audit Unit consists of 1 (one) person who serves as the Chairman cum member. The structure of the Company's Internal Audit Unit is as follows:</p>
            <br />

            <table border="1" className="tableContainerAudit">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Education</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Work History</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>To comply with Article 9 of OJK Regulation No. 56/2015, the Company has an Internal Audit Unit Charter Number ● dated ●.</p>
            <br />
            <p>
              Internal Audit meetings are held regularly and attended by the Chairman and/or members together with the Board of Directors, Board of Commissioners, and/or the audit committee.
              <br />
              <br />
              In addition, the Company's internal audit periodically evaluates compliance with laws and regulations for all activities and transactions conducted by the Company and evaluates the financial and operational information
              reporting system. The Company's internal audit has provided recommendations for improving the efficiency of business processes and reporting systems to the Company's management.
            </p>
            <br />
            <h5>Nomination and Remuneration Committee</h5>
            <p>
              In accordance with OJK Regulation No. 34/POJK.04/2014 concerning the Nomination and Remuneration Committee of Issuers or Public Companies (“OJK No. 34/2014”), the Nomination and Remuneration functions in the Company are
              carried out by the Company's Board of Commissioners based on the Decree of the Company's Board of Commissioners regarding the Appointment of the Nomination and Remuneration Committee Number ... dated .... with the composition
              of the Company's Nomination and Remuneration Committee as follows:
            </p>
            <br />
            <p>
              Chairman: Ahmad Alamsyah Saragih <br />
              Brief information about Ahmad Alamsyah Saragih's education and work experience can be seen in the Company's Management and Supervision subsection.
            </p>
            <p>
              Member: Verah Wahyudi Singgih Wong <br />
              Brief information about Verah Wahyudi Singgih Wong's education and work experience can be seen in the Company's Management and Supervision subsection.
            </p>
            <p>
              Member: Farhanah <br />
              Education: ● <br />
              Brief information about the education and work experience of the Audit Committee Chairman can be seen in the Company's Management and Supervision subsection.
            </p>
            <br />
            <p>To comply with Article 19 of OJK Regulation No. 34/2014, the Company has a Nomination and Remuneration Committee Charter number ● dated ●.</p>
            <br />
            <p>The total salaries and allowances for the Board of Directors for the year ending August 31, 2022, and the years ending December 31, 2022, 2021, and 2020 were Rp●, Rp●, and Rp●, respectively.</p>
            <br />
            <h5>Internal Control System</h5>
            <p>
              Financial and operational controls are carried out through supervision of each activity. The Board of Directors actively supervises the Company's business operations through the internal audit unit, which oversees the business
              processes run by the Company's employees. The Company's Board of Commissioners also periodically discusses with the audit committee to address weaknesses in the Company's business processes.
              <br />
              <br />
              Regular reports facilitate management in monitoring and correcting any deviations from financial and operational activities. Management also assigns individuals with integrity and competence in their work to ensure that the
              internal control system runs as expected. The Company periodically reviews the internal control system. Supervision of the Company's assets is regularly reviewed by internal and external auditors.
            </p>
            <br />
            <h5>Risk Management</h5>
            <p>In conducting its business, the Company faces various risks described in Chapter VI of the Prospectus on Risk Factors. To minimize these risks, the Company performs risk management, including:</p>

            <ul className="listDecimal">
              <li>
                <h6>Network Cable Disruption Risk</h6>
                <p>
                  Managing the risk of optical fiber network disruption is a crucial component of the telecommunications company's business strategy. Network disruptions can occur for various reasons, including natural events, equipment
                  damage, cyber-attacks, or human errors. Here are some steps that can be taken to manage the risk of optical fiber network disruption: comprehensive risk assessment, network route diversification, real-time monitoring,
                  disaster recovery, employee training, Service Level Agreement (SLA) agreements, routine equipment maintenance, insurance, and crisis simulation.
                </p>
              </li>
              <li>
                <h6>Business Competition Risk</h6>
                <p>
                  Risk management of competition is crucial in the telecommunications business, especially in this highly competitive industry. Here are some steps that can be taken to manage the competition risk in the Company's business:
                  market and competition analysis, service differentiation, competitive pricing, technological innovation, effective marketing, strategic partnerships, good customer service quality, SWOT analysis, and community involvement.
                </p>
              </li>
              <li>
                <h6>Human Resources Risk</h6>
                <p>
                  Human resources (HR) risk management in a telecommunications company is essential to maintain productivity, efficiency, and business sustainability. HR risks include aspects such as recruitment, training, performance,
                  compliance, and employee development. Here are steps that can be taken to manage HR risks in a telecommunications company: careful recruitment and selection, employee training and development, performance management to
                  assess and monitor performance effectively, employee communication and engagement, clear policies and procedures, key employee replacement plans, occupational health and safety (OHS), and competitive compensation.
                </p>
              </li>
              <li>
                <h6>Financial Risk</h6>
                <p>
                  Financial risk management is a critical component in running a telecommunications company. Financial risks can include aspects such as liquidity, debt management, exchange rate fluctuations, and cash management. Here are
                  some steps that can be taken to manage financial risks in the telecommunications business: diversification of funding sources, prudent debt management, cash and investment management, effective financial monitoring and
                  reporting, consultation with professionals, business insurance, and creating a financial crisis plan.
                </p>
              </li>
            </ul>
            <br />
            <h5>Corporate Social Responsibility (CSR)</h5>
            <p>
              In today's digital era, the internet has become a basic necessity that affects almost every aspect of life. Unfortunately, not everyone has easy access to the internet, especially in remote areas such as the Thousand Islands.
              This is where Corporate Social Responsibility (CSR) can play a crucial role in helping communities in need.
            </p>
            <p>
              In an effort to enhance CSR, the Company is committed to providing social benefits through the "Free Internet for the Thousand Islands" program. This program aims to help the people of the Thousand Islands get free internet
              access so they can experience its benefits in their daily lives. Here are more details about this program:
            </p>

            <ul className="listDecimal">
              <li>
                <h6>
                  Free Internet Access:{' '}
                  <span>The Company has established internet hotspots in several strategic locations in the Thousand Islands that are difficult to reach. This allows local residents and tourists to easily access the internet.</span>
                </h6>
              </li>
              <li>
                <h6>
                  Benefits for Education:{' '}
                  <span>Internet access helps improve education access for children in the Thousand Islands. They can access online educational resources, conduct research, and take online courses to enhance their knowledge.</span>
                </h6>
              </li>
              <li>
                <h6>
                  Support for Economic Development:{' '}
                  <span>The internet also assists the local community in developing their businesses. They can market local products, run online businesses, and explore job opportunities through online platforms.</span>
                </h6>
              </li>
              <li>
                <h6>
                  Local Partnerships:{' '}
                  <span>
                    The Company collaborates with local government and social institutions to efficiently and sustainably implement this program. This includes providing training to the community on how to use the internet safely and
                    productively.
                  </span>
                </h6>
              </li>
            </ul>
            <br />
            <p>As of the publication of this Prospectus, the Company has engaged in CSR in the following forms:</p>
            <table border="1" className="tableProspektus">
              <tbody>
                <tr>
                  <th>Theme</th>
                  <td>Internet Equality for the Thousand Islands</td>
                </tr>
                <tr>
                  <th>Objective</th>
                  <td>Providing free internet access to expand service areas in the Thousand Islands (Pari Island and Kelapa Island)</td>
                </tr>
                <tr>
                  <th>Implementation</th>
                  <td>Since 2022 - Present</td>
                </tr>
                <tr>
                  <th>Form of Activity</th>
                  <td>Placement of Internet Hot Spot in densely populated areas with no monthly charges, where the community only needs to connect their cellular or other Wi-Fi-enabled devices to the available Hot Spot.</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <p>Here is the documentation of the Company's CSR activities:</p>
            <div className="containerDokumentasiCsr">
              <img src={DocCsr2} alt="Dokumentasi CSR" />
              <p>Source: The Company</p>
              <br />
              <img src={DocCsr1} alt="Dokumentasi CSR" />
              <p>Source: The Company</p>
            </div>
          </div>
          <br />
          <br />
          <div className="contentStruktur">
            <h4>Organizational Structure</h4>
            <p>Here is the organizational information at the time this prospectus is issued:</p>
            <img src={StrukturOrganisasi} />
          </div>
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default PrinsipStruktur;
