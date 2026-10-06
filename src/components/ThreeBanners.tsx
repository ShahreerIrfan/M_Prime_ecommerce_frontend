'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const BANNERS_ROW1 = [
  {
    id: 'b1',
    badge: 'Only This Week',
    title: 'We provide you the best quality products',
    subtitle: 'Only this week. Don\'t miss...',
    image: '/assets/asset 34.jpeg',
    bgColor: 'from-[#fef2f2] to-[#fff1f2]',
    borderColor: 'border-red-100',
  },
  {
    id: 'b2',
    badge: 'Only This Week',
    title: 'We make your grocery shopping more exciting',
    subtitle: 'Feed your family the best',
    image: '/assets/asset 35.jpeg',
    bgColor: 'from-[#fffbeb] to-[#fef3c7]',
    borderColor: 'border-amber-100',
  },
  {
    id: 'b3',
    badge: 'Only This Week',
    title: 'The one supermarket that saves your money',
    subtitle: 'Eat one every day',
    image: '/assets/asset 36.jpeg',
    bgColor: 'from-[#f8fafc] to-[#f1f5f9]',
    borderColor: 'border-slate-100',
  },
];

export default function ThreeBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {BANNERS_ROW1.map((banner) => (
          <div
            key={banner.id}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${banner.bgColor} border ${banner.borderColor} p-6 flex items-center justify-between min-h-[190px] group hover:shadow-md transition`}
          >
            <div className="max-w-[60%] z-10">
              <span className="text-[11px] font-bold text-[#ea580c] uppercase">
                {banner.badge}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-gray-900 mt-1 leading-snug">
                {banner.title}
              </h3>
              <p className="text-[11px] text-gray-500 mt-1 mb-4">
                {banner.subtitle}
              </p>
              <Link
                href="#shop"
                className="inline-flex items-center gap-1 text-xs font-bold text-gray-800 hover:text-[#4c35de] transition group-hover:translate-x-0.5"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-contain group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
