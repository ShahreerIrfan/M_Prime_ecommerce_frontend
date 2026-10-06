'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NEW_PRODUCTS } from '@/data/mockData';
import ProductCard from './ProductCard';

export default function NewProducts() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
            New Products
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Some of the new products arriving this weeks
          </p>
        </div>
        <Link 
          href="#new-products" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#4c35de] transition group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>

      {/* Products Grid (6 cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {NEW_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} showStockBar={true} />
        ))}
      </div>
    </section>
  );
}
