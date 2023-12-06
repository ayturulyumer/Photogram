import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userApi from "../apis/usersApi.js";
import usePersistedState from "../hooks/usePersistedState.js";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // Sets authorization
  const [auth, setAuth] = usePersistedState("auth", {});
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const onLoginHandler = async (data) => {
    try {
      const userInitialInfo = await userApi.login(data);

      {
        /** Returns array of objects */
      }
      const returnedUser = await userApi.getByOwner(userInitialInfo._id);

      {
        /**There is only one user created by the ownerId , so i'm setting it as the auth */
      }
      const user = returnedUser[0];

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
      {
        /** Register the user in server  */
      }
      const userInitialInfo = await userApi.register(registerData);
      {
        /** Set Token  so we can send authorized requests*/
      }

      localStorage.setItem("accessToken", userInitialInfo.accessToken);

      {
        /** Create collection with user info so the user can change avatar & username later if he/she wants to*/
      }
      const user = await userApi.createProfile(userInitialInfo);

      setAuth(user);
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 1500);
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      //TODO acceptable error message
      console.log(error);
    }
  };
  const onLogoutHandler = async () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const onProfileUpdateHandler = async (data) => {
    const { username, newAvatar } = data;

    const updatedProfile = {
      userId: auth._ownerId,
      username: username,
      avatar: newAvatar,
      email: auth.email,
      accessToken: auth.accessToken,
    };

    try {
      const updatedUser = await userApi.updateProfile(auth._id, updatedProfile);
      setAuth(updatedUser);
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 1500);
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValues = {
    onRegisterHandler,
    onLoginHandler,
    onLogoutHandler,
    onProfileUpdateHandler,
    userId: auth._ownerId,
    username: auth.username,
    userAvatar: auth.avatar,
    email: auth.email,
    token: auth.accessToken,
    isAuthenticated: !!auth.accessToken,
    showSuccessMessage: showSuccessMessage,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
