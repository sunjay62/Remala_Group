import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Governance from './components/governance/Governance';
import Investor from './components/investor/Investor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './components/contactus/ContactUs';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/tentang" />
          <Route element={<Governance />} path="/tatakelola" />
          <Route element={<ContactUs />} path="/hubungikami" />
          <Route element={<Investor />} path="/hubunganinvestor" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
