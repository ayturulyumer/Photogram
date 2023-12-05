import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";
import * as photoApi from "../../apis/photoApi.js";
import { useParams } from "react-router-dom";

export default function AuthorizationGuard() {
  const [photo, setPhoto] = useState([]);
  const { isAuthenticated, userId } = useContext(AuthContext);
  const { photoId } = useParams();
  useEffect(() => {
    photoApi
      .getSingle(photoId)
      .then((result) => setPhoto(result))
      .catch((err) => console.log(err));
  }, [photoId]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (photo._ownerId != userId) {
    // return <Navigate to="/" />;
  }
  return <Outlet />;
}
