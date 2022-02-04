import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPass.scss";
import api from "../services/services";

const ForgotPassEmail = ({ setPassChange }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isWrongEmail, setIsWrongEmail] = useState(false);

  const checkEmail = (item) => {
    setEmail(item);
    const isCorrect =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        item
      );
    setIsWrongEmail(isCorrect ? false : true);
  };

  const getLinkForgotPassword = async () => {
    await api
       .post(`/forgotPassword`,{email})
      .then((res) => {{if(res.status === 200){alert(res.data.message)}}})
      .catch((err) =>{if(err.status === 404){console.log(err.message);}

      });
  };

  return (
    <div className="ForgotPasslock">
      <div className="ForgotPassReg">
        <h2>Forgot Password</h2>
        <form>
          <label>
            Enter the email address associated with your account and follow the
            following instructions to reset your password
          </label>
          <label> Email:</label>
          <input type="text" value = {email} onChange = {(e) => {setEmail(e.target.value)}} placeholder="Email name=Email" />
          {isWrongEmail ? <span>Email is not correct</span> : null}
        </form>
        <button className="ButtonForgot" onClick = {() => getLinkForgotPassword()}>
          Next
        </button>
        <div className="ForgotBottom">
          <a href="" onClick={() => navigate("/login")}>
            Sign in
          </a>
          <a href="" onClick={() => navigate("/registration")}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassEmail;
