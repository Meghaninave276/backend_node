import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./signup/signup";
import Login from "./login/login";
import Blogpage from "./Blogpage/Blogpage";



export default function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Blogpage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
