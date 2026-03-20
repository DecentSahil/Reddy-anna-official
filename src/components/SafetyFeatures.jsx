import React from 'react';
import { Lock, FileCheck, Smartphone, Eye } from 'lucide-react';

const safety = [
  {
    icon: <Lock size={32} />,
    title: "SSL Encryption",
    description: "We protect your data and transactions with cutting-edge 256-bit SSL encryption."
  },
  {
    icon: <FileCheck size={32} />,
    title: "PCI DSS Certification",
    description: "Fully compliant with global security standards to guarantee the protection of your funds."
  },
  {
    icon: <Smartphone size={32} />,
    title: "2FA Security",
    description: "Extra protection with OTP verification on every critical transaction."
  },
  {
    icon: <Eye size={32} />,
    title: "Security Audits",
    description: "Quarterly independent audits to ensure our platform stays 100% secure and reliable."
  }
];

const SafetyFeatures = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 mb-20 max-w-7xl mx-auto mx-4">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b border-white/10 pb-16">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter font-serif mb-4">
                   Your Safety <span className="text-accent-gold">Our Priority</span>
                </h2>
                <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
                   At Reddy Anna, we go beyond industry standards to ensure that your betting experience is safe, private, and fully authenticated.
                </p>
            </div>
            <div className="md:ml-auto">
                <div className="flex -space-x-4">
                   <div className="h-16 w-16 rounded-full bg-accent-gold border-4 border-black flex items-center justify-center text-black font-black text-xs">SSL</div>
                   <div className="h-16 w-16 rounded-full bg-white border-4 border-black flex items-center justify-center text-black font-black text-xs">2FA</div>
                   <div className="h-16 w-16 rounded-full bg-accent-gold border-4 border-black flex items-center justify-center text-black font-black text-xs">PCI</div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {safety.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                    <div className="mb-6 text-accent-gold p-4 bg-white/5 rounded-2xl">
                        {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm font-medium">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default SafetyFeatures;
