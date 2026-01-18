import React from 'react';
import { track } from '@vercel/analytics'; // 1. Import Analytics
import promoVideo from '../assets/banner.mp4'; 

const PromoBanner = () => {
  // 2. Centralized WhatsApp logic
  const wpNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const wpMessage = encodeURIComponent("I want to claim my 200% MEGA BONUS OFFER!");
  const whatsappURL = `https://wa.me/${wpNumber}?text=${wpMessage}`;

  const handleClaimClick = () => {
    // 3. Track the conversion specifically from the video banner
    track('WhatsApp Click', { 
      location: 'Video Promo Banner',
      offer: '200% Mega Bonus'
    });
  };

  return (
    <section className="px-4 py-6">
      <div className="relative overflow-hidden rounded-3xl border border-gray-800 shadow-2xl bg-black">
        
        {/* Video Player Setup */}
        <video
          src={promoVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto min-h-[250px] object-cover md:h-[400px]"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-6 left-6 z-10">
           <span className="mb-2 inline-block rounded bg-yellow-500 px-2 py-0.5 text-[10px] font-black text-black uppercase animate-pulse">
             Live Now
           </span>
           <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
             MEGA <span className="text-yellow-500">BONUS</span> OFFER
           </h2>
           <p className="mt-1 text-gray-300 text-[11px] font-bold uppercase tracking-wide">
             Get 200% Welcome Bonus on your first ID
           </p>
           
           <a 
             href={whatsappURL}
             target="_blank"
             rel="noopener noreferrer"
             onClick={handleClaimClick} // 4. Attach the tracker
             className="mt-4 inline-flex items-center rounded-full bg-white px-6 py-2 text-[10px] font-black uppercase text-black hover:bg-yellow-500 transition-all active:scale-95 shadow-lg shadow-white/5"
           >
             Claim on WhatsApp
           </a>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;