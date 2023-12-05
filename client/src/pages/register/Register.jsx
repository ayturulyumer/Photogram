import "./register.css";
import { useForm } from "../../hooks/useForm.js";
import { inputValidator } from "../../hooks/inputValidator.js";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.jsx";
import { useContext } from "react";
import SuccessMessageModal from "../../components/successMessageModal/successMessageModal.jsx";

export default function Register() {
  const { onRegisterHandler, showSuccessMessage } = useContext(AuthContext);

  const { error, input, validateInput } = inputValidator();

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
        <SuccessMessageModal
          successMsg={"Successfull registration!"}
        />
      )}
      <div className="parent clearfix">
        <div className="register"></div>
        <div className="login">
          <div className="container">
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
                  onBlur={validateInput}
                />
                {error.username && (
                  <span style={{ color: "red" }}>{error.username}</span>
                )}
                <label>Email</label>
                <input
                  type="text"
                  className="registerInput"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={changeHandler}
                  onBlur={validateInput}
                />
                {error.email && (
                  <span style={{ color: "red" }}>{error.email}</span>
                )}
                <label>Password</label>
                <input
                  type="password"
                  className="registerInput"
                  placeholder="Enter your password"
                  name="password"
                  value={values.password}
                  onChange={changeHandler}
                  onBlur={validateInput}
                />
                {error.password && (
                  <span style={{ color: "red" }}>{error.password}</span>
                )}
                <label>Repeat Password</label>
                <input
                  type="password"
                  className="registerInput"
                  placeholder="Repeat your password"
                  name="repeatPassword"
                  value={values.repeatPassword}
                  onChange={changeHandler}
                  onBlur={validateInput}
                />
                {error.repeatPassword && (
                  <span style={{ color: "red" }}>{error.repeatPassword}</span>
                )}
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
