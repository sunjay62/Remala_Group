import React, { useRef, useState, useEffect } from 'react';
import './tahunan.scss';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    key: '1',
    name: 'Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.',
    download: 'Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.',
  },
  {
    key: '2',
    name: 'Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.',
    download: 'Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.',
  },
  {
    key: '3',
    name: 'Peraturan Komisi Informasi Nomor 1 Tahun 2010 tentang Standar Layanan Informasi.',
    download: 'Peraturan Komisi Informasi Nomor 1 Tahun 2010 tentang Standar Layanan Informasi.',
  },
  {
    key: '4',
    name: 'Peraturan Komisi Informasi Pusah Nomor 1 Tahun 2013 tentang Prosedur Penyelesaian Sengketa Informasi Publik.',
    download: 'Peraturan Komisi Informasi Pusah Nomor 1 Tahun 2013 tentang Prosedur Penyelesaian Sengketa Informasi Publik.',
  },
  {
    key: '5',
    name: 'Perma Nomor 02 Tahun 2011 tentang Tata Cara Penyelesaian Sengketa Informasi Publik di Pengadilan.',
    download: 'Perma Nomor 02 Tahun 2011 tentang Tata Cara Penyelesaian Sengketa Informasi Publik di Pengadilan.',
  },
  {
    key: '6',
    name: 'Peraturan Komisi Informasi Nomor 1 Tahun 2017 tentang Pengklasifikasian Informasi Publik.',
    download: 'Peraturan Komisi Informasi Nomor 1 Tahun 2017 tentang Pengklasifikasian Informasi Publik.',
  },
];

const Tahunan = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

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
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
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
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Download',
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
          Download
        </Button>
      ),
    },
  ];
  return (
    <>
      <div className="containerTahunan">
        <div className="containerTop" data-aos="fade-down">
          <h2>Annual Reports</h2>
        </div>
        <hr />
        <div className="containerBottom" data-aos="fade-left">
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
      </div>
    </>
  );
};

export default Tahunan;
