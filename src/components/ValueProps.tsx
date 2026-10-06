'use client';

import React from 'react';
import { CreditCard, Tag, ShieldCheck, Truck } from 'lucide-react';

const PROPS = [
  {
    icon: CreditCard,
    title: 'Payment only online',
    description: 'Tasigforsamhet beteendedesign. Mobile checkout. Ylig karrtorpa.',
  },
  {
    icon: Tag,
    title: 'New stocks and sales',
    description: 'Tasigforsamhet beteendedesign. Mobile checkout. Ylig karrtorpa.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality assurance',
    description: 'Tasigforsamhet beteendedesign. Mobile checkout. Ylig karrtorpa.',
  },
  {
    icon: Truck,
    title: 'Delivery from 1 hour',
    description: 'Tasigforsamhet beteendedesign. Mobile checkout. Ylig karrtorpa.',
  },
];

export default function ValueProps() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-100 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROPS.map((prop, idx) => {
          const Icon = prop.icon;
          return (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50/80 transition">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-[#4c35de]">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 leading-snug">
                  {prop.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
