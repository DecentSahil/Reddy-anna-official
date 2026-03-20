import React from 'react';
import { X, Trophy, Disc, Target, Zap, Waves, History, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { track } from '@vercel/analytics';

const Sidebar = ({ isOpen, onClose, isPersistent }) => {
    
    const handleNavClick = (label) => {
        track('Sidebar Navigation', { target: label });
        if (!isPersistent) onClose();
    };

    const sportsList = [
        { icon: <Trophy size={18} />, label: "Cricket" },
        { icon: <Waves size={18} />, label: "Football" },
        { icon: <Zap size={18} />, label: "BBL League" },
        { icon: <Zap size={18} />, label: "IPL Cricket" },
        { icon: <Disc size={18} />, label: "Slot Games" },
        { icon: <Trophy size={18} />, label: "T20 World Cup" },
        { icon: <Target size={18} />, label: "Basketball" },
        { icon: <Target size={18} />, label: "Kabaddi" },
        { icon: <Disc size={18} />, label: "Live Casino" },
        { icon: <History size={18} />, label: "Horse Racing" },
        { icon: <History size={18} />, label: "Grey Hound" },
        { icon: <Target size={18} />, label: "Tennis" },
        { icon: <Waves size={18} />, label: "Soccer" },
        { icon: <Zap size={18} />, label: "Binary" }
    ];

    const sidebarContent = (
        <div className={`${isPersistent ? 'h-full w-full' : 'fixed top-0 left-0 z-[70] h-full w-[280px]'} bg-black border-r border-white/5 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${!isPersistent && (isOpen ? 'translate-x-0' : '-translate-x-full')}`}>
            <div className={`flex items-center justify-between mb-8 ${isPersistent ? 'hidden' : ''}`}>
                <span className="text-2xl font-black text-accent-gold font-serif italic tracking-tighter">REDDY ANNA</span>
                {!isPersistent && (
                    <button onClick={onClose} className="p-2 text-accent-gold hover:bg-accent-gold/10 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                )}
            </div>

            <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-4">All Sports</div>
            
            <nav className="flex flex-col gap-1.5 overflow-y-auto max-h-[calc(100vh-250px)] no-scrollbar">
                {sportsList.map((sport) => (
                    <SidebarLink 
                        key={sport.label}
                        icon={sport.icon} 
                        label={sport.label} 
                        to="/" 
                        onClick={() => handleNavClick(sport.label)} 
                    />
                ))}
                
                <div className="my-4 border-t border-white/5" />

                <SidebarLink 
                    icon={<MessageCircle size={18} />} 
                    label="Official Support" 
                    to="/payment-submit" 
                    onClick={() => handleNavClick('Official Support')}
                    highlight 
                />
            </nav>

            <div className={`${isPersistent ? 'mt-8' : 'absolute bottom-10 left-6 right-6'}`}>
                <a 
                    href="https://wa.me/9142504568"
                    target="_blank"
                    className="block rounded-xl bg-accent-gold p-4 text-center hover:scale-[1.02] transition-all active:scale-95 shadow-[0_10px_30px_rgba(255,215,0,0.15)]"
                >
                    <p className="text-[9px] font-black uppercase text-black tracking-widest">Instant ID</p>
                    <p className="text-base font-bold text-black font-serif italic">GET 100% BONUS</p>
                </a>
            </div>
        </div>
    );

    if (isPersistent) {
        return <aside className="hidden lg:block w-72 h-[calc(100vh-65px)] sticky top-[65px] z-30">{sidebarContent}</aside>;
    }

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />
            <div className="lg:hidden">
                {sidebarContent}
            </div>
        </>
    );
};

const SidebarLink = ({ icon, label, onClick, highlight, to }) => {
    return (
        <Link 
            to={to} 
            onClick={onClick} 
            className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-bold transition-all group ${
                highlight 
                ? 'bg-whatsapp-green text-white hover:scale-105 shadow-lg shadow-whatsapp-green/20' 
                : 'text-gray-400 hover:text-accent-gold hover:bg-accent-gold/5'
            }`}
        >
            <span className={`${highlight ? 'text-white' : 'text-accent-gold/70 group-hover:text-accent-gold'}`}>
                {icon}
            </span>
            <span className="uppercase tracking-widest text-xs font-black">{label}</span>
        </Link>
    );
};

export default Sidebar;