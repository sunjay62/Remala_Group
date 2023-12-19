import React, { useEffect, useState } from 'react';
import './news.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Pagination, AutoComplete, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import FooterId from '../footer/FooterId';
import FooterEn from '../footer/FooterEn';
import { ArrowRightOutlined, ArrowDownOutlined } from '@ant-design/icons';
import dataNewsId from './data/dataNewsId';

const { Option } = AutoComplete;

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const newsPerPage = 3;
  const [filterType, setFilterType] = useState(''); // 'older' or 'newer'
  const navigate = useNavigate(); // Use navigate hook
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const [filteredNews, setFilteredNews] = useState(dataNewsId);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value === '') {
      setFilteredNews(dataNewsId);
    } else {
      const filtered = dataNewsId.filter((news) => news.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredNews(filtered);
    }
    setCurrentPage(1); // Reset to the first page when a new search is performed
  };

  const handleSelect = (value) => {
    setSearchQuery(value);
    handleSearch(value);
  };

  const monthNameMap = {
    januari: 'January',
    februari: 'February',
    maret: 'March',
    april: 'April',
    mei: 'May',
    juni: 'June',
    juli: 'July',
    agustus: 'August',
    september: 'September',
    oktober: 'October',
    november: 'November',
    desember: 'December',
  };

  const handleFilter = () => {
    const newFilterType = filterType === 'newer' ? 'older' : 'newer';
    setFilterType(newFilterType);

    const sortedNews = newFilterType === 'older' ? [...dataNewsId].sort((a, b) => parseDate(a.date) - parseDate(b.date)) : [...dataNewsId].sort((a, b) => parseDate(b.date) - parseDate(a.date));

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFilteredNews(sortedNews);
    setCurrentPage(1);
  };

  const parseDate = (dateString) => {
    // Convert Indonesian month names to English month names
    const englishDateString = dateString.replace(/(\w+)/g, (match) => monthNameMap[match.toLowerCase()] || match);
    return new Date(englishDateString);
  };

  const handleReadMore = (id, url) => {
    const encodedurl = encodeURIComponent(url);
    navigate(`/news/${id}/${encodedurl}`);
  };

  return (
    <div className="contentNews" data-aos="fade-down">
      <div className="news-content d-flex align-items-center justify-content-center">
        <div className="content-text">
          <h2 className="textHero" data-aos="fade-up">
            BERITA
          </h2>
        </div>
      </div>
      <div className="bottomNews">
        <div className="filter-search">
          <div className="filterTop">
            <h3>Filter</h3>
            <div>
              <Button type="default" icon={<ArrowDownOutlined rotate={filterType === 'newer' ? 180 : 0} />} onClick={handleFilter} />
            </div>
            <AutoComplete className="autoComplete" placeholder="Cari Berita..." onSearch={handleSearch} onSelect={handleSelect} value={searchQuery} />
          </div>
          <div className="page"> Halaman {currentPage}</div>
        </div>
        <div className="middle">
          {filteredNews.slice(indexOfFirstNews, indexOfLastNews).map((news) => (
            <div key={news.id} className="bodyNews">
              <img src={news.image} />
              <div className="desc">
                <h2>{news.title}</h2>
                <h5>{news.date}</h5>
                <p>{news.description}</p>
                <hr />
                <Link to={`/news/${news.id}/${encodeURIComponent(news.url)}`} onClick={() => handleReadMore(news.id, news.url)}>
                  LIHAT SELENGKAPNYA <ArrowRightOutlined />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <Pagination current={currentPage} pageSize={newsPerPage} total={dataNewsId.length} onChange={handlePageChange} />
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </div>
  );
};

export default News;
