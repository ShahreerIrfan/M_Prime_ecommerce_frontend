'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { userController } from '@/lib/api/userController';
import { 
  ShoppingBag, 
  User, 
  MapPin, 
  Heart, 
  LogOut, 
  Store, 
  Package, 
  Clock, 
  CheckCircle, 
  Truck, 
  Save, 
  AlertCircle 
} from 'lucide-react';

export default function CustomerDashboardPage() {
  const { user, token, logout, refreshUser, isLoading } = useAuth();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses' | 'wishlist'>('orders');

  // Profile Form state
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        displayName: user.displayName || user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
      });
    }
  }, [user]);

  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    setIsSaving(true);
    setSaveSuccess(false);
    setSaveError('');

    try {
      const res = await userController.updateCustomerProfile(token, profileData);
      if (res.success) {
        setSaveSuccess(true);
        await refreshUser();
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setSaveError(res.message || 'Failed to update profile.');
      }
    } catch (err) {
      setSaveError('Network error while saving changes.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-600">
          <div className="w-5 h-5 border-2 border-[#4c35de] border-t-transparent rounded-full animate-spin" />
          <span>Loading customer portal...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-100 h-16 sticky top-0 z-30 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#4c35de] flex items-center justify-center text-white font-extrabold text-xl">
              g
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              grogin<span className="text-[#4c35de]">.</span>
            </span>
          </Link>
          <span className="hidden sm:inline text-xs font-bold bg-[#e8f8ec] text-[#16a34a] px-2.5 py-1 rounded-full">
            Customer Portal
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#4c35de] transition"
          >
            <Store className="w-4 h-4" />
            <span className="hidden sm:inline">Continue Shopping</span>
          </Link>

          <button
            onClick={logout}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-rose-600 transition px-3 py-1.5 rounded-lg hover:bg-rose-50"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-6">
        
        {/* Welcome Header Banner */}
        <div className="bg-gradient-to-r from-[#4c35de] to-[#7c3aed] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md shadow-purple-500/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black text-2xl">
              {user.firstName ? user.firstName.charAt(0) : user.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black">
                  Welcome back, {user.firstName || user.displayName || user.username}!
                </h1>
                <span className="bg-emerald-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  VERIFIED CUSTOMER
                </span>
              </div>
              <p className="text-xs text-purple-100 mt-1">
                Manage your organic orders, delivery addresses, and personal preferences
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl">
            <div className="text-left">
              <span className="text-[10px] text-purple-200 block uppercase font-bold tracking-wider">Account Email</span>
              <span className="text-xs font-semibold text-white">{user.email}</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid & Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Navigation Sidebar (3 cols) */}
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-3 shadow-xs space-y-1">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition ${
                activeTab === 'orders'
                  ? 'bg-[#4c35de] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>My Orders</span>
              <span className="ml-auto bg-purple-100 text-[#4c35de] text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                2
              </span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition ${
                activeTab === 'profile'
                  ? 'bg-[#4c35de] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile Settings</span>
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition ${
                activeTab === 'addresses'
                  ? 'bg-[#4c35de] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Saved Addresses</span>
            </button>

            <button
              onClick={() => setActiveTab('wishlist')}
              className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition ${
                activeTab === 'wishlist'
                  ? 'bg-[#4c35de] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>My Wishlist</span>
            </button>
          </div>

          {/* Right Tab Content (9 cols) */}
          <div className="lg:col-span-9 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs">
            
            {/* TAB 1: MY ORDERS */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Order History &amp; Tracking</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Track your past and in-progress grocery deliveries</p>
                  </div>
                </div>

                {/* Active Order Card */}
                <div className="border border-purple-200/80 rounded-2xl p-5 bg-[#fcfbff]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-100 pb-4 mb-4">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Active Delivery</span>
                      <span className="text-sm font-extrabold text-gray-900">Order #GRG-8921</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#eff6ff] text-[#2563eb] px-3 py-1 rounded-full">
                      <Truck className="w-3.5 h-3.5" /> Out for Delivery
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-gray-400 block mb-0.5">Items</span>
                      <span className="font-semibold text-gray-800">100% Apple Juice (64oz), Angus Beef Steak</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-0.5">Estimated Arrival</span>
                      <span className="font-semibold text-emerald-600 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Today by 6:30 PM
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-0.5">Total Paid</span>
                      <span className="font-black text-gray-900 text-sm">$34.56 (Credit Card)</span>
                    </div>
                  </div>
                </div>

                {/* Past Order Card */}
                <div className="border border-gray-100 rounded-2xl p-5 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4 mb-4">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase block">Completed Order</span>
                      <span className="text-sm font-extrabold text-gray-900">Order #GRG-8104</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#e8f8ec] text-[#16a34a] px-3 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" /> Delivered on Sep 24, 2026
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-gray-400 block mb-0.5">Items</span>
                      <span className="font-semibold text-gray-800">Cantaloupe Melon, Vital Farms Eggs</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-0.5">Delivery Time</span>
                      <span className="font-semibold text-gray-800">1 Hour Express</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-0.5">Total Paid</span>
                      <span className="font-black text-gray-900 text-sm">$18.90</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROFILE SETTINGS */}
            {activeTab === 'profile' && (
              <div>
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <h3 className="text-base font-bold text-gray-900">Personal Information</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Update your personal and contact details</p>
                </div>

                {saveSuccess && (
                  <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-700 font-bold">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Your profile has been saved and synced with WordPress!</span>
                  </div>
                )}

                {saveError && (
                  <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-700 font-bold">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>{saveError}</span>
                  </div>
                )}

                <form onSubmit={handleProfileSave} className="space-y-4 max-w-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        value={profileData.firstName}
                        onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                        className="w-full bg-gray-50 text-xs sm:text-sm text-gray-900 rounded-xl px-3.5 py-2.5 border border-gray-200 focus:border-[#4c35de] focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={profileData.lastName}
                        onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                        className="w-full bg-gray-50 text-xs sm:text-sm text-gray-900 rounded-xl px-3.5 py-2.5 border border-gray-200 focus:border-[#4c35de] focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Display Name</label>
                    <input
                      type="text"
                      value={profileData.displayName}
                      onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                      className="w-full bg-gray-50 text-xs sm:text-sm text-gray-900 rounded-xl px-3.5 py-2.5 border border-gray-200 focus:border-[#4c35de] focus:outline-none transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="w-full bg-gray-50 text-xs sm:text-sm text-gray-900 rounded-xl px-3.5 py-2.5 border border-gray-200 focus:border-[#4c35de] focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-gray-50 text-xs sm:text-sm text-gray-900 rounded-xl px-3.5 py-2.5 border border-gray-200 focus:border-[#4c35de] focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Default Delivery Address</label>
                    <input
                      type="text"
                      value={profileData.address}
                      onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                      placeholder="Street address, apartment, city, zip code"
                      className="w-full bg-gray-50 text-xs sm:text-sm text-gray-900 rounded-xl px-3.5 py-2.5 border border-gray-200 focus:border-[#4c35de] focus:outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSaving}
                    className="inline-flex items-center gap-2 bg-[#4c35de] hover:bg-[#3b27cb] text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition disabled:opacity-70 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isSaving ? 'Saving...' : 'Save Profile Changes'}</span>
                  </button>
                </form>
              </div>
            )}

            {/* TAB 3: ADDRESSES */}
            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-base font-bold text-gray-900">Saved Addresses</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Manage your primary shipping and billing locations</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-purple-200 rounded-2xl p-5 bg-[#fcfbff]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#4c35de]">Primary Delivery Address</span>
                      <span className="bg-purple-100 text-[#4c35de] text-[10px] font-bold px-2 py-0.5 rounded-full">DEFAULT</span>
                    </div>
                    <p className="text-xs font-bold text-gray-800">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {user.address || '742 Evergreen Terrace, Springfield, OR 97477'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Phone: {user.phone || '+1 (555) 019-2834'}</p>
                  </div>

                  <div className="border border-gray-200 border-dashed rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer">
                    <MapPin className="w-6 h-6 text-gray-400 mb-2" />
                    <span className="text-xs font-bold text-gray-700">+ Add New Address</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: WISHLIST */}
            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-base font-bold text-gray-900">My Saved Favorites</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Items you&apos;ve added to your wishlist</p>
                </div>

                <div className="p-8 text-center text-gray-400 space-y-3">
                  <Heart className="w-10 h-10 mx-auto text-gray-300" />
                  <p className="text-xs text-gray-500">Your wishlist is currently synced with your account.</p>
                  <Link
                    href="/"
                    className="inline-block bg-[#4c35de] text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-[#3b27cb] transition"
                  >
                    Browse Grogin Products
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>

      </main>
    </div>
  );
}
