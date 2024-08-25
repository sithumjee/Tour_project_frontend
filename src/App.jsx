import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import TourList from "./Components/TourList/TourList";
import ToursContentPage from "./Pages/ToursContentPage/ToursContentPage";
import Register from "./Components/UserComponents/Register/Register";
import Login from "./Components/UserComponents/Login/Login";
import ProfilePage from "./Components/UserComponents/ProfilePage/Profile/ProfilePage";
import ForgotPassword from "./Components/UserComponents/ForgotPassword/ForgotPassword";
import CartPage from "./Pages/CartPage/CartPage";
import ProceedCheckout from "./Pages/ProceedCheckout/ProceedCheckout";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<TourList />} />
        <Route path="/tours/:tourId" element={<ToursContentPage />} />
        <Route path="/placeorder" element={<ProceedCheckout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile/*" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
