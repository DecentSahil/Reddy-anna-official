import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsTicker from './components/NewsTicker';
import PromoSlider from './components/PromoSlider';
import Tabs from './components/Tabs';
import SearchBar from './components/SearchBar';
import MatchList from './components/MatchList';
import PaymentTrust from './components/PaymentTrust';
import FloatingWhatsApp from './components/FloatingWhatsapp';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import MainSlider from './components/MainSlider';
import Banking from './components/Banking';
import InfoSection from './components/InfoSection';
import CompanyTable from './components/CompanyTable';
import PromoBanner from './components/PromoBanner';
import CrickBet from './components/CrickBet';
import PaymentSubmit from './pages/PaymentSubmit'; // Import your new page
import { Analytics } from '@vercel/analytics/react';

// Create a Home component for your main landing page content
const Home = () => (
  <>
    <MainSlider />
    <CrickBet />
    <SearchBar />
    <Tabs />
    <MatchList />
    <PromoBanner />
    <NewsTicker />
    <PromoSlider />
    <InfoSection />
    <CompanyTable />
    <Banking />
    <PaymentTrust />
  </>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#0f172a] text-white">
        <Header />
        
        <main className="relative z-10 pb-10">
          <Routes>
            {/* Main Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* Payment Submission Page */}
            <Route path="/payment-submit" element={<PaymentSubmit />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <BottomNav />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;