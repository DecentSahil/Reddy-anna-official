import React from 'react';
import { X, Home, Info, Shield, Phone, MessageSquare } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    // 1. Create the WhatsApp URL using environment variables
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const whatsappMessage = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MESSAGE);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-70 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar Content */}
            <div className={`fixed top-0 right-0 z-80 h-full w-[280px] bg-[#0f172a] p-6 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-black text-yellow-500 italic">MENU</span>
                    <button onClick={onClose} className="p-2 text-white bg-gray-800 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex flex-col gap-4">
                    <SidebarLink icon={<Home size={20} />} label="Home" onClick={onClose} />
                    <SidebarLink icon={<Info size={20} />} label="About Us" onClick={onClose} />
                    <SidebarLink icon={<Shield size={20} />} label="Privacy Policy" onClick={onClose} />
                    <SidebarLink icon={<Phone size={20} />} label="Contact Us" onClick={onClose} />
                    
                    {/* 2. Updated WhatsApp Support Link */}
                    <SidebarLink 
                        icon={<MessageSquare size={20} />} 
                        label="WhatsApp Support" 
                        isExternal
                        href={whatsappLink}
                        highlight 
                    />
                </nav>

                <div className="absolute bottom-10 left-6 right-6">
                    <div className="rounded-xl bg-yellow-500 p-4 text-center">
                        <p className="text-[10px] font-black uppercase text-black">New User Bonus</p>
                        <p className="text-lg font-bold text-black">GET 100% OFF</p>
                    </div>
                </div>
            </div>
        </>
    );
};

// 3. Updated SidebarLink to handle external <a> links or regular buttons
const SidebarLink = ({ icon, label, onClick, highlight, isExternal, href }) => {
    const className = `flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-bold transition-colors w-full text-left ${
        highlight ? 'bg-green-600 text-white hover:bg-green-500' : 'bg-gray-900 text-gray-300 hover:text-white'
    }`;

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {icon} {label}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {icon} {label}
        </button>
    );
};

export default Sidebar;