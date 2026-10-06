'use client';

import React from 'react';
import { 
  Search, 
  Store, 
  Globe, 
  Moon, 
  Bell, 
  ChevronDown, 
  Menu 
} from 'lucide-react';

interface TopNavbarProps {
  onOpenMobile?: () => void;
}

export default function TopNavbar({ onOpenMobile }: TopNavbarProps) {
  return (
    <header className="w-full bg-white border-b border-gray-100 h-16 px-4 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-30">
      
      {/* Left: Mobile Trigger & Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={onOpenMobile}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-gray-50 hover:bg-gray-100/80 focus:bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 rounded-xl pl-9 pr-8 py-2 border border-transparent focus:border-indigo-500 focus:outline-none transition"
          />
          <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
            <kbd className="text-[10px] font-mono text-gray-400 bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-2xs">
              /
            </kbd>
          </div>
        </div>
      </div>

      {/* Right: Actions, Store Selector & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* Store Selector Dropdown */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 hover:border-gray-300 bg-white cursor-pointer transition text-xs font-semibold text-gray-800">
          <Store className="w-4 h-4 text-gray-500" />
          <span className="hidden sm:inline">Khamba Store</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </div>

        {/* Language Selector */}
        <button 
          aria-label="Language"
          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition"
        >
          <Globe className="w-4 h-4" />
        </button>

        {/* Dark Mode Toggle */}
        <button 
          aria-label="Dark mode"
          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition"
        >
          <Moon className="w-4 h-4" />
        </button>

        {/* Notifications */}
        <button 
          aria-label="Notifications"
          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition relative"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-gray-200 cursor-pointer">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">
            <span>A</span>
          </div>
        </div>

      </div>

    </header>
  );
}
