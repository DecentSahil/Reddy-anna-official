import React from 'react';
import { Trophy } from 'lucide-react';

const MatchCard = ({ teamA, teamB, league, time }) => {
  return (
    /* Changed bg to zinc-900 to match the premium dark theme and added hover effect */
    <div className="mb-4 rounded-2xl border border-gray-800 bg-zinc-900 p-4 shadow-xl transition-all hover:border-yellow-500/30 group">
      
      {/* Top Meta Section */}
      <div className="mb-3 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
        <span className="flex items-center gap-1.5 text-gray-400 group-hover:text-white transition-colors">
          <Trophy size={12} className="text-yellow-500" /> {league}
        </span>
        
        {/* Live Indicator - Refined pulsing logic */}
        <span className="flex items-center gap-1.5 text-red-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Live
        </span>
      </div>

      {/* Teams Display Section */}
      <div className="flex items-center justify-between gap-2 px-2">
        
        {/* Team A */}
        <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
          <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-zinc-600 flex items-center justify-center text-sm font-black text-white shadow-inner">
            {teamA.substring(0, 3).toUpperCase()}
          </div>
          <span className="text-xs font-black text-white text-center leading-tight truncate w-full px-1">
            {teamA}
          </span>
        </div>

        {/* VS Divider */}
        <div className="flex flex-col items-center shrink-0">
          <span className="text-[11px] font-black italic text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]">VS</span>
          <span className="text-[9px] font-bold text-gray-500 mt-1 whitespace-nowrap">{time}</span>
        </div>

        {/* Team B */}
        <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
          <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-zinc-600 flex items-center justify-center text-sm font-black text-white shadow-inner">
            {teamB.substring(0, 3).toUpperCase()}
          </div>
          <span className="text-xs font-black text-white text-center leading-tight truncate w-full px-1">
            {teamB}
          </span>
        </div>
      </div>

      {/* Call to Action */}
      <button className="mt-5 w-full rounded-xl bg-yellow-500 hover:bg-yellow-400 py-3 text-xs font-black uppercase tracking-wider text-black active:scale-[0.96] transition-all shadow-lg shadow-yellow-500/10">
        Get ID & Play
      </button>
    </div>
  );
};

export default MatchCard;