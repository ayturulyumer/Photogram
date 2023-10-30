import "./postDetails.css";

export default function postDetails() {
  return (
    <div className="postDetails">
      <div className="postDetailsWrapper">
        <img
          className="postDetailsImg"
          src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="postDetailsTitle">
          Lorem ipsum dolor sit amet
          <div className="postDetailsEdit">
          <i className="postDetailsIcon fa-regular fa-pen-to-square "></i>
            <i className="postDetailsIcon fa-solid fa-trash-can "></i>
          </div>
        </h1>
        <div className="postDetailsInfo">
          <span className="postDetailsAuthor">
            Posted by: <b>Ayturul</b>
          </span>
          <span className="postDetailsDate">2 hours ago</span>
        </div>
        <p className="postDetailsDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          tenetur eligendi nihil vero a in molestias dolore est veniam
          provident, consequatur eius doloribus asperiores neque commodi, autem
          cumque. Magnam, hic. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Placeat tenetur eligendi nihil vero a in molestias
          dolore est veniam provident, consequatur eius doloribus asperiores
          neque commodi, autem cumque. Magnam, hic. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Placeat tenetur eligendi nihil vero a in
          molestias dolore est veniam provident, consequatur eius doloribus
          asperiores neque commodi, autem cumque. Magnam, hic. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Placeat tenetur eligendi
          nihil vero a in molestias dolore est veniam provident, consequatur
          eius doloribus asperiores neque commodi, autem cumque. Magnam, hic.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          tenetur eligendi nihil vero a in molestias dolore est veniam
          provident, consequatur eius doloribus asperiores neque commodi, autem
          cumque. Magnam, hic. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Placeat tenetur eligendi nihil vero a in molestias
          dolore est veniam provident, consequatur eius doloribus asperiores
          neque commodi, autem cumque. Magnam, hic. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Placeat tenetur eligendi nihil vero a in
          molestias dolore est veniam provident, consequatur eius doloribus
          asperiores neque commodi, autem cumque. Magnam, hic.
        </p>
      </div>
    </div>
  );
}
