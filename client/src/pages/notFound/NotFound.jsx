import "./notfound.css"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
    <title>Page Not Found</title>
    <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" />
    <h1 className="error-text">
      Whoops, We can't seem to find the resource you're looking for.
    </h1>
    <p className="text">
      Please check that the Web site address is spelled correctly.Or,
    </p>
    <Link to={"/"}>
    <div className="btn1">
      <a
        className="error"
        >
        Go to Homepage
      </a>
    </div>
        </Link>
  </>
  
  )
}
