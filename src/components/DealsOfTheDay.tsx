'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Plus, Star, Leaf, Snowflake, ShoppingCart, Check } from 'lucide-react';

export default function DealsOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    days: 37,
    hours: 9,
    minutes: 33,
    seconds: 58,
  });
  const [addedDealId, setAddedDealId] = useState<string | null>(null);
  const [isMainAdded, setIsMainAdded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMiniAdd = (id: string) => {
    setAddedDealId(id);
    setTimeout(() => setAddedDealId(null), 1500);
  };

  const handleMainAdd = () => {
    setIsMainAdded(true);
    setTimeout(() => setIsMainAdded(false), 1500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Deals Of The Day
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            The freshest greengrocer products are waiting for you
          </p>
        </div>
        <Link 
          href="#deals" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#4c35de] transition group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: 2 Mini Deal Cards (4 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Mini Deal 1 */}
          <div className="bg-white border border-gray-100 hover:border-purple-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm transition">
            <div className="flex gap-4">
              <div className="relative w-28 h-28 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden p-2 flex items-center justify-center">
                <span className="absolute top-1.5 left-1.5 bg-[#ea3b43] text-white text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
                  14%
                </span>
                <Image
                  src="/assets/asset 46.jpeg"
                  alt="USDA Choice Angus Beef T-Bone Steak"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-[#eff6ff] text-[#2563eb] px-1.5 py-0.5 rounded">
                    <Snowflake className="w-2.5 h-2.5" /> COLD SALE
                  </span>
                  <button className="text-gray-300 hover:text-[#ea3b43]">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mt-1 line-clamp-2">
                  USDA Choice Angus Beef T-Bone Steak – 0.70-1.50 lbs ...
                </h3>

                <div className="flex items-center gap-1 my-1">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400">3</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-black text-[#ea3b43]">$12.89</span>
                  <span className="text-xs text-gray-400 line-through">$14.89</span>
                </div>

                <button
                  onClick={() => handleMiniAdd('mini-1')}
                  className="mt-2 w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg border border-purple-200 text-[#4c35de] hover:bg-[#4c35de] hover:text-white transition"
                >
                  {addedDealId === 'mini-1' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Added
                    </>
                  ) : (
                    <>
                      Add to cart <Plus className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Countdown bar */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <div className="flex items-center gap-1 font-mono font-bold text-gray-800">
                <span className="bg-gray-100 px-1.5 py-0.5 rounded">{timeLeft.days}</span>
                <span>:</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] text-gray-400">Remains until the end of the offer</span>
            </div>
          </div>

          {/* Mini Deal 2 */}
          <div className="bg-white border border-gray-100 hover:border-purple-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm transition">
            <div className="flex gap-4">
              <div className="relative w-28 h-28 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden p-2 flex items-center justify-center">
                <span className="absolute top-1.5 left-1.5 bg-[#ea3b43] text-white text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
                  23%
                </span>
                <Image
                  src="/assets/asset 48.jpeg"
                  alt="USDA Choice Angus Beef Stew Meat"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-[#eff6ff] text-[#2563eb] px-1.5 py-0.5 rounded">
                    <Snowflake className="w-2.5 h-2.5" /> COLD SALE
                  </span>
                  <button className="text-gray-300 hover:text-[#ea3b43]">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mt-1 line-clamp-2">
                  USDA Choice Angus Beef Stew Meat – 1lb
                </h3>

                <div className="flex items-center gap-1 my-1">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400">3</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-black text-[#ea3b43]">$13.89</span>
                  <span className="text-xs text-gray-400 line-through">$17.89</span>
                </div>

                <button
                  onClick={() => handleMiniAdd('mini-2')}
                  className="mt-2 w-full flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg border border-purple-200 text-[#4c35de] hover:bg-[#4c35de] hover:text-white transition"
                >
                  {addedDealId === 'mini-2' ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Added
                    </>
                  ) : (
                    <>
                      Add to cart <Plus className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Countdown bar */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <div className="flex items-center gap-1 font-mono font-bold text-gray-800">
                <span className="bg-gray-100 px-1.5 py-0.5 rounded">{timeLeft.days - 1}</span>
                <span>:</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] text-gray-400">Remains until the end of the offer</span>
            </div>
          </div>
        </div>

        {/* Right: Big Showcase Deal Card (7 cols on lg) */}
        <div className="lg:col-span-7 bg-white border-2 border-red-500/20 hover:border-red-500/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-sm relative">
          {/* Top Left Discount Tag */}
          <span className="absolute top-4 left-4 bg-[#ea3b43] text-white text-xs font-black px-2.5 py-1 rounded">
            75%
          </span>
          <button className="absolute top-4 right-4 text-gray-300 hover:text-[#ea3b43]">
            <Heart className="w-5 h-5" />
          </button>

          {/* Large Image */}
          <div className="relative w-52 h-64 sm:w-64 sm:h-72 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/assets/asset 22.png"
              alt="100 Percent Apple Juice Bottle"
              fill
              className="object-contain p-2 hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0 text-left">
            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase bg-[#e8f8ec] text-[#16a34a] px-2 py-0.5 rounded mb-2">
              <Leaf className="w-3 h-3" /> ORGANIC
            </span>

            <div className="flex items-center gap-1 mb-2">
              <div className="flex text-[#f59e0b]">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-medium">3</span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
              100 Percent Apple Juice – 64 fl oz Bottle
            </h3>

            <div className="flex items-baseline gap-2.5 my-3">
              <span className="text-2xl font-black text-[#ea3b43]">$0.50</span>
              <span className="text-sm font-semibold text-gray-400 line-through">$1.99</span>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.
            </p>

            {/* Stock Progress */}
            <div className="text-[11px] mb-5">
              <div className="text-gray-400 mb-1">This product is about to run out</div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1.5 overflow-hidden">
                <div className="h-full bg-[#ea3b43] rounded-full" style={{ width: '37%' }} />
              </div>
              <div className="text-gray-500 font-semibold">
                available only: <strong className="text-gray-900">37</strong>
              </div>
            </div>

            {/* Big Green Add To Cart */}
            <button
              onClick={handleMainAdd}
              className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white shadow-md transition ${
                isMainAdded
                  ? 'bg-[#15803d]'
                  : 'bg-[#16a34a] hover:bg-[#15803d] hover:shadow-lg'
              }`}
            >
              {isMainAdded ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" /> Add to cart
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
