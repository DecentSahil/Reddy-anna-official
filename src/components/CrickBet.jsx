import React from 'react';
import { Home, Search, ChevronDown, Trophy, Activity, Tv } from 'lucide-react';

const CrickBet = () => {
  const matches = [
    { teams: 'India V New Zealand', time: '18/01/2026 13:30' },
    { teams: 'Brisbane Heat V Sydney Sixers', time: '18/01/2026 13:45' },
    { teams: 'France Tian V Italy Tian', time: '18/01/2026 14:00' },
  ];

  const categories = ["IN-PLAY", "SPORTS", "CASINO", "SPORTS BOOK", "OTHER"];
  const sports = [
    { name: 'CRICKET', icon: <Activity size={20} />, active: true },
    { name: 'FOOTBALL', icon: <Activity size={20} /> },
    { name: 'TENNIS', icon: <Activity size={20} /> },
    { name: 'HORSE RACING', icon: <Activity size={20} /> },
    { name: 'GREYHOUND RACING', icon: <Activity size={20} /> },
    { name: 'BINARY', icon: <Tv size={20} />, new: true },
  ];

  return (
    /* Change h-screen to h-auto to prevent forced full-page height */
    <div className="bg-[#5c3a14] text-white w-full h-auto overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <Home size={24} className="text-yellow-400" />
          <h1 className="text-2xl font-black italic text-yellow-500 tracking-tighter">
            Cricxbet99
          </h1>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 font-bold">
            <span>0.00</span>
            <ChevronDown size={16} />
          </div>
          <p className="text-[10px] text-yellow-200/70">Exp: 0 demo12</p>
        </div>
      </div>

      {/* Search & Trophy */}
      <div className="flex items-center justify-between px-3 mb-2">
        <div className="bg-white p-1.5 rounded-full shadow-lg">
          <Search size={18} className="text-black" />
        </div>
        <div className="flex items-center gap-1 text-yellow-500 font-bold text-xs">
          <Trophy size={14} />
          <span>WOMENS PREMIER LEAGUE</span>
        </div>
      </div>

      {/* Horizontal Match Cards */}
      <div className="flex gap-2 overflow-x-auto px-3 pb-3 no-scrollbar">
        {matches.map((match, i) => (
          <div key={i} className="bg-[#1e4d3a] rounded-lg p-2 min-w-[200px] flex items-center gap-2 border border-white/10">
            <div className="h-6 w-6 rounded-full border-2 border-white/30 flex items-center justify-center">
               <div className="h-2 w-2 rounded-full bg-white/80" />
            </div>
            <div>
              <p className="text-[10px] font-bold truncate">{match.teams}</p>
              <p className="text-[9px] bg-black/30 px-1.5 py-0.5 rounded mt-0.5 inline-block text-gray-200">
                {match.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="flex gap-5 px-3 border-b border-white/10 overflow-x-auto no-scrollbar">
        {categories.map((cat, i) => (
          <button 
            key={cat} 
            className={`text-[11px] font-bold py-2 whitespace-nowrap transition-colors
              ${i === 0 ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sports Icons Grid */}
      {/* <div className="flex gap-6 overflow-x-auto px-3 py-4 no-scrollbar">
        {sports.map((sport, i) => (
          <div key={i} className="flex flex-col items-center gap-1 shrink-0 group cursor-pointer">
            <div className="relative">
              <div className={`p-2 rounded-full transition-all ${i === 0 ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                {sport.icon}
              </div>
              {sport.new && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-[8px] px-1 rounded font-bold animate-pulse">
                  NEW
                </span>
              )}
            </div>
            <span className={`text-[9px] font-bold whitespace-nowrap ${i === 0 ? 'text-white' : 'text-gray-400'}`}>
              {sport.name}
            </span>
            {i === 0 && <div className="h-1 w-4 bg-yellow-500 rounded-full mt-1" />}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CrickBet;