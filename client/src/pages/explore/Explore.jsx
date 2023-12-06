import "./explore.css";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import Loader from "../../components/loader/Loader.jsx";
import { useEffect, useState } from "react";
import * as exploreApi from "../../apis/exploreApi.js";

export default function Discover() {
  const [explorePhotos, setExplorePhotos] = useState([]);
  const [visible,setVisible] = useState(8)
  const [loading, setShowLoading] = useState(false);
  const [query, setQuery] = useState("nature");
  useEffect(() => {
    setShowLoading(true);
    exploreApi
      .getPhotos(query)
      .then((data) => setExplorePhotos(data.photos))
      .catch((err) => console.log(err))
      .finally(() => setShowLoading(false));
  }, [query]);

  const onSearchHandler = async (data) => {
    const { searchInput } = { ...data };
    setQuery(searchInput);
  };

  console.log(explorePhotos)


  return (
    <>
      <SearchBar onSearchHandler={onSearchHandler} />
      <div className="explore-posts">
        {loading && <Loader />}

        {explorePhotos.slice(0,visible).map((photo) => (
          <div className="Post" key={photo.id}>
            <img className="PostImg" src={photo.src.original} alt={photo.alt} />
            <div className="PostInfo">
              <span className="PostTitle">{photo.alt}</span>
              <hr className="PostLine" />
              <span className="PostDate">{photo.photographer}</span>
            </div>
          </div>
        ))}

        {explorePhotos.length === 0 && (
          <div className="container">
            <div className="icon">😞</div>
            <h1>No Matches Found</h1>
            <p>Sorry, we couldn't find any matches for your search.</p>
            <p>
              Try adjusting your search criteria
            </p>
          </div>
        )}
        {explorePhotos.length != 0 && (
          <button className="load-more" onClick={() => setVisible((prevState) => prevState + 8)}>Load More</button>
        )}
      </div>
    </>
  );
}
