import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as userApi from "../../apis/usersApi.js";

export default function Logout() {
  const { onLogoutHandler } = useContext(AuthContext);
  useEffect(() => {
    userApi.logout().then(() => onLogoutHandler());
  }, []);
  return <Navigate to={"/"} />;
}
