import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Protected = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return children;
  }

  return <Navigate to='/login' replace />;
}

export default Protected