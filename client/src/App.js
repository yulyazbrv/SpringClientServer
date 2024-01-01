import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
