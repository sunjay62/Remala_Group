import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import './kalenderinvestor.scss';

const data = [
  {
    key: '1',
    tanggal: '16-17 Januari 2023',
    event: 'Nomura - Verdhana Indonesia Corporate Day 2023',
    lokasi: 'Virtual Converence',
  },
  {
    key: '2',
    tanggal: '02 Febuari 2023',
    event: 'Mandiri Sekuritas Investment Forum 2023',
    lokasi: 'Jakarta',
  },
  {
    key: '3',
    tanggal: '08-10 Maret 2023',
    event: 'CLSA 19th CITIC ASEAN Forum',
    lokasi: 'Bangkok ',
  },
  {
    key: '4',
    tanggal: '20-23 Maret 2023',
    event: 'Credit Suisse 26th Asian Investment Conference',
    lokasi: 'Hong Kong ',
  },
  {
    key: '5',
    tanggal: '09 April 2023',
    event: 'Nomura - Verdhana Indonesia Corporate Day 2023',
    lokasi: 'Sinagpore',
  },
];

const KalenderInvestor = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
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
            close
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
      title: 'Tanggal',
      dataIndex: 'tanggal',
      key: 'tanggal',
      ...getColumnSearchProps('tanggal'),
    },
    {
      title: 'Event',
      dataIndex: 'event',
      key: 'event',
      ...getColumnSearchProps('event'),
    },
    {
      title: 'Lokasi',
      dataIndex: 'lokasi',
      key: 'lokasi',
      ...getColumnSearchProps('lokasi'),
    },
  ];

  return (
    <>
      <div className="mainContainerKalender">
        <div className="kalenderTop">
          <h2>Kalender Investor</h2>
        </div>
        <hr />
        <div className="kalenderBottom">
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
      </div>
    </>
  );
};

export default KalenderInvestor;
