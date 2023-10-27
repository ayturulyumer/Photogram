import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-pinterest fa-xl" style={{color: "#e60023"}}></i>
      <i className="topIcon fa-brands fa-square-facebook fa-xl" style={{color: "#1877f2"}}></i>
      <i className="topIcon fa-brands fa-square-x-twitter fa-xl" style={{color: "#000000"}}></i>
      <i className="topIcon fa-brands fa-square-instagram fa-xl" style={{color: "#e0405f"}}></i>
      <i className="topIcon fa-brands fa-linkedin fa-xl" style={{color: "#0077b5"}}></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">Profile</li>
          <li className="topListItem">Photos</li>
          <li className="topListItem">Login</li>
          <li className="topListItem">Register</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/2023/10/free-images.jpg"
          alt=""
        />
       <i className="topSearchIcon fa-solid fa-magnifying-glass fa-xl" style={{color: "#000000"}}></i>
      </div>
    </div>
  );
}
