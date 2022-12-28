import React from 'react';
import SignUpTemplate from 'components/templates/SignUpTemplate';
import Header from 'components/modules/Header';

const SignUpPage: React.FC<{}> = () => {
  console.log('SignUpPage レンダリング');

  return (
    <>
      <Header />
      <p>SignInPage</p>
      <SignUpTemplate />
    </>
  );
};

export default SignUpPage;
