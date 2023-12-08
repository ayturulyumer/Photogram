import "./likes.css";

export default function Likes({isLiked , onLike , likes,alreadyLiked}) {
  return (
    <div className="like-button-body">
      <div className="like-button" onClick={onLike}>
        <div className="heart-bg">
          <div className={isLiked  || alreadyLiked ? "heart-icon liked" : "heart-icon"}></div>
        </div>
        <span style={{fontSize:16, padding:3}}>Likes</span>
        <div className="likes-amount">{likes}</div>
      </div>
    </div>
  );
}
