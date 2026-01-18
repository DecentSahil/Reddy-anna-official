import React from 'react';
import { X, Smartphone, Lock } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-sm rounded-3xl bg-[#1e293b] p-8 shadow-2xl border border-gray-800">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500">
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-black italic text-yellow-500">WELCOME BACK</h2>
          <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-widest">Login to your account</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Phone Number" 
              className="w-full rounded-xl bg-[#0f172a] py-4 pl-12 pr-4 text-sm font-bold border border-gray-800 focus:border-yellow-500 outline-none"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full rounded-xl bg-[#0f172a] py-4 pl-12 pr-4 text-sm font-bold border border-gray-800 focus:border-yellow-500 outline-none"
            />
          </div>
          
          <button className="w-full rounded-xl bg-yellow-500 py-4 text-sm font-black uppercase text-black shadow-lg shadow-yellow-500/20 active:scale-95 transition-transform">
            Login Now
          </button>
          
          <p className="text-center text-[10px] font-bold text-gray-500 uppercase">
            Don't have an account? <span className="text-yellow-500 underline">WhatsApp for ID</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;