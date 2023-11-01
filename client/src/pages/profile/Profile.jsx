import "./profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileUpdateTitle">Update your account</span>
          <span className="profileDeleteTitle">Delete your account <i className="fa-solid fa-trash"></i></span>
        </div>
        <form className="profileForm">
          <label>Profile Picture</label>
          <img
            className="profilePicture"
            src="https://images.pexels.com/photos/2449605/pexels-photo-2449605.png?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <label >Profile Picture Url</label>
          <input type="url" placeholder="Profile Picture Url" />
          <label>Username</label>
          <input type="text" placeholder="Ayti" />
          <label>Email</label>
          <input type="text" placeholder="Ayti@abv.bg" />
          <label>Password</label>
          <input type="password" />
          <button className="profileSubmit">Update</button>
        </form>
      </div>
    </div>
  );
}
