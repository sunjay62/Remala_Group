import React from 'react';
import NavbarEn from './components/navbar/NavbarEn';
import NavbarId from './components/navbar/NavbarId';
import HomeEn from './components/home/HomeEn';
import HomeId from './components/home/HomeId';
import InvestorEn from './components/investor/InvestorEn';
import InvestorId from './components/investor/InvestorId';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutEn from './components/about/AboutEn';
import AboutId from './components/about/AboutId';
import StrukturGroup from './components/about/menu/strukturgroup/StrukturGroup';
import StrukturOrganisasi from './components/about/menu/strukturorganisasi/StukturOrganisasi';
import AnggaranDasar from './components/about/menu/anggarandasar/AnggaranDasar';
import Penghargaan from './components/about/menu/penghargaan/Penghargaan';
import ProfileId from './components/about/menu/profile/ProfileId';
import ProfileEn from './components/about/menu/profile/ProfileEn';
import DewanKomisaris from './components/about/menu/menu-struktur-organisasi/DewanKomisaris';
import JajaranDireksi from './components/about/menu/menu-struktur-organisasi/JajaranDireksi';
import SekretarisPerusahaan from './components/about/menu/menu-struktur-organisasi/SekretarisPerusahaan';
import KomiteAudit from './components/about/menu/menu-struktur-organisasi/KomiteAudit';
import KomiteNominasi from './components/about/menu/menu-struktur-organisasi/KomiteNominasi';
import KomiteEvaluasi from './components/about/menu/menu-struktur-organisasi/KomiteEvaluasi';
import GovernanceId from './components/governance/GovernanceId';
import PrinsipStrukturId from './components/governance/menu/prinsipstruktur/PrinsipStrukturId';
import ManajemenMutuId from './components/governance/menu/manajemenmutu/ManajemenMutuId';
import KodeEtikId from './components/governance/menu/kodeetik/KodeEtikId';
import GovernanceEn from './components/governance/GovernanceEn';
import PrinsipStrukturEn from './components/governance/menu/prinsipstruktur/PrinsipStrukturEn';
import ManajemenMutuEn from './components/governance/menu/manajemenmutu/ManajemenMutuEn';
import KodeEtikEn from './components/governance/menu/kodeetik/KodeEtikEn';
import ContactUsEn from './components/contactus/ContactUsEn';
import ContactEn from './components/contactus/menu/contact/ContactEn';
import FaqEn from './components/contactus/menu/faq/FaqEn';
import MenuRegulasiEn from './components/contactus/menu/menuregulasi/MenuRegulasiEn';
import ContactUsId from './components/contactus/ContactUsId';
import ContactId from './components/contactus/menu/contact/ContactId';
import FaqId from './components/contactus/menu/faq/FaqId';
import MenuRegulasiId from './components/contactus/menu/menuregulasi/MenuRegulasiId';
import SahamId from './components/investor/menu/saham/SahamId';
import SahamEn from './components/investor/menu/saham/SahamEn';
import BeritaId from './components/investor/menu/berita/BeritaId';
import BeritaEn from './components/investor/menu/berita/BeritaEn';
import LaporanId from './components/investor/menu/laporan/LaporanId';
import LaporanEn from './components/investor/menu/laporan/LaporanEn';
import Rups from './components/investor/menu/menuberita/rups/Rups';
import KalenderInvestor from './components/investor/menu/menuberita/kalenderinvestor/KalenderInvestor';
import PengumumanEmiten from './components/investor/menu/menuberita/pengumumanemiten/PengumumanEmiten';
import PaparanPublik from './components/investor/menu/menuberita/paparanpublik/PaparanPublik';
import Volume from './components/investor/menu/menusaham/volume/Volume';
import Pencatatan from './components/investor/menu/menusaham/pencatatan/Pencatatan';
import Prospektus from './components/investor/menu/menusaham/prospektus/Prospektus';
import Komposisi from './components/investor/menu/menusaham/komposisi/Komposisi';
import SecId from './components/investor/menu/menulaporan/sec/SecId';
import KeuanganId from './components/investor/menu/menulaporan/keuangan/KeuanganId';
import TahunanId from './components/investor/menu/menulaporan/tahunan/TahunanId';
import KeberlanjutanId from './components/investor/menu/menulaporan/keberlanjutan/KeberlanjutanId';
import SecEn from './components/investor/menu/menulaporan/sec/SecEn';
import KeuanganEn from './components/investor/menu/menulaporan/keuangan/KeuanganEn';
import TahunanEn from './components/investor/menu/menulaporan/tahunan/TahunanEn';
import KeberlanjutanEn from './components/investor/menu/menulaporan/keberlanjutan/KeberlanjutanEn';
import BackTop from './components/backtop/BackTop';
import News from './components/news/News';
import NewsDetail from './components/news/newsdetail/NewsDetail';

