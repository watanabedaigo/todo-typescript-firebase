import React from 'react';
import SignUpTemplate from 'components/templates/SignUpTemplate';

const SignUpPage: React.FC<{}> = () => {
  console.log('SignUpPage レンダリング');

  return (
    <div>
      <SignUpTemplate />
    </div>
  );
};

export default SignUpPage;
