import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login.jsx';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard'
import ProtectedRoute from './components/pages/Protected';
import AuthContextProvider from './components/context/AuthContext'

import './App.css'


export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <Login />
          } />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
