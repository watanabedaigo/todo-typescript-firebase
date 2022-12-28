import React from 'react';
import styles from './styles.module.scss';
import Button from 'components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';
import { auth } from 'auth/firebase';
import { signOut } from 'firebase/auth';

// メモ化して。親コンポーネントレンダリングによる再レンダリング防止
const Header: React.FC = React.memo(() => {
  console.log('Header レンダリング');

  // contextで管理するuserを取得
  const { user } = useAuthContext();

  // ページ遷移のためにnagigate作成
  const navigate = useNavigate();

  const authSignOut = async () => {
    console.log('ログアウト');

    // ログアウト
    await signOut(auth);
    console.log(auth);

    // ページ遷移
    navigate('/signin');
  };

  return (
    <header>
      <p>{user ? user.email : 'ログイン前'}</p>
      {user && <p>{user.uid}</p>}
      {user && (
        <Button label="ログアウト" callback={authSignOut} isRouter={false} />
      )}
    </header>
  );
});

export default Header;
