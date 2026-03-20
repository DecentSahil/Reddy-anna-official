import React, { useState } from 'react';
import { Trophy, Tv, Gamepad2, Award } from 'lucide-react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Cricket');

  const categories = [
    { name: 'Cricket', icon: <Trophy size={16} /> },
    { name: 'Football', icon: <Tv size={16} /> },
    { name: 'Tennis', icon: <Award size={16} /> },
    { name: 'Casino', icon: <Gamepad2 size={16} /> },
    { name: 'Horse Racing', icon: <Award size={16} /> }
  ];

  return (
    <div className="w-full bg-primary-bg/95 backdrop-blur-md border-b border-accent-gold/10 sticky top-[65px] z-40">
      <div className="flex overflow-x-auto no-scrollbar items-center gap-3 px-4 py-3">
        {categories.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
              activeTab === tab.name
                ? 'bg-accent-gold text-black shadow-[0_10px_20px_-5px_rgba(232,198,95,0.4)]'
                : 'bg-white/5 text-gray-500 border border-white/5 hover:border-accent-gold/30 hover:text-gray-300'
            }`}
          >
            <span className={activeTab === tab.name ? 'text-black' : 'text-accent-gold/50'}>
              {tab.icon}
            </span>
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;