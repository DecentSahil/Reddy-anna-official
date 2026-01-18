import Header from './components/Header';
import Hero from './components/Hero';
import NewsTicker from './components/NewsTicker';
import PromoSlider from './components/PromoSlider';
import Tabs from './components/Tabs';
import SearchBar from './components/SearchBar';
import MatchList from './components/MatchList';
import PaymentTrust from './components/PaymentTrust';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import MainSlider from './components/MainSlider';
import Banking from './components/Banking';
import InfoSection from './components/InfoSection';
import CompanyTable from './components/CompanyTable';
import PromoBanner from './components/PromoBanner';
import CrickBet from './components/CrickBet';
function App() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white">
      <Header />
      <main className="relative z-10 pb-10">
        <MainSlider />
        <CrickBet />
        <SearchBar />
        <Tabs />
        <MatchList />
        <PromoBanner />
        {/* <Hero /> */}
        <NewsTicker />
        <PromoSlider />
        <InfoSection />
        <CompanyTable />
        <Banking />
        <PaymentTrust />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BottomNav />
    </div>
  );
}

export default App;