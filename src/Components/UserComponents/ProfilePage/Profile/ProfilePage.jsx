import React from "react";
import { Routes, Route } from "react-router-dom";

import "./ProfilePage.css";
import Sidebar from "../SideBar/Sidebar";
import Settings from "../ProfileComponents/Settings/Settings";
import MyBookings from "../ProfileComponents/MyBookings/MyBookings";
import MyReviews from "../ProfileComponents/MyReviews/MyReviews";
import Billing from "../ProfileComponents/Billing/Billing";
import ManageTours from "../AdminComponents/ManageTours/ManageTours";
import ManageUsers from "../AdminComponents/ManageUsers/ManageUsers";
import ManageReviews from "../AdminComponents/ManageReviews/ManageReviews";
import AddTourForm from "../AdminComponents/ManageTours/AddTours/AddTours";
// import UserDetail from "../AdminComponents/ManageUsers/UserDetails/UserDetails";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <Routes>
          <Route path="settings" element={<Settings />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="reviews" element={<MyReviews />} />
          <Route path="billing" element={<Billing />} />
          <Route path="add-tours" element={<AddTourForm />} />
          <Route path="manage-tours" element={<ManageTours />} />
          <Route path="manage-users" element={<ManageUsers />} />
          {/* <Route path="/user/:id" component={<UserDetail />} /> */}
          <Route path="manage-reviews" element={<ManageReviews />} />
          {/* <Route path="other-links" element={<OtherAdminLinks />} />      */}
        </Routes>
      </div>
    </div>
  );
};

export default ProfilePage;
