import React from 'react';
import { Smartphone, ShieldCheck, Clock } from 'lucide-react';


const Banking = () => {

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

      <div className="max-w-xl mx-auto">

        {/* Features List */}
        <div className="space-y-4">
          <BankingFeature icon={<Clock size={20} />} title="3 Min Withdrawal" desc="Fastest payout in the market" />
          <BankingFeature icon={<Smartphone size={20} />} title="All UPI Supported" desc="GPay, Paytm, PhonePe, Bhim" />
          <BankingFeature icon={<ShieldCheck size={20} />} title="Safe & Secure" desc="End-to-end encrypted transactions" />

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