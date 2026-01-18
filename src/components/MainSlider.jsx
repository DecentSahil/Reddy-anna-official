import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { track } from '@vercel/analytics'; // 1. Import Analytics

// Import local images from assets
import slide1 from '../assets/slide1.avif';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.webp';

const wpNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const wpMessage = import.meta.env.VITE_WHATSAPP_MESSAGE;
const whatsappURL = `https://wa.me/${wpNumber}?text=${encodeURIComponent(wpMessage)}`;

const slides = [
  {
    id: 1,
    image: slide1,
    title: "INDIA'S #1",
    subtitle: "TRUSTED EXCHANGE",
    cta: "WHATSAPP NOW"
  },
  {
    id: 2,
    image: slide2,
    title: "INSTANT WITHDRAWAL",
    subtitle: "24/7 CUSTOMER SUPPORT",
    cta: "GET ID NOW"
  },
  {
    id: 3,
    image: slide3,
    title: "LIVE CASINO",
    subtitle: "PLAY WITH REAL DEALERS",
    cta: "START PLAYING"
  }
];

const MainSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false
  }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // 2. Tracking function for slide clicks
  const handleSlideClick = (slideTitle) => {
    track('WhatsApp Click', { 
      location: 'Main Slider',
      slide_name: slideTitle 
    });
  };

  return (
    <section className="relative w-full py-4 bg-black">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_88%] min-w-0 px-2 md:flex-[0_0_75%]">
              <div className="relative h-[250px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl">

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <span className="mb-2 rounded bg-yellow-500 px-3 py-1 text-[10px] font-black text-black uppercase tracking-widest">
                    OFFICIAL 2026 PARTNER
                  </span>

                  <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white drop-shadow-lg">
                    {slide.title} <br />
                    <span className="text-yellow-500">{slide.subtitle}</span>
                  </h2>

                  <p className="mt-2 text-[11px] md:text-sm font-bold text-gray-200 uppercase tracking-wide">
                    Get your ID instantly • Withdrawals in 15 Min
                  </p>

                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSlideClick(slide.title)}
                    className="mt-6 flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-black uppercase text-green-700 shadow-xl active:scale-95 transition-all hover:bg-gray-100"
                  >
                    <MessageCircle size={20} fill="currentColor" />
                    {slide.cta}
                  </a>

                  <div className="mt-6 flex gap-6 opacity-80 text-[9px] font-black uppercase text-white tracking-widest">
                    <span className="flex items-center gap-1">🛡️ SECURE</span>
                    <span className="flex items-center gap-1">⚡ INSTANT</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white border border-white/20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white border border-white/20"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default MainSlider;