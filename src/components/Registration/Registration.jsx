import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewUser } from '../services/services';
import { ReactComponent as MainSVG } from '../utils/images/mainSVG.svg';
import './Registration.scss'

const Registration = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [isWrongFirstName, setIsWrongFirstName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [isWrongLastName, setIsWrongLastName] = useState(false);
  const [userName, setUsername] = useState('');
  const [isWrongUsername, setIsWrongUsername] = useState(false);
  const [email, setEmail] = useState('');
  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isWrongRepeatPassword, setIsWrongRepeatPassword] = useState(false);

  const checkFirstName = (item) => {
    setFirstName(item);
    const isCorrect = (/^(?=.*[0-9])/.test(item) || item.length < 2);
    setIsWrongFirstName(isCorrect ? true : false);
  }
  const checkLastName = (item) => {
    setLastName(item);
    const isCorrect = (/^(?=.*[0-9])/.test(item) || item.length < 2);
    setIsWrongLastName(isCorrect ? true : false);
  }
  const checkUsername = (item) => {
    setUsername(item);
    setIsWrongUsername(item.length < 6 ? true : false);
  }
  const checkEmail = (item) => {
    setEmail(item);
    const isCorrect = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(item);
    setIsWrongEmail(isCorrect ? false : true);
  }
  const checkPassword = (item) => {
    setPassword(item);
    const isCorrect = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,16}$/.test(item);
    setIsWrongPassword(isCorrect ? false : true);
    setIsWrongRepeatPassword(item === repeatPassword ? false : true);
  }
  const checkRepeatPassword = (item) => {
    console.log("Check: ", item);
    setRepeatPassword(item);
    setIsWrongRepeatPassword(item === password ? false : true);
  }

  const regFunc = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      firstName = formData.get('firstName'), lastName = formData.get('lastName'),
      userName = formData.get('userName'), email = formData.get('email'),
      password = formData.get('password'), passwordRepeat = formData.get('repeatPassword');
    if (firstName, lastName, userName, email, password, passwordRepeat) {
      if (isWrongFirstName, isWrongLastName, isWrongEmail, isWrongUsername, isWrongPassword, isWrongRepeatPassword) {
        alert('Поля заполненны некорректно')
      } else {
        addNewUser(firstName, lastName, userName, email, password);
      }
    } else {
      alert('Заполните все поля');
    }
  }

  return (
    <div className="Registration">
      <div className='HDiv'>
        <h1>Welcome to <strong>E’Shop</strong>!</h1>
      </div>
      <div className='RegMain'>
        <div className='RegImage'>
          {<MainSVG />}
        </div>
        <div className='RegBlock'>
          <div className='Reg'>
            <h2>Create Account</h2>
            <form id='regForm' onSubmit={regFunc}>
              <label>First Name:</label>
              <input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={firstName}
                maxLength={16}
                onChange={(e) => checkFirstName(e.target.value)}
                className={isWrongFirstName ? 'Wrong' : null}
              />
              {isWrongFirstName ? <span>First name is not correct</span> : null}
              <label>Last Name:</label>
              <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={lastName}
                maxLength={16}
                onChange={(e) => checkLastName(e.target.value)}
                className={isWrongLastName ? 'Wrong' : null}
              />
              {isWrongLastName ? <span>Last name is not correct</span> : null}
              <label>Username:</label>
              <input
                type='text'
                placeholder='userName'
                name='userName'
                value={userName}
                maxLength={16}
                className={isWrongUsername ? 'Wrong' : null}
                onChange={(e) => checkUsername(e.target.value.replace(' ', ''))}
              />
              {isWrongUsername ? <span>Username is not correct</span> : null}
              <label>Email:</label>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                maxLength={32}
                className={isWrongEmail ? 'Wrong' : null}
                onChange={(e) => checkEmail(e.target.value.replace(' ', ''))}
              />
              {isWrongEmail ? <span>Email is not correct</span> : null}
              <label>Password:</label>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                maxLength={16}
                className={isWrongPassword ? 'Wrong' : null}
                onChange={(e) => checkPassword(e.target.value.replace(' ', ''))}
              />
              {isWrongPassword ? <span>Password is not correct</span> : null}
              <label>Repeat password:</label>
              <input
                type='password'
                placeholder='Repeat password'
                name='repeatPassword'
                value={repeatPassword}
                maxLength={16}
                className={isWrongRepeatPassword ? 'Wrong' : null}
                onChange={(e) => checkRepeatPassword(e.target.value.replace(' ', ''))}
              />
              {isWrongRepeatPassword ? <span>Password mismatch</span> : null}
            </form>
            <div className='RegBottom'>
              <a href='' onClick={() => navigate('/login')}>Sign in</a>
              <button type='submit' form='regForm'>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;