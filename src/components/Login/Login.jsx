import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authorize } from '../services/services';
import axios from 'axios';
import { ReactComponent as MainSVG } from '../utils/images/mainSVG.svg';
import './Login.scss'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWrongEmail, setIsWrongEmail] = useState('')
  const [isWrongPassword, setIsWrongPassword] = useState(false);
    
  const link = 'http://192.168.2.94:8080'

  const checkEmail = (item) => {
    setEmail(item);
    const isCorrect = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(item);
    setIsWrongEmail(isCorrect ? false : true);
  }
  const checkPassword = (item) => {
    setPassword(item);
    const isCorrect = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,16}$/.test(item);
    setIsWrongPassword(isCorrect ? false : true);
  }

  

  const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target), 
    email = formData.get('email'), password = formData.get('password');
    if(email, password) {
      if(isWrongEmail, isWrongPassword) {
        alert('Поля заполненны некорректно')
      } else {
        Authorize(email, password);
      }
    } else {
      alert('Заполните все поля');
    }
  } 
  

  return (
    <div className="Login">
      <div className='HDiv'>
        <h1>Welcome to <strong>E’Shop</strong>!</h1>
      </div>
      <div className='LogMain'>
        <div className='LogImage'>
          {<MainSVG />}
        </div>
        <div className='LogBlock'>
          <div className='Log'>
            <h2>Sign In</h2>
            <form onSubmit={login}>
              <label>Email:</label>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                maxLength={320}
                onChange={(e) => checkEmail(e.target.value)}
                className={isWrongEmail ? 'Wrong' : null}
              />
              {isWrongEmail ? <span>Email not correct</span> : null}
              <label>Password:</label>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                maxLength={16}
                onChange={(e) => checkPassword(e.target.value)}
                className={isWrongPassword ? 'Wrong' : null}
              />
              {isWrongPassword ? <span>Password not valid</span> : null}
            </form>

            <div className='LogForm-button'> 
               <button onClick={() => {Authorize(email, password);navigate('/home_page')} }>Log In</button> 
            </div> 
            <div className='LogBottom'>
              <a href='' onClick={() => navigate('/registration')}>Create Account</a>
              <span>Or</span>
              <a className='LogBottomForgot' href='' onClick={() => navigate('/forgot_password')}>Forgot password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );                                         
}

export default Login;