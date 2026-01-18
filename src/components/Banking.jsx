import React, { useState } from 'react';
import { Smartphone, ShieldCheck, Clock, Copy, CheckCircle2 } from 'lucide-react';
// 1. Import your local QR image
import qrCodeImage from '../assets/qr.png';

const Banking = () => {
  const [copied, setCopied] = useState(false);
  const upiID = "9142504568@axl"; // Replace with your actual UPI ID

  const handleCopy = () => {
    navigator.clipboard.writeText(upiID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-4 py-8 bg-[#1e293b]/50 border-y border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black italic text-yellow-500 uppercase tracking-tighter">
          Instant Deposit
        </h2>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
          Minimum Deposit: ₹100 • 24/7 Available
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* QR Code Card */}
        <div className="relative group mx-auto w-full max-w-[320px]">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#0f172a] p-6 rounded-2xl border border-gray-800 text-center">
            
            {/* 2. Replaced icon with your local <img> */}
            <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-2xl overflow-hidden">
              <img 
                src={qrCodeImage} 
                alt="Payment QR" 
                className="w-[180px] h-[180px] object-contain"
              />
            </div>
            
            {/* 3. Fixed and Uncommented UPI ID Section */}
            <div className="mt-2 p-3 bg-black/40 rounded-xl border border-gray-800 flex items-center justify-between">
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-500 uppercase">UPI ID</p>
                <p className="text-sm font-black text-white">{upiID}</p>
              </div>
              <button 
                onClick={handleCopy}
                className={`p-2 rounded-lg transition-all ${copied ? 'bg-green-600 text-white' : 'bg-yellow-500 text-black active:scale-90'}`}
              >
                {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          <BankingFeature icon={<Clock size={20}/>} title="3 Min Withdrawal" desc="Fastest payout in the market" />
          <BankingFeature icon={<Smartphone size={20}/>} title="All UPI Supported" desc="GPay, Paytm, PhonePe, Bhim" />
          <BankingFeature icon={<ShieldCheck size={20}/>} title="Safe & Secure" desc="End-to-end encrypted transactions" />
          
          <button className="w-full mt-4 rounded-xl bg-green-600 py-4 text-sm font-black uppercase text-white shadow-lg shadow-green-900/20 active:scale-95 transition-transform">
            Upload Payment Screenshot
          </button>
        </div>
      </div>
    </section>
  );
};

const BankingFeature = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f172a] border border-gray-800">
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">
      {icon}
    </div>
    <div>
      <h4 className="text-xs font-black text-white uppercase">{title}</h4>
      <p className="text-[10px] font-medium text-gray-500">{desc}</p>
    </div>
  </div>
);

export default Banking;