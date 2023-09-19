/* eslint-disable import/first */
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './keberlanjutan.scss';
import LaporanKeberlanjutan from '../../../../../assets/pdf/pdftest.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Keberlanjutan = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <>
      <div className="containerKeberlanjutan" data-aos="fade-left">
        <div className="pdfContainer">
          <Document file={LaporanKeberlanjutan} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="btnContainer">
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div className="btnPdf">
            <IconButton onClick={goToPreviousPage} disabled={pageNumber <= 1}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={goToNextPage} disabled={pageNumber >= numPages}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keberlanjutan;
