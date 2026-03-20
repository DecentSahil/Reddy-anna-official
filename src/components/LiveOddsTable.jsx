import React from 'react';
import { Zap, Timer } from 'lucide-react';

const matches = [
  { id: 1, event: 'India vs Bangladesh (Test)', time: 'LIVE', market: 'Match Winner', odds1: '1.25', odds2: '4.50' },
  { id: 2, event: 'Mumbai Indians vs CSK (IPL)', time: 'LIVE', market: 'Match Winner', odds1: '1.95', odds2: '1.85' },
  { id: 3, event: 'RCB vs KKR (IPL)', time: 'Today 19:30', market: 'Match Winner', odds1: '1.85', odds2: '2.10' },
  { id: 4, event: 'England vs Australia (ODI)', time: 'Tomorrow 15:00', market: 'Match Winner', odds1: '1.75', odds2: '2.20' },
  { id: 5, event: 'India vs Pakistan (T20)', time: 'Oct 24, 20:00', market: 'Match Winner', odds1: '1.65', odds2: '2.40' }
];

const LiveOddsTable = () => {
  return (
    <section className="px-4 py-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1.5 bg-accent-gold rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black italic text-white uppercase tracking-tighter font-serif">
            Reddy Anna <span className="text-accent-gold">Open Bet</span>
          </h2>
        </div>

        <div className="overflow-x-auto no-scrollbar rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <th className="px-6 py-4">Event Details</th>
                <th className="px-6 py-4">Market</th>
                <th className="px-6 py-4 text-center">Outcome 1 (Blue)</th>
                <th className="px-6 py-4 text-center">Outcome 2 (Pink)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {matches.map((match) => (
                <tr key={match.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-black border border-white/10 ${match.time === 'LIVE' ? 'text-red-500 animate-pulse' : 'text-accent-gold'}`}>
                            {match.time === 'LIVE' ? <Zap size={16} fill="currentColor" /> : <Timer size={16} />}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white group-hover:text-accent-gold transition-colors">{match.event}</p>
                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-0.5">{match.time}</p>
                        </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-gray-400">
                        {match.market}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <button className="w-24 py-2.5 rounded-lg bg-odds-blue text-white font-black text-sm shadow-[0_4px_15px_rgba(30,144,255,0.3)] hover:scale-105 active:scale-95 transition-all">
                        {match.odds1}
                    </button>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <button className="w-24 py-2.5 rounded-lg bg-odds-pink text-white font-black text-sm shadow-[0_4px_15px_rgba(255,105,180,0.3)] hover:scale-105 active:scale-95 transition-all">
                        {match.odds2}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default LiveOddsTable;
