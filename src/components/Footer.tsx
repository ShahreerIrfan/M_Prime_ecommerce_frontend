'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-600 text-xs border-t border-gray-100 font-sans">
      {/* 5-Column Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Do You Need Help */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-gray-900 mb-3">Do You Need Help ?</h4>
            <p className="text-gray-500 leading-relaxed mb-5">
              Autoseligen syr. Nek diarask fröbomba. Nör antipod kynoda nynat. Pressa fämoska.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-purple-50 text-[#4c35de] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block">Monday-Friday: 08am-9pm</span>
                <span className="text-sm font-black text-gray-900">0 800 300-353</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-50 text-[#4c35de] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block">Need help with your order?</span>
                <span className="text-xs font-bold text-gray-900">info@example.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Make Money with Us */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Make Money with Us</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="#" className="hover:text-[#4c35de] transition">Sell on Grogin</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Sell Your Services on Grogin</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Sell on Grogin Business</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Sell Your Apps on Grogin</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Become an Affiliate</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Advertise Your Products</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Sell-Publish with Us</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Become an Blowwe Vendor</Link></li>
            </ul>
          </div>

          {/* Col 3: Let Us Help You */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Let Us Help You</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="#" className="hover:text-[#4c35de] transition">Accessibility Statement</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Your Orders</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Returns &amp; Replacements</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Shipping Rates &amp; Policies</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Refund and Returns Policy</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Terms and Conditions</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Cookie Settings</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Help Center</Link></li>
            </ul>
          </div>

          {/* Col 4: Get to Know Us */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Get to Know Us</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="#" className="hover:text-[#4c35de] transition">Careers for Grogin</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">About Grogin</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Investor Relations</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Grogin Devices</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Customer reviews</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Social Responsibility</Link></li>
              <li><Link href="#" className="hover:text-[#4c35de] transition">Store Locations</Link></li>
            </ul>
          </div>

          {/* Col 5: Download App & Socials */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Download our app</h4>
            <div className="space-y-2.5 mb-6">
              {/* Google Play Button */}
              <div className="bg-black text-white p-2.5 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-800 transition">
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-wider block text-gray-400">GET IT ON</span>
                  <span className="text-xs font-bold block">Google Play</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">-10% Discount</span>
              </div>

              {/* App Store Button */}
              <div className="bg-black text-white p-2.5 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-800 transition">
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-wider block text-gray-400">Download on the</span>
                  <span className="text-xs font-bold block">App Store</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">-20% Discount</span>
              </div>
            </div>

            <h5 className="text-xs font-bold text-gray-800 mb-2">Follow us on social media:</h5>
            <div className="flex items-center gap-3 text-gray-400">
              <Link href="#" className="p-1.5 rounded-full hover:bg-blue-50 hover:text-[#1877f2] transition">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className="p-1.5 rounded-full hover:bg-sky-50 hover:text-[#1da1f2] transition">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="#" className="p-1.5 rounded-full hover:bg-pink-50 hover:text-[#e4405f] transition">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="p-1.5 rounded-full hover:bg-blue-50 hover:text-[#0077b5] transition">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright and Payment Bar */}
      <div className="border-t border-gray-100 py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-gray-500">
          <div>
            Copyright 2026 © <strong className="text-gray-700">Grogin WooCommerce WordPress Theme</strong>. All right reserved. Powered by <span className="text-[#4c35de] font-semibold">KLBTheme</span>.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <Link href="#" className="hover:text-[#4c35de] transition">Terms and Conditions</Link>
            <Link href="#" className="hover:text-[#4c35de] transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#4c35de] transition">Order Tracking</Link>
            
            {/* Payment Cards */}
            <div className="flex items-center gap-1.5 ml-2">
              <span className="font-extrabold text-blue-800 border border-gray-200 px-1.5 py-0.5 rounded text-[10px] bg-white">VISA</span>
              <span className="font-extrabold text-blue-600 border border-gray-200 px-1.5 py-0.5 rounded text-[10px] bg-white">PayPal</span>
              <span className="font-extrabold text-purple-700 border border-gray-200 px-1.5 py-0.5 rounded text-[10px] bg-white">Skrill</span>
              <span className="font-extrabold text-pink-500 border border-gray-200 px-1.5 py-0.5 rounded text-[10px] bg-white">Klarna</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:text-[#4c35de] hover:border-[#4c35de] transition z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
