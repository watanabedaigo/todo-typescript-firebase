import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import TodoPage from 'pages/TodoPage';
import CreatePage from 'pages/CreatePage';
import EditPage from 'pages/EditPage';
import DetailPage from 'pages/DetailPage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import { ErrorPage } from 'pages/Error';
import { AuthProvider } from 'contexts/AuthContext';
import PrivateRoute from 'routers/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log('root レンダリング');

const router = createBrowserRouter([
  {
    path: 'signin',
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'signup',
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <TodoPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'create',
    element: (
      <PrivateRoute>
        <CreatePage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'edit/:editId',
    element: (
      <PrivateRoute>
        <EditPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'detail/:detailId',
    element: (
      <PrivateRoute>
        <DetailPage />
      </PrivateRoute>
    ),
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
