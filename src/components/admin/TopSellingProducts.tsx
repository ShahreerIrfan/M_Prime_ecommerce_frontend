'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Headphones, 
  Luggage, 
  Footprints, 
  Watch, 
  Coffee 
} from 'lucide-react';

const TOP_PRODUCTS = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Electronics',
    revenue: '$59,760',
    sales: '482 sales',
    icon: Headphones,
    iconBg: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: '2',
    name: 'Leather Backpack',
    category: 'Accessories',
    revenue: '$45,540',
    sales: '396 sales',
    icon: Luggage,
    iconBg: 'bg-orange-50 text-orange-600',
  },
  {
    id: '3',
    name: 'Running Sneakers',
    category: 'Footwear',
    revenue: '$57,564',
    sales: '351 sales',
    icon: Footprints,
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: '4',
    name: 'Smart Watch S2',
    category: 'Electronics',
    revenue: '$91,553',
    sales: '287 sales',
    icon: Watch,
    iconBg: 'bg-purple-50 text-purple-600',
  },
  {
    id: '5',
    name: 'Ceramic Mug Set',
    category: 'Home',
    revenue: '$11,712',
    sales: '244 sales',
    icon: Coffee,
    iconBg: 'bg-amber-50 text-amber-600',
  },
];

export default function TopSellingProducts() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-bold text-gray-900">Top Selling Products</h3>
          <Link
            href="#all-products"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            View all products
          </Link>
        </div>

        {/* Product List */}
        <div className="space-y-4">
          {TOP_PRODUCTS.map((prod) => {
            const Icon = prod.icon;
            return (
              <div key={prod.id} className="flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${prod.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate group-hover:text-indigo-600 transition">
                      {prod.name}
                    </h4>
                    <span className="text-[11px] text-gray-400 block">
                      {prod.category}
                    </span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-black text-gray-900 block">
                    {prod.revenue}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {prod.sales}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
