import React from 'react';
import { UserCheck, Zap, ShieldCheck, CheckCircle2, Headphones, Sparkles } from 'lucide-react';

const trustItems = [
  {
    icon: <UserCheck size={28} className="text-accent-gold" />,
    title: "Easy and Instant ID creation",
    description: "Users can get their betting ID activated within minutes through a simple registration process. This ensures quick access without unnecessary delays."
  },
  {
    icon: <Zap size={28} className="text-accent-gold" />,
    title: "Fast deposits & withdrawals",
    description: "Deposits are credited instantly, allowing users to start betting right away. Withdrawals are processed quickly to provide a smooth and hassle-free experience."
  },
  {
    icon: <ShieldCheck size={28} className="text-accent-gold" />,
    title: "Secure payment methods",
    description: "Reddy Anna supports safe payment options with encrypted transactions. This helps protect user funds and personal information at all times."
  },
  {
    icon: <CheckCircle2 size={28} className="text-accent-gold" />,
    title: "Trusted betting ID provider",
    description: "Reddy Anna provides verified and secure betting IDs through trusted systems. Each ID is created with proper checks to ensure safe and reliable access."
  },
  {
    icon: <Headphones size={28} className="text-accent-gold" />,
    title: "24/7 customer support",
    description: "Dedicated customer support is available around the clock to assist users. Queries related to IDs, payments, or betting are handled promptly."
  },
  {
    icon: <Sparkles size={28} className="text-accent-gold" />,
    title: "User-friendly experience",
    description: "The platform is designed to be simple and easy to use for all users. Clear navigation and smooth performance make betting convenient and enjoyable."
  }
];

const TrustGrid = () => {
  return (
    <section className="px-4 py-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter font-serif mb-4">
            Why Choose <span className="text-accent-gold">Reddy Anna?</span>
          </h2>
          <div className="h-1 w-24 bg-accent-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-gold/50 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-accent-gold/10 w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustGrid;
