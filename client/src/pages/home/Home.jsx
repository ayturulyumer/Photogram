import Header from "../../components/header/Header.jsx";
import Main from "../../components/main/main.jsx";
import Posts from "../../components/posts/Posts.jsx";
import "./home.css";


export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Main />
        {/* <Posts/> */}
      </div>
    </>
  );
}
