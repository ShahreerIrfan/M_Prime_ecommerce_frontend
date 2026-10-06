export type UserRole = 'admin' | 'customer';

export interface User {
  id: number;
  username: string;
  email: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  roles: string[];
  avatarUrl?: string;
  phone?: string;
  address?: string;
  createdAt: string;
}

export interface AdminUser extends User {
  role: 'admin';
  permissions: {
    canManageUsers: true;
    canViewAnalytics: true;
    canManageProducts: true;
    canManageOrders: true;
  };
}

export interface CustomerUser extends User {
  role: 'customer';
  shippingAddress?: string;
  billingAddress?: string;
  totalOrders?: number;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: User;
}

export interface AdminStats {
  total_users: number;
  total_admins: number;
  total_customers: number;
  total_posts: number;
}

export interface LoginCredentials {
  username: string; // or email
  password: string;
}

export interface RegisterCustomerData {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface UpdateProfileData {
  firstName?: string;
  lastName?: string;
  displayName?: string;
  email?: string;
  phone?: string;
  address?: string;
}
