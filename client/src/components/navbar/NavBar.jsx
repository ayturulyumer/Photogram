import "./navbar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="navLeft">
      <i className="navIcon fa-brands fa-square-pinterest fa-xl" style={{color: "#e60023"}}></i>
      <i className="navIcon fa-brands fa-square-facebook fa-xl" style={{color: "#1877f2"}}></i>
      <i className="navIcon fa-brands fa-square-x-twitter fa-xl" style={{color: "#000000"}}></i>
      <i className="navIcon fa-brands fa-square-instagram fa-xl" style={{color: "#e0405f"}}></i>
      <i className="navIcon fa-brands fa-linkedin fa-xl" style={{color: "#0077b5"}}></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">Home</li>
          <li className="navListItem">Profile</li>
          <li className="navListItem">Photos</li>
          <li className="navListItem">Add Photo</li>
          <li className="navListItem">Login</li>
          <li className="navListItem">Register</li>
          <li className="navListItem">Logout</li>
        </ul>
      </div>
      <div className="navRight">
        <img
          className="navImg"
          src="https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/2023/10/free-images.jpg"
          alt=""
        />
       <i className="navSearchIcon fa-solid fa-magnifying-glass fa-xl" style={{color: "#000000"}}></i>
      </div>
    </div>
  );
}
