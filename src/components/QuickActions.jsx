import React from 'react';
import { Gamepad2, Target, Zap, Waves } from 'lucide-react';

const actions = [
  { name: 'Fun Games', icon: <Gamepad2 size={32} />, color: 'from-blue-600 to-blue-900' },
  { name: 'Color Prediction', icon: <Zap size={32} />, color: 'from-red-600 to-red-900' },
  { name: 'Aviator', icon: <Zap size={32} />, color: 'from-purple-600 to-purple-900' },
  { name: 'Evoplay', icon: <Target size={32} />, color: 'from-green-600 to-green-900' }
];

const QuickActions = () => {
  return (
    <section className="px-4 py-8 bg-black">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {actions.map((action) => (
          <div 
            key={action.name}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${action.color} p-6 h-40 transition-all hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
              {action.icon}
            </div>
            
            <div className="flex flex-col h-full justify-end">
              <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tighter text-white drop-shadow-lg">
                {action.name}
              </h3>
              <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mt-1">Play Now →</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
