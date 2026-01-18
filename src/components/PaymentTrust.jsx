import React from 'react';
import { CreditCard, Smartphone, CheckCircle2 } from 'lucide-react';

const PaymentTrust = () => {
  const methods = [
    { name: "UPI", icon: <Smartphone size={16} /> },
    { name: "GPay", icon: <CheckCircle2 size={16} /> },
    { name: "Paytm", icon: <CheckCircle2 size={16} /> },
    { name: "PhonePe", icon: <Smartphone size={16} /> },
    { name: "Net Banking", icon: <CreditCard size={16} /> }
  ];

  return (
    <section className="px-4 py-6 bg-[#1a2236] mt-4">
      <div className="text-center mb-6">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
          Accepted Payments
        </h3>
        <p className="text-[10px] text-gray-500">Fast & Secure Transactions</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {methods.map((method, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 rounded-lg bg-[#0f172a] border border-gray-800 px-4 py-2"
          >
            <span className="text-yellow-500">{method.icon}</span>
            <span className="text-[10px] font-bold text-white tracking-tighter uppercase">
              {method.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center rounded-xl bg-gray-900/50 p-4 border border-green-500/20">
          <span className="text-2xl font-black text-green-500">100%</span>
          <span className="text-[9px] font-bold uppercase text-gray-400">Trusted</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-gray-900/50 p-4 border border-yellow-500/20">
          <span className="text-2xl font-black text-yellow-500">24/7</span>
          <span className="text-[9px] font-bold uppercase text-gray-400">Support</span>
        </div>
      </div>
    </section>
  );
};

export default PaymentTrust;