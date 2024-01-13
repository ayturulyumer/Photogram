import "./explore.css";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import Loader from "../../components/loader/Loader.jsx";
import { useEffect, useState } from "react";
import * as exploreApi from "../../apis/exploreApi.js";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";

export default function Discover() {
  const [explorePhotos, setExplorePhotos] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setShowLoading] = useState(false);
  const [query, setQuery] = useState("nature");
  const [error, setError] = useState("");
  useEffect(() => {
    setShowLoading(true);
    exploreApi
      .getPhotos(query)
      .then((data) => {
        setExplorePhotos(data.photos);

        setNextPage(data.next_page);

      })
      .catch(
        (err) => setError(err),
        setTimeout(() => setError(""), 5000)
      )
      .finally(() => setShowLoading(false));
  }, [query]);

  const onSearchHandler = async (data) => {
    const { searchInput } = data;
    setQuery(searchInput);
  };


  const onLoadMoreHandler = async (url) => {
    if (nextPage) {
      setShowLoading(true);

      try {
        const nextPageData = await exploreApi.loadMore(nextPage);
        setExplorePhotos((prevPhotos) => [...prevPhotos, ...nextPageData.photos]);
        setNextPage(nextPageData.next_page);
      } catch (err) {
        setError(err.message);
        setTimeout(() => setError(''), 5000);
      } finally {
        setShowLoading(false);
      }
    }
  };

  return (
    <>
      <SearchBar onSearchHandler={onSearchHandler} />
      <div className="explore-posts">
        {loading && <Loader />}

        {explorePhotos.map((photo) => (
          <div className="Post" key={photo.id}>
            <img className="PostImg" src={photo.src.original} alt={photo.alt} />
            <div className="PostInfo">
              <span className="PostTitle">{photo.alt}</span>
              <hr className="PostLine" />
              <span className="PostDate">{photo.photographer}</span>
            </div>
          </div>
        ))}
        {error && <ErrorMessage message={error} />}

        {explorePhotos.length === 0 && (
          <div className="container">
            <div className="icon">😞</div>
            <h1>No Matches Found</h1>
            <p>Sorry, we couldn't find any matches for your search.</p>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
        {explorePhotos.length != 0 && (
          <button
            className="load-more"
            onClick={onLoadMoreHandler}
            disabled={!nextPage || loading}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
