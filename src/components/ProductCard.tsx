'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Plus, Star, Leaf, Snowflake, Check } from 'lucide-react';
import { ProductItem } from '@/data/mockData';

interface ProductCardProps {
  product: ProductItem;
  showStockBar?: boolean;
}

export default function ProductCard({ product, showStockBar = false }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group relative bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg rounded-xl p-3.5 flex flex-col justify-between transition duration-200 h-full">
      {/* Top Header: Discount & Wishlist */}
      <div className="flex items-center justify-between z-10">
        {product.discount ? (
          <span className="bg-[#ea3b43] text-white text-[11px] font-bold px-1.5 py-0.5 rounded">
            {product.discount}
          </span>
        ) : (
          <span />
        )}
        <button
          onClick={handleToggleWishlist}
          aria-label="Add to wishlist"
          className="p-1 rounded-full text-gray-400 hover:text-[#ea3b43] hover:bg-gray-50 transition"
        >
          <Heart
            className={`w-4 h-4 ${
              isWishlisted ? 'fill-[#ea3b43] text-[#ea3b43]' : ''
            }`}
          />
        </button>
      </div>

      {/* Product Image */}
      <Link href={`#product-${product.id}`} className="block relative w-full h-36 my-2 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-2 group-hover:scale-105 transition duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
      </Link>

      {/* Category Tag & Add To Cart Button */}
      <div className="flex items-center justify-between mt-1 mb-2">
        {product.categoryTag ? (
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
              product.tagColor === 'green'
                ? 'bg-[#e8f8ec] text-[#16a34a]'
                : product.tagColor === 'blue'
                ? 'bg-[#eff6ff] text-[#2563eb]'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {product.tagColor === 'green' && <Leaf className="w-2.5 h-2.5" />}
            {product.tagColor === 'blue' && <Snowflake className="w-2.5 h-2.5" />}
            {product.categoryTag}
          </span>
        ) : (
          <span />
        )}

        <button
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className={`w-7 h-7 rounded-full flex items-center justify-center transition shadow-sm ${
            isAdded
              ? 'bg-[#16a34a] text-white'
              : 'bg-[#4c35de] hover:bg-[#3b27cb] text-white hover:scale-105'
          }`}
        >
          {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-4 h-4" />}
        </button>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-1 mb-1.5">
        <div className="flex items-center text-[#f59e0b]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating
                  ? 'fill-[#f59e0b] text-[#f59e0b]'
                  : 'text-gray-200'
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] text-gray-400 font-medium">
          {product.reviewsCount}
        </span>
      </div>

      {/* Title */}
      <Link href={`#product-${product.id}`} className="block mb-2">
        <h3 className="text-xs font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-[#4c35de] transition">
          {product.title}
        </h3>
      </Link>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-sm sm:text-base font-black text-[#ea3b43]">
          ${product.currentPrice.toFixed(2)}
        </span>
        {product.oldPrice && (
          <span className="text-xs font-semibold text-gray-400 line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Stock Bar or Stock Status */}
      {showStockBar && product.stockAvailable !== undefined ? (
        <div className="mt-2 pt-2 border-t border-gray-100 text-[10px]">
          <div className="text-gray-400 mb-1">This product is about to run out</div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1 overflow-hidden">
            <div
              className={`h-full rounded-full ${
                product.stockAvailable < 30 ? 'bg-[#ea3b43]' : 'bg-[#f59e0b]'
              }`}
              style={{
                width: `${Math.min(
                  100,
                  (product.stockAvailable / (product.stockTotal || 100)) * 100
                )}%`,
              }}
            />
          </div>
          <div className="text-gray-500 font-semibold">
            available only: <strong className="text-gray-900">{product.stockAvailable}</strong>
          </div>
        </div>
      ) : (
        <div className="mt-1 text-[11px] font-bold">
          {product.stockStatus === 'out_of_stock' ? (
            <span className="text-[#ea3b43]">OUT OF STOCK</span>
          ) : (
            <span className="text-[#16a34a]">IN STOCK</span>
          )}
        </div>
      )}
    </div>
  );
}
