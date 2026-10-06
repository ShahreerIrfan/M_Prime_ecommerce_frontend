'use client';

import React from 'react';

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#fff7ed] via-[#ffedd5] to-[#fef3c7] border border-orange-100 px-6 py-5 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Background decorative typography */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 font-black text-orange-200/50 text-7xl sm:text-9xl select-none pointer-events-none tracking-tighter">
          %50
        </div>

        <div className="z-10 text-left">
          <h3 className="text-sm sm:text-base md:text-lg font-black text-[#ea580c] tracking-tight">
            In store or online your health &amp; safety is our top priority
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            The only supermarket that makes your life easier, makes you enjoy life and makes it better
          </p>
        </div>
      </div>
    </section>
  );
}
