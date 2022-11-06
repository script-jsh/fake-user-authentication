import { createContext, useReducer } from "react";
const initialState = {
  user: null
}

const AuthContext = createContext({ user: null });

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      // const newState = Object.assign(state, {user: action.payload})
      // return newState;
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT_USER':
      return {
        user: null
      }
    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  // const [state, setState] = useState(10);

  // console.log({ ...state, dispatch })

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}


export { AuthContext };
export default AuthContextProvider;

