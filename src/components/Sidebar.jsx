import React from 'react';
import { X, Home, Info, Shield, Phone, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link for internal routing
import { track } from '@vercel/analytics';

const Sidebar = ({ isOpen, onClose }) => {
    
    // Handler for navigation tracking
    const handleNavClick = (label, isSupport = false) => {
        if (isSupport) {
            track('Support Page Entry', { reason: 'Agent Transaction Issue', location: 'Sidebar' });
        } else {
            track('Sidebar Navigation', { target: label });
        }
        onClose(); // Close sidebar after clicking
    };

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
                    <SidebarLink icon={<Home size={20} />} label="Home" to="/" onClick={() => handleNavClick('Home')} />
                    <SidebarLink icon={<Info size={20} />} label="About Us" to="/about" onClick={() => handleNavClick('About Us')} />
                    <SidebarLink icon={<Shield size={20} />} label="Privacy Policy" to="/privacy" onClick={() => handleNavClick('Privacy Policy')} />
                    <SidebarLink icon={<Phone size={20} />} label="Contact Us" to="/contact" onClick={() => handleNavClick('Contact Us')} />
                    
                    {/* Updated Official Support: Now opens PaymentSubmit Page */}
                    <SidebarLink 
                        icon={<LifeBuoy size={20} />} 
                        label="Official Support" 
                        to="/payment-submit" 
                        onClick={() => handleNavClick('Official Support', true)}
                        highlight 
                    />
                </nav>

                <div className="absolute bottom-10 left-6 right-6">
                    <div 
                        className="rounded-xl bg-yellow-500 p-4 text-center cursor-pointer active:scale-95 transition-transform"
                        onClick={() => track('Bonus Click', { location: 'Sidebar Footer' })}
                    >
                        <p className="text-[10px] font-black uppercase text-black">New User Bonus</p>
                        <p className="text-lg font-bold text-black">GET 100% OFF</p>
                    </div>
                </div>
            </div>
        </>
    );
};

// Updated SidebarLink to use React Router Link
const SidebarLink = ({ icon, label, onClick, highlight, to }) => {
    const className = `flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-bold transition-colors w-full text-left ${
        highlight ? 'bg-red-600 text-white hover:bg-red-500' : 'bg-gray-900 text-gray-300 hover:text-white'
    }`;

    return (
        <Link to={to} onClick={onClick} className={className}>
            {icon} {label}
        </Link>
    );
};

export default Sidebar;