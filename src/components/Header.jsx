import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import AuthModal from './AuthModal';
import logo from '../assets/logo.jpg'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      {/* Header: Changed z-100 to z-50 and added backdrop-blur */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-gray-900 px-4 py-2 shadow-2xl">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Reddy Anna Logo" 
              className="h-10 w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer" 
            />
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-1.5 rounded-md text-sm font-black uppercase active:scale-95 transition-all shadow-lg shadow-yellow-500/10"
            >
              Login
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-white p-1 hover:text-yellow-500 transition-colors"
              aria-label="Open Menu"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Spacer: Ensures content doesn't hide under the fixed header */}
      <div className="h-[57px] bg-black"></div>
      
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;