'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Calendar, ChevronDown, FileText, ShieldAlert } from 'lucide-react';
import Sidebar from '@/components/admin/Sidebar';
import TopNavbar from '@/components/admin/TopNavbar';
import MetricCards from '@/components/admin/MetricCards';
import SalesOverviewChart from '@/components/admin/SalesOverviewChart';
import RecentOrdersTable from '@/components/admin/RecentOrdersTable';
import TopSellingProducts from '@/components/admin/TopSellingProducts';
import CustomerOverview from '@/components/admin/CustomerOverview';
import LowStockProducts from '@/components/admin/LowStockProducts';

export default function AdminDashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState('Last 7 days');

  // Role authorization guard
  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push('/login');
      } else if (user.role !== 'admin' && !user.roles?.includes('administrator')) {
        router.push('/customer'); // Customer tried accessing admin dashboard
      }
    }
  }, [user, isLoading, router]);

  const adminDisplayName = user?.firstName || user?.displayName || user?.username || 'Alex';

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans flex flex-col lg:flex-row antialiased">
      {/* Sidebar Navigation */}
      <Sidebar 
        mobileOpen={mobileSidebarOpen} 
        onCloseMobile={() => setMobileSidebarOpen(false)} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Top Navbar */}
        <TopNavbar 
          onOpenMobile={() => setMobileSidebarOpen(true)} 
        />

        {/* Dashboard Body Content */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-6">
          
          {/* Header Row: Welcome & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  Welcome back, {adminDisplayName}!
                </h1>
                <span className="bg-purple-100 text-[#4c35de] text-[10px] font-black px-2 py-0.5 rounded-md">
                  ADMINISTRATOR
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Here&apos;s what&apos;s happening with your store today.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Date Filter Dropdown */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition text-xs font-bold text-gray-700 cursor-pointer shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{selectedRange}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>

              {/* View Report CTA */}
              <button className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition active:scale-95">
                <FileText className="w-3.5 h-3.5" />
                <span>View report</span>
              </button>
            </div>
          </div>

          {/* 1. Metric Cards (4 Cards Grid) */}
          <MetricCards />

          {/* 2. Sales Overview Chart */}
          <SalesOverviewChart />

          {/* 3. Recent Orders (2/3) & Top Selling Products (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8">
              <RecentOrdersTable />
            </div>
            <div className="lg:col-span-4">
              <TopSellingProducts />
            </div>
          </div>

          {/* 4. Customer Overview (1/2) & Low Stock Products (1/2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <CustomerOverview />
            <LowStockProducts />
          </div>

        </main>

        {/* Admin Footer */}
        <footer className="border-t border-gray-200/70 bg-white py-4 px-4 sm:px-8 mt-auto text-xs text-gray-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              © 2026 <strong className="text-gray-600">Khamba Inc</strong>. All rights reserved.
            </div>
            <div className="flex items-center gap-4 font-medium text-gray-500">
              <Link href="#" className="hover:text-gray-900 transition">Privacy</Link>
              <Link href="#" className="hover:text-gray-900 transition">Terms</Link>
              <Link href="#" className="hover:text-gray-900 transition">Help &amp; Support</Link>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400 font-mono text-[11px]">v1.0.0</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
