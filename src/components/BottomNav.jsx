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
      <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-black border-t border-gray-900 px-2 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`relative flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-200 ${
                active === item.name ? 'text-yellow-500' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <div className="relative">
                <div className={`transition-transform duration-200 ${active === item.name ? '-translate-y-1' : ''}`}>
                  {item.icon}
                </div>
                
                {/* Visual Lock Badge */}
                {item.isLocked && (
                  <div className="absolute -top-1 -right-2 bg-gray-800 text-yellow-500 rounded-full p-0.5 border border-gray-700 shadow-sm">
                    <Lock size={8} fill="currentColor" />
                  </div>
                )}
              </div>

              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {item.name}
              </span>
              
              {active === item.name && (
                <div className="absolute top-0 h-0.5 w-8 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]" />
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


/*

import React, { useState } from 'react';
import { Home, PlayCircle, ClipboardList, User, Wallet } from 'lucide-react';
import AuthModal from './AuthModal'; // Import your existing modal

const BottomNav = () => {
  const [active, setActive] = useState('Home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={20} /> },
    { name: 'In-Play', icon: <PlayCircle size={20} /> },
    { name: 'My Bets', icon: <ClipboardList size={20} /> },
    { name: 'Wallet', icon: <Wallet size={20} /> },
    { name: 'Profile', icon: <User size={20} /> },
  ];

  const handleNavClick = (itemName) => {
    if (itemName === 'Home') {
      setActive(itemName);
    } else {
      // Show "Please Login" logic
      // alert("Please login to access " + itemName); // Optional: Quick alert
      setIsAuthOpen(true); // Better: Opens the professional login modal
    }
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-black border-t border-gray-900 px-2 pb-safe">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name)}
              className={`relative flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-200 ${
                active === item.name ? 'text-yellow-500' : 'text-gray-500'
              }`}
            >
              <div className={`transition-transform duration-200 ${active === item.name ? '-translate-y-1' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {item.name}
              </span>
              
              {active === item.name && (
                <div className="absolute top-0 h-0.5 w-8 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]" />
              )}
            </button>
          ))}
        </div>
      </nav>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default BottomNav; */