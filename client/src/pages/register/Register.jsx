import "./register.css";
import { useForm } from "../../hooks/useForm.js";

import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.jsx";
import { useContext } from "react";
import SuccessMessageModal from "../../components/successMessageModal/successMessageModal.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";

export default function Register() {
  const { onRegisterHandler, showSuccessMessage, errorMessage } =
    useContext(AuthContext);



  const { values, changeHandler, onSubmit } = useForm(
    {
      username: "",
      avatar: "https://static.thenounproject.com/png/363640-200.png",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onRegisterHandler
  );

  return (
    <>
      {showSuccessMessage && (
        <SuccessMessageModal successMsg={"Successfull registration!"} />
      )}
      <div className="parent clearfix">
        <div className="register"></div>
        <div className="login">
          <div className="container">
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <h1>Register your account</h1>
            <div className="login-form">
              <form className="registerForm" method="POST" onSubmit={onSubmit}>
                <label>Username</label>
                <input
                  type="text"
                  className="registerInput"
                  placeholder="Enter your username"
                  name="username"
                  value={values.username}
                  onChange={changeHandler}
                />

                <label>Email</label>
                <input
                  type="text"
                  className="registerInput"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={changeHandler}
                />

                <label>Password</label>
                <input
                  type="password"
                  className="registerInput"
                  placeholder="Enter your password"
                  name="password"
                  value={values.password}
                  onChange={changeHandler}
                />

                <label>Repeat Password</label>
                <input
                  type="password"
                  className="registerInput"
                  placeholder="Repeat your password"
                  name="repeatPassword"
                  value={values.repeatPassword}
                  onChange={changeHandler}
                />

                <button type="submit" className="registerButton">
                  Register
                </button>
                <div className="signup-link">
                  Already a member ? <Link to={"/login"}>Login now</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
