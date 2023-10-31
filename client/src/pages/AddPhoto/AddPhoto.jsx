import "./addPhoto.css"
export default function AddPhoto() {
  return (
    <div className="addPhoto">
        <form className="addPhotoForm">
            <div className="addPhotoFormGroup">
                <input type="url" id="photo" placeholder="Image Url"/>
                <input type="text" placeholder="Title"  className="addPhotoTitle" autoFocus={true}/>
            </div>
            <div className="addPhotoFormGroup">
                <textarea placeholder="Tell Us the Photo's Tale" type="text" className="addPhotoDescription"></textarea>
            </div>
            <button className="addPhotoSubmit">Publish</button>
        </form>
    </div>
  )
}
