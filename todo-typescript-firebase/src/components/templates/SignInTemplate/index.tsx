import React from 'react';
import { useTodo } from 'hooks/useTodo';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import SignIn from 'components/modules/SignIn';

const SignInTemplate: React.FC = () => {
  console.log('SignInTemplate レンダリング');

  return (
    <div>
      <p>SignInTemplate</p>
      <SignIn label="ログイン" />
      <Link to={'/signup'}>新規登録</Link>
    </div>
  );
};

export default SignInTemplate;
