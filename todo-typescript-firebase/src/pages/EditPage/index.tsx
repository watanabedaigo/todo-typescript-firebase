import React from 'react';
import EditTemplate from 'components/templates/EditTemplate';
import Header from 'components/modules/Header';

const EditPage: React.FC<{}> = () => {
  console.log('EditPage レンダリング');

  return (
    <>
      <Header />
      <p>EditPage</p>
      <EditTemplate />
    </>
  );
};

export default EditPage;
