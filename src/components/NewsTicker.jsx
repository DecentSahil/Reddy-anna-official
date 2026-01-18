import React from 'react';
import { Zap } from 'lucide-react';

const NewsTicker = () => {
  return (
    <div className="bg-yellow-500 py-2 overflow-hidden whitespace-nowrap border-y border-yellow-600">
      <div className="inline-block animate-marquee flex items-center gap-8">
        <TickerItem name="Rahul K." amount="₹45,000" />
        <TickerItem name="Suresh M." amount="₹12,200" />
        <TickerItem name="Anjali P." amount="₹89,000" />
        <TickerItem name="Deepak S." amount="₹5,500" />
        <TickerItem name="Vikram J." amount="₹21,000" />
      </div>
    </div>
  );
};

const TickerItem = ({ name, amount }) => (
  <div className="flex items-center gap-2 text-[10px] font-black uppercase text-black italic">
    <Zap size={12} fill="black" />
    <span>{name} JUST WITHDREW {amount}</span>
  </div>
);

export default NewsTicker;