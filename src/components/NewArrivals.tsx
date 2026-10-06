'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Store, Star } from 'lucide-react';
import { NEW_ARRIVALS } from '@/data/mockData';
import ProductCard from './ProductCard';

export default function NewArrivals() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            New Arrivals
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Do not miss the current offers until the end of month.
          </p>
        </div>
        <Link 
          href="#new-arrivals" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#4c35de] transition group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch">
        {/* Left: Machic Featured Vendor Box */}
        <div className="lg:col-span-2 bg-[#fbfbfe] border border-purple-100 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-700">
                <Store className="w-6 h-6 text-[#4c35de]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-extrabold text-gray-900">Machic</h3>
                  <span className="text-[10px] font-bold bg-[#e8f8ec] text-[#16a34a] px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">54</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              Good quality product can only be found in good stores
            </p>

            <div className="border-t border-gray-200/60 pt-4">
              <span className="text-[11px] font-bold text-[#ea580c] uppercase">
                Only This Week
              </span>
              <h4 className="text-lg font-black text-gray-900 mt-1 leading-snug">
                Where flavor meets affordability.
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Only this week. Don&apos;t miss...
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="#machic"
              className="inline-flex items-center gap-2 bg-[#4c35de] hover:bg-[#3b27cb] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-sm"
            >
              <span>Visit Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right: Products Grid (4 items) */}
        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {NEW_ARRIVALS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} showStockBar={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
