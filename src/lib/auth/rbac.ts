import { User, UserRole } from '@/types/user';

/**
 * Check if the user is an Administrator
 */
export function isAdmin(user?: User | null): boolean {
  return user?.role === 'admin' || user?.roles?.includes('administrator') || false;
}

/**
 * Check if the user is a Customer
 */
export function isCustomer(user?: User | null): boolean {
  return user?.role === 'customer' || user?.roles?.includes('customer') || false;
}

/**
 * Check if a user has access to a specific dashboard route
 */
export function canAccessRoute(user: User | null | undefined, allowedRoles: UserRole[]): boolean {
  if (!user) return false;
  return allowedRoles.includes(user.role);
}
