import { useState } from "react";
import "./register.css";
import * as userApi from "../../apis/usersApi.js";

export default function Register() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((state) => ({
      ...state,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((state) => {
      const stateObj = { ...state, [name]: "" };
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter username !";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Please enter email !";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter password";
          } else if (input.repeatPassword && value !== input.repeatPassword) {
            stateObj[name] = "Passwords do not match !";
          }
          break;

        case "repeatPassword":
          if (!value) {
            stateObj[name] = "Please confirm your password !";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Passwords do not match !";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(Object.values(input))
      const user = await userApi.register(input);
    } catch (e) {

    }
  };

//   return (
//     <div className="register">
//       <span className="registerTitle">Register</span>
//       <form className="registerForm" onSubmit={registerHandler}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your username"
//           name="username"
//           value={input.username}
//           onChange={onInputChange}
//           onBlur={validateInput}
//         />
//         {error.username && (
//           <span style={{ color: "red" }}>{error.username}</span>
//         )}
//         <label>Email</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your email"
//           name="email"
//           value={input.email}
//           onChange={onInputChange}
//           onBlur={validateInput}
//         />
//         {error.email && <span style={{ color: "red" }}>{error.email}</span>}
//         <label>Password</label>
//         <input
//           type="password"
//           className="registerInput"
//           placeholder="Enter your password"
//           name="password"
//           value={input.password}
//           onChange={onInputChange}
//           onBlur={validateInput}
//         />
//         {error.password && (
//           <span style={{ color: "red" }}>{error.password}</span>
//         )}
//         <label>Repeat Password</label>
//         <input
//           type="password"
//           className="registerInput"
//           placeholder="Repeat your password"
//           name="repeatPassword"
//           value={input.repeatPassword}
//           onChange={onInputChange}
//           onBlur={validateInput}
//         />
//         {error.repeatPassword && (
//           <span style={{ color: "red" }}>{error.repeatPassword}</span>
//         )}
//         <button className="registerButton">Register</button>
//       </form>
//       <button className="registerLoginButton">Login</button>
//     </div>
//   );


return(
  <div className="parent clearfix">
  <div className="register">
  </div>
  <div className="login">
    <div className="container">
      <h1>
        Register
        your account
      </h1>
      <div className="login-form">
        {/* <form action="">
          
          <input type="email" placeholder="E-mail Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">LOG-IN</button>
        </form> */}
         <form className="registerForm" onSubmit={registerHandler}>
        <label>Username</label>
         <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
          name="username"
          value={input.username}
          onChange={onInputChange}
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
          value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
          name="password"
          value={input.password}
          onChange={onInputChange}
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
          value={input.repeatPassword}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.repeatPassword && (
          <span style={{ color: "red" }}>{error.repeatPassword}</span>
        )}
        <button type="submit" className="registerButton" >Register</button>
      </form>
      </div>
    </div>
  </div>
</div>
)
}


