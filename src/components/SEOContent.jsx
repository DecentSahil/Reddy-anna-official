import React from 'react';

const SEOContent = () => {
  return (
    <section className="px-4 py-20 bg-black text-gray-400">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left items-start">
          
          <div className="space-y-8 p-10 rounded-[3rem] border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
              <h2 className="text-3xl font-black text-white italic font-serif leading-tight">
                  The <span className="text-accent-gold underline decoration-accent-gold/20 decoration-8 underline-offset-4">One ID Access</span> to Multiple Betting Exchanges
              </h2>
              <p className="text-base leading-relaxed">
                  Reddy Anna Book is trusted betting exchange platform for live cricket betting. Get your Reddy Anna ID instantly with secure payments and 24/7 support. Since 2010, we have been providing the most secure and fastest betting IDs in India.
              </p>
              <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-black border border-white/5">
                      <p className="text-accent-gold font-black text-3xl">1M+</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Trusted Users</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-black border border-white/5">
                      <p className="text-accent-gold font-black text-3xl">14Y+</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Excellence</p>
                  </div>
              </div>
          </div>

          <div className="space-y-6 pt-8">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter">About Reddy Anna Platform</h3>
            <p className="text-sm leading-7">
                Reddy Anna Book – Official Reddy Anna Cricket Betting ID Platform. Users can get their betting ID activated within minutes through a simple registration process. This ensures quick access without unnecessary delays. Deposits are credited instantly, allowing users to start betting right away.
            </p>
            <p className="text-sm leading-7">
                Withdrawals are processed quickly to provide a smooth and hassle-free experience. Reddy Anna supports safe payment options with encrypted transactions. This helps protect user funds and personal information at all times.
            </p>
            <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest italic">
                    — Play Responsibly. We do not encourage betting in Restricted areas. 18+ Only. —
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOContent;
