import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PromoSlider = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      title: "100% WELCOME BONUS",
      sub: "On your first deposit",
      color: "from-blue-600 to-indigo-900"
    },
    {
      id: 2,
      title: "IPL 2026 SPECIAL",
      sub: "Get 10% Extra on every match",
      color: "from-orange-600 to-red-900"
    },
    {
      id: 3,
      title: "REFER & EARN",
      sub: "Earn ₹500 for every friend",
      color: "from-purple-600 to-pink-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="px-4 py-2">
      <div className="relative h-32 w-full overflow-hidden rounded-2xl shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col justify-center p-6 transition-opacity duration-700 ease-in-out bg-gradient-to-r ${slide.color} ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-xl font-black italic tracking-tighter text-white">
              {slide.title}
            </h3>
            <p className="text-xs font-bold text-white/80 uppercase mt-1">
              {slide.sub}
            </p>
            <button className="mt-3 w-max rounded-full bg-white/20 px-4 py-1.5 text-[10px] font-black uppercase text-white backdrop-blur-md border border-white/30">
              Claim Now
            </button>
          </div>
        ))}
        
        {/* Progress Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all ${i === current ? "w-4 bg-yellow-500" : "w-1 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;