import "./post.css";
import { Link } from "react-router-dom";
export default function Post({photo}) {
  return (
    <div className="Post">
      <Link to={`/photo/details/${photo._id}`}>
      <img
        className="PostImg"
        src={photo.imageUrl}
        alt=""
      />
      </Link>
      <div className="PostInfo">
        <span className="PostTitle">{photo.title}</span>
        <hr className="PostLine" /> 
        <span className="PostDate">{photo.postTime}</span>
      </div>
      <p className="PostDescription">
       {photo.description}
        </p>
    </div>
  );
}
