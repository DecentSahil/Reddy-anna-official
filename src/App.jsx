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
import QuickActions from './components/QuickActions';
import LiveOddsTable from './components/LiveOddsTable';
import TrustGrid from './components/TrustGrid';
import IDTypes from './components/IDTypes';
import SafetyFeatures from './components/SafetyFeatures';
import FAQ from './components/FAQ';
import SEOContent from './components/SEOContent';
import IPLMatchList from './components/IPLMatchList';
import PaymentSubmit from './pages/PaymentSubmit'; // Import your new page
import { Analytics } from '@vercel/analytics/react';
import Sidebar from './components/Sidebar';

// Create a Home component for your main landing page content
const Home = () => (
  <>
    <MainSlider />
    <QuickActions />
    <LiveOddsTable />
    <IPLMatchList />
    <TrustGrid />
    <IDTypes />
    <SafetyFeatures />
    <FAQ />
    <SEOContent />
    <Banking />
    <InfoSection />
    <PaymentTrust />
  </>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-primary-bg text-white font-sans">
        <Header />
        
        <div className="flex max-w-[1600px] mx-auto">
          {/* Persistent Sidebar for Desktop */}
          <Sidebar isPersistent={true} />

          <main className="flex-1 relative z-10 pb-20 min-w-0">
            <Routes>
              {/* Main Landing Page */}
              <Route path="/" element={<Home />} />
              
              {/* Payment Submission Page */}
              <Route path="/payment-submit" element={<PaymentSubmit />} />
            </Routes>
          </main>
        </div>

        <Footer />
        <FloatingWhatsApp />
        <BottomNav />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;