import React, { useCallback, useRef } from 'react';
import { EventType } from 'types/EventType';
import styles from './styles.module.scss';
import Button from 'components/atoms/Button';
import InputForm from 'components/atoms/InputForm';
import { auth } from 'auth/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// 型エイリアス
// SignUpの型
type SignUpProps = {
  label: string;
  getInputValue: (event: EventType) => void;
};

// メモ化して。親コンポーネントレンダリングによる再レンダリング防止
const SignUp: React.FC<SignUpProps> = React.memo(({ label, getInputValue }) => {
  console.log('SignUp レンダリング');

  const signUp = (event: EventType) => {
    event.preventDefault();

    // フォームを取得
    const form = event.currentTarget;

    // メールのフォームの入力値を取得
    const emailForm = form.querySelector(
      "input[type='email']"
    ) as HTMLInputElement;
    const emailValue = emailForm.value;

    // パスワードのフォームの入力値を取得
    const passwordForm = form.querySelector(
      "input[type='password']"
    ) as HTMLInputElement;
    const passwordValue = passwordForm.value;

    // ユーザー登録
    createUserWithEmailAndPassword(auth, emailValue, passwordValue);
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <div>
          <label>
            <span>メールアドレス</span>
            <InputForm placeholder="メールアドレスを入力" type="email" />
          </label>
        </div>
        <div>
          <label>
            <span>パスワード</span>
            <InputForm placeholder="パスワードを入力" type="password" />
          </label>
        </div>
        <div>
          <Button label={label} isRouter={false} />
        </div>
      </form>
    </div>
  );
});

export default SignUp;
