import { useState } from "react";
export const inputValidator = () => {
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
          }
          break;

        case "repeatPassword":
          if (!value) {
            stateObj[name] = "Please confirm your password !";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };
  return {
    error,
    input,
    validateInput
  }
};
