import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import "./comment.css";

export default function Comment() {
  const { isAuthenticated , userAvatar } = useContext(AuthContext);
  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="col-md-12">
          <div className="blog-comment">
            <h3 className="text">Comments: </h3>
            {isAuthenticated && (
              <article className="create-comment">
                <form className="form">
                  <img
                    src={userAvatar}
                    className="userAvatar"
                    alt=""
                  />
                  <textarea
                    name="comment"
                    placeholder="Comment......"
                    defaultValue={""}
                  />
                  <input
                    className="btnSubmit"
                    type="submit"
                    defaultValue="Add Comment"
                  />
                </form>
              </article>
            )}
            <ul className="comments">
              <li className="clearfix">
                <img
                  src="https://bootdey.com/img/Content/user_1.jpg"
                  className="avatar"
                  alt=""
                />
                <div className="post-comments">
                  <p className="meta">
                    Dec 18, 2014 <a href="#">JohnDoe</a> says :{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam a sapien odio, sit amet
                  </p>
                </div>
              </li>
              <li className="clearfix">
                <img
                  src="https://bootdey.com/img/Content/user_2.jpg"
                  className="avatar"
                  alt=""
                />
                <div className="post-comments">
                  <p className="meta">
                    Dec 19, 2014 <a href="#">JohnDoe</a> says :{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam a sapien odio, sit amet
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
