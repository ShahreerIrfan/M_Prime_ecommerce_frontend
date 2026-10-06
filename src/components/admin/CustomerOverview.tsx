'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function CustomerOverview() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-bold text-gray-900">Customer Overview</h3>
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            +12.4% growth
          </span>
        </div>

        {/* 2 Metric Boxes */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="border border-gray-100 rounded-xl p-3.5 bg-gray-50/50">
            <span className="text-[11px] font-medium text-gray-400 block mb-1">
              New customers
            </span>
            <span className="text-xl sm:text-2xl font-black text-gray-900">
              684
            </span>
          </div>

          <div className="border border-gray-100 rounded-xl p-3.5 bg-gray-50/50">
            <span className="text-[11px] font-medium text-gray-400 block mb-1">
              Returning customers
            </span>
            <span className="text-xl sm:text-2xl font-black text-gray-900">
              1,129
            </span>
          </div>
        </div>

        {/* Ratio Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2">
            <span>New vs. returning</span>
            <span className="text-gray-900 font-bold">38% / 62%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#c7d2fe] overflow-hidden flex">
            <div className="h-full bg-[#6366f1] rounded-l-full" style={{ width: '38%' }} />
          </div>
        </div>
      </div>

      {/* Customer Growth Spark Area Chart */}
      <div>
        <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2">
          <span>Customer growth</span>
          <span className="inline-flex items-center gap-0.5 text-emerald-600 font-bold text-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            +12.4%
          </span>
        </div>

        <div className="relative h-20 w-full overflow-hidden">
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Gradient fill */}
            <path
              d="M 0,35 Q 25,32 50,22 T 100,6 L 100,40 L 0,40 Z"
              fill="url(#growthGrad)"
            />
            {/* Green line */}
            <path
              d="M 0,35 Q 25,32 50,22 T 100,6"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
