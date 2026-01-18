import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center gap-2">
        {/* Search Input Container */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <Search size={18} />
          </span>
          <input 
            type="text" 
            placeholder="Search teams or leagues..."
            className="w-full rounded-xl bg-[#1e293b] py-3 pl-10 pr-4 text-sm font-medium text-white placeholder-gray-500 border border-gray-800 focus:border-yellow-500/50 focus:outline-none transition-all"
          />
        </div>

        {/* Filter Button */}
        <button className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#1e293b] border border-gray-800 text-yellow-500 active:scale-95 transition-transform">
          <SlidersHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;