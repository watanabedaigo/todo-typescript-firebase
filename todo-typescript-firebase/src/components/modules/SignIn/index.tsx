import React, { useCallback, useRef } from 'react';
import { EventType } from 'types/EventType';
import styles from './styles.module.scss';
import Button from 'components/atoms/Button';
import InputForm from 'components/atoms/InputForm';
import { auth } from 'auth/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// 型エイリアス
// SignInの型
type SignInProps = {
  label: string;
};

// メモ化して。親コンポーネントレンダリングによる再レンダリング防止
const SignIn: React.FC<SignInProps> = React.memo(({ label }) => {
  console.log('SignIn レンダリング');

  // ページ遷移のためにnagigate作成
  const navigate = useNavigate();

  const authSignIn = (event: EventType) => {
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

    // ログイン
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(() => {
        // ログインしたことにより、AuthContext内のonAuthStateChangedが発火し、state(user)が更新される。
        // stateが更新される前に'/'に遷移すると、stateがnull、つまりログインしていないと判断され、todoTemplateから'/signin'へリダイレクトされてしまう。
        // そこで、setTimeoutで非同期にページ遷移を実行し、stateが更新されるのを待ってから'/'に遷移させる。
        setTimeout(() => {
          // ページ遷移
          navigate('/');
        }, 1);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={authSignIn}>
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

export default SignIn;
