import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Governance from './components/governance/Governance';
import Investor from './components/investor/Investor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './components/contactus/ContactUs';
import StrukturGroup from './components/about/menu/strukturgroup/StrukturGroup';
import StrukturOrganisasi from './components/about/menu/strukturorganisasi/StukturOrganisasi';
import AnggaranDasar from './components/about/menu/anggarandasar/AnggaranDasar';
import Penghargaan from './components/about/menu/penghargaan/Penghargaan';
import Profile from './components/about/menu/profile/Profile';
import DewanKomisaris from './components/about/menu/menu-struktur-organisasi/DewanKomisaris';
import JajaranDireksi from './components/about/menu/menu-struktur-organisasi/JajaranDireksi';
import SekretarisPerusahaan from './components/about/menu/menu-struktur-organisasi/SekretarisPerusahaan';
import KomiteAudit from './components/about/menu/menu-struktur-organisasi/KomiteAudit';
import KomiteNominasi from './components/about/menu/menu-struktur-organisasi/KomiteNominasi';
import KomiteEvaluasi from './components/about/menu/menu-struktur-organisasi/KomiteEvaluasi';
import PrinsipStruktur from './components/governance/menu/prinsipstruktur/PrinsipStruktur';
import ManajemenMutu from './components/governance/menu/manajemenmutu/ManajemenMutu';
import KodeEtik from './components/governance/menu/kodeetik/KodeEtik';
import Contact from './components/contactus/menu/contact/Contact';
import Faq from './components/contactus/menu/faq/Faq';
import MenuRegulasi from './components/contactus/menu/menuregulasi/MenuRegulasi';
import Saham from './components/investor/menu/saham/Saham';
import Berita from './components/investor/menu/berita/Berita';
import Laporan from './components/investor/menu/laporan/Laporan';
import Rups from './components/investor/menu/menuberita/rups/Rups';
import KalenderInvestor from './components/investor/menu/menuberita/kalenderinvestor/KalenderInvestor';
import PengumumanEmiten from './components/investor/menu/menuberita/pengumumanemiten/PengumumanEmiten';
import PaparanPublik from './components/investor/menu/menuberita/paparanpublik/PaparanPublik';
import Volume from './components/investor/menu/menusaham/volume/Volume';
import Pencatatan from './components/investor/menu/menusaham/pencatatan/Pencatatan';
import Prospektus from './components/investor/menu/menusaham/prospektus/Prospektus';
import Komposisi from './components/investor/menu/menusaham/komposisi/Komposisi';
import Sec from './components/investor/menu/menulaporan/sec/Sec';
import Keuangan from './components/investor/menu/menulaporan/keuangan/Keuangan';
import Tahunan from './components/investor/menu/menulaporan/tahunan/Tahunan';
import Keberlanjutan from './components/investor/menu/menulaporan/keberlanjutan/Keberlanjutan';
import BackTop from './components/backtop/BackTop';
import News from './components/news/News';
import NewsDetail from './components/news/newsdetail/NewsDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/aboutus">
            <Route element={<StrukturOrganisasi />} path="organitation-strucktur">
              <Route element={<DewanKomisaris />} path="board-of-commissioners" />
              <Route element={<JajaranDireksi />} path="board-of-director" />
              <Route element={<SekretarisPerusahaan />} path="corporate-secretary" />
              <Route element={<KomiteAudit />} path="audit-committee" />
              <Route element={<KomiteNominasi />} path="nomination-committee" />
              <Route element={<KomiteEvaluasi />} path="evaluation-committee" />
            </Route>
            <Route element={<StrukturGroup />} path="group-strucktur" />
            <Route element={<AnggaranDasar />} path="articles-of-association" />
            <Route element={<Penghargaan />} path="award" />
            <Route element={<Profile />} path="profile" />
          </Route>
          <Route element={<Governance />} path="/governance-corporate">
            <Route element={<PrinsipStruktur />} path="principle-strucktur" />
            <Route element={<ManajemenMutu />} path="quality-management" />
            <Route element={<KodeEtik />} path="code-ethics" />
          </Route>
          <Route element={<ContactUs />} path="/contactus">
            <Route element={<Contact />} path="" />
            <Route element={<Faq />} path="faq" />
            <Route element={<MenuRegulasi />} path="regulations-menu" />
          </Route>
          <Route element={<Investor />} path="/investor-relation">
            <Route element={<Saham />} path="stock-information">
              <Route element={<Volume />} path="stock-volume" />
              <Route element={<Pencatatan />} path="stock-record" />
              <Route element={<Prospektus />} path="public-prospectus" />
              <Route element={<Komposisi />} path="shareholder-composition" />
            </Route>
            <Route element={<Berita />} path="news">
              <Route element={<Rups />} path="rups" />
              <Route element={<KalenderInvestor />} path="investor-calender" />
              <Route element={<PengumumanEmiten />} path="issuer-announcement" />
              <Route element={<PaparanPublik />} path="public-exposure" />
            </Route>
            <Route element={<Laporan />} path="report">
              <Route element={<Sec />} path="sec-report" />
              <Route element={<Keuangan />} path="financial-statements" />
              <Route element={<Tahunan />} path="annual-report" />
              <Route element={<Keberlanjutan />} path="sustainability-report" />
            </Route>
          </Route>
          <Route element={<News />} path="/news" />
          <Route path="/news/:id/:title" element={<NewsDetail />} />
        </Routes>
        <BackTop />
      </BrowserRouter>
    </>
  );
}

export default App;
