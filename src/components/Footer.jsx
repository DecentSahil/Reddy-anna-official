import React from 'react';
import { MessageCircle, Youtube, Pin, Link as LinkIcon, ChevronUp } from 'lucide-react';
import { track } from '@vercel/analytics';

const Footer = () => {
  const scrollToTop = () => {
    track('Navigation', { action: 'Scroll to Top', location: 'Footer' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Centralized logic for the WhatsApp URL
  const wpNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const wpMessage = import.meta.env.VITE_WHATSAPP_MESSAGE;
  const whatsappLink = `https://wa.me/${wpNumber}?text=${encodeURIComponent(wpMessage)}`;

  return (
    <footer className="relative bg-black text-white pt-12 pb-24 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo & Description */}
        <div className="mb-10 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-black text-yellow-500 italic tracking-tighter mb-2">
              REDDY <span className="text-white/50 not-italic font-light">ANNA</span>
            </h2>
            <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-6">
              — SINCE 2010 —
            </p>
          </div>
        </div>

        {/* Grid Layout for Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white border-l-4 border-yellow-500 pl-3">
              Reddy Anna
            </h4>
            <p className="text-xs leading-relaxed text-gray-400 font-medium">
              Since 2010, Reddy Anna Book is India's No.1 Leading Online Betting ID provider. 
              Access all betting exchanges using One Betting ID. Get Cricket ID's, Casino ID's, 
              Sports Betting ID's with us. Bet on live cricket, Football, Tennis, Kabaddi and 
              live casino. Get Fast withdrawals.
            </p>
            
            <div className="mt-6">
              <h5 className="text-[10px] font-black uppercase text-gray-500 mb-4 tracking-widest">
                Social Platforms
              </h5>
              <div className="flex gap-3">
                <SocialIcon icon={<Pin size={16} />} color="bg-red-600" platform="Pinterest" />
                <SocialIcon icon={<LinkIcon size={16} />} color="bg-gray-600" platform="Main Site" />
                <SocialIcon icon={<Youtube size={16} />} color="bg-red-600" platform="YouTube" />
              </div>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <FooterColumn title="Reddy Anna Platform" links={[
            "Home", "Reddy Anna Login", "Account Register", "Reddy Anna App", 
            "Blog", "Live Cricket Betting", "Live Football Betting", "Horse Race Betting"
          ]} />

          {/* Column 3: Policy Links */}
          <FooterColumn title="Reddy Anna Policy" links={[
            "About Us", "Contact Us", "Terms and Conditions", "Rules & Regulations",
            "Privacy Policy", "Referral Code", "Disclaimer", "Refund policy"
          ]} />

          {/* Column 4: Exchanges & CTA */}
          <div>
            <FooterColumn title="Reddy Anna Betting Exchanges" links={[
              "Laser247", "11xplay", "Gold365", "Cricbet99", "Reddybook", 
              "Online Cricket ID", "IPL Betting ID", "Casino ID"
            ]} />
            
            <div className="mt-8">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('WhatsApp Click', { location: 'Footer CTA' })}
                className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-4 text-xs font-black uppercase text-white shadow-lg shadow-green-500/20 hover:bg-green-600 active:scale-95 transition-all"
              >
                <MessageCircle size={18} fill="white" /> Get The Reddy Anna ID Now
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <button 
          onClick={scrollToTop}
          className="absolute bottom-10 right-6 bg-gray-800 p-3 rounded-md border border-gray-700 text-white shadow-xl hover:bg-yellow-500 hover:text-black transition-colors z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-white border-l-4 border-yellow-500 pl-3">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              track('Footer Link Click', { link_name: link });
            }}
            className="text-xs text-gray-400 hover:text-yellow-500 transition-colors font-medium"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon, color, platform }) => (
  <a 
    href="#" 
    onClick={(e) => {
      e.preventDefault();
      track('Social Click', { platform: platform, location: 'Footer' });
    }}
    className={`${color} h-10 w-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-lg`}
  >
    {icon}
  </a>
);

export default Footer;