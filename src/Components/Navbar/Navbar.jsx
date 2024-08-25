import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { heroImages } from "../../assets/assests";
import { TourContext } from "../../Context/TourContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setUser } = useContext(TourContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUser(null);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div className="navbar">
      <div className="dropdown">
        <img
          src={heroImages.menuIcon}
          onClick={toggleDropdown}
          className="dropdown-button"
        />

        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tours">Tours</Link>
            </li>
            <li>
              <Link to="/profile/*">Profile</Link>
            </li>
            <li>
              <Link to="/cart">Orders</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-left">
        <Link to="/">
          <img src={heroImages.logoImage} alt="" />
        </Link>
      </div>

      <div className="navbar-right">
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/profile/*">Profile</Link>
          </li>
          <li>
            <Link to="/cart">Orders</Link>
          </li>
        </ul>
      </div>

      <div className="navbarend">
        <ul>
          <li className="nav-login">
            {user ? (
              <span
                onClick={handleLogout}
                style={{ cursor: "pointer", color: "red" }}
              >
                Logout
              </span>
            ) : (
              <Link to="/login" className="loginButton">
                {" "}
                Log In
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Dropdown for mobile view */}
    </div>
  );
};

export default Navbar;
