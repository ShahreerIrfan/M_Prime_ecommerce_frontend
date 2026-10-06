'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { User, LoginCredentials, RegisterCustomerData, AuthResponse } from '@/types/user';
import { userController } from '@/lib/api/userController';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; message?: string; redirect?: string }>;
  register: (data: RegisterCustomerData) => Promise<{ success: boolean; message?: string; redirect?: string }>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Load persisted token and profile on client mount
    const storedToken = localStorage.getItem('auth_token');
    const storedUser = localStorage.getItem('auth_user');

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to parse stored user:', err);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response: AuthResponse & { redirect?: string } = await userController.login(credentials);

      if (response.success && response.token && response.user) {
        setToken(response.token);
        setUser(response.user);

        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('auth_user', JSON.stringify(response.user));
        document.cookie = `auth_token=${response.token}; path=/; max-age=604800; SameSite=Lax`;
        document.cookie = `user_role=${response.user.role}; path=/; max-age=604800; SameSite=Lax`;

        const redirectPath = response.user.role === 'admin' ? '/admin' : '/customer';
        router.push(redirectPath);
        return { success: true, redirect: redirectPath };
      } else {
        return { success: false, message: response.message || 'Login failed. Please check your credentials.' };
      }
    } catch (err) {
      return { success: false, message: 'Server connection error. Please make sure WordPress is running.' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterCustomerData) => {
    setIsLoading(true);
    try {
      const response: AuthResponse & { redirect?: string } = await userController.registerCustomer(data);

      if (response.success && response.token && response.user) {
        setToken(response.token);
        setUser(response.user);

        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('auth_user', JSON.stringify(response.user));
        document.cookie = `auth_token=${response.token}; path=/; max-age=604800; SameSite=Lax`;
        document.cookie = `user_role=${response.user.role}; path=/; max-age=604800; SameSite=Lax`;

        router.push('/customer');
        return { success: true, redirect: '/customer' };
      } else {
        return { success: false, message: response.message || 'Registration failed.' };
      }
    } catch (err) {
      return { success: false, message: 'Server connection error. Please make sure WordPress is running.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'user_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/login');
  };

  const refreshUser = async () => {
    if (!token) return;
    try {
      const res = await userController.getMe(token);
      if (res.success && res.user) {
        setUser(res.user);
        localStorage.setItem('auth_user', JSON.stringify(res.user));
      }
    } catch (err) {
      console.error('Failed to refresh user:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, register, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
