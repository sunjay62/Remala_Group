import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Governance from './components/governance/Governance';
import Investor from './components/investor/Investor';

import { Outlet, BrowserRouter, Switch, Routes, Route, Link, redirect, useNavigate } from 'react-router-dom';
import ContactUs from './components/contactus/ContactUs';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={About} path="/tentang" />
          <Route Component={Governance} path="/tatakelola" />
          <Route Component={ContactUs} path="/hubungikami" />
          <Route Component={Investor} path="/hubunganinvestor" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
