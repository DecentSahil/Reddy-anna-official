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
    <div className="w-full bg-[#1a2236] border-b border-gray-800 sticky top-[60px] z-40">
      <div className="flex overflow-x-auto no-scrollbar items-center gap-2 px-4 py-3">
        {categories.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-xs font-bold uppercase tracking-tight transition-all active:scale-95 ${
              activeTab === tab.name
                ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                : 'bg-gray-900 text-gray-400 border border-gray-800'
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;