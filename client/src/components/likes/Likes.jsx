import "./likes.css";

export default function Likes() {
  return (
    <div className="like-button-body">
      <div className="like-button">
        <div className="heart-bg">
          <div className="heart-icon"></div>
        </div>
        <span style={{fontSize:16, padding:3}}>Likes</span>
        <div className="likes-amount">7</div>
      </div>
    </div>
  );
}
