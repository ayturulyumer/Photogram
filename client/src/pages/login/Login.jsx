import "./login.css";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="parent clearfix">
      <div className="bg-illustration"></div>
      <div className="login">
        <div className="container">
          <h1>
            Login to access to
            <br />
            your account
          </h1>
          <div className="login-form">
            <form action="">
              <label>Email</label>
              <input type="email" placeholder="E-mail Address" />
              <label>Password</label>
              <input type="password" placeholder="Password" />
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
