import "./explore.css";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
export default function Discover() {
  return (
    <>
      <SearchBar />
      <div className="Post">
        <img
          className="PostImg"
          src="https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dog"
        />
        <div className="PostInfo">
          <span className="PostTitle">Dog</span>
          <hr className="PostLine" />
          <span className="PostDate">Monday,12,2023</span>
        </div>
        <p className="PostDescription">nice dog</p>
      </div>
    </>
  );
}
