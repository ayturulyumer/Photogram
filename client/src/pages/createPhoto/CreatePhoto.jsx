import { useForm } from "../../hooks/useForm.js";
import * as photoApi from "../../apis/photoApi.js";
import "./createphoto.css";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function CreatePhoto() {
  const navigate = useNavigate()
  const { username } = useContext(AuthContext);

  const onCreatePhotoHandler = async (data) => {
    await photoApi.create(data);
    navigate("/photos")
  };

  const { values, changeHandler, onSubmit } = useForm(
    {
      title: "",
      description: "",
      createdBy: username,
      imageUrl: "",
    },
    onCreatePhotoHandler
  );

  return (
    <div className="main-block">
      <div className="left-part"></div>
      <form method="POST" onSubmit={onSubmit}>
        <h1>Publish Your Photo</h1>
        <div className="info">
          <input
            className="title"
            type="text"
            name="title"
            placeholder="Title"
            value={values.title}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image Url"
            value={values.imageUrl}
            onChange={changeHandler}
          />
        </div>
        <p>Description</p>
        <div>
          <textarea
            name="description"
            rows={4}
            value={values.description}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}
