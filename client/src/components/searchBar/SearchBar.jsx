import "./searchbar.css";
import { useForm } from "../../hooks/useForm.js";
export default function SearchBar({ onSearchHandler }) {
  const { values, changeHandler, onSubmit } = useForm(
    {
      searchInput: "",
    },
    onSearchHandler
  );

  return (
    <div className="wrap">
      <form className="search" method="POST" onSubmit={onSubmit}>
        <input
          type="text"
          name="searchInput"
          className="searchTerm"
          placeholder="What are you looking for? (e.g Nature)"
          value={values.searchInput}
          onChange={changeHandler}
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
}
