'use client';

import React from 'react';
import { 
  TrendingUp, 
  Wallet, 
  ShoppingBag, 
  UserPlus, 
  Receipt 
} from 'lucide-react';

const METRICS = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$245,450',
    trend: '+14.9%',
    comparison: 'vs. $213,620 last period',
    icon: Wallet,
    bgColor: 'from-[#fff7ed] to-[#ffedd5]/50',
    borderColor: 'border-orange-100/80',
    iconColor: 'text-orange-600 bg-orange-100/80',
  },
  {
    id: 'orders',
    title: 'Total Orders',
    value: '1,284',
    trend: '+8.2%',
    comparison: '+97 orders',
    icon: ShoppingBag,
    bgColor: 'from-[#f0fdf4] to-[#dcfce7]/50',
    borderColor: 'border-emerald-100/80',
    iconColor: 'text-emerald-600 bg-emerald-100/80',
  },
  {
    id: 'customers',
    title: 'New Customers',
    value: '684',
    trend: '+12.4%',
    comparison: '+75 this week',
    icon: UserPlus,
    bgColor: 'from-[#eff6ff] to-[#dbeafe]/50',
    borderColor: 'border-blue-100/80',
    iconColor: 'text-blue-600 bg-blue-100/80',
  },
  {
    id: 'aov',
    title: 'Average Order Value',
    value: '$192.40',
    trend: '+5.7%',
    comparison: '+$10.35',
    icon: Receipt,
    bgColor: 'from-[#faf5ff] to-[#f3e8ff]/50',
    borderColor: 'border-purple-100/80',
    iconColor: 'text-purple-600 bg-purple-100/80',
  },
];

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
      {METRICS.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className={`rounded-2xl p-5 bg-gradient-to-br ${card.bgColor} border ${card.borderColor} flex flex-col justify-between hover:shadow-md transition`}
          >
            {/* Top row: Title and Icon */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500">
                {card.title}
              </span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${card.iconColor}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Value */}
            <div className="my-3">
              <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {card.value}
              </span>
            </div>

            {/* Trend & Comparison */}
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-0.5 bg-emerald-100/80 text-emerald-700 font-bold px-2 py-0.5 rounded-md text-[11px]">
                <TrendingUp className="w-3 h-3" />
                {card.trend}
              </span>
              <span className="text-gray-400 font-medium truncate">
                {card.comparison}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
