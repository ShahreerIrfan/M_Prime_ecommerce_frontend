'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface LowStockItem {
  id: string;
  name: string;
  sku: string;
  current: number;
  total: number;
  status: 'Critical' | 'Low';
}

const LOW_STOCK_ITEMS: LowStockItem[] = [
  {
    id: '1',
    name: 'Ceramic Mug Set',
    sku: 'SKU HM-2041',
    current: 6,
    total: 60,
    status: 'Critical',
  },
  {
    id: '2',
    name: 'Desk Lamp Pro',
    sku: 'SKU HM-1187',
    current: 14,
    total: 80,
    status: 'Low',
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    sku: 'SKU EL-0932',
    current: 18,
    total: 120,
    status: 'Low',
  },
  {
    id: '4',
    name: 'Yoga Mat Plus',
    sku: 'SKU FT-3310',
    current: 4,
    total: 50,
    status: 'Critical',
  },
];

export default function LowStockProducts() {
  const [reorderedIds, setReorderedIds] = useState<string[]>([]);

  const handleReorder = (id: string) => {
    setReorderedIds((prev) => [...prev, id]);
    setTimeout(() => {
      setReorderedIds((prev) => prev.filter((item) => item !== id));
    }, 2000);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-bold text-gray-900">Low Stock Products</h3>
          <Link
            href="#inventory"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            Manage inventory
          </Link>
        </div>

        {/* Item Rows */}
        <div className="divide-y divide-gray-50">
          {LOW_STOCK_ITEMS.map((item) => {
            const percentage = (item.current / item.total) * 100;
            const isCritical = item.status === 'Critical';
            const isReordered = reorderedIds.includes(item.id);

            return (
              <div key={item.id} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-gray-900 truncate">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {item.sku}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Progress & Units */}
                  <div className="w-24 sm:w-28 text-right">
                    <span className="text-[11px] font-semibold text-gray-700 block mb-1">
                      {item.current} / {item.total} units
                    </span>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        style={{ width: `${percentage}%` }}
                        className={`h-full rounded-full ${
                          isCritical ? 'bg-rose-500' : 'bg-amber-500'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isCritical
                        ? 'bg-rose-50 text-rose-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCritical ? 'bg-rose-500' : 'bg-amber-500'
                      }`}
                    />
                    {item.status}
                  </span>

                  {/* Reorder Button */}
                  <button
                    onClick={() => handleReorder(item.id)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 text-gray-700 transition"
                  >
                    {isReordered ? (
                      <span className="flex items-center gap-1 text-emerald-600 font-bold">
                        <Check className="w-3.5 h-3.5" /> Done
                      </span>
                    ) : (
                      'Reorder'
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
