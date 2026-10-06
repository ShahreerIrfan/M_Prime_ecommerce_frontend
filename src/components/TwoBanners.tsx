'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function TwoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Banner 1 */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#fefce8] to-[#fef9c3] border border-yellow-200/60 p-6 sm:p-8 flex items-center justify-between min-h-[220px] group hover:shadow-md transition">
          <div className="max-w-[58%] z-10">
            <span className="text-xs font-bold text-[#ea580c] uppercase">
              Only This Week
            </span>
            <h3 className="text-base sm:text-xl font-black text-gray-900 mt-1 leading-snug">
              Provides you the quality that&apos;s you expected
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 mb-5">
              Feed your family the best
            </p>
            <Link
              href="#shop"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-[#4c35de] transition group-hover:translate-x-0.5"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/assets/asset 37.jpeg"
              alt="Organic Baby Food & Apple"
              fill
              className="object-contain group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#fff1f2] to-[#ffe4e6] border border-rose-100 p-6 sm:p-8 flex items-center justify-between min-h-[220px] group hover:shadow-md transition">
          <div className="max-w-[58%] z-10">
            <span className="text-xs font-bold text-[#ea580c] uppercase">
              Only This Week
            </span>
            <h3 className="text-base sm:text-xl font-black text-gray-900 mt-1 leading-snug">
              Grocery store at the center of the city
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 mb-5">
              Only this week. Don&apos;t miss...
            </p>
            <Link
              href="#shop"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-[#4c35de] transition group-hover:translate-x-0.5"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/assets/asset 38.jpeg"
              alt="Fresh Dessert Ice Creams"
              fill
              className="object-contain group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
