import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userApi from "../apis/usersApi.js";

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
    // TODO : Add proper error message

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

  const onLogoutHandler = async () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const contextValues = {
    onRegisterHandler,
    onLoginHandler,
    onLogoutHandler,
    userId: auth._id,
    username: auth.username,
    userAvatar: auth.avatar,
    email: auth.email,
    token: auth.accessToken,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
