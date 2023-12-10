import "./login.css";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm.js";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";

export default function Login() {
  const { onLoginHandler, errorMessage } = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginHandler
  );

  return (
    <>
      <div className="parent clearfix">
        <div className="bg-illustration"></div>
        <div className="login">
          <div className="container">
            <h1>Login with your account</h1>
            <div className="login-form">
              {errorMessage && <ErrorMessage message={errorMessage} />}
              <form method="POST" onSubmit={onSubmit}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="E-mail Address"
                  name="email"
                  value={values.email}
                  onChange={changeHandler}
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={changeHandler}
                />

                <button type="submit">LOGIN</button>
                <div className="signup-link">
                  Not a member? <Link to={"/register"}>Signup now</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
