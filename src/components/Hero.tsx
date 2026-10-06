'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#f4f2fe] via-[#f1eeff] to-[#f9f8fe] border border-purple-100 p-6 sm:p-10 lg:p-12 min-h-[420px] flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Text Content */}
        <div className="max-w-xl z-10 text-left">
          {/* Badge */}
          <span className="inline-block bg-[#e8f8ec] text-[#16a34a] text-xs font-bold px-3 py-1 rounded-full mb-4">
            Weekend Discount
          </span>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
            Get the best quality products at the lowest prices
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            We have prepared special discounts for you on organic breakfast products.
          </p>

          {/* Action Row & Price */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 bg-[#4c35de] hover:bg-[#3b27cb] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-purple-200 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#ea3b43]">$21.67</span>
                <span className="text-sm font-semibold text-gray-400 line-through">$59.99</span>
              </div>
              <span className="text-[11px] text-gray-400">Don&apos;t miss this limited time offer.</span>
            </div>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="relative w-full max-w-md lg:max-w-lg h-72 sm:h-84 lg:h-96 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/assets/asset 63.jpeg"
              alt="Organic Breakfast Cereals & Super Omega Squares"
              fill
              priority
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#4c35de]" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
