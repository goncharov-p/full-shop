import { useState, useParams} from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPass.scss';
import api from "../services/services";

const ForgotPassNewPass = ({fullLink}) => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isWrongRepeatPassword, setIsWrongRepeatPassword] = useState(false);
  const [link, setLink] = useState(null);


  const checkPassword = (item) => {
    setPassword(item);
    const isCorrect = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,16}$/.test(item);
    setIsWrongPassword(isCorrect ? false : true);
    setIsWrongRepeatPassword(item === repeatPassword ? false : true);
  }

  const checkRepeatPassword = (item) => {
    setRepeatPassword(item);
    setIsWrongRepeatPassword(item === password ? false : true);
  }
  const resetPAssword = async() => {
await api.post(`/resetPassword/?password=${repeatPassword}&link=${fullLink}`)
.then((res)=>{if(res.status ===200){alert('Пароль успешно сменен')}})
.catch((err)=>{alert(err.message)})
  }


    return (
        <div className='ForgotPasslock'>
          <div className='ForgotPassReg'>
            <h2>Forgot Password</h2>
            <form>
              <label>Enter your new password:</label>
              <label> New Password:</label>
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
              <label>Repeat New Password:</label>
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
            <button className='ButtonForgot-Reset' onClick = {() => resetPAssword()}>Reset Password</button>
            <div className='ForgotBottom'>
              <a href='' onClick={() => navigate('/login')}>Sign in</a>
              <a href='' onClick={() => navigate('/registration')}>Sign up</a>
            </div>
          </div>
        </div>
    );
}

export default ForgotPassNewPass;