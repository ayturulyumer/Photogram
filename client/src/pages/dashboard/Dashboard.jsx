import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import * as photoApi from "../../apis/photoApi.js";
import { Link } from "react-router-dom";
import "./dashboard.css";
import transformRowsMatrix from "../../utils/transformRows.js";


export default function Dashboard() {
  const { userAvatar, userId } = useContext(AuthContext);

  const [myPhotos, setMyPhotos] = useState([]);
  useEffect(() => {
    photoApi
      .getByOwner(userId)
      .then((data) => setMyPhotos(data))
      .catch((err) => console.log(err));
  }, [userId]);

  console.log(myPhotos);


{/** Create matrix with 2 elements in it */}
const rows = transformRowsMatrix(myPhotos)
  

  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card">
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: 160 }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: 150, height: 150 }}
                >
                      <Link to={"/profile"} className="link" >

                  <img
                    src={userAvatar}
                    alt="Generic placeholder image"
                    className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: 150, height: 150, zIndex: 1  }}
                    
                    />
                    </Link>

                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">{myPhotos.length}</p>
                    <p className="small text-muted mb-0">Photos</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">100</p>
                    <p className="small text-muted mb-0">Likes</p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4 text-black">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">Your photos</p>
                  <p className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </p>
                </div>
                {/** Create new row after every second element in array  */}
                {rows.map(row => (
                <div className="row g-2">
                  {row.map(photo => (
                  <div className="col mb-2" key={photo._id}>
                    <Link to={`/photo/details/${photo._id}`}>
                    <img
                      src={photo.imageUrl}
                      alt="image 1"
                      className="w-100 rounded-3"
                      />
                      </Link>
                  </div>
                  ))}
                </div>
                ))}
                {myPhotos.length === 0 && (
                <div className="no-photos">
                <p>Your gallery looks lonely</p>
                <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-sad-ghost-illustration-vector-on-white-background-png-image_5293174.jpg" />
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
