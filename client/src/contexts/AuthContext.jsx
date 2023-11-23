import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userApi from "../apis/usersApi.js"

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // Sets authorization
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");
    return {};
  });
  const navigate = useNavigate();

  const onLoginHandler = async (data) => {
    try {
      const user = await userApi.login(data);
      setAuth(user);
      localStorage.setItem("accessToken", user.accessToken);
      navigate("/");
    } catch (error) {
      // TODO acceptable error message
      console.log(error);
    }
  };

  const onRegisterHandler = async (data) => {
    const { repeatPassword, ...registerData } = data;
    if (repeatPassword != registerData.password) {
      return;
    }
    try {
      const user = await userApi.register(registerData);
      setAuth(user);
      localStorage.setItem("accessToken", user.accessToken);
      navigate("/");
    } catch (error) {
      //TODO acceptable error message
      console.log(error);
    }
  };

  const values = {
    onRegisterHandler,
    onLoginHandler,
    userId: auth._id,
    username: auth.username,
    email: auth.email,
    accessToken: auth.accessToken,
    isAuthenticated: !!auth.accessToken,
  };

  return (
   <AuthContext.Provider value={values}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


