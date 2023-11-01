import "./addPhoto.css";
export default function AddPhoto() {
  return (
    // <body>
    //   <div className="addPhoto">
    //     <form className="addPhotoForm">
    //       <div className="addPhotoFormGroup">
    //         <label htmlFor="photo">Url:</label>
    //         <input  type="url" id="photo" placeholder="Image Url" className="addPhotoUrl" />
    //         <label htmlFor="title">Title:</label>
    //         <input
    //           id="title"
    //           type="text"
    //           placeholder="Title"
    //           className="addPhotoTitle"
    //           autoFocus={true}
    //         />
    //       </div>
    //       <div className="addPhotoFormGroup">
    //       <label htmlFor="description">Description:</label>
    //         <textarea
    //         id="description"
    //           placeholder="Tell Us the Photo's Tale..."
    //           type="text"
    //           className="addPhotoDescription"
    //         ></textarea>
    //       </div>
    //       <button className="addPhotoSubmit">Publish</button>
    //     </form>
    //   </div>
    // </body>
    <div className="main-block">
  <div className="left-part">
  </div>
  <form action="/">
    <h1>Publish Your Photo</h1>
    <div className="info">
      <input
        className="title"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input type="text" name="url" placeholder="Image Url" />
    </div>
    <p>Description</p>
    <div>
      <textarea rows={4} defaultValue={""} />
    </div>
    <button type="submit" href="/">
      Publish
    </button>
  </form>
</div>

  );
}
