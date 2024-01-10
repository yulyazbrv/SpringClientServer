import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.auth);
    console.log('a', isAuth);
    return isAuth ? children : <Navigate to={'/login'}></Navigate>;
  };

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
