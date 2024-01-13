import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as photoApi from "../../apis/photoApi.js";
import * as commentsApi from "../../apis/commentsApi.js";
import * as likesApi from "../../apis/likesApi.js";
import formatDateWithNamedDayAndMonth from "../../utils/dateFormatter.js";
import Comment from "../comments/Comment.jsx";
import Likes from "../likes/Likes.jsx";
import DeletePhotoModal from "../deletePhotoModal/DeletePhotoModal.jsx";
import EditPhotoModal from "../editPhotoModal/EditPhotoModal.jsx";
import SuccessMessageModal from "../successMessageModal/successMessageModal.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.jsx";
import ErrorMessage from "../errorMessage/ErrorMessage.jsx";
import "./postDetails.css";

export default function postDetails() {
  const [photo, setPhoto] = useState([]);
  const [comments, setComments] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [liked, setIsLiked] = useState(false);
  const [photoLikes, setPhotoLikes] = useState(0);
  const [isAlreadyLiked, setIsAlreadyLiked] = useState(0);
  const [error, setError] = useState("");

  const { isAuthenticated, username, userAvatar, userId } =
    useContext(AuthContext);

  const { photoId } = useParams();
  const navigate = useNavigate();

  {
    /**Get the photo & comments & likes  */
  }
  useEffect(() => {
    photoApi
      .getSingle(photoId)
      .then((result) => setPhoto(result))
      .catch(
        (err) => setError(err),
        setTimeout(() => setError(""), 5000)
      );

    commentsApi
      .getAll(photoId)
      .then((result) => setComments(result))
      .catch(
        (err) => setError(err),
        setTimeout(() => setError(""), 5000)
      );

    likesApi
      .getPhotoLikes(photoId)
      .then((result) => setPhotoLikes(result))
      .catch(
        (err) => setError(err),
        setTimeout(() => setError(""), 5000)
      );

    likesApi
      .getIsAlreadyLiked(photoId, userId)
      .then((result) => setIsAlreadyLiked(result))
      .catch(
        (err) => setError(err),
        setTimeout(() => setError(""), 5000)
      );
  }, [photoId]);

  const editPhotoClickHandler = () => {
    setShowEdit(true);
  };

  const deletePhotoClickHandler = () => {
    setShowDelete(true);
  };

  const onClose = () => {
    setShowDelete(false);
    setShowEdit(false);
  };
  const onEditPhotoHandler = async (data) => {
    const validImageUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!data.title) {
      setError({ message: "Title is missing!" });
      return setTimeout(() => setError(""), 5000);
    } else if (data.title.length < 4) {
      setError({ message: "Title must be at least 4 characters long!" });
      return setTimeout(() => setError(""), 5000);
    }

    if (!data.description) {
      setError({ message: "Description is missing!" });
      return setTimeout(() => setError(""), 5000);
    } else if (data.description.length < 10) {
      setError({ message: "Description must be at least 10 characters long!" });
      return setTimeout(() => setError(""), 5000);
    }

    if (!data.imageUrl) {
      setError({ message: "Image Url is missing!" });
      return setTimeout(() => setError(""), 5000);
    } else if (!validImageUrl.test(data.imageUrl)) {
      setError({ message: "Invalid image url" });
      return setTimeout(() => setError(""), 5000);
    }

    if (photo._ownerId != userId) {
      navigate(`/photo/details/${photoId}`);
    }
    try {
      const updateInfo = await photoApi.update(photoId, data);
      const updatedPhoto = {
        createdBy: photo.createdBy,
        ...updateInfo,
      };
      setPhoto(updatedPhoto);
      setShowEdit(false);
    } catch (err) {
      setError(err), setTimeout(() => setError(""), 5000);
    }
  };

  const onDeletePhotoHandler = async () => {
    {
      /** If current user is not owner */
    }
    if (photo._ownerId != userId) {
      return navigate(`/photo/details/${photoId}`);
    }
    try {
      await photoApi.remove(photoId);

      {
        /** Show success message  */
      }
      setShowSuccess(true);
      {
        /** Redirect to catalog after 1.5 seconds  */
      }
      setTimeout(() => navigate("/photos"), 1500);
    } catch (err) {
      setError(err), setTimeout(() => setError(""), 5000);
    }
  };

  const onCommentSubmit = async ({ text }) => {
    if (!text) {
      setError({ message: "Cannot send empty message !" });
      return setTimeout(() => setError(""), 5000);
    }
    try {
      const newComment = await commentsApi.create(
        photoId,
        text,
        username,
        userAvatar
      );
      setComments((state) => [newComment, ...state]);
    } catch (err) {
      setError(err), setTimeout(() => setError(""), 5000);
    }
  };

  const photoLikeHandler = async () => {
    if (isAlreadyLiked) {
      setError({ message: "It's already liked" });
      return setTimeout(() => setError(""), 5000);
    }
    try {
      await likesApi.like(photoId);
      setPhotoLikes(photoLikes + 1);
      setIsAlreadyLiked(1);
      setIsLiked((current) => !current);
    } catch (err) {
      setError(err), setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <>
      {showEdit && (
        <EditPhotoModal
          onClose={onClose}
          photoDetails={photo}
          onEdit={onEditPhotoHandler}
          error={error}
        />
      )}

      {showDelete && (
        <DeletePhotoModal onClose={onClose} onDelete={onDeletePhotoHandler} />
      )}

      {showSuccess && (
        <SuccessMessageModal
          successMsg={"You successfully deleted the photo!"}
        />
      )}

      <div className="postDetails">
        <div className="postDetailsWrapper">
          <img
            className="postDetailsImg"
            src={photo.imageUrl}
            alt={photo.title}
          />
          <h1 className="postDetailsTitle">
            {photo.title}
            {userId && (
              <Likes
                isLiked={liked}
                onLike={photoLikeHandler}
                likes={photoLikes}
                alreadyLiked={isAlreadyLiked}
              />
            )}
            {/** IF it's owner show edit buttons */}
            {userId && userId === photo._ownerId && (
              <div className="postDetailsEdit">
                <i
                  className="postDetailsIcon fa-regular fa-pen-to-square "
                  onClick={editPhotoClickHandler}
                ></i>
                <i
                  className="postDetailsIcon fa-solid fa-trash-can "
                  onClick={deletePhotoClickHandler}
                ></i>
              </div>
            )}
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
        <div className="err">
          {error && <ErrorMessage message={error.message} />}
        </div>
        {/** Comment section */}

        <Comment
          isAuthenticated={isAuthenticated}
          userAvatar={userAvatar}
          comments={comments}
          onCommentSubmit={onCommentSubmit}
        />
      </div>
    </>
  );
}
