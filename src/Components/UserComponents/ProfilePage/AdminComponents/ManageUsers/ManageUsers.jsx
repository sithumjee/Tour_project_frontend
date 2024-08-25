import React, { useContext, useState } from "react";
import { TourContext } from "../../../../../Context/TourContext";
import "./ManageUsers.css"; // Import CSS file for styling
import { heroImages } from "../../../../../assets/assests";
import axios from "axios"; // Import axios for API calls

const ManageUsers = () => {
  const { userList, setUserList, url, token } = useContext(TourContext); // Ensure setUserList is available
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on the search query
  const filteredUsers = userList.filter(
    (user) =>
      user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemoveUser = async (userId) => {
    try {
      await axios.delete(`${url}/api/v1/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); // Replace with your actual API endpoint
      setUserList((prevUsers) =>
        prevUsers.filter((user) => user._id !== userId)
      );
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  const handleUpdateUserRole = async (userId, newRole) => {
    try {
      const response = await axios.patch(
        `${url}/api/v1/users/${userId}`,
        {
          role: newRole,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add your token here
          },
        }
      );
      const updatedUser = response.data; // Assuming the response returns the updated user
      setUserList((prevList) =>
        prevList.map((user) => (user._id === userId ? updatedUser : user))
      );
      window.location.reload();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return (
    <div className="manage-users-container">
      <h2 className="section-title">User Details</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      {filteredUsers.map((user) => (
        <div key={user._id} className="user-card">
          <div className="usercardinner">
            <div className="usercard-left">
              <p>
                <strong className="detail-label">ID:</strong> {user._id}
              </p>
              <p>
                <strong className="detail-label">Name:</strong> {user.name}
              </p>
              <p>
                <strong className="detail-label">Email:</strong> {user.email}
              </p>
              <p>
                <strong className="detail-label">Role:</strong>
                <select
                  value={user.role}
                  onChange={(e) =>
                    handleUpdateUserRole(user._id, e.target.value)
                  }
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="guide">Guide</option>
                  <option value="lead-guide">Lead-Guide</option>
                  {/* Add more roles as needed */}
                </select>
              </p>
              <p>
                <strong className="detail-label">Active:</strong>{" "}
                {!user.active ? "Active" : "Inactive"}
              </p>
            </div>

            <div className="usercard-right">
              <img
                src={heroImages.userImage}
                alt="User"
                className="user-photo"
              />
            </div>
          </div>
          <div>
            <div className="remove-button-user">
              <button
                className="removeUser"
                onClick={() => handleRemoveUser(user._id)}
              >
                Remove User
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageUsers;
