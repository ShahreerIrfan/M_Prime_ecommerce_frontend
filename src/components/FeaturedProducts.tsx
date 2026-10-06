'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '@/data/mockData';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Featured Products
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Do not miss the current offers until the end of month.
          </p>
        </div>
        <Link 
          href="#featured" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#4c35de] transition group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch">
        {/* Left: Tall Promo Banner */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#fbf8f5] to-[#f5eee6] border border-stone-200 p-6 sm:p-8 flex flex-col justify-between group">
          <div className="z-10">
            <span className="text-xs font-bold text-[#ea580c] uppercase">
              Only This Week
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2 leading-tight">
              A smart store for every people
            </h3>
            <p className="text-xs text-gray-500 mt-2 mb-6">
              Feed your family the best
            </p>
            <Link
              href="#shop"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-[#4c35de] transition group-hover:translate-x-0.5"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="relative w-full h-48 sm:h-56 mt-4 flex items-center justify-center">
            <Image
              src="/assets/asset 40.jpeg"
              alt="Organic Spices & Food"
              fill
              className="object-contain group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Right: 4 Products Grid */}
        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} showStockBar={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
