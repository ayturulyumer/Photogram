import "./register.css";
import * as userApi from "../../apis/usersApi.js";
import { useForm } from "../../hooks/useForm.js";
import { useNavigate } from "react-router-dom";
import { inputValidator } from "../../hooks/inputValidator.js";
import { Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
  const onRegisterHandler = async (data) => {
    const { repeatPassword, ...registerData } = data;
    if (repeatPassword != registerData.password) {
      return;
    }
    try {
      const user = await userApi.register(registerData);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  const { error, input, validateInput } = inputValidator();

  const { values, changeHandler, onSubmit } = useForm(
    {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onRegisterHandler
  );

  return (
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
  );
}
