import React from 'react';
import { Tv, Monitor, MessageCircle } from 'lucide-react';
import { track } from '@vercel/analytics'; // 1. Import tracking

const MatchList = () => {
  const categories = ["INPLAY", "CRICKET", "FOOTBALL", "TENNIS", "CASINO", "HORSE RACING", "KABADDI", "POLITICS"];
  const wpNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const wpMessage = import.meta.env.VITE_WHATSAPP_MESSAGE;
  const whatsappURL = `https://wa.me/${wpNumber}?text=${encodeURIComponent(wpMessage)}`;


  const matches = [
    { id: 1, league: "Dhaka Capitals v Rangpur Riders / Jan 17 2026 12:30", b1: "5.3", l1: "5.5", b2: "1.22", l2: "1.23" },
    { id: 2, league: "India SRL v Australia SRL / Jan 17 2026 11:30", b1: "1.29", l1: "1.31", b2: "3.3", l2: "3.5" },
    { id: 3, league: "Adelaide Strikers v Melbourne Renegades / Jan 17 2026 11:30", b1: "0", l1: "1.01", b2: "180", l2: "200" },
    { id: 4, league: "Australia T10 v South Africa T10 / Jan 17 2026 11:50", b1: "2.1", l1: "2.14", b2: "1.88", l2: "1.9" },
    { id: 5, league: "Perth Scorchers v Melbourne Stars / Jan 17 2026 14:45", b1: "1.71", l1: "1.72", b2: "2.38", l2: "2.4" },
    { id: 6, league: "Durban Super Giants v Paarl Royals / Jan 17 2026 16:30", b1: "1.8", l1: "1.86", b2: "2.16", l2: "2.24" },
    { id: 7, league: "Joburg Super Kings v Pretoria Capitals / Jan 17 2026 21:00", b1: "2.2", l1: "2.24", b2: "1.8", l2: "1.84" },
    { id: 8, league: "India v New Zealand / Jan 18 2026 13:30", b1: "1.31", l1: "1.32", b2: "4.1", l2: "4.3" },
    { id: 9, league: "West Indies T10 v England T10 / Jan 17 2026 12:50", b1: "1.95", l1: "1.98", b2: "2.02", l2: "2.06" },
    { id: 10, league: "Fortune Barishal v Sylhet Strikers / Jan 17 2026 18:00", b1: "1.65", l1: "1.68", b2: "2.45", l2: "2.5" },
    { id: 11, league: "Sydney Sixers v Brisbane Heat / Jan 17 2026 13:15", b1: "1.82", l1: "1.84", b2: "2.12", l2: "2.15" },
    { id: 12, league: "MI Emirates v Sharjah Warriors / Jan 17 2026 19:30", b1: "1.75", l1: "1.77", b2: "2.25", l2: "2.28" },
    { id: 13, league: "Gulf Giants v Desert Vipers / Jan 17 2026 15:30", b1: "2.04", l1: "2.08", b2: "1.92", l2: "1.95" },
    { id: 14, league: "Canterbury Kings v Otago Volts / Jan 17 2026 09:30", b1: "1.55", l1: "1.58", b2: "2.75", l2: "2.8" },
    { id: 15, league: "Central Stags v Auckland Aces / Jan 17 2026 10:45", b1: "2.1", l1: "2.15", b2: "1.85", l2: "1.88" },
    { id: 16, league: "South Africa v Pakistan / Jan 17 2026 17:30", b1: "1.9", l1: "1.92", b2: "2.1", l2: "2.2" },
    { id: 17, league: "Hobart Hurricanes v Melbourne Renegades / Jan 17 2026 14:00", b1: "1.62", l1: "1.65", b2: "2.4", l2: "2.45" },
    { id: 18, league: "Comilla Victorians v Khulna Tigers / Jan 17 2026 16:45", b1: "1.7", l1: "1.73", b2: "2.3", l2: "2.35" },
    { id: 20, league: "Sunrisers Eastern Cape v MI Cape Town / Jan 17 2026 22:30", b1: "2.05", l1: "2.1", b2: "1.9", l2: "1.95" },
    { id: 21, league: "Ceylon Tobacco v Ranpath Group / Jan 17 2026 09:45", b1: "1.25", l1: "1.28", b2: "4.5", l2: "5.0" },
    { id: 22, league: "Adelaide Strikers v Sydney Sixers / Jan 17 2026 15:15", b1: "1.78", l1: "1.81", b2: "2.15", l2: "2.2" },
    { id: 23, league: "India v South Africa / Jan 18 2026 10:00", b1: "1.45", l1: "1.47", b2: "3.2", l2: "3.4" },
    { id: 24, league: "Melbourne Stars v Perth Scorchers / Jan 17 2026 16:00", b1: "2.12", l1: "2.15", b2: "1.85", l2: "1.88" },
    { id: 25, league: "Hobart Hurricanes v Sydney Thunder / Jan 17 2026 12:00", b1: "1.9", l1: "1.93", b2: "2.05", l2: "2.1" },
    { id: 26, league: "England v Australia / Jan 18 2026 15:30", b1: "1.85", l1: "1.88", b2: "2.25", l2: "2.3" },
  ];

  const handleOddsClick = (matchName, oddType, val) => {
    track('Odds Interaction', {
      match: matchName,
      type: oddType,
      value: val,
      location: 'Match List Table'
    });
    // Optional: Redirect to WhatsApp automatically when they click an odd
    // window.open(whatsappURL, '_blank');
  };

  return (
    <section className="w-full bg-[#0f172a] pb-32">
      {/* Table Header */}
      <div className="grid grid-cols-12 bg-black/50 border-b border-gray-800 py-2 px-3">
        <div className="col-span-8 text-[10px] font-black text-gray-500 uppercase tracking-tighter">Live Events</div>
        <div className="col-span-4 grid grid-cols-2 text-center">
          <div className="text-[9px] font-black text-blue-400 uppercase">Back</div>
          <div className="text-[9px] font-black text-pink-400 uppercase">Lay</div>
        </div>
      </div>

      {/* Match Rows */}
      <div className="flex flex-col">
        {matches.map((match) => (
          <div key={match.id} className="grid grid-cols-12 items-center bg-[#1e293b] border-b border-gray-800/50 hover:bg-gray-800/40 py-2 px-3">
            <div
              className="col-span-7 flex items-center gap-2 min-w-0 cursor-pointer"
              onClick={() => track('Match View', { match: match.league })}
            >
              <div className={`shrink-0 h-2 w-2 rounded-full ${match.live ? 'bg-red-600 animate-pulse' : 'bg-gray-600'}`} />
              <span className="text-[11px] font-bold text-gray-100 truncate uppercase tracking-tight">{match.league}</span>
            </div>

            <div className="col-span-1 flex justify-center">
              <Tv size={14} className={match.live ? "text-green-500" : "text-gray-600"} />
            </div>

            {/* Odds Columns */}
            <div className="col-span-4 grid grid-cols-2 gap-1">
              <div className="flex gap-[1px]">
                <OddsBox
                  val={match.b1}
                  type="back"
                  onClick={() => handleOddsClick(match.league, 'Back 1', match.b1)}
                />
                <OddsBox
                  val={match.l1}
                  type="lay"
                  onClick={() => handleOddsClick(match.league, 'Lay 1', match.l1)}
                />
              </div>
              <div className="flex gap-[1px]">
                <OddsBox
                  val={match.b2}
                  type="back"
                  onClick={() => handleOddsClick(match.league, 'Back 2', match.b2)}
                />
                <OddsBox
                  val={match.l2}
                  type="lay"
                  onClick={() => handleOddsClick(match.league, 'Lay 2', match.l2)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 3. Updated OddsBox to accept onClick prop
const OddsBox = ({ val, type, onClick }) => (
  <button
    onClick={onClick}
    className={`
      h-9 w-full flex items-center justify-center text-[11px] font-black rounded-sm transition-transform active:scale-90
      ${val === '0' ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : (type === 'back' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30' : 'bg-pink-500/20 text-pink-400 border border-pink-500/30 hover:bg-pink-500/30')}
    `}
  >
    {val}
  </button>
);

export default MatchList;