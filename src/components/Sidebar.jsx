import React from 'react';
import { X, Home, Info, Shield, Phone, MessageSquare } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            {/* User Profile Summary */}
            {/* <div className="mb-8 rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 p-4 border border-gray-700">
                <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-black text-xl">
                        JD
                    </div>
                    <div>
                        <p className="text-sm font-black text-white">John Doe</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID: 9827341</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-700 pt-4">
                    <div>
                        <p className="text-[9px] font-bold text-gray-500 uppercase">Balance</p>
                        <p className="text-lg font-black text-green-500">₹25,400.00</p>
                    </div>
                    <button className="rounded-lg bg-green-600 px-3 py-1.5 text-[10px] font-black uppercase text-white">
                        Deposit
                    </button>
                </div>
            </div> */}
            <div
                className={`fixed inset-0 z-70 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            <div className={`fixed top-0 right-0 z-80 h-full w-280px bg-[#0f172a] p-6 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
                    <SidebarLink icon={<MessageSquare size={20} />} label="WhatsApp Support" onClick={onClose} highlight />
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

const SidebarLink = ({ icon, label, onClick, highlight }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-bold transition-colors ${highlight ? 'bg-green-600 text-white' : 'bg-gray-900 text-gray-300 hover:text-white'}`}
    >
        {icon} {label}
    </button>
);

export default Sidebar;