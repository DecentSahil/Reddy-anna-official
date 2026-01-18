import React from 'react';
import { 
  FileText, Globe, Settings, Smartphone, 
  Zap, Banknote, Star, Headset 
} from 'lucide-react';

const CompanyTable = () => {
  const tableData = [
    { icon: <FileText size={18} />, label: "License", value: "Curacao" },
    { icon: <Globe size={18} />, label: "Languages", value: "English, Hindi" },
    { icon: <Settings size={18} />, label: "Services", value: "Online Betting Exchange Platform & Betting ID Provider" },
    { icon: <Smartphone size={18} />, label: "Mobile App", value: "Available on Android and IOS" },
    { icon: <Zap size={18} />, label: "Launch Year", value: "2012" },
    { icon: <Banknote size={18} />, label: "Payment Options", value: "UPI, Bank Transfer, E-Wallet" },
    { icon: <Star size={18} />, label: "Popular ID", value: "Laser247 ID, Gold365 ID, Cricketbuzz, 11xplay" },
    { icon: <Headset size={18} />, label: "Customer Support", value: "24/7 support via Email, Call, WhatsApp, and Chat" },
  ];

  return (
    <section className="px-4 py-10">
      {/* Container: Removed overflow-hidden to let the header shadow glow */}
      <div className="rounded-xl border border-gray-800 shadow-2xl bg-[#0f172a]">
        
        {/* Header Section: Moved outside the table flow for the "Card" effect */}
        <div className="rounded-3xl border-[3px] border-yellow-500 bg-[#1e293b] p-8 text-center shadow-[0_0_30px_rgba(234,179,8,0.2)] mx-2 mt-2">
          <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight text-yellow-500 tracking-tighter">
            Reddy Anna Book - Platform Overview
          </h2>
        </div>

        {/* Replaced <br/> with my-10 margin */}
        <div className="px-4 my-10">
          <p className="text-lg md:text-xl leading-relaxed font-medium text-center text-gray-200">
            Reddy Anna Book is a well-known betting platform associated with reliable cricket and sports betting services. It offers advanced betting features, live markets, and competitive odds.
          </p>
        </div>

        {/* Table Header */}
        <div className="flex border-t border-b border-gray-800">
          <div className="w-[40%] bg-yellow-500/90 px-4 py-4 border-r border-black/10">
            <span className="text-sm font-black uppercase tracking-widest text-black flex items-center gap-2">
              <Star size={16} fill="black" /> Company
            </span>
          </div>
          <div className="w-[60%] bg-yellow-500/90 px-4 py-4">
            <span className="text-sm font-black uppercase tracking-widest text-black">
              Reddy Anna
            </span>
          </div>
        </div>

        {/* Table Body */}
        <div className="bg-white overflow-hidden rounded-b-xl">
          {tableData.map((row, index) => (
            <div 
              key={index} 
              className={`flex border-b border-gray-200 last:border-b-0 transition-colors hover:bg-gray-50`}
            >
              <div className="w-[40%] border-r border-gray-200 px-4 py-4 flex items-center gap-3">
                <span className="text-gray-500 shrink-0">{row.icon}</span>
                <span className="text-[13px] font-bold text-gray-700 uppercase tracking-tight leading-none">
                  {row.label}
                </span>
              </div>
              <div className="w-[60%] px-4 py-4 flex items-center">
                <span className="text-[14px] font-medium text-gray-900 leading-tight">
                  {row.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTable;