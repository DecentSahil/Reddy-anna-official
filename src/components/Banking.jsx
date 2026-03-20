import React from 'react';
import { Smartphone, ShieldCheck, Clock } from 'lucide-react';


const Banking = () => {

  return (
    <section className="px-4 py-12 bg-primary-bg border-y border-accent-gold/10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black italic text-accent-gold uppercase tracking-tighter font-serif">
          Instant Deposit
        </h2>
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mt-2">
          Minimum Deposit: ₹100 • 24/7 Available
        </p>
      </div>

      <div className="max-w-xl mx-auto">

        {/* Features List */}
        <div className="space-y-4">
          <BankingFeature icon={<Clock size={22} />} title="3 Min Withdrawal" desc="Fastest payout in the market" />
          <BankingFeature icon={<Smartphone size={22} />} title="All UPI Supported" desc="GPay, Paytm, PhonePe, Bhim" />
          <BankingFeature icon={<ShieldCheck size={22} />} title="Safe & Secure" desc="End-to-end encrypted transactions" />

          <button className="w-full mt-6 rounded-2xl bg-whatsapp-green py-5 text-sm font-black uppercase text-white shadow-xl shadow-whatsapp-green/20 active:scale-95 transition-all hover:brightness-110">
            Upload Payment Screenshot
          </button>
        </div>
      </div>
    </section>
  );
};

const BankingFeature = ({ icon, title, desc }) => (
  <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-accent-gold/10 hover:border-accent-gold/30 transition-colors">
    <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-accent-gold/10 text-accent-gold">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-black text-white uppercase tracking-wider">{title}</h4>
      <p className="text-[10px] font-medium text-gray-400 mt-1">{desc}</p>
    </div>
  </div>
);

export default Banking;