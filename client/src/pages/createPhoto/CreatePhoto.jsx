import { useForm } from "../../hooks/useForm.js";
import * as photoApi from "../../apis/photoApi.js";
import "./createphoto.css";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";
export default function CreatePhoto() {
  const navigate = useNavigate();
  const { username } = useContext(AuthContext);
  const [error, setError] = useState("");

  const onCreatePhotoHandler = async (data) => {
    const validImageUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if(!data.title){
      setError({ message: "Title is missing!" });
      return setTimeout(() => setError("") , 5000);
    } else if (data.title < 4){
      setError({ message: "Title must be at least 4 characters long!" });
      return setTimeout(() => setError("") , 5000);
    } 

    if(!data.description){
      setError({ message: "Description is missing!" });
      return setTimeout(() => setError("") , 5000);
    } else if (data.description.length < 10){
      setError({ message: "Description must be at least 10 characters long!" });
      return setTimeout(() => setError("") , 5000);
    }

    if(!data.imageUrl){
      setError({ message: "Image Url is missing!" });
      return setTimeout(() => setError("") , 5000);
    }else if (!validImageUrl.test(data.imageUrl)){
      setError({ message: "Invalid image url" });
      return setTimeout(() => setError("") , 5000);
    }
    try {
      await photoApi.create(data);
      navigate("/photos");
    } catch (err) {
      setError(err);
      setTimeout(() => setError(""), 5000);
    }
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
      {error && <ErrorMessage message={error.message}/>}
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
