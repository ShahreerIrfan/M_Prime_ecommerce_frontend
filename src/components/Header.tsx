'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  User as UserIcon, 
  Heart, 
  ShoppingBag, 
  MapPin, 
  ChevronDown, 
  Percent, 
  Flame,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 38,
    hours: 9,
    minutes: 34,
    seconds: 0,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#4c35de] text-white text-xs sm:text-[13px] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div className="flex items-center gap-1.5 font-medium">
            <span>FREE delivery &amp; 40% Discount for next 3 orders! Place your 1st order in.</span>
          </div>
          <div className="flex items-center gap-1 text-slate-200 text-xs">
            <span>Until the end of the sale:</span>
            <span className="font-bold text-white bg-[#3b2b8c] px-1.5 py-0.5 rounded ml-1">
              {String(timeLeft.days).padStart(2, '0')}
            </span>{' '}
            days
            <span className="font-bold text-white bg-[#3b2b8c] px-1.5 py-0.5 rounded ml-1">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>{' '}
            hours
            <span className="font-bold text-white bg-[#3b2b8c] px-1.5 py-0.5 rounded ml-1">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>{' '}
            minutes
            <span className="font-bold text-white bg-[#3b2b8c] px-1.5 py-0.5 rounded ml-1">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>{' '}
            sec.
          </div>
        </div>
      </div>

      {/* 2. Top Sub-Bar (Utility Bar) */}
      <div className="border-b border-gray-100 text-xs text-gray-500 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#4c35de] transition">About Us</Link>
            <Link href="#" className="hover:text-[#4c35de] transition">My account</Link>
            <Link href="#" className="hover:text-[#4c35de] transition">Wishlist</Link>
            <span className="text-gray-400">|</span>
            <span>We deliver to you every day from <strong className="text-gray-700">7:00 to 23:00</strong></span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
              <span>English</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
              <span>USD</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <Link href="#" className="hover:text-[#4c35de] transition">Order Tracking</Link>
          </div>
        </div>
      </div>

      {/* 3. Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5 flex items-center justify-between gap-4 md:gap-8">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-[#4c35de] flex items-center justify-center text-white font-extrabold text-xl">
              g
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              grogin<span className="text-[#4c35de]">.</span>
            </span>
          </Link>

          {/* Location Delivery Tag */}
          <div className="hidden lg:flex items-center gap-2 text-xs border border-gray-200 rounded-lg px-3 py-2 bg-gray-50/50 hover:bg-gray-100 transition cursor-pointer">
            <MapPin className="w-4 h-4 text-gray-400" />
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase font-semibold">Deliver to</span>
              <span className="font-bold text-gray-800 flex items-center gap-1">
                all <ChevronDown className="w-3 h-3 text-gray-400" />
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, categories or brands..."
              className="w-full bg-gray-100/80 hover:bg-gray-100 focus:bg-white text-sm text-gray-800 placeholder-gray-400 rounded-lg pl-4 pr-12 py-3 border border-transparent focus:border-[#4c35de] focus:outline-none transition"
            />
            <button className="absolute right-2.5 p-1.5 text-gray-500 hover:text-[#4c35de] transition">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* User Account, Wishlist, Cart */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Account / Dashboard */}
          <Link 
            href={user ? (user.role === 'admin' ? '/admin' : '/customer') : '/login'} 
            className="flex items-center gap-2.5 text-gray-700 hover:text-[#4c35de] transition group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#4c35de] transition bg-gray-50/50">
              {user ? (
                <span className="font-black text-xs text-[#4c35de]">
                  {user.firstName ? user.firstName.charAt(0) : user.username.charAt(0).toUpperCase()}
                </span>
              ) : (
                <UserIcon className="w-5 h-5 text-gray-600 group-hover:text-[#4c35de]" />
              )}
            </div>
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-[11px] text-gray-400 font-medium">
                {user ? (user.role === 'admin' ? 'Admin Portal' : 'My Account') : 'Sign In'}
              </span>
              <span className="text-xs font-bold text-gray-800 truncate max-w-[100px]">
                {user ? (user.firstName || user.username) : 'Account'}
              </span>
            </div>
          </Link>

          {/* Wishlist */}
          <Link href="#" className="flex items-center gap-2.5 text-gray-700 hover:text-[#4c35de] transition group relative">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#4c35de] transition relative">
              <Heart className="w-5 h-5 text-gray-600 group-hover:text-[#4c35de]" />
              <span className="absolute -top-1 -right-1 bg-[#ea3b43] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-[11px] text-gray-400 font-medium">Favorites</span>
              <span className="text-xs font-bold text-gray-800">Wishlist</span>
            </div>
          </Link>

          {/* Cart */}
          <Link href="#" className="flex items-center gap-2.5 text-gray-700 hover:text-[#4c35de] transition group relative">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#4c35de] transition relative">
              <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-[#4c35de]" />
              <span className="absolute -top-1 -right-1 bg-[#ea3b43] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-[11px] text-gray-400 font-medium">Your Cart</span>
              <span className="text-xs font-bold text-gray-800">$0.00</span>
            </div>
          </Link>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 4. Bottom Navigation Bar */}
      <div className="border-t border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[13px] font-semibold text-gray-700 h-12">
          <nav className="flex items-center gap-7">
            <div className="flex items-center gap-1 text-[#4c35de] cursor-pointer hover:opacity-80 py-3">
              <span>Home</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1 hover:text-[#4c35de] transition cursor-pointer py-3">
              <span>Shop</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
            <Link href="#" className="hover:text-[#4c35de] transition py-3">Fruits &amp; Vegetables</Link>
            <Link href="#" className="hover:text-[#4c35de] transition py-3">Beverages</Link>
            <Link href="#" className="hover:text-[#4c35de] transition py-3">Blog</Link>
            <Link href="#" className="hover:text-[#4c35de] transition py-3">Contact</Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer">
              <span>Trending Products</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1.5 text-gray-800 font-bold cursor-pointer">
              <span className="text-[#ea3b43]">Almost Finished</span>
              <span className="bg-[#ea3b43] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                SALE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 text-sm text-gray-800 placeholder-gray-400 rounded-lg pl-3 pr-10 py-2 border focus:outline-none"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
          </div>
          <div className="flex flex-col gap-2 font-medium text-sm text-gray-700">
            <Link href="/" className="text-[#4c35de] py-1.5">Home</Link>
            <Link href="#" className="py-1.5">Shop</Link>
            <Link href="#" className="py-1.5">Fruits &amp; Vegetables</Link>
            <Link href="#" className="py-1.5">Beverages</Link>
            <Link href="#" className="py-1.5">Blog</Link>
            <Link href="#" className="py-1.5">Contact</Link>
            <Link href="/login" className="py-1.5 font-bold text-[#4c35de]">Sign In / Account</Link>
          </div>
        </div>
      )}
    </header>
  );
}
