import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import { useForm } from "../../hooks/useForm.js";
import "./profile.css";
import SuccessMessageModal from "../../components/successMessageModal/successMessageModal.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";

export default function Profile() {
  const { username, userAvatar, onProfileUpdateHandler, showSuccessMessage , errorMessage} =
    useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      username: username,
      newAvatar: userAvatar,
    },
    onProfileUpdateHandler
  );
  return (
    <>
     {showSuccessMessage && (
        <SuccessMessageModal
          successMsg={"Profile updated successfully!"}
        />
      )}
      <div className="profile">
        <div className="profileWrapper">
          <div className="profileTitle"></div>
          <form className="profileForm" onSubmit={onSubmit}>
       {errorMessage && <ErrorMessage message={errorMessage}/>}
            <label>Profile Picture</label>
            <img className="profilePicture" src={userAvatar} alt="" />
            <label>Username</label>
            <input
              type="text"
              name="username"
              defaultValue={username}
              onChange={changeHandler}
            />
            <label>Profile Picture Url</label>
            <input
              type="url"
              name="newAvatar"
              defaultValue={userAvatar}
              onChange={changeHandler}
            />
            <button className="profileSubmit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}
