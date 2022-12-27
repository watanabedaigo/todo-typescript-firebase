import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import TodoPage from 'pages/TodoPage';
import CreatePage from 'pages/CreatePage';
import EditPage from 'pages/EditPage';
import DetailPage from 'pages/DetailPage';
import SignUpPage from 'pages/SignUpPage';
import { ErrorPage } from 'pages/Error';
import { AuthProvider } from 'contexts/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log('root レンダリング');

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'top',
    element: <TodoPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'create',
    element: <CreatePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'edit/:editId',
    element: <EditPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'detail/:detailId',
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
