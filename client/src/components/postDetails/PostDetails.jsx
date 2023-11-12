import { useLocation } from "react-router-dom";
import "./postDetails.css";
import { useEffect, useState } from "react";
import * as photoApi from "../../apis/photoApi.js";
import formatDateWithNamedDayAndMonth from "../../utils/dateFormatter.js";

export default function postDetails() {
  const [photo,setPhoto] = useState([])
  const location = useLocation()
  const photoId = location.pathname.split("/")[3]

  useEffect(() => {
  photoApi.getSingle(photoId)
  .then((data) => setPhoto(data))
  .catch((err) => console.log(err))
  }, []);

  

  return (
    <div className="postDetails">
      <div className="postDetailsWrapper">
        <img
          className="postDetailsImg"
          src={photo.imageUrl}
          alt=""
        />
        <h1 className="postDetailsTitle">
          {photo.title}
          <div className="postDetailsEdit">
          <i className="postDetailsIcon fa-regular fa-pen-to-square "></i>
            <i className="postDetailsIcon fa-solid fa-trash-can "></i>
          </div>
        </h1>
        <div className="postDetailsInfo">
          <span className="postDetailsAuthor">
            Posted by: <b>{photo.createdBy}</b>
          </span>
          <span className="postDetailsDate">{formatDateWithNamedDayAndMonth(photo.createdAt)}</span>
        </div>
        <p className="postDetailsDescription">
          {photo.description}
        </p>
      </div>
    </div>
  );
}
