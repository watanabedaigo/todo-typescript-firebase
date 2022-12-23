import React from 'react';
import { useTodo } from 'hooks/useTodo';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import SignUp from 'components/modules/SignUp';

const SignUpTemplate: React.FC = () => {
  console.log('SignUpTemplate レンダリング');

  // カスタムフックからロジックを受け取る
  const { getInputValue } = useTodo();

  return (
    <div>
      <p>SignUpTemplate</p>
      <SignUp getInputValue={getInputValue} label="登録" />
      <Link to={'/top'}>トップ</Link>
    </div>
  );
};

export default SignUpTemplate;
