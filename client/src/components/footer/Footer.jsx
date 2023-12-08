
import "./footer.css";

export default function Footer() {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="containerFooter">
        <footer className="footer">
          {/* Copyright */}
          <div className="footerCopyright">
            © 2023 Photogram • All rights reserved
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
}
