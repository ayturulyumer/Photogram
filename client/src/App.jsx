import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Details from "./pages/details/Details.jsx";
import "./app.css"

function App() {
  return (
    <body className="appBody">
      <NavBar />
      {/* <Home /> */}
      <Details/>
      <Footer/>
    </body>
  );
}

export default App;
