import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserCredentials } from '../../redux/slices/userCredentialsSlice';
import { loginUser } from '../../api/loginApi/login';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginClick = async () => {
    try {
      await loginUser(email, password);
      dispatch(setUserCredentials({ email, password }));
      navigate(`/`, { replace: true });
    } catch {
      setError('Error');
    }
  };

  return (
    <div className='form-container'>
      <div className='form'>
        <p className='title-login'>Login</p>
        <div className='username-container'>
          <p className='input-text'>Username</p>
          <input
            type='text'
            className='login-input'
            placeholder='username...'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className='password-container'>
          <p className='input-text'>Password</p>
          <input
            type='password'
            className='password-input'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className='button-container'>
          <button className='confirm-button' onClick={loginClick}>
            Sign In
          </button>
          <p className='error-massage'>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
