import "./posts.css";
import Post from "../post/Post.jsx";

export default function Posts({photos}) {
  return <div className="posts">
    {photos.map((photo) =>(
      <Post photo={photo} key={photo._id}/>
    ))}
  </div>;
}
