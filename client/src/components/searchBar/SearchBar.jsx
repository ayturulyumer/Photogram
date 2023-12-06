import "./searchbar.css";
export default function SearchBar() {
  return (
    <div className="wrap">
      <form className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for? (e.g Nature)"
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
}
