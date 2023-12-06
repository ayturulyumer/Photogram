import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
export default function NavBar() {
  const { isAuthenticated , userAvatar , username } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="navLeft">
        <Link to={"/"} className="link">
          <div className="logo"></div>
        </Link>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/explore" className="link">
              EXPLORE
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/photos" className="link">
              PHOTOS
            </Link>
          </li>

          {/*If user is authenticated */}
          {isAuthenticated && (
            <>
              <li className="navListItem">
                <Link to="/create" className="link">
                  ADD PHOTO
                </Link>
              </li>
            </>
          )}
          {/*If user is  not authenticated */}
          {!isAuthenticated && (
            <>
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
            </>
          )}
        </ul>
      </div>
      {/** css breaks if i put it on the first check */}
      {isAuthenticated && (
        <div className="navRight">
            <p>Logged in as {username}</p>
          <ul className="wrapper">
            <img
              className="navImg"
              src={userAvatar}
              alt=""
            />
            <ul className="dropdown">
              <Link to="/dashboard" className="link">
              <li className="sub-item">
                <span className="material-symbols-outlined">grid_view</span>
                <p>Dashboard</p>
              </li>
              </Link>
              <Link to="/profile" className="link">
                <li className="sub-item">
                  <span className="material-symbols-outlined">
                    manage_accounts
                  </span>
                  <p>Profile</p>
                </li>
              </Link>
              <Link to ="/logout" className="link">
                <li className="sub-item">
                  <span className="material-symbols-outlined">logout</span>
                  <p>Logout</p>
                </li>
              </Link>
            </ul>
          </ul>
          <i
            className="navSearchIcon fa-solid fa-magnifying-glass fa-xl"
            style={{ color: "#000000" }}
          ></i>
        </div>
      )}
    </div>
  );
}
