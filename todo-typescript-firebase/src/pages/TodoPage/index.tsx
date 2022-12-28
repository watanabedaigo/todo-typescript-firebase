import React from 'react';
import TodoTemplate from 'components/templates/TodoTemplate';
import Header from 'components/modules/Header';

const TodoPage: React.FC<{}> = () => {
  console.log('TodoPage レンダリング');

  return (
    <>
      <Header />
      <TodoTemplate />
    </>
  );
};

export default TodoPage;
