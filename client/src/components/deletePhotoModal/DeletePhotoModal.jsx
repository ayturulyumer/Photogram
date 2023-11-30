import "./deletePhotoModal.css";
export default function DeletePhotoModal({ onClose,onDelete }) {
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="deleteModal">
        <div className="modalContent">
          <span className="close" onClick={onClose}>
            ×
          </span>
          <p>Are you sure you want to delete this post ?</p>
          <button className="del" onClick={onDelete}>Delete</button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
