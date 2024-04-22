import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'antd';

function CareerDetailId() {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get('https://sunanjaya.my.id/wordpress_F/wp-json/wp/v2/career/25')
  //     .then((res) => {
  //       setBooks(res.data);
  //       // Mendapatkan content dari objek pertama dalam array
  //       if (res.data.length > 0) {
  //         setContent(res.data[0].content.rendered);
  //       }
  //       setIsLoaded(true);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Modal className="modalContainer" centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={1000}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Modal>
    </>
  );
}

export default CareerDetailId;
