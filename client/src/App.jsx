import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Photos from "./pages/photos/Photos.jsx";
import Details from "./pages/details/Details.jsx";
import CreatePhoto from "./pages/createPhoto/CreatePhoto.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Logout from "./pages/logout/Logout.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import LoggedUserGuard from "./components/guards/LoggedUserGuard.jsx";
import AuthorizationGuard from "./components/guards/AuthorizationGuard.jsx";
import AuthenticationGuard from "./components/guards/AuthenticationGuard.jsx";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {
  return (
    <div className="appBody">
      <Router>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />

            <Route element={<LoggedUserGuard />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>

              <Route path="/photo/details/:photoId" element={<Details />} />

            <Route element={<AuthenticationGuard />}>
              <Route path="/create" element={<CreatePhoto />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
