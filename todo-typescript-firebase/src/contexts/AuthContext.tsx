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
type AuthState = {
  // 認証済み | 認証されていない | 初期状態・完了していない状態
  user: User | null | undefined;
};

// 初期値設定
const initialState: AuthState = {
  user: null,
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
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    try {
      // ログイン状態の変化がトリガーとなるonAuthStateChangedを設定
      return onAuthStateChanged(auth, (user) => {
        // state更新
        setUser({
          user,
        });
        console.log('effect');
        setLoading(false);
      });
    } catch (error) {
      setUser(initialState);
      throw error;
    }
  }, []);

  // providerのvalue属性でuserを指定することで、子コンポーネントがuserにアクセできる（グローバルに管理）
  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
