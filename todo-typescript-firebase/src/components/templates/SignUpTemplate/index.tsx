import React from 'react';
import { useTodo } from 'hooks/useTodo';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import SignUp from 'components/modules/SignUp';

const SignUpTemplate: React.FC = () => {
  console.log('SignUpTemplate レンダリング');

  return (
    <div>
      <p>SignUpTemplate</p>
      <SignUp label="登録" />
      <Link to={'/signin'}>戻る</Link>
    </div>
  );
};

export default SignUpTemplate;
