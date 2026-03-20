import React from 'react';
import { MessageCircle, Youtube, Pin, Link as LinkIcon, ChevronUp, Instagram, Send } from 'lucide-react';
import { track } from '@vercel/analytics';

const Footer = () => {
  const scrollToTop = () => {
    track('Navigation', { action: 'Scroll to Top', location: 'Footer' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const wpNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappLink = `https://wa.me/${wpNumber}`;

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 px-6 border-t border-accent-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-accent-gold font-serif italic tracking-tighter">
              REDDY ANNA
            </h2>
            <p className="text-xs leading-relaxed text-gray-500 font-medium">
              India's leading online betting platform since 2010. Offering the most secure and fastest betting IDs for cricket, casino, and more. Trusted by millions for 24/7 withdrawals and premium support.
            </p>
            
            <div className="flex gap-4">
              <a href="https://t.me/reddyanna" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-black transition-all">
                <Send size={18} />
              </a>
              <a href="https://instagram.com/reddyanna" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href={whatsappLink} className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-black transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <FooterColumn 
            title="Sitemap" 
            links={["Home", "Reddy Anna Login", "Register ID", "Reddy Anna App"]} 
          />
          
          <FooterColumn 
            title="Quick Links" 
            links={["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"]} 
          />

          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-accent-gold font-serif">Contact Support</h4>
            <p className="text-xs text-gray-500">Need help with your ID? Contact us on WhatsApp for instant assistance.</p>
            <a 
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp-green rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-all"
            >
              <MessageCircle size={16} fill="white" /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-10 py-10 border-t border-white/5 mb-10">
          <TrustBadge label="18+" sub="Responsible Gaming" />
          <TrustBadge label="SSL" sub="256-Bit Encrypted" />
          <TrustBadge label="PCI" sub="Payment Secure" />
          <TrustBadge label="24/7" sub="Fast Withdrawal" />
        </div>

        {/* Detailed Disclaimer */}
        <div className="text-[10px] text-gray-600 font-medium leading-loose text-center max-w-5xl mx-auto space-y-4">
          <p>
            WARNING: Online betting involves financial risk and may be addictive. Please play responsibly and within your limits. Reddy Anna Book is intended for users aged 18 and above only. Users are advised to check local laws and regulations before participating in online betting activities.
          </p>
          <p>
            © 2010 - 2026 Reddy Anna Official. All Rights Reserved. Reddy Anna is a registered trademark. We do not promote illegal activities and strictly adhere to industry standards for player safety and data protection.
          </p>
        </div>

        {/* Scroll to Top */}
        <button 
          onClick={scrollToTop}
          className="mx-auto mt-10 block text-gray-400 hover:text-accent-gold transition-colors flex flex-col items-center gap-2 uppercase text-[9px] font-black tracking-widest"
        >
          <ChevronUp size={20} className="animate-bounce" />
          Scroll to Top
        </button>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="space-y-6">
    <h4 className="text-sm font-black uppercase tracking-widest text-accent-gold font-serif">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const TrustBadge = ({ label, sub }) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center font-black text-xs text-gray-400">
      {label}
    </div>
    <div className="text-left">
      <p className="text-[10px] font-black uppercase text-gray-300 leading-none">{label}</p>
      <p className="text-[8px] font-bold text-gray-600 uppercase tracking-tighter mt-1">{sub}</p>
    </div>
  </div>
);

export default Footer;