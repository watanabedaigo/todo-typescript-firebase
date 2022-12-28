import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';

const PrivateRoute = ({ children }: { children: ReactNode }): any => {
  console.log('PrivateRoute レンダリング');

  // contextで管理するuserを取得
  const { user } = useAuthContext();

  // userの値が undefined / null / User のどれかによって条件分岐
  if (user === undefined) {
    console.log('undefined、ローディング');
    // undefinedの場合はloading表示
    return <p>loading...</p>;
  } else if (user === null) {
    console.log('null、リダイレクト');
    // nullの場合はsigninにリダイレクト
    return <Navigate to="/signin" />;
  } else {
    console.log('ログイン完了');
    // userに値がある場合はコンテンツ表示
    return children;
  }
};

export default PrivateRoute;
