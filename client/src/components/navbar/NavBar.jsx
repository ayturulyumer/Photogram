import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
export default function NavBar() {
  const { isAuthenticated, userAvatar, username } = useContext(AuthContext);
  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <Link to={"/"} className="link">
          <div className={styles.logo}></div>
        </Link>
      </div>
      <div className={styles.navCenter}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="/photos" className="link">
              PHOTOS
            </Link>
          </li>

          {/*If user is authenticated */}
          {isAuthenticated && (
            <>
              <li className={styles.navListItem}>
                <Link to="/create" className="link">
                  ADD PHOTO
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link to="/explore" className="link">
                  EXPLORE
                </Link>
              </li>
            </>
          )}
          {/*If user is  not authenticated */}
          {!isAuthenticated && (
            <>
              <li className={styles.navListItem}>
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
              <li className={styles.navListItem}>
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
        <div className={styles.navRight}>
          <p>Logged in as {username}</p>
          <ul className={styles.wrapper}>
            <img className={styles.navImg} src={userAvatar} alt="navimg" />
            <ul className={styles.dropdown}>
              <Link to="/dashboard" className="link">
                <li className={styles.sub-item}>
                  <span className="material-symbols-outlined">grid_view</span>
                  <p>Dashboard</p>
                </li>
              </Link>
              <Link to="/profile" className="link">
                <li className={styles.sub-item}>
                  <span className="material-symbols-outlined">
                    manage_accounts
                  </span>
                  <p>Profile</p>
                </li>
              </Link>
              <Link to="/logout" className="link">
                <li className={styles.sub-item}>
                  <span className="material-symbols-outlined">logout</span>
                  <p>Logout</p>
                </li>
              </Link>
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
}
