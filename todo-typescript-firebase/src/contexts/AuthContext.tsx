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

// 型エイリアス
// AuthProviderPropsの型
type AuthProviderProps = {
  children: ReactNode;
};

// 型エイリアス
// AuthStateの型
export type AuthState = {
  // 認証済み | 認証されていない | 初期状態・完了していない状態
  user: User | null | undefined;
};

const initialState: AuthState = {
  user: undefined,
};

// contextオブジェクト作成
const AuthContext = createContext<any>(undefined);

// useContext(contextオブジェクト)を使用し、グローバルstateを取得する関数を定義
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  console.log('AuthProvider レンダリング');

  const { children } = props;

  // state
  const [user, setUser] = useState<any>(undefined);

  // グローバルで扱うデータを指定
  const value = {
    user,
  };

  // useEffect
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (loginUser) => {
      console.log(
        '--------------------------------------------- useEffect --------------------------------------------------'
      );
      setUser(loginUser);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
