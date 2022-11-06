import useAuth from '../hooks/useAuth'

const Dashboard = () => {
  const { user, dispatch } = useAuth();

  function handleLogout() {
    dispatch({type: 'LOGOUT_USER', user})
  }
  
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome to school of engineering {user.username}</p>
      <p>Please verify your {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard;