import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import type { User } from '@firebase/auth';
import { auth } from 'auth/firebase';
import { onAuthStateChanged } from 'firebase/auth';

type AuthProviderProps = {
  children: ReactNode;
};

export type AuthState = {
  // 認証されている | 認証されていない | 初期状態
  user: User | null | undefined;
};

const initialState: AuthState = {
  user: undefined,
};

const AuthContext = createContext<AuthState>(initialState);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const { children } = props;

  const [user, setUser] = useState<AuthState>(initialState);

  const value = user;

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          user,
        });
      }
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
