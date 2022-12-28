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
const AuthContext = createContext<AuthState>(initialState);

// useContext(contextオブジェクト)を使用し、グローバルstateを取得する関数を定義
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  console.log('AuthProvider レンダリング');

  const { children } = props;

  // state
  const [user, setUser] = useState<AuthState>(initialState);
  const [loading, setLoading] = useState<boolean>(true);

  // グローバルで扱うデータを指定
  const value = {
    user,
  };

  // useEffect
  useEffect(() => {
    console.log(
      '----------------------------- useEffect -------------------------------------'
    );
    try {
      return onAuthStateChanged(auth, (user) => {
        setUser({
          user,
        });
        console.log(user);
      });
    } catch (error) {
      setUser(initialState);
      throw error;
    }
  }, []);

  // useEffect(() => {
  //   const unsubscribed = onAuthStateChanged(auth, (user) => {
  //     console.log(
  //       '----------------------------- useEffect -------------------------------------'
  //     );
  //     console.log(user);
  //     setUser({ user });
  //     setLoading(false);
  //   });
  //   return () => {
  //     unsubscribed();
  //   };
  // }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;

  // if (loading) {
  //   return <p>loading...</p>;
  // } else {
  //   return (
  //     <AuthContext.Provider value={user}>
  //       {!loading && children}
  //     </AuthContext.Provider>
  //   );
  // }
};
