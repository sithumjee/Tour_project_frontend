import React, { useContext } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { ProfileImages } from "../../../../assets/assests";
import { TourContext } from "../../../../Context/TourContext"; // Adjust the path as necessary

const Sidebar = () => {
  const { user } = useContext(TourContext); // Assuming you have user context providing user info

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-options-divider">
          <h1>General</h1>
          <NavLink to="/profile/settings" className="option">
            <img src={ProfileImages.settingsImage} alt="" />
            <p>Settings</p>
          </NavLink>
          <NavLink to="/profile/bookings" className="option">
            <img src={ProfileImages.bookingImage} alt="" />
            <p>My bookings</p>
          </NavLink>
          <NavLink to="/profile/reviews" className="option">
            <img src={ProfileImages.reviewImage} alt="" />
            <p>My reviews</p>
          </NavLink>
          <NavLink to="/profile/billing" className="option">
            <img src={ProfileImages.billingImage} alt="" />
            <p>Billing</p>
          </NavLink>
        </div>

        {user &&
          user.role === "admin" && ( // Check if user is admin
            <div className="sidebar-options-divider">
              <h1>Admin</h1>
              <NavLink to="/profile/add-tours" className="option">
                <img src={ProfileImages.manageTours} alt="" />
                <p>Add tours</p>
              </NavLink>
              <NavLink to="/profile/manage-tours" className="option">
                <img src={ProfileImages.manageTours} alt="" />
                <p>Manage tours</p>
              </NavLink>
              <NavLink to="/profile/manage-users" className="option">
                <img src={ProfileImages.manageUsers} alt="" />
                <p>Manage users</p>
              </NavLink>
              <NavLink to="/profile/manage-reviews" className="option">
                <img src={ProfileImages.manageReviews} alt="" />
                <p>Manage reviews</p>
              </NavLink>
              <NavLink to="/profile/other-links" className="option">
                <img src="" alt="" />
                <p>Other admin links</p>
              </NavLink>
            </div>
          )}
      </div>
    </div>
  );
};

export default Sidebar;
