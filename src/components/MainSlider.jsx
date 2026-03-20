import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { track } from '@vercel/analytics';

import slide1 from '../assets/slide1.avif';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.webp';
import iplPromo from '../assets/ipl_promo.jpg';

const whatsappURL = "https://wa.me/9142504568";

const slides = [
  {
    id: 0,
    image: iplPromo,
    title: "GET EXCLUSIVE",
    subtitle: "IPL ID NOW",
    cta: "GET YOUR ID"
  },
  {
    id: 1,
    image: slide1,
    title: "INDIA'S MOST TRUSTED",
    subtitle: "BETTING EXCHANGE",
    cta: "GET YOUR ID NOW"
  },
  {
    id: 2,
    image: slide2,
    title: "INSTANT WITHDRAWAL",
    subtitle: "24/7 LIVE SUPPORT",
    cta: "JOIN US ON WHATSAPP"
  },
  {
    id: 3,
    image: slide3,
    title: "LIVE CASINO",
    subtitle: "REAL DEALERS • REAL WINS",
    cta: "START PLAYING NOW"
  }
];

const MainSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false
  }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full bg-black overflow-hidden group/slider">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[250px] md:h-[550px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20">
                    <div className="animate-in fade-in slide-in-from-left-10 duration-700">
                        <span className="inline-block bg-accent-gold text-black px-4 py-1.5 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full mb-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                            OFFICIAL 2026 PARTNER
                        </span>
                        
                        <h2 className="text-2xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
                            {slide.title} <br />
                            <span className="text-accent-gold italic font-serif">{slide.subtitle}</span>
                        </h2>

                        <p className="mt-4 text-[10px] md:text-lg text-gray-300 font-medium tracking-wide max-w-xl">
                            24/7 Instant Withdrawals & Deposits. Secure & Licensed Platform.
                        </p>

                        <div className="mt-8">
                            <a
                                href={whatsappURL}
                                target="_blank"
                                onClick={() => track('Slider CTA', { slide: slide.title })}
                                className="flex items-center gap-2 md:gap-3 rounded-full bg-accent-gold px-5 py-3 md:px-12 md:py-5 text-[11px] md:text-base font-black uppercase text-black shadow-[0_15px_30px_rgba(255,215,0,0.25)] hover:scale-105 active:scale-95 transition-all w-fit whitespace-nowrap"
                            >
                                <MessageCircle size={20} className="md:w-6 md:h-6" fill="currentColor" />
                                <span>{slide.cta}</span>
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-accent-gold hover:text-black hover:border-accent-gold"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-accent-gold hover:text-black hover:border-accent-gold"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
           {slides.map((_, i) => (
               <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-accent-gold' : 'w-4 bg-white/30'}`} />
           ))}
      </div>
    </section>
  );
};

export default MainSlider;