'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/data/mockData';

export default function TopCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Top Categories
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            New products with updated stocks.
          </p>
        </div>
        <Link 
          href="#categories" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#4c35de] transition group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`#category-${cat.id}`}
            className="group flex flex-col items-center p-3 rounded-xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-md hover:-translate-y-1 transition text-center"
          >
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 mb-2.5 flex items-center justify-center">
              <Image
                src={cat.image}
                alt={cat.name}
                width={70}
                height={70}
                className="object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-[#4c35de] transition">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
