import React from 'react';
import CreateTemplate from 'components/templates/CreateTemplate';
import Header from 'components/modules/Header';

const CreatePage: React.FC<{}> = () => {
  console.log('CreatePage レンダリング');

  return (
    <>
      <Header />
      <p>CreatePage</p>
      <CreateTemplate />
    </>
  );
};

export default CreatePage;
