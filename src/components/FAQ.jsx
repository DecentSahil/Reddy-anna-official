import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What is Reddy Anna?",
    a: "Reddy Anna is India's most trusted online platform for secure betting ID registration and account management, serving millions since 2010."
  },
  {
    q: "How can I get my Reddy Anna ID?",
    a: "Simply visit the WhatsApp link provided, share your details, and our support team will create your verified ID within 1 minute."
  },
  {
    q: "How safe is my money on Reddy Anna?",
    a: "We use 256-bit SSL encryption and full PCI DSS compliance. Your withdrawals are processed instantly and securely 24/7."
  },
  {
    q: "Does Reddy Anna offer a Demo ID?",
    a: "Yes! We provide demo accounts so new players can explore the platform, understand the odds, and practice strategies without any risk."
  },
  {
    q: "In which sports can I bet using my ID?",
    a: "You can bet on Cricket, Football, Tennis, Kabaddi, Horse Racing, and over 150+ other sports and casino games."
  }
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="px-4 py-20 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter font-serif mb-4">
            Frequently Asked <span className="text-accent-gold">Questions</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px]">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-all hover:border-accent-gold/30"
            >
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <span className="text-sm md:text-base font-bold text-white group-hover:text-accent-gold transition-colors">{faq.q}</span>
                <div className={`p-2 rounded-full transition-all ${open === i ? 'bg-accent-gold text-black rotate-0' : 'bg-white/5 text-accent-gold rotate-180'}`}>
                  {open === i ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
