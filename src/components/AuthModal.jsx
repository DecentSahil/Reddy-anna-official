import React from 'react';
import { X, Smartphone, Lock } from 'lucide-react';
import { track } from '@vercel/analytics';

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 1. Get dynamic WhatsApp details from environment variables
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent("Hello! I want to create a new Betting ID.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // 2. Tracking function for Analytics
  const handleWhatsAppClick = () => {
    track('WhatsApp Click', { location: 'Auth Modal - Register' });
  };

  const handleLoginClick = () => {
    track('Login Attempt', { method: 'Manual' });
    // Add your login logic here
    alert("Login feature coming soon! Please contact WhatsApp for an ID.");
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
      {/* Dark Blur Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-sm rounded-3xl bg-[#1e293b] p-8 shadow-2xl border border-gray-800 transform transition-all scale-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black italic text-yellow-500 tracking-tighter">
            WELCOME BACK
          </h2>
          <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-widest">
            Login to your account
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="relative group">
            <Smartphone 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-yellow-500 transition-colors" 
              size={18} 
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl bg-[#0f172a] py-4 pl-12 pr-4 text-sm font-bold border border-gray-800 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none text-white transition-all"
            />
          </div>

          <div className="relative group">
            <Lock 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-yellow-500 transition-colors" 
              size={18} 
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl bg-[#0f172a] py-4 pl-12 pr-4 text-sm font-bold border border-gray-800 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none text-white transition-all"
            />
          </div>

          {/* Login Button */}
          <button 
            onClick={handleLoginClick}
            className="w-full rounded-xl bg-yellow-500 py-4 text-sm font-black uppercase text-black shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 active:scale-95 transition-all"
          >
            Login Now
          </button>

          {/* Footer Link */}
          <p className="text-center text-[10px] font-bold text-gray-500 uppercase tracking-tight">
            Don't have an account?{" "}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="text-yellow-500 underline hover:text-yellow-400 transition-colors cursor-pointer"
            >
              WhatsApp for ID
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;