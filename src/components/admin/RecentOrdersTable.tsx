'use client';

import React from 'react';
import Link from 'next/link';

interface OrderItem {
  id: string;
  customerName: string;
  avatarColor: string;
  product: string;
  date: string;
  amount: string;
  payment: string;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Pending' | 'Cancelled';
}

const ORDERS: OrderItem[] = [
  {
    id: '#10482',
    customerName: 'Olivia Martin',
    avatarColor: 'from-pink-400 to-rose-500',
    product: 'Wireless Headphones',
    date: 'Sep 28, 2026',
    amount: '$249.00',
    payment: 'Visa •• 4242',
    status: 'Delivered',
  },
  {
    id: '#10481',
    customerName: 'Liam Carter',
    avatarColor: 'from-blue-400 to-indigo-500',
    product: 'Leather Backpack',
    date: 'Sep 28, 2026',
    amount: '$129.50',
    payment: 'PayPal',
    status: 'Processing',
  },
  {
    id: '#10480',
    customerName: 'Sophia Nguyen',
    avatarColor: 'from-emerald-400 to-teal-500',
    product: 'Running Sneakers',
    date: 'Sep 27, 2026',
    amount: '$164.00',
    payment: 'Mastercard •• 8812',
    status: 'Shipped',
  },
  {
    id: '#10479',
    customerName: 'Noah Patel',
    avatarColor: 'from-violet-400 to-purple-500',
    product: 'Smart Watch S2',
    date: 'Sep 27, 2026',
    amount: '$319.00',
    payment: 'Visa •• 1190',
    status: 'Pending',
  },
  {
    id: '#10478',
    customerName: 'Emma Brooks',
    avatarColor: 'from-amber-400 to-orange-500',
    product: 'Ceramic Mug Set',
    date: 'Sep 26, 2026',
    amount: '$48.00',
    payment: 'Apple Pay',
    status: 'Cancelled',
  },
  {
    id: '#10477',
    customerName: 'Lucas Rivera',
    avatarColor: 'from-cyan-400 to-blue-500',
    product: 'Desk Lamp Pro',
    date: 'Sep 26, 2026',
    amount: '$89.90',
    payment: 'PayPal',
    status: 'Delivered',
  },
];

const statusStyles: Record<OrderItem['status'], { bg: string; text: string; dot: string }> = {
  Delivered: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  Processing: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
  Shipped: { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
  Pending: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  Cancelled: { bg: 'bg-rose-50', text: 'text-rose-700', dot: 'bg-rose-500' },
};

export default function RecentOrdersTable() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-gray-900">Recent Orders</h3>
        <Link 
          href="#all-orders"
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition"
        >
          View all orders
        </Link>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-5 sm:-mx-6">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 font-semibold uppercase text-[10px] tracking-wider">
              <th className="py-3 px-5 sm:px-6">Order</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Payment</th>
              <th className="py-3 px-5 sm:px-6 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-gray-700">
            {ORDERS.map((order) => {
              const style = statusStyles[order.status];
              return (
                <tr key={order.id} className="hover:bg-gray-50/70 transition">
                  <td className="py-3.5 px-5 sm:px-6 font-bold text-gray-900">
                    {order.id}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-gray-800">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-tr ${order.avatarColor} text-white flex items-center justify-center font-bold text-[10px]`}>
                        {order.customerName.charAt(0)}
                      </div>
                      <span>{order.customerName}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-gray-600 font-medium">
                    {order.product}
                  </td>
                  <td className="py-3.5 px-4 text-gray-400 whitespace-nowrap">
                    {order.date}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-gray-900">
                    {order.amount}
                  </td>
                  <td className="py-3.5 px-4 text-gray-500 whitespace-nowrap">
                    {order.payment}
                  </td>
                  <td className="py-3.5 px-5 sm:px-6 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${style.bg} ${style.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {order.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
