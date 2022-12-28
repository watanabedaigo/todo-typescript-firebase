import React from 'react';
import DetailTemplate from 'components/templates/DetailTemplate';
import Header from 'components/modules/Header';

const DetailPage: React.FC<{}> = () => {
  console.log('DetailPage レンダリング');

  return (
    <>
      <Header />
      <p>DetailPage</p>
      <DetailTemplate />
    </>
  );
};

export default DetailPage;
