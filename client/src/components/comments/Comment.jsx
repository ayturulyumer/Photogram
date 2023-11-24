import "./comment.css";

export default function Comment() {
  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="col-md-12">
          <div className="blog-comment">
            <h3 className="text-success">Comments</h3>
            <article className="create-comment">
              <form className="form">
              <img
                  src="https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/2023/10/free-images.jpg"
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
