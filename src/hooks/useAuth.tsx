import endPoints from '@/services/api';
import axios, { AxiosError } from 'axios';
import Cookie from 'js-cookie';
import React, { createContext, useContext, useState } from 'react';

// eslint-disable-next-line no-unused-vars
enum roleEnum {
  // eslint-disable-next-line no-unused-vars
  customer = 'customer',
  // eslint-disable-next-line no-unused-vars
  admin = 'admin',
}

type User = {
  avatar: string;
  creationAt: string;
  email: string;
  id: number;
  role: roleEnum;
  updatedAt: string;
};

type UserContext = {
  user: User | null;
  signIn: {
    // eslint-disable-next-line no-unused-vars
    fn: (email: string, password: string) => Promise<void>;
    loading: boolean;
    error: string;
  };
};

const defaultState = {} as UserContext;

const AuthContext = createContext(defaultState);

export function ProviderAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const {
        data: { access_token },
      } = await axios.post(
        endPoints.auth.login,
        {
          email,
          password,
        },
        {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
          },
        }
      );

      if (access_token) {
        Cookie.set('token', access_token, { expires: 5 });
        setError('');

        axios.defaults.headers.Authorization = `Bearer ${access_token}`;

        const { data: user } = await axios.get(endPoints.auth.profile);
        setUser(user);
      }
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 401) {
        setError('Incorrect user or password. Try again');
        Cookie.remove('token');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    signIn: {
      fn: signIn,
      loading,
      error,
    },
  };
}
