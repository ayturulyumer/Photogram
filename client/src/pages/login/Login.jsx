import "./login.css";

// export default function Login() {
//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm">
//         <label>Email</label>
//         <input
//           type="text"
//           className="loginInput"
//           placeholder="Enter your email"
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password"
//         />
//         <button className="loginButton">Login</button>
//       </form>
//         <button className="loginRegisterButton">Register</button>
//     </div>
//   );
// }

export default function Login() {
  return (
    <div className="parent clearfix">
      <div className="bg-illustration">
      </div>
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
              <button type="submit">LOG-IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
