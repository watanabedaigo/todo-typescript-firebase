import React from 'react';
import SignInTemplate from 'components/templates/SignInTemplate';

const SignInPage: React.FC<{}> = () => {
  console.log('SignInPage レンダリング');

  return (
    <div>
      <SignInTemplate />
    </div>
  );
};

export default SignInPage;
