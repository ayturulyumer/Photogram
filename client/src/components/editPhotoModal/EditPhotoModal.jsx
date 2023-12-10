import "./editPhotoModal.css";
import { useForm } from "../../hooks/useForm.js";
import AuthContext from "../../contexts/AuthContext.jsx";
import { useContext } from "react";

export default function EditPhotoModal({ onClose, photoDetails, onEdit }) {
  const {username} = useContext(AuthContext)


  const { values, changeHandler, onSubmit } = useForm(
    {
      createdBy: username,
      title: photoDetails.title,
      imageUrl: photoDetails.imageUrl,
      description: photoDetails.description,
    },
    onEdit
  );
  return (
    <div className="editModal">
      <div className="editModalContent">
        <span className="close" onClick={onClose}>
          ×
        </span>
        <form method="POST" onSubmit={onSubmit}>
          <h1>Edit photo</h1>
          <div className="info">
            <input
              className="title"
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={photoDetails.title}
              onChange={changeHandler}
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image Url"
              defaultValue={photoDetails.imageUrl}
              onChange={changeHandler}
            />
          </div>
          <p>Description</p>
          <div>
            <textarea
              name="description"
              rows={4}
              defaultValue={photoDetails.description}
              onChange={changeHandler}
            />
          </div>
          <button className="update">Update</button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
