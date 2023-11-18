
import "./footer.css";

export default function Footer() {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="containerFooter">
        <footer className="footer">
          <div className="footerIcons">
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
          {/* Copyright */}
          <div className="footerCopyright">
            © 2023 All rights reserved
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
}
