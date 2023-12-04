import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as photoApi from "../../apis/photoApi.js";
import * as commentsApi from "../../apis/commentsApi.js";
import formatDateWithNamedDayAndMonth from "../../utils/dateFormatter.js";
import Comment from "../comments/Comment.jsx";
import DeletePhotoModal from "../deletePhotoModal/DeletePhotoModal.jsx";
import EditPhotoModal from "../editPhotoModal/EditPhotoModal.jsx";
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
  const [showEdit, setShowEdit] = useState(false);

  const { isAuthenticated, username, userAvatar, userId } =
    useContext(AuthContext);

  {
    /** Another way to get photoId */
  }
  // const location = useLocation()
  // const photoId = location.pathname.split("/")[3]

  const { photoId } = useParams();
  const navigate = useNavigate();

  {
    /**Get the photo and comments  */
  }
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

  const onDeletePhotoHandler = async () => {
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

  const onEditPhotoHandler = async (data) => {
    console.log(photo);
    const updateInfo = await photoApi.update(photoId, data);
    const updatedPhoto = {
      createdBy: photo.createdBy,
      ...updateInfo,
    };
    setPhoto(updatedPhoto);
    setShowEdit(false);
  };

  return (
    <>
      {showEdit && (
        <EditPhotoModal
          onClose={onClose}
          photoDetails={photo}
          onEdit={onEditPhotoHandler}
        />
      )}

      {showDelete && (
        <DeletePhotoModal onClose={onClose} onDelete={onDeletePhotoHandler} />
      )}

      {showSuccess && (
        <SuccessMessageModal
          successMsg={"You successfully deleted the photo !"}
        />
      )}

      <div className="postDetails">
        <div className="postDetailsWrapper">
          <img className="postDetailsImg" src={photo.imageUrl} alt="" />
          <h1 className="postDetailsTitle">
            {photo.title}
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
