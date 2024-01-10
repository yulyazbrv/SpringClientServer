import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserCredentials } from '../../redux/slices/userCredentialsSlice';
import { registrationUser } from '../../api/registrationApi/registration';
import './style.css';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registrationClick = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Not equal pasword');
      } else {
        await registrationUser(name, surname, email, password, age);
        dispatch(setUserCredentials({ email, password }));
        navigate(`/`, { replace: true });
      }
    } catch {
      setError('Registration Error');
    }
  };

  return (
    <div className='form-container'>
      <div className='form'>
        <p className='title-login'>Registration</p>
        <div className='username-container'>
          <p className='input-text'>User information</p>
          <input
            type='text'
            className='login-input'
            placeholder='email...'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type='text'
            className='login-input'
            placeholder='name...'
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type='text'
            className='login-input'
            placeholder='surname...'
            onChange={(e) => setSurname(e.target.value)}
          ></input>
          <input
            type='number'
            className='login-input'
            placeholder='age...'
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div className='password-container'>
          <p className='input-text'>Password and confirmation</p>
          <input
            type='password'
            className='password-input'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type='password'
            className='password-input'
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div className='button-container'>
          <button className='confirm-button' onClick={registrationClick}>
            Sign up
          </button>
          <p className='error-massage'>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
