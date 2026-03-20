import React, { useState } from 'react';
import { Home, PlayCircle, ClipboardList, User, Wallet, Lock } from 'lucide-react';
import AuthModal from './AuthModal';

const BottomNav = () => {
  const [active, setActive] = useState('Home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, isLocked: false },
    { name: 'In-Play', icon: <PlayCircle size={20} />, isLocked: true },
    { name: 'My Bets', icon: <ClipboardList size={20} />, isLocked: true },
    { name: 'Wallet', icon: <Wallet size={20} />, isLocked: true },
    { name: 'Profile', icon: <User size={20} />, isLocked: true },
  ];

  const handleNavClick = (item) => {
    if (!item.isLocked) {
      setActive(item.name);
    } else {
      setIsAuthOpen(true);
    }
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-primary-bg/95 backdrop-blur-md border-t border-accent-gold/10 px-2 pb-safe shadow-[0_-15px_40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`relative flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-300 ${
                active === item.name ? 'text-accent-gold' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <div className="relative">
                <div className={`transition-transform duration-300 ${active === item.name ? '-translate-y-1.5 scale-110' : ''}`}>
                  {item.icon}
                </div>
                
                {item.isLocked && (
                  <div className="absolute -top-1 -right-2 bg-gray-900 text-accent-gold rounded-full p-0.5 border border-accent-gold/20 shadow-sm">
                    <Lock size={8} fill="currentColor" />
                  </div>
                )}
              </div>

              <span className={`text-[9px] font-black uppercase tracking-widest transition-opacity ${active === item.name ? 'opacity-100' : 'opacity-60'}`}>
                {item.name}
              </span>
              
              {active === item.name && (
                <div className="absolute top-0 h-0.5 w-10 bg-accent-gold rounded-full shadow-[0_0_15px_rgba(232,198,95,0.6)]" />
              )}
            </button>
          ))}
        </div>
      </nav>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default BottomNav;