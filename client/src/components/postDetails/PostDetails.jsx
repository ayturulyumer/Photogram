import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm.js";
import * as photoApi from "../../apis/photoApi.js";
import * as commentsApi from "../../apis/commentsApi.js";
import formatDateWithNamedDayAndMonth from "../../utils/dateFormatter.js";
import Comment from "../comments/Comment.jsx";
import DeletePhoto from "../deletePhotoModal/DeletePhotoModal.jsx";
import SuccessMessageModal from "../successMessageModal/successMessageModal.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.jsx";
import "./postDetails.css";

export default function postDetails() {
  const [photo, setPhoto] = useState([]);
  const [comments, setComments] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { isAuthenticated, username, userAvatar } = useContext(AuthContext);
  {
    /** Another way to get photoId */
  }
  // const location = useLocation()
  // const photoId = location.pathname.split("/")[3]

  const { photoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    photoApi
      .getSingle(photoId)
      .then((result) => setPhoto(result))
      .catch((err) => console.log(err));

    commentsApi
      .getAll(photoId)
      .then((result) => setComments(result))
      .catch((err) => console.log(err));
  }, [photoId]);

  const deletePhotoClickHandler = () => {
    setShowDelete(true);
  };

  const onClose = () => {
    setShowDelete(false);
  };

  const onDeletePhotoHandler = async () => {
    try {
      await photoApi.remove(photoId);
      setShowSuccess(true);
      setTimeout(() => navigate("/photos"), 1500);
    } catch (err) {
      {
        /** TODO ! Add proper error message */
      }
      console.log(err);
    }
  };


  const onCommentSubmit = async ({ text }) => {
    const newComment = await commentsApi.create(
      photoId,
      text,
      username,
      userAvatar
    );
    setComments((state) => [newComment, ...state]);
  };

  const { values, changeHandler, onSubmit } = useForm(
    {
      text: "",
    },
    onCommentSubmit
  );
  console.log(showSuccess)

  return (
    <>
      {showDelete && (
        <DeletePhoto onClose={onClose} onDelete={onDeletePhotoHandler} />
      )}

      {showSuccess &&  <SuccessMessageModal/>}

      <div className="postDetails">
        <div className="postDetailsWrapper">
          <img className="postDetailsImg" src={photo.imageUrl} alt="" />
          <h1 className="postDetailsTitle">
            {photo.title}
            <div className="postDetailsEdit">
              <i className="postDetailsIcon fa-regular fa-pen-to-square "></i>
              <i
                className="postDetailsIcon fa-solid fa-trash-can "
                onClick={deletePhotoClickHandler}
              ></i>
            </div>
          </h1>
          <div className="postDetailsInfo">
            <span className="postDetailsAuthor">
              Posted by: <b>{photo.createdBy}</b>
            </span>
            <span className="postDetailsDate">
              {formatDateWithNamedDayAndMonth(photo._createdOn)}
            </span>
          </div>
          <p className="postDetailsDescription">{photo.description}</p>
        </div>
        {/** Comment section */}
        <Comment
          isAuthenticated={isAuthenticated}
          userAvatar={userAvatar}
          comments={comments}
          onSubmit={onSubmit}
          values={values}
          changeHandler={changeHandler}
        />
      </div>
    </>
  );
}
