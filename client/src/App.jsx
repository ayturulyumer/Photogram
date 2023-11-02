import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Details from "./pages/details/Details.jsx";
import AddPhoto from "./pages/AddPhoto/AddPhoto.jsx";
import Profile from "./pages/profile/profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import "./app.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <body className="appBody">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addphoto" element={<AddPhoto />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/photo/details/:photoId" element={<Details />} />
        </Routes>
      </Router>
      <Footer />
    </body>
  );
}

export default App;
