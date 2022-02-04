import Header from "../Header/Header";
import { updateUser } from "../services/services";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [isWrongFirstName, setIsWrongFirstName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [isWrongLastName, setIsWrongLastName] = useState(false);
  const [email, setEmail] = useState("");
  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [userName, setUserName] = useState("");
  const [isWrongUsername, setIsWrongUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isWrongRepeatPassword, setIsWrongRepeatPassword] = useState(false);

  useEffect(() => {
    // откуда изначальные данные: из куки или нужен отдельный роут?
  }, []);

  const checkFirstName = (item) => {
    setFirstName(item);
    const isCorrect = /^(?=.*[0-9])/.test(item) || item.length < 6;
    setIsWrongFirstName(isCorrect ? true : false);
  };
  const checkLastName = (item) => {
    setLastName(item);
    const isCorrect = /^(?=.*[0-9])/.test(item) || item.length < 6;
    setIsWrongLastName(isCorrect ? true : false);
  };
  const checkUsername = (item) => {
    setUserName(item);
    setIsWrongUsername(item.length < 6 ? true : false);
  };
  const checkEmail = (item) => {
    setEmail(item);
    const isCorrect =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        item,
      );
    setIsWrongEmail(isCorrect ? false : true);
  };
  const checkPassword = (item) => {
    setPassword(item);
    const isCorrect =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,16}$/.test(item);
    setIsWrongPassword(isCorrect ? false : true);
  };
  const checkRepeatPassword = (item) => {
    console.log("Check: ", item);
    setRepeatPassword(item);
    setIsWrongRepeatPassword(item === password ? false : true);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    firstName = formData.get("firstName");
    lastName = formData.get("lastName");
    userName = formData.get("userName");
    email = formData.get("email");
    password = formData.get("password");
    repeatPassword = formData.get("repeatPassword");
    if ((firstName, lastName, userName, email, password, repeatPassword)) {
      if (
        (isWrongFirstName,
        isWrongLastName,
        isWrongEmail,
        isWrongUsername,
        isWrongPassword,
        isWrongRepeatPassword)
      ) {
        alert("Поля заполнены некорректно");
      } else {
        updateUser(firstName, lastName, userName, email, password);
      }
    } else {
      alert("Заполните все поля");
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="editProfile">
        <form id="editForm" onSubmit={handleForm}>
          <div className="nameColumn">
            <h2>My profile</h2>
            <div className="inputLine">
              <label>First name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                maxLength={16}
                value={firstName}
                onChange={(e) => checkFirstName(e.target.value)}
                className={isWrongFirstName ? "wrong" : null}
              />
              {isWrongFirstName ? <span>First name is not correct</span> : null}
            </div>
            <div className="inputLine">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                maxLength={16}
                value={lastName}
                onChange={(e) => checkLastName(e.target.value)}
                className={isWrongLastName ? "wrong" : null}
              />
              {isWrongLastName ? <span>Last name is not correct</span> : null}
            </div>
            <div className="inputLine">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                maxLength={32}
                value={email}
                onChange={(e) => checkEmail(e.target.value.replace(" ", ""))}
                className={isWrongEmail ? "wrong" : null}
              />
              {isWrongEmail ? <span>Email is not correct</span> : null}
            </div>
            <div className="inputLine">
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                name="userName"
                maxLength={16}
                value={userName}
                onChange={(e) => checkUsername(e.target.value.replace(" ", ""))}
                className={isWrongUsername ? "wrong" : null}
              />
              {isWrongUsername ? <span>Username is not correct</span> : null}
            </div>
          </div>
          <div className="passColumn">
            <h3>Change password</h3>
            <div className="inputLine">
              <label>New password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                maxLength={16}
                value={password}
                onChange={(e) => checkPassword(e.target.value.replace(" ", ""))}
                className={isWrongPassword ? "wrong" : null}
              />
              {isWrongPassword ? <span>Password is not correct</span> : null}
            </div>
            <div className="inputLine">
              <label>Repeat new password</label>
              <input
                type="password"
                placeholder="Repeat password"
                name="repeatPassword"
                maxLength={16}
                value={repeatPassword}
                onChange={(e) =>
                  checkRepeatPassword(e.target.value.replace(" ", ""))
                }
                className={isWrongRepeatPassword ? "wrong" : null}
              />
              {isWrongRepeatPassword ? <span>Password mismatch</span> : null}
            </div>
          </div>
        </form>
        <div className="buttons">
          <button onClick={() => navigate("/home_page")}>Cancel</button>
          <button type="submit" form="editForm">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
