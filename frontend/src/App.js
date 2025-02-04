import { useState } from 'react';
import Signup from './components/Signup'
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import RefrshHandler from './RefrshHandler';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </div>

  )
}

export default App