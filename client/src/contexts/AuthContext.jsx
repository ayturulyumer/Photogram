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
  const [error, setError] = useState("");
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
      setError("");
      navigate("/");
    } catch (error) {
      setError(error);
      setTimeout(() => setError(""), 5000);
    }
  };

  const onRegisterHandler = async (data) => {
    const { repeatPassword, ...registerData } = data;

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!registerData.username) {
      setError({ message: "Username is missing" });
      return setTimeout(() => setError(""), 5000);
    } else if (registerData.username.length < 3) {
      setError({ message: "Username must be at least 3 characters long" });
      return setTimeout(() => setError(""), 5000);
    }

    if (!validEmail.test(registerData.email)) {
      setError({ message: "Please enter a valid email adress" });
      return setTimeout(() => setError(""), 5000);
    }

    if (repeatPassword != registerData.password) {
      setError({ message: "Passwords do not match" });
      return setTimeout(() => setError(""), 5000);
    }

    if (registerData.password.length < 4) {
      setError({ message: "Password must be at least 4 characters long" });
      return setTimeout(() => setError(""), 5000);
    }

    try {
      {
        /** Register the user in server // we don't need token */
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
      {
        /** Remove the accessToken from localStorage as we don't need it anymore  */
      }
      localStorage.removeItem("accessToken");

      setSuccessMessage(true);

      setError("");
      setTimeout(() => setSuccessMessage(false), 1500);
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setError(error);
      setTimeout(() => setError(""), 5000);
    }
  };

  const onLogoutHandler = async () => {
    setAuth({});
  };

  const onProfileUpdateHandler = async (data) => {
    const { username, newAvatar } = data;

    const validAvatar = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    if (!newAvatar) {
      setError({ message: "Profile image url is missing" });
      return setTimeout(() => setError(""), 5000);
    } else if (!validAvatar.test(newAvatar)) {
      setError({
        message: "Please enter a valid HTTP or HTTPS image URL",
      });
      return setTimeout(() => setError(""), 5000);
    }
    if (!username) {
      setError({ message: "Username is missing" });
      return setTimeout(() => setError(""), 5000);
    } else if (username.length < 3) {
      setError({ message: "Username must be at least 3 characters long" });
      return setTimeout(() => setError(""), 5000);
    }

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
      setTimeout(() => setSuccessMessage(false), 3000);
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      setError(error);
      setTimeout(() => setError(""), 5000);
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
    errorMessage: error.message,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
