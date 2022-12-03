import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
import Groups from "./pages/Groups";
import Groupsv2 from "./pages/Groupsv2";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/groups" element={<Groupsv2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
