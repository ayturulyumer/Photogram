import "./login.css";
import { Link } from "react-router-dom";
import { inputValidator } from "../../hooks/inputValidator.js";
import { useForm } from "../../hooks/useForm.js";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";

export default function Login() {

const {onLoginHandler} = useContext(AuthContext)

  
  const { error, input, validateInput } = inputValidator();

  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginHandler
  );
  return (
    <div className="parent clearfix">
      <div className="bg-illustration"></div>
      <div className="login">
        <div className="container">
          <h1>Login with your account</h1>
          <div className="login-form">
            <form method="POST" onSubmit={onSubmit}>
              <label>Email</label>
              <input
                type="email"
                placeholder="E-mail Address"
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
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={changeHandler}
                onBlur={validateInput}
              />
               {error.password && (
                <span style={{ color: "red" }}>{error.password}</span>
              )}
              <button type="submit">LOGIN</button>
              <div className="signup-link">
                Not a member? <Link to={"/register"}>Signup now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
