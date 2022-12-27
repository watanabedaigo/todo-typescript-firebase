import React, { useEffect, useState } from 'react';
import { useTodo } from 'hooks/useTodo';
import { Link } from 'react-router-dom';
import Search from 'components/modules/Search';
import List from 'components/modules/List';
import Button from 'components/atoms/Button';
import { auth } from 'auth/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';

const TodoTemplate: React.FC = React.memo(() => {
  console.log('TodoTemplate レンダリング');

  const { user } = useAuthContext();
  console.log('---------------------------------------------');
  console.log(user);
  console.log('---------------------------------------------');

  // カスタムフックからロジックを受け取る
  const {
    notDoneTodos,
    doneTodos,
    updateDone,
    removeTodo,
    inputSearchRef,
    getInputValue,
    searchTodo,
    resetTodo,
  } = useTodo();

  const navigate = useNavigate();

  const authSignOut = async () => {
    console.log('ログアウト');

    // ログアウト
    await signOut(auth);
    console.log(auth);

    // ページ遷移
    navigate('/signin');
  };

  if (user === undefined) {
    console.log('undefined、ローディング');
    // undefinedの場合はloading表示
    return <p>loading</p>;
  } else if (user === null) {
    console.log('null、リダイレクト');
    // nullの場合はsigninにリダイレクト
    return <Navigate to="signin" />;
  } else {
    console.log('ログイン完了');
    // userに値がある場合はtodo表示
    return (
      <div>
        <p>
          <Link to={'/create'}>追加</Link>
        </p>
        <Search
          inputSearchRef={inputSearchRef}
          searchTodo={searchTodo}
          resetTodo={resetTodo}
          getInputValue={getInputValue}
        />
        <List
          notDoneTodos={notDoneTodos}
          doneTodos={doneTodos}
          updateDone={updateDone}
          removeTodo={removeTodo}
        />
        <div>
          <Button label="ログアウト" callback={authSignOut} isRouter={false} />
        </div>
      </div>
    );
  }
});

export default TodoTemplate;
