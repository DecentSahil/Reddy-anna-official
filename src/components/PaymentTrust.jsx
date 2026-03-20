import React from 'react';
import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const PaymentTrust = () => {
  return (
    <section className="px-6 py-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex flex-col items-center text-center group hover:border-accent-gold/50 transition-all">
            <div className="mb-6 p-4 rounded-2xl bg-accent-gold/10 text-accent-gold group-hover:scale-110 transition-transform">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-black text-white italic font-serif mb-2 uppercase tracking-tighter">Instant Deposit</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Self Deposit & Auto Credit</p>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex flex-col items-center text-center group hover:border-accent-gold/50 transition-all">
            <div className="mb-6 p-4 rounded-2xl bg-accent-gold/10 text-accent-gold group-hover:scale-110 transition-transform">
              <HeartHandshake size={32} />
            </div>
            <h3 className="text-xl font-black text-white italic font-serif mb-2 uppercase tracking-tighter">Fast Withdrawal</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">3 Min Withdrawal 24/7</p>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex flex-col items-center text-center group hover:border-accent-gold/50 transition-all">
            <div className="mb-6 p-4 rounded-2xl bg-accent-gold/10 text-accent-gold group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-black text-white italic font-serif mb-2 uppercase tracking-tighter">100% Trusted</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Safe & Secure Platform</p>
          </div>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all grayscale-0 opacity-100">
           {/* Payment Logos Placeholder representation */}
           <div className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400 border border-white/10 px-6 py-3 rounded-full">
             UPI • GPAY • PAYTM • PHONEPE • NETBANKING
           </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTrust;