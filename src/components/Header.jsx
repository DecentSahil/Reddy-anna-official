import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import Sidebar from './Sidebar';
import AuthModal from './AuthModal';
import logo from '../assets/logo.jpg'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'About', href: '/' },
    { 
      name: 'Services', 
      items: ['Cricket ID', 'Casino ID', 'Football ID', 'Tennis ID'] 
    },
    { 
      name: 'Reddy Anna ID', 
      items: ['Master ID', 'Super Admin ID', 'User ID'] 
    },
    { 
      name: 'Betting Exchanges', 
      items: ['Laser247', '11xplay', 'Gold365', 'Cricbet99'] 
    },
    { name: 'App', href: '/' },
    { name: 'How to Play', href: '/' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-white/5 px-4 py-3 shadow-2xl">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          
          <div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
               <img 
                src={logo} 
                alt="Reddy Anna Official" 
                className="h-10 w-auto object-contain hover:scale-105 transition-all" 
              />
              <span className="text-[7px] text-gray-500 font-black uppercase tracking-[0.2em] mt-1">— SINCE 2010 —</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 text-[11px] font-black uppercase tracking-widest">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.items && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:text-accent-gold transition-colors py-2">
                    {link.name}
                    {link.items && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  </div>

                  {link.items && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-48 bg-black border border-white/10 shadow-2xl py-2 rounded-lg animate-in fade-in slide-in-from-top-2">
                      {link.items.map((item) => (
                        <div key={item} className="px-4 py-2 hover:bg-accent-gold hover:text-black cursor-pointer transition-all text-[10px] font-bold">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="hidden lg:block border border-accent-gold text-accent-gold px-8 py-2.5 rounded-full text-xs font-black uppercase hover:bg-accent-gold hover:text-black transition-all active:scale-95"
            >
              Login
            </button>
            <a 
              href="https://wa.me/9142504568"
              target="_blank"
              className="bg-accent-gold text-black px-8 py-2.5 rounded-full text-xs font-black uppercase hover:scale-105 transition-all active:scale-95 shadow-[0_5px_20px_rgba(255,215,0,0.3)]"
            >
              Get ID
            </a>
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-white p-1 hover:text-accent-gold transition-colors xl:hidden"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Spacer */}
      <div className="h-[75px] bg-primary-bg"></div>
      
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;