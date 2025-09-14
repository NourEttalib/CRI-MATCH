import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  userType: 'startup' | 'investor';
  profile: StartupProfile | InvestorProfile;
}

interface StartupProfile {
  description?: string;
  website?: string;
  keywords: string[];
  sectors: string[];
  stage?: string;
  country?: string;
  ticketMin: number;
  ticketMax: number;
}

interface InvestorProfile {
  description?: string;
  website?: string;
  keywords: string[];
  thesisSectors: string[];
  thesisStages: string[];
  thesisCountries: string[];
  ticketMin: number;
  ticketMax: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, userType: 'startup' | 'investor', profileData: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Load user from localStorage on initialization
    const savedUser = localStorage.getItem('cri-match-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email: string, password: string) => {
    // Mock login - simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user exists in localStorage
    const savedUser = localStorage.getItem('cri-match-user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      if (parsedUser.email === email) {
        setUser(parsedUser);
        return;
      }
    }
    
    // Mock user data if no saved user found
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email,
      userType: 'startup',
      profile: {
        description: 'Sample startup description',
        website: 'https://sample.com',
        keywords: ['tech', 'innovation'],
        sectors: ['SaaS'],
        stage: 'SEED',
        country: 'Maroc',
        ticketMin: 100000,
        ticketMax: 500000
      }
    };
    
    localStorage.setItem('cri-match-user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const register = async (name: string, email: string, password: string, userType: 'startup' | 'investor', profileData: any) => {
    // Mock registration - simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Date.now().toString(),
      name: name,
      email: email,
      userType: userType,
      profile: profileData
    };
    
    // Save to localStorage
    localStorage.setItem('cri-match-user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem('cri-match-user');
    setUser(null);
  };

  const isAuthenticated = !!user;

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};