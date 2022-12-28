import React from 'react';
import SignInTemplate from 'components/templates/SignInTemplate';
import Header from 'components/modules/Header';

const SignInPage: React.FC<{}> = () => {
  console.log('SignInPage レンダリング');

  return (
    <>
      <Header />
      <p>SignInPage</p>
      <SignInTemplate />
    </>
  );
};

export default SignInPage;
