import { Link } from "react-router-dom";

import "./navbar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="navLeft">
        <i
          className="navIcon fa-brands fa-square-pinterest fa-xl"
          style={{ color: "#e60023" }}
        ></i>
        <i
          className="navIcon fa-brands fa-square-facebook fa-xl"
          style={{ color: "#1877f2" }}
        ></i>
        <i
          className="navIcon fa-brands fa-square-x-twitter fa-xl"
          style={{ color: "#000000" }}
        ></i>
        <i
          className="navIcon fa-brands fa-square-instagram fa-xl"
          style={{ color: "#e0405f" }}
        ></i>
        <i
          className="navIcon fa-brands fa-linkedin fa-xl"
          style={{ color: "#0077b5" }}
        ></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/profile" className="link">
              PROFILE
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/photos" className="link">
              PHOTOS
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/addphoto" className="link">
              ADD PHOTO
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/login" className="link">
              LOGIN
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/register" className="link">
              REGISTER
            </Link>
          </li>
          <li className="navListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="navRight">
        <Link to="/profile">
          <img
            className="navImg"
            src="https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/2023/10/free-images.jpg"
            alt=""
          />
        </Link>
        <i
          className="navSearchIcon fa-solid fa-magnifying-glass fa-xl"
          style={{ color: "#000000" }}
        ></i>
      </div>
    </div>
  );
}
