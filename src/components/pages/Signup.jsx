import Input from '../Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    username: '',
    password: ''
  })
//   const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = JSON.stringify(inputValue);
    // console.log(inputValue)
    // console.log(userData)

    const userId = localStorage.getItem(inputValue.email);
    if (userId) {
      navigate('/login');
    } else { 
      localStorage.setItem(inputValue.email, userData);
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>Create an to get started.</p>
        <Input name="email" type="email" placeholder="Email Address" id="email" label="Email Address" value={inputValue.email} onChange={handleInputChange} required />
        <Input name="username" type="text" placeholder="UserName" id="name" label="User Name" value={inputValue.username} onChange={handleInputChange} required />
        <Input name="password" type="password" placeholder="Enter your password" label="Password" value={inputValue.password} onChange={handleInputChange} id="password" />
        <button className="btn primary">Sign Up</button>
        <small>Already have an account <Link to="/login">Sign In to continue.</Link></small>
      </form>
    </div>
  )
}

export default Signup