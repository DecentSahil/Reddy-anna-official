import React from 'react';
import { MessageCircle, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  // Use centralized contact info
  const wpNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const wpMessage = import.meta.env.VITE_WHATSAPP_MESSAGE;
  const whatsappURL = `https://wa.me/${wpNumber}?text=${encodeURIComponent(wpMessage)}`;

  return (
    <section className="px-4 py-6">
      {/* Main Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900 via-green-800 to-green-700 p-8 md:p-12 shadow-2xl">
        
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-48 w-48 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-32 w-32 rounded-full bg-yellow-500/10 blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 text-center">
          <span className="inline-block rounded-full bg-yellow-500/20 px-4 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-yellow-400 border border-yellow-500/30">
            Official 2026 Partner
          </span>
          
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tighter text-white">
            India's #1 <br />
            <span className="text-yellow-400">Trusted Exchange</span>
          </h1>
          
          <p className="mt-4 text-sm md:text-base font-medium text-green-100 opacity-90">
            Get your Cricket ID instantly. <br className="hidden md:block" /> 
            Withdrawals in <span className="text-yellow-400 font-bold">15 Minutes</span>, 24/7.
          </p>

          {/* Main CTA Button */}
          <div className="mt-10">
            <a 
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base md:text-lg font-black uppercase tracking-tight text-green-800 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all hover:bg-green-50 active:scale-95"
            >
              <div className="relative z-10 flex items-center gap-3">
                <MessageCircle className="fill-green-700 text-green-700" size={24} />
                WhatsApp Now
              </div>
              
              <div className="absolute -inset-1 z-0 animate-pulse rounded-full bg-white/30 blur-md"></div>
            </a>
          </div>

          {/* Quick Trust Badges */}
          <div className="mt-10 flex items-center justify-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-wide text-green-100/70">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-yellow-400" /> Secure
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={16} className="text-yellow-400" /> Instant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;