function App() {
  const isIdPath = window.location.pathname.startsWith('/en');

  return (
    <>
      <BrowserRouter>
        {isIdPath ? <NavbarEn /> : <NavbarId />}
        <Routes>
          {isIdPath ? <Route element={<HomeEn />} path="/en" /> : <Route element={<HomeId />} path="/" />}
          {isIdPath ? (
            <Route element={<AboutEn />} path="/en/aboutus">
              <Route element={<StrukturOrganisasi />} path="/en/aboutus/organitation-strucktur">
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
              <Route element={<ProfileEn />} path="profile" />
            </Route>
          ) : (
            <Route element={<AboutId />} path="/aboutus">
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
              <Route element={<ProfileId />} path="profile" />
            </Route>
          )}
          {isIdPath ? (
            <Route element={<GovernanceEn />} path="/en/governance-corporate">
              <Route element={<PrinsipStrukturEn />} path="principle-strucktur" />
              <Route element={<ManajemenMutuEn />} path="quality-management" />
              <Route element={<KodeEtikEn />} path="code-ethics" />
            </Route>
          ) : (
            <Route element={<GovernanceId />} path="/governance-corporate">
              <Route element={<PrinsipStrukturId />} path="principle-strucktur" />
              <Route element={<ManajemenMutuId />} path="quality-management" />
              <Route element={<KodeEtikId />} path="code-ethics" />
            </Route>
          )}

          {isIdPath ? (
            <Route element={<ContactUsEn />} path="/en/contactus">
              <Route element={<ContactEn />} path="" />
              <Route element={<FaqEn />} path="faq" />
              <Route element={<MenuRegulasiEn />} path="regulations-menu" />
            </Route>
          ) : (
            <Route element={<ContactUsId />} path="/contactus">
              <Route element={<ContactId />} path="" />
              <Route element={<FaqId />} path="faq" />
              <Route element={<MenuRegulasiId />} path="regulations-menu" />
            </Route>
          )}

          {isIdPath ? (
            <Route element={<InvestorEn />} path="/en/investor-relation">
              <Route element={<SahamEn />} path="stock-information">
                <Route element={<Volume symbol="BTCUSDT" interval="1D" />} path="stock-volume" />
                <Route element={<Pencatatan />} path="stock-record" />
                <Route element={<Prospektus />} path="public-prospectus" />
                <Route element={<Komposisi />} path="shareholder-composition" />
              </Route>
              <Route element={<BeritaEn />} path="news">
                <Route element={<Rups />} path="rups" />
                <Route element={<KalenderInvestor />} path="investor-calender" />
                <Route element={<PengumumanEmiten />} path="issuer-announcement" />
                <Route element={<PaparanPublik />} path="public-exposure" />
              </Route>
              <Route element={<LaporanEn />} path="report">
                <Route element={<SecEn />} path="sec-report" />
                <Route element={<KeuanganEn />} path="financial-statements" />
                <Route element={<TahunanEn />} path="annual-report" />
                <Route element={<KeberlanjutanEn />} path="sustainability-report" />
              </Route>
            </Route>
          ) : (
            <Route element={<InvestorId />} path="/investor-relation">
              <Route element={<SahamId />} path="stock-information">
                <Route element={<Volume symbol="BTCUSDT" interval="1D" />} path="stock-volume" />
                <Route element={<Pencatatan />} path="stock-record" />
                <Route element={<Prospektus />} path="public-prospectus" />
                <Route element={<Komposisi />} path="shareholder-composition" />
              </Route>
              <Route element={<BeritaId />} path="news">
                <Route element={<Rups />} path="rups" />
                <Route element={<KalenderInvestor />} path="investor-calender" />
                <Route element={<PengumumanEmiten />} path="issuer-announcement" />
                <Route element={<PaparanPublik />} path="public-exposure" />
              </Route>
              <Route element={<LaporanId />} path="report">
                <Route element={<SecId />} path="sec-report" />
                <Route element={<KeuanganId />} path="financial-statements" />
                <Route element={<TahunanId />} path="annual-report" />
                <Route element={<KeberlanjutanId />} path="sustainability-report" />
              </Route>
            </Route>
          )}
          <Route element={<News />} path="/news" />
          <Route path="/news/:id/:title" element={<NewsDetail />} />
        </Routes>
        <BackTop />
      </BrowserRouter>
    </>
  );
}

export default App;
