import React from 'react';
import { Check } from 'lucide-react';

const ids = [
  {
    title: "Reddy Anna Cricket ID",
    features: [
      "Live Odds & Real-Time Betting",
      "Bet on IPL, T20 & International",
      "Multiple markets from one place",
      "Easy for Beginners & Experts"
    ],
    cta: "Get Cricket ID"
  },
  {
    title: "Reddy Anna Casino ID",
    features: [
      "Access all Indian Card Games",
      "Live Dealer & Real-Time Betting",
      "One ID, Many Casino Games",
      "Exclusive casino bonuses"
    ],
    cta: "Get Casino ID"
  },
  {
    title: "Reddy Anna Demo ID",
    features: [
      "Explore without risking real money",
      "Practice Betting Safely",
      "Learn Platform Features",
      "Build Confidence for Real Play"
    ],
    cta: "Get Demo ID"
  }
];

const IDTypes = () => {
  return (
    <section className="px-4 py-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter font-serif mb-4">
            Choose Your <span className="text-accent-gold">Reddy Anna ID</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Different types for every player</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ids.map((id, index) => (
            <div 
              key={index}
              className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-accent-gold/40 transition-all overflow-hidden group"
            >
              <div className="bg-black/90 p-8 rounded-[1.4rem] h-full flex flex-col">
                <h3 className="text-2xl font-black text-white italic font-serif mb-8 group-hover:text-accent-gold transition-colors underline decoration-accent-gold/20 underline-offset-8 decoration-4">
                  {id.title}
                </h3>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {id.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                      <div className="p-1 rounded-full bg-accent-gold text-black">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://wa.me/9142504568"
                  target="_blank"
                  className="block text-center py-4 rounded-xl border border-accent-gold text-accent-gold font-black uppercase tracking-widest text-xs hover:bg-accent-gold hover:text-black transition-all"
                >
                  {id.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IDTypes;
