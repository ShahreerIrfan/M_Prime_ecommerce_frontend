'use client';

import React, { useState } from 'react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CHART_DATA = [
  { day: 'Mon', revenue: 28, revenueFormatted: '$28,400', orders: 110 },
  { day: 'Tue', revenue: 32, revenueFormatted: '$32,150', orders: 130 },
  { day: 'Wed', revenue: 27, revenueFormatted: '$27,800', orders: 118 },
  { day: 'Thu', revenue: 35, revenueFormatted: '$35,600', orders: 175 },
  { day: 'Fri', revenue: 38, revenueFormatted: '$38,900', orders: 190 },
  { day: 'Sat', revenue: 42, revenueFormatted: '$42,500', orders: 240 },
  { day: 'Sun', revenue: 42, revenueFormatted: '$42,100', orders: 280 },
];

export default function SalesOverviewChart() {
  const [activeRange, setActiveRange] = useState('7 days');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const ranges = ['7 days', '30 days', '3 months', '12 months'];

  // SVG coordinates calculation for the smooth curve
  // Normalized 0 to 100 on X, and $26k (bottom) to $44k (top) on Y
  const points = [
    { x: 7, y: 88 },
    { x: 21, y: 72 },
    { x: 35, y: 92 },
    { x: 50, y: 56 },
    { x: 64, y: 46 },
    { x: 78, y: 30 },
    { x: 92, y: 30 },
  ];

  // SVG cubic bezier path
  const curvePath = "M 7,88 C 14,88 16,72 21,72 C 26,72 30,92 35,92 C 42,92 45,56 50,56 C 55,56 59,46 64,46 C 70,46 73,30 78,30 C 84,30 87,30 92,30";

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs">
      {/* Header with Title, Legend & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-base font-bold text-gray-900">Sales Overview</h3>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {/* Legend */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 font-medium text-gray-600">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4f46e5]" />
              <span>Revenue</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-gray-600">
              <span className="w-2.5 h-2.5 rounded-full bg-[#bfdbfe]" />
              <span>Orders</span>
            </div>
          </div>

          {/* Time Range Selector */}
          <div className="flex items-center bg-gray-100 p-1 rounded-xl text-xs font-semibold text-gray-600">
            {ranges.map((range) => (
              <button
                key={range}
                onClick={() => setActiveRange(range)}
                className={`px-3 py-1 rounded-lg transition ${
                  activeRange === range
                    ? 'bg-white text-gray-900 shadow-xs'
                    : 'hover:text-gray-900'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="relative h-72 sm:h-80 w-full flex">
        
        {/* Left Y-Axis (Revenue Scale) */}
        <div className="flex flex-col justify-between text-[11px] text-gray-400 font-mono pr-3 select-none pb-6">
          <span>$44k</span>
          <span>$42k</span>
          <span>$40k</span>
          <span>$38k</span>
          <span>$36k</span>
          <span>$34k</span>
          <span>$32k</span>
          <span>$30k</span>
          <span>$28k</span>
          <span>$26k</span>
        </div>

        {/* Chart Main Area */}
        <div className="relative flex-1 h-full pb-6">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-full border-b border-gray-100" />
            ))}
          </div>

          {/* SVG Chart Overlay */}
          <div className="relative w-full h-full">
            {/* Bars for Orders */}
            <div className="absolute inset-0 grid grid-cols-7 gap-2 px-2 items-end pb-1">
              {CHART_DATA.map((item, idx) => {
                const barHeightPercent = (item.orders / 300) * 100;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="h-full flex items-end justify-center cursor-pointer group relative"
                  >
                    <div
                      style={{ height: `${barHeightPercent}%` }}
                      className="w-4 sm:w-6 bg-[#bfdbfe]/60 group-hover:bg-[#93c5fd] rounded-t-md transition-all duration-200"
                    />

                    {/* Tooltip on hover */}
                    {hoveredIdx === idx && (
                      <div className="absolute -top-12 z-20 bg-gray-900 text-white text-[10px] py-1 px-2 rounded shadow-lg whitespace-nowrap">
                        <div>{item.day}: {item.revenueFormatted}</div>
                        <div className="text-blue-300">{item.orders} orders</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SVG Line for Revenue */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            >
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Smooth Spline Curve */}
              <path
                d={curvePath}
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Data points */}
              {points.map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r="2"
                  fill="#4f46e5"
                  className="transition duration-150"
                />
              ))}
            </svg>
          </div>

          {/* X-Axis Days */}
          <div className="absolute bottom-0 inset-x-0 grid grid-cols-7 text-center text-xs font-semibold text-gray-500 pt-2">
            {DAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>

        {/* Right Y-Axis (Orders Scale) */}
        <div className="flex flex-col justify-between text-[11px] text-gray-400 font-mono pl-3 select-none pb-6 text-right">
          <span>300</span>
          <span>250</span>
          <span>200</span>
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>

      </div>
    </div>
  );
}
