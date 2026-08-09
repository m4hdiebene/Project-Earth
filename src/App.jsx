import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SponsorTicker from './components/SponsorTicker';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';


function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {

    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-beige-warm">
        {/* Global sticky header */}
        <Navbar />

        {/* Dynamic page routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </main>

        {/* Global sponsor floating marquee */}
        <SponsorTicker />

        {/* Global multi-column footer */}
        <Footer />
      </div>
    </Router>
  );
}
