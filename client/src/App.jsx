import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Photos from "./pages/photos/Photos.jsx";
import Details from "./pages/details/Details.jsx";
import AddPhoto from "./pages/AddPhoto/AddPhoto.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPhotos from "./pages/myPhotos/MyPhotos.jsx";

function App() {
  return (
    <div className="appBody">
      <Router>
      <AuthProvider >
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addphoto" element={<AddPhoto />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/photo/details/:photoId" element={<Details />} />
          <Route path="/myphotos" element={<MyPhotos/>}/>
        </Routes>
      <Footer />
    </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
