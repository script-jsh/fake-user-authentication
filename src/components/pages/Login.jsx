import Input from '../Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  })
  const { user, dispatch } = useAuth();
  const navigate = useNavigate();

  console.log(user, dispatch);

  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // // console.log(inputValue);
    // // console.log(auth)
    // console.log(user, dispatch)

    const userData = localStorage.getItem(inputValue.email);
    if (userData) {
      const user = JSON.parse(userData);
      console.log(user)
      dispatch({ type: 'LOGIN_USER', payload: user });
    }
  }

  useEffect(() => {
    if(user) {
      navigate('/dashboard', {replace: true})
    }
  }, [user])

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Login to continue.</p>
        <Input name="email" type="email" placeholder="Email Address" id="email" label="Email Address" value={inputValue.email} onChange={handleInputChange} required />
        <Input name="password" type="password" placeholder="Enter your password" label="Password" id="password" value={inputValue.password} onChange={handleInputChange} />
        <button className="btn primary" type="submit">Login</button>
        <small>Don't have an account? <Link to="/signup">Sign Up</Link> to get started.</small>
      </form>
    </div>
  )
}

export default Login