import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role?: 'customer' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<boolean>;
  logout: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authMode: 'login' | 'register';
  setAuthMode: (mode: 'login' | 'register') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('exotic-fiber-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to load user from localStorage', e);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Universal Demo Login
    // Allows any credentials to access the demo account
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const demoUser: User = {
      id: 'demo-user-001',
      email: email, // reflect back their email so it feels real
      firstName: 'Demo',
      lastName: 'User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'customer'
    };

    setUser(demoUser);
    localStorage.setItem('exotic-fiber-user', JSON.stringify(demoUser));
    setIsAuthModalOpen(false);
    return true;
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<boolean> => {
    // Universal Registration
    // Accepts any registration and logs them in immediately
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      firstName,
      lastName,
      avatar: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=555348&color=fff`,
      role: 'customer'
    };
    
    setUser(newUser);
    localStorage.setItem('exotic-fiber-user', JSON.stringify(newUser));
    setIsAuthModalOpen(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('exotic-fiber-user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode,
      }}
    >
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
