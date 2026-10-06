import { 
  AuthResponse, 
  LoginCredentials, 
  RegisterCustomerData, 
  User, 
  AdminStats, 
  UpdateProfileData 
} from '@/types/user';

const API_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost/wp-json';

class UserController {
  private getHeaders(token?: string) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  /**
   * Register a new Customer
   */
  async registerCustomer(data: RegisterCustomerData): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
      }),
    });

    return res.json();
  }

  /**
   * Login user (Admin or Customer)
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(credentials),
    });

    return res.json();
  }

  /**
   * Get Current Authenticated User Profile
   */
  async getMe(token: string): Promise<{ success: boolean; user?: User; message?: string }> {
    const res = await fetch(`${API_BASE_URL}/api/v1/auth/me`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });

    return res.json();
  }

  /**
   * Customer Controller: Update Profile
   */
  async updateCustomerProfile(token: string, data: UpdateProfileData): Promise<{ success: boolean; customer?: User; message?: string }> {
    const res = await fetch(`${API_BASE_URL}/api/v1/customer/profile`, {
      method: 'PATCH',
      headers: this.getHeaders(token),
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        display_name: data.displayName,
        email: data.email,
        phone: data.phone,
        address: data.address,
      }),
    });

    return res.json();
  }

  /**
   * Admin Controller: Get All Users (Admin Only)
   */
  async getAdminUsers(token: string, role?: 'admin' | 'customer', search?: string): Promise<{ success: boolean; users?: User[]; total?: number }> {
    const query = new URLSearchParams();
    if (role) query.append('role', role === 'admin' ? 'administrator' : 'customer');
    if (search) query.append('search', search);

    const res = await fetch(`${API_BASE_URL}/api/v1/admin/users?${query.toString()}`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });

    return res.json();
  }

  /**
   * Admin Controller: Get Dashboard Overview Stats (Admin Only)
   */
  async getAdminStats(token: string): Promise<{ success: boolean; stats?: AdminStats }> {
    const res = await fetch(`${API_BASE_URL}/api/v1/admin/stats`, {
      method: 'GET',
      headers: this.getHeaders(token),
    });

    return res.json();
  }
}

export const userController = new UserController();
