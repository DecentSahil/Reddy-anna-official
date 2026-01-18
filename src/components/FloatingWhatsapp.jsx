import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

const FloatingWhatsApp = () => {
  // 1. Centralize the logic for the URL with a default message
  const wpNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const wpMessage = import.meta.env.VITE_WHATSAPP_MESSAGE;
  
  // 2. Create the deep link with encoded message
  const whatsappLink = `https://wa.me/${wpNumber}?text=${encodeURIComponent(wpMessage)}`;
  const telegramLink = `https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME}`;

  return (
    <div className="fixed bottom-24 right-6 z-[100] flex flex-col gap-4">
      {/* Telegram Button */}
      <div className="relative group">
        <div className="absolute -inset-2 animate-pulse rounded-full bg-blue-500/30"></div>
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-[0_10px_25px_rgba(0,136,204,0.4)] transition-all active:scale-90 hover:-translate-y-1"
        >
          <Send size={28} fill="white" className="mr-1" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold">
            1
          </span>
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative group">
        <div className="absolute -inset-2 animate-ping rounded-full bg-green-500/30"></div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.5)] transition-all active:scale-90 hover:-translate-y-1"
        >
          <MessageCircle size={32} fill="white" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold">
            1
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;