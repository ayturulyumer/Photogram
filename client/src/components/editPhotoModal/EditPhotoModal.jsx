import "./editPhotoModal.css"

export default function EditPhotoModal() {
  return (
    <div className="editModal">
    <div className="editModalContent">
      <span className="close" >
            ×
          </span>
    <form method="POST">
      <h1>Edit photo</h1>
      <div className="info">
        <input
          className="title"
          type="text"
          name="title"
          placeholder="Title"
        //   value={values.title}
        //   onChange={changeHandler}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image Url"
        //   value={values.imageUrl}
        //   onChange={changeHandler}
        />
      </div>
      <p>Description</p>
      <div>
        <textarea
          name="description"
          rows={4}
        //   value={values.description}
        //   onChange={changeHandler}
        />
      </div>
      <button className="update" type="submit">Update</button>
      <button className="cancel" type="">Cancel</button>
    </form>
    </div>
  </div>
  )
}
