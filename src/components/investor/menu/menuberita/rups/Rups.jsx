import React, { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import './rups.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const data = [
  {
    key: '1',
    name: 'Risalah RUPST.',
    download: 'Risalah RUPST.',
  },
  {
    key: '2',
    name: 'Ringkasan Risala RUPST.',
    download: 'Ringkasan Risala RUPST.',
  },
  {
    key: '3',
    name: 'Tata Tertib RUPST.',
    download: 'Tata Tertib RUPST.',
  },
  {
    key: '4',
    name: 'Penjelasan Agenda RUPST.',
    download: 'Penjelasan Agenda RUPST.',
  },
  {
    key: '5',
    name: 'Surat Kuasa Pemegang Saham RUPST.',
    download: 'Surat Kuasa Pemegang Saham RUPST.',
  },
  {
    key: '6',
    name: 'Panduan eASY.KSEI - Vote Result Report.',
    download: 'Panduan eASY.KSEI - Vote Result Report.',
  },
  {
    key: '7',
    name: 'Panduan eASY.KSEI - Meeting Hall untuk Pemegang Saham.',
    download: 'Panduan eASY.KSEI - Meeting Hall untuk Pemegang Saham.',
  },
  {
    key: '8',
    name: 'Panduan eASY.KSEI - Operations for Shareholder.',
    download: 'Panduan eASY.KSEI - Operations for Shareholder.',
  },
  {
    key: '9',
    name: 'Panduan eASY.KSEI - Register and Login sebagai Pemegang Saham.',
    download: 'Panduan eASY.KSEI - Register and Login sebagai Pemegang Saham.',
  },
  {
    key: '10',
    name: 'KSEI_presentasi e-proxy & 3-voting platform.',
    download: 'KSEI_presentasi e-proxy & 3-voting platform.',
  },
  {
    key: '11',
    name: 'Panggilan RUPST.',
    download: 'Panggilan RUPST.',
  },
  {
    key: '12',
    name: 'Pengumuman RUPST.',
    download: 'Pengumuman RUPST.',
  },
];

const Rups = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [t] = useTranslation('global');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            {t('translation.text-table.search')}
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            {t('translation.text-table.reset')}
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            {t('translation.text-table.filter')}
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            {t('translation.text-table.close')}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  // Menambahkan kolom nomor urut
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
      width: '5%',
      render: (text) => <span>{text}</span>,
    },
    {
      title: t('translation.text-table.table-head'),
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: t('translation.text-table.table-action'),
      dataIndex: 'download',
      key: 'download',
      width: '10%',
      render: (text) => (
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="small"
          onClick={() => {
            console.log(`Download ${text}`);
          }}
        >
          {t('translation.text-table.download')}
        </Button>
      ),
    },
  ];

  return (
    <>
      <div className="mainContainerRups">
        <div className="rupsTop" data-aos="fade-down">
          <h4>The company has made announcements regarding the Annual General Meeting of Shareholders (AGM) each year as follows:</h4>
          <br />
          <h2>{t('translation.text-investor.btn-news-activities.text-news-activities.text-rups.title')}</h2>
        </div>
        <hr />
        <div className="rupsBottom" data-aos="fade-left">
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
      </div>
    </>
  );
};

export default Rups;
