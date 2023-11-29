import "./deletePhoto.css";
export default function DeletePhoto({ onClose }) {
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="deleteModal">
        <div className="modalContent">
          <span className="close" onClick={onClose}>
            ×
          </span>
          <p>Are you sure you want to delete this post ?</p>
          <button className="del">Delete</button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
