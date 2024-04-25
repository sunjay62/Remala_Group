import React, { useState } from 'react';
import './career.scss';
import 'aos/dist/aos.css';
import { Pagination, AutoComplete, Button, Select } from 'antd';
import FooterId from '../footer/FooterId';
import FooterEn from '../footer/FooterEn';
import metaThumbnail from '../data/images/meta/homeimage.png';
import MetaDecorator from '../Util/MetaDecorator';
import dataCareerId from './data/dataCareerId';
import CareerDetailId from './careerdetail/CareerDetailId';

const career = require('../data/json/career.json');

const Career = () => {
  const isIdPath = window.location.pathname.startsWith('/en');
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLoker, setSelectedLoker] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Menyimpan halaman saat ini
  const pageSize = 10; // Jumlah item yang ingin ditampilkan per halaman

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
    setCurrentPage(1); // Reset halaman saat departemen berubah
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    setCurrentPage(1); // Reset halaman saat lokasi berubah
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setCurrentPage(1); // Reset halaman saat pencarian berubah
  };

  const handleBodyClick = (id) => {
    setSelectedLoker(id);
    setOpen(true);
  };

  const uniqueDepartments = [...new Set(dataCareerId.map((career) => career.department))];
  const uniqueLocations = [...new Set(dataCareerId.map((career) => career.location))];

  const departmentOptions = [{ value: null, label: 'Semua Departemen' }, ...uniqueDepartments.map((department) => ({ value: department, label: department }))];
  const locationOptions = [{ value: null, label: 'Semua Lokasi' }, ...uniqueLocations.map((location) => ({ value: location, label: location }))];

  const sortedDepartmentOptions = [departmentOptions[0], ...departmentOptions.slice(1).sort((a, b) => a.label.localeCompare(b.label))];

  const sortedLocationOptions = [locationOptions[0], ...locationOptions.slice(1).sort((a, b) => a.label.localeCompare(b.label))];

  // Filter data berdasarkan pilihan pengguna
  const filteredCareers = dataCareerId.filter((career) => {
    return (!selectedDepartment || career.department === selectedDepartment) && (!selectedLocation || career.location === selectedLocation);
  });

  // Filter data berdasarkan pencarian
  const filteredPositions = filteredCareers.filter((career) => {
    return career.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  // Hitung jumlah data yang akan ditampilkan
  const totalDisplayedData = filteredPositions.length;

  // Menghitung indeks awal dan akhir dari data yang akan ditampilkan
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalDisplayedData);

  return (
    <div>
      <MetaDecorator description={career.pageDescriptionId} title={career.pageTitleId} imageUrl={metaThumbnail} imageAlt={career.metaImageAltId} />
      <div className="contentCareer" data-aos="fade-down">
        <div className="career-content d-flex align-items-center justify-content-center">
          <div className="content-text">
            <h1 className="textHero" data-aos="fade-up">
              Jadilah Selangkah Lebih Dekat <br /> untuk Mencapai Tujuan Anda.
            </h1>
          </div>
        </div>
        <div className="bottomCareer">
          <div className="filter-search">
            <div className="filterTop">
              <AutoComplete
                className="autoComplete"
                placeholder="Cari Pekerjaan Impian Anda..."
                onChange={handleSearchChange}
                value={searchValue}
                options={[]} // Kosongkan opsi karena hanya ingin mencari tanpa menampilkan dropdown
              />
              <Select
                showSearch
                className="selectOption"
                placeholder="Select Departemen"
                optionFilterProp="children"
                onChange={handleDepartmentChange}
                value={selectedDepartment}
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                options={sortedDepartmentOptions}
              />
              <Select
                showSearch
                className="selectOption"
                placeholder="Select Lokasi"
                optionFilterProp="children"
                onChange={handleLocationChange}
                value={selectedLocation}
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                options={sortedLocationOptions}
              />
            </div>
          </div>
          <div className="middle">
            <div className="middleTitle">
              <p>
                {totalDisplayedData} pekerjaan yang tersedia {selectedDepartment ? `di departemen ${selectedDepartment}` : ''} {selectedLocation ? `di lokasi ${selectedLocation}` : ''}.
              </p>
            </div>
            <div className="middleBody" style={{ display: totalDisplayedData === 0 ? 'none' : 'block' }}>
              <div className="top">
                <p className="nameCareer">Nama Posisi</p>
                <p className="departmentCareer">Departemen</p>
                <p className="locationCareer">Lokasi</p>
              </div>
              {totalDisplayedData > 0 &&
                filteredPositions.slice(startIndex, endIndex).map((career, index) => (
                  <div className="body" key={index} onClick={() => handleBodyClick(career.id)}>
                    <p className="nameCareer">{career.name}</p>
                    <p className="departmentCareer">{career.department}</p>
                    <p className="locationCareer">{career.location}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="pagination" style={{ display: totalDisplayedData === 0 ? 'none' : 'block' }}>
            <Pagination current={currentPage} pageSize={pageSize} total={totalDisplayedData} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
        <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
      </div>
      <CareerDetailId selectedLoker={selectedLoker} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Career;
