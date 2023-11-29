import "./deletePhoto.css";
export default function DeletePhoto() {
  return (
    <div className="backdrop">
      <div className="deleteModal">
        <div className="modalContent">
          <span className="close">×</span>
          <p>Are you sure you want to delete this post ?</p>
          <button className="del">Delete</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}
