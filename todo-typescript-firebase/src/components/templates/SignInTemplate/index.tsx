import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import SignIn from 'components/modules/SignIn';

const SignInTemplate: React.FC = () => {
  console.log('SignInTemplate レンダリング');

  return (
    <div>
      <SignIn label="ログイン" />
      <Link to={'/signup'}>新規登録</Link>
    </div>
  );
};

export default SignInTemplate;
