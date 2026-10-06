'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Lock, User, ArrowRight, Shield, ShoppingBag, AlertCircle, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const { login, isLoading, user } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!username || !password) {
      setErrorMsg('Please enter both username/email and password.');
      return;
    }

    const res = await login({ username, password });
    if (res.success) {
      setSuccessMsg('Login successful! Redirecting...');
    } else {
      setErrorMsg(res.message || 'Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#4c35de] flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
            g
          </div>
          <span className="text-3xl font-black tracking-tight text-gray-900">
            grogin<span className="text-[#4c35de]">.</span>
          </span>
        </Link>
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
          Sign In to Your Account
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          Unified portal for both <strong className="text-gray-700">Administrators</strong> and <strong className="text-gray-700">Customers</strong>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 sm:px-10 shadow-lg shadow-slate-200/50 rounded-2xl border border-gray-100">
          
          {/* Error Alert */}
          {errorMsg && (
            <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700 font-medium">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Success Alert */}
          {successMsg && (
            <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-xs text-emerald-700 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username / Email */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Username or Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin or customer_username"
                  className="w-full bg-gray-50 hover:bg-gray-100/80 focus:bg-white text-xs sm:text-sm text-gray-900 placeholder-gray-400 rounded-xl pl-10 pr-4 py-3 border border-gray-200 focus:border-[#4c35de] focus:outline-none transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-gray-700">
                  Password
                </label>
                <Link href="#" className="text-[11px] font-semibold text-[#4c35de] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 hover:bg-gray-100/80 focus:bg-white text-xs sm:text-sm text-gray-900 placeholder-gray-400 rounded-xl pl-10 pr-4 py-3 border border-gray-200 focus:border-[#4c35de] focus:outline-none transition"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-[#4c35de] focus:ring-[#4c35de] mr-2"
                />
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-[#4c35de] hover:bg-[#3b27cb] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md shadow-purple-200 transition active:scale-98 disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <span>Verifying credentials...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Info Badge Explaining RBAC */}
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-2.5">
            <div className="flex items-start gap-2 text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-xl">
              <Shield className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Admin Users:</strong> Created inside WordPress (`/wp-admin`), automatically routed to <strong>/admin</strong> dashboard.
              </span>
            </div>
            <div className="flex items-start gap-2 text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-xl">
              <ShoppingBag className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Customers:</strong> Routed to personal <strong>/customer</strong> portal for order tracking &amp; profile.
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Don&apos;t have an account yet?{' '}
            <Link href="/register" className="font-bold text-[#4c35de] hover:underline">
              Create a Customer Account
            </Link>
          </div>

        </div>

        {/* Back to Home link */}
        <div className="mt-4 text-center">
          <Link href="/" className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition">
            ← Back to Store Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
