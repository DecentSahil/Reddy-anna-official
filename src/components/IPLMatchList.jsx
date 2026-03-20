import React from 'react';
import { Trophy, Calendar, ExternalLink, Timer } from 'lucide-react';

const iplMatches = [
  { id: 101, team1: "Mumbai Indians", team2: "CSK", date: "April 15", time: "7:30 PM", market: 'IPL Special', odds1: '1.95', odds2: '1.85' },
  { id: 102, team1: "RCB", team2: "KKR", date: "April 16", time: "7:30 PM", market: 'IPL Special', odds1: '1.85', odds2: '2.10' },
  { id: 103, team1: "GT", team2: "RR", date: "April 17", time: "7:30 PM", market: 'IPL Special', odds1: '1.90', odds2: '1.90' },
  { id: 104, team1: "LSG", team2: "DC", date: "April 18", time: "7:30 PM", market: 'IPL Special', odds1: '1.80', odds2: '2.20' },
  { id: 105, team1: "SRH", team2: "PBKS", date: "April 19", time: "7:30 PM", market: 'IPL Special', odds1: '1.70', odds2: '2.30' },
];

const IPLMatchList = () => {
  return (
    <section className="px-4 py-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1.5 bg-accent-gold rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black italic text-white uppercase tracking-tighter font-serif">
            Upcoming <span className="text-accent-gold">IPL Matches</span>
          </h2>
        </div>

        <div className="overflow-x-auto no-scrollbar rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <th className="px-6 py-4">Match Details</th>
                <th className="px-6 py-4 text-center">Date & Time</th>
                <th className="px-6 py-4 text-center tracking-tighter">Back (Blue)</th>
                <th className="px-6 py-4 text-center tracking-tighter">Lay (Pink)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {iplMatches.map((match) => (
                <tr key={match.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-6 font-bold text-white text-sm">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-black border border-white/10 text-accent-gold">
                            <Trophy size={16} />
                        </div>
                        <span className="group-hover:text-accent-gold transition-colors">{match.team1} vs {match.team2}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <div className="inline-flex flex-col items-center">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{match.date}</span>
                        <span className="text-[9px] font-bold text-gray-600 mt-0.5">{match.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <button className="w-20 md:w-24 py-2.5 rounded-lg bg-odds-blue text-white font-black text-xs md:text-sm shadow-[0_4px_15px_rgba(30,144,255,0.2)] hover:scale-105 active:scale-95 transition-all">
                        {match.odds1}
                    </button>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <button className="w-20 md:w-24 py-2.5 rounded-lg bg-odds-pink text-white font-black text-xs md:text-sm shadow-[0_4px_15px_rgba(255,105,180,0.2)] hover:scale-105 active:scale-95 transition-all">
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

export default IPLMatchList;
