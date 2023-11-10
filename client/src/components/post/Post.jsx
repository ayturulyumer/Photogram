import "./post.css";
import { Link } from "react-router-dom";
export default function Post({photo}) {
  return (
    <div className="Post">
      <Link to="/photo/details/:photoId">
      <img
        className="PostImg"
        src={photo.imageUrl}
        alt=""
      />
      </Link>
      <div className="PostInfo">
        <span className="PostTitle">{photo.photoTitle}</span>
        <hr className="PostLine" /> 
        <span className="PostDate">{photo.postTime}</span>
      </div>
      <p className="PostDescription">
       {photo.photoDescription}
        </p>
    </div>
  );
}
