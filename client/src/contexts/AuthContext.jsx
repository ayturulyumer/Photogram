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
      console.log(user)
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

    {/** Register the user in server  */}
      const userInitialInfo = await userApi.register(registerData);
      {/** Set Token  so we can send authorized requests*/}
    
      localStorage.setItem("accessToken", userInitialInfo.accessToken);

      {/** Create collection with user info so the user can change avatar & username later*/}
      const user = await userApi.createProfile(userInitialInfo)
      console.log(user)



      setAuth(user);


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

  const onProfileUpdateHandler = async (data) => {
    const {username,newAvatar} = data
    

    const updatedProfile = {
      userId: auth._ownerId,
      username:username,
      avatar:newAvatar,
      email:auth.email,
      accessToken:auth.accessToken
    }
    
    try {
      const updatedUser = await userApi.updateProfile(auth._id,updatedProfile)
      setAuth(updatedUser)
    }catch (error) {
      console.log(error)
      
    }
  }



  

  

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
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
