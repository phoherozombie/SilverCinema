import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Showtimes from "./pages/Showtimes";
import AboutUs from "./pages/AboutUs";
import UserProfile from "./pages/UserProfile";
import Admin from "./pages/Admin";
import Purchase from "./pages/Purchase";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
        <Route path="/showtimes" element={<Showtimes />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </Router>
  );
};

export default App;
