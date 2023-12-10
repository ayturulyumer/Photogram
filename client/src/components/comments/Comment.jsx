import "./comment.css";
import formatDateWithNamedDayAndMonth from "../../utils/dateFormatter.js";
import {useForm} from "../../hooks/useForm.js"

export default function Comment({
  comments,
  onCommentSubmit,
  isAuthenticated,
  userAvatar,
}) {

  const { values, changeHandler, onSubmit } = useForm(
    {
      text: "",
    },
    onCommentSubmit
  );


  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="col-md-12">
          <div className="blog-comment">
            <h3 className="text">Comments: </h3>
            <hr />
            {isAuthenticated && (
              <article className="create-comment">
                <form className="form" method="POST" onSubmit={onSubmit}>
                  <img
                    src={userAvatar}
                    className="userAvatar"
                    alt={userAvatar}
                  />
                  <textarea
                    name="text"
                    placeholder="Comment......"
                    value={values.text}
                    onChange={changeHandler}
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
              {/**Single Comment */}
              {/**Could put it in another component , but i decided it's fine like this for this project */}
              {comments.map(({ _id, text, username ,userAvatar , _createdOn }) => (
                <li className="clearfix" key={_id}>
                  <img
                    src={userAvatar}
                    className="avatar"
                    alt={userAvatar}
                  />
                  <div className="post-comments">
                    <p className="meta">
                      {formatDateWithNamedDayAndMonth(_createdOn)} <span style={{color:"black",textDecoration:"underline"}}>{username}</span> says :{" "}
                    </p>
                    <p>
                     {text}
                    </p>
                  </div>
                </li>
              ))}
              {comments.length === 0 && (
                <p className="no-comment">No comments yet. Be the first!</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
