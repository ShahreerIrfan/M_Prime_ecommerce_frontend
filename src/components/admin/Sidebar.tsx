'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Package, 
  Palette, 
  BookOpen, 
  Megaphone, 
  ShoppingBag, 
  Users, 
  Store, 
  CreditCard, 
  Settings, 
  Terminal, 
  ExternalLink,
  ChevronDown,
  ChevronRight,
  PanelLeftClose,
  PanelLeft,
  X,
  LogOut,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface SidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({ mobileOpen = false, onCloseMobile }: SidebarProps) {
  const { logout } = useAuth();
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [productsOpen, setProductsOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { 
      name: 'Products', 
      icon: Package, 
      href: '#products',
      hasSubmenu: true,
      subItems: [
        { name: 'All Products', href: '#all-products' },
        { name: 'Categories', href: '#categories' },
      ],
    },
    { name: 'Appearance', icon: Palette, href: '#appearance' },
    { name: 'Blog', icon: BookOpen, href: '#blog' },
    { name: 'Marketing', icon: Megaphone, href: '#marketing' },
    { name: 'Orders', icon: ShoppingBag, href: '#orders' },
    { name: 'Users', icon: Users, href: '#users' },
    { name: 'Partner Stores', icon: Store, href: '#partner-stores' },
    { name: 'Expenses', icon: CreditCard, href: '#expenses' },
    { name: 'Settings', icon: Settings, href: '#settings' },
    { name: 'Logs', icon: Terminal, href: '#logs', badge: 'LIVE', badgeColor: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* Sticky Left Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 flex flex-col bg-[#0b0f19] text-[#94a3b8] border-r border-[#1e293b] transition-all duration-300 ease-in-out ${
          collapsed ? 'w-20' : 'w-64'
        } ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} h-screen select-none shrink-0`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-[#1e293b]/70 shrink-0">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z" />
              </svg>
            </div>
            {!collapsed && (
              <span className="text-lg font-bold text-white tracking-tight">
                Khamba
              </span>
            )}
          </Link>

          {/* Collapse Icon */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
            className="hidden lg:flex text-gray-400 hover:text-white p-1 rounded-md hover:bg-[#1e293b] transition"
          >
            {collapsed ? <PanelLeft className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>

          {/* Mobile close button */}
          <button
            onClick={onCloseMobile}
            className="lg:hidden text-gray-400 hover:text-white p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean Menu List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 scrollbar-thin scrollbar-thumb-gray-800">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.name;

            if (item.hasSubmenu) {
              return (
                <div key={idx} className="space-y-1">
                  <button
                    onClick={() => {
                      if (!collapsed) {
                        setProductsOpen(!productsOpen);
                      }
                      setActiveMenu(item.name);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-[#6366f1] text-white shadow-sm shadow-indigo-500/30'
                        : 'hover:bg-[#1e293b]/70 hover:text-gray-200 text-gray-400'
                    }`}
                    title={collapsed ? item.name : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#64748b]'}`} />
                      {!collapsed && <span>{item.name}</span>}
                    </div>

                    {!collapsed && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 opacity-80 ${
                          productsOpen ? 'rotate-0' : '-rotate-90'
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu (All Products, Categories) */}
                  {!collapsed && productsOpen && item.subItems && (
                    <div className="pl-9 pr-2 py-1 space-y-1">
                      {item.subItems.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          onClick={() => setActiveMenu(sub.name)}
                          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition ${
                            activeMenu === sub.name
                              ? 'text-indigo-400 bg-[#1e293b]/60 font-semibold'
                              : 'text-gray-500 hover:text-gray-300 hover:bg-[#1e293b]/40'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={idx}>
                <Link
                  href={item.href}
                  onClick={() => setActiveMenu(item.name)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-[#6366f1] text-white shadow-sm shadow-indigo-500/30'
                      : 'hover:bg-[#1e293b]/70 hover:text-gray-200 text-gray-400'
                  }`}
                  title={collapsed ? item.name : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#64748b]'}`} />
                    {!collapsed && <span>{item.name}</span>}
                  </div>

                  {!collapsed && (
                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${item.badgeColor || 'bg-[#1e293b] text-gray-300'}`}>
                          {item.badge}
                        </span>
                      )}
                      {!item.badge && item.name !== 'Dashboard' && (
                        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                      )}
                    </div>
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Store & Logout Footer */}
        <div className="p-3 border-t border-[#1e293b]/70 shrink-0 space-y-1">
          {!collapsed && (
            <span className="px-3 text-[10px] font-black text-[#475569] uppercase tracking-wider block mb-1">
              STORE
            </span>
          )}

          {/* View storefront */}
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between p-2.5 rounded-xl bg-[#111827] border border-[#1e293b] hover:border-indigo-500/50 hover:bg-[#161f33] transition group text-gray-300"
            title="View storefront"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#1e293b] flex items-center justify-center text-indigo-400 group-hover:bg-[#6366f1] group-hover:text-white transition">
                <Store className="w-4 h-4" />
              </div>
              {!collapsed && (
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-gray-200">View storefront</span>
                  <span className="text-[10px] text-gray-500">grogin.store</span>
                </div>
              )}
            </div>
            {!collapsed && <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-indigo-400 transition" />}
          </Link>

          {/* Logout */}
          <button
            onClick={logout}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-400 hover:text-rose-400 hover:bg-[#1e293b]/50 rounded-xl transition text-left cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
