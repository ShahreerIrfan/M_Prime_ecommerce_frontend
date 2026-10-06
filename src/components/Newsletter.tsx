'use client';

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="bg-[#f9fafb] border-t border-b border-gray-100 py-10 px-4 mt-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left Heading */}
        <div className="max-w-md text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Join our newsletter for £10 offs
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Register now to get latest updates on promotions &amp; coupons. Don&apos;t worry, we not spam!
          </p>
        </div>

        {/* Right Subscription Form */}
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <div className="absolute left-4 text-gray-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-white text-sm text-gray-800 placeholder-gray-400 rounded-xl pl-11 pr-28 py-3.5 border border-gray-200 focus:border-[#4c35de] focus:outline-none shadow-sm transition"
            />
            <button
              type="submit"
              className="absolute right-1.5 bg-[#4c35de] hover:bg-[#3b27cb] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg transition shadow-sm"
            >
              {subscribed ? (
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> SENT
                </span>
              ) : (
                'SEND'
              )}
            </button>
          </form>
          <p className="text-[11px] text-gray-400 mt-2 text-center lg:text-left">
            By subscribing you agree to our <strong className="text-gray-600 underline cursor-pointer">Terms &amp; Conditions and Privacy &amp; Cookies Policy.</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
