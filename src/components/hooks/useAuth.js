import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'

const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext)
  if (!authContext) {
    return new Error('AuthContext should be used within the AuthContextProvider');
  }
  return authContext;
}

export default useAuthContext;