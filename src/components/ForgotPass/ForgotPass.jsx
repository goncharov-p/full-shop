import { useState,useEffect } from 'react';
import { ReactComponent as MainSVG } from '../utils/images/mainSVG.svg';
import './ForgotPass.scss';
import ForgotPassNewPass from './ForfgotPassNewPass';
import ForgotPassEmail from './ForgotPassEmail';
import { useParams } from 'react-router-dom';

const ForgotPass = () => {
const [passChange,setPassChange] = useState(true);
const {link} = useParams();
let fullLink = link.split("=")[1];

useEffect(() => {
  if(fullLink){setPassChange(false)}
},[])
console.log(fullLink);
    return (
        <div className="ForgotPass">
              <div className='HDiv'>
        <h1>Welcome to <strong>E’Shop</strong>!</h1>
      </div>
      <div className='RegMain'>
        <div className='RegImage'>
          {<MainSVG />}
        </div>
        {passChange?<ForgotPassEmail setPassChange ={setPassChange}/>:<ForgotPassNewPass fullLink = {fullLink}/>}  
      </div>

      </div>
    );
}

export default ForgotPass;