import Posts from "../../components/posts/Posts.jsx";
import "./photos.css";
import Loader from "../../components/loader/Loader.jsx"
import * as photoApi from "../../apis/photoApi.js";
import { useState, useEffect } from "react";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading,setShowLoading] = useState(false)

  useEffect(() => {
    setShowLoading(true);

    photoApi
      .getAll()
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err))
      .finally(() => setShowLoading(false));
  }, []);
  return (
    <div className="details">
      {loading && <Loader/>}
      <Posts photos={photos} />
    </div>
  );
}
