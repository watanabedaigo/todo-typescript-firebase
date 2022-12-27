import { ReactNode } from 'react';
import { useAuthContext } from 'contexts/AuthContext';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthContext();
  if (user) {
    return children;
  } else {
    const loading = `<p>loading</p>`;
    return loading;
  }
};

export default PrivateRoute;
