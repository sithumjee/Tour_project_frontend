import React, { useContext, useState, useEffect } from "react";
import "./Settings.css";
import { TourContext } from "../../../../../Context/TourContext";
import axios from "axios";
import { heroImages } from "../../../../../assets/assests";

const Settings = () => {
  const { user, url, token, setUser } = useContext(TourContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(user ? user.name : ""); // Initialize safely
  const [email, setEmail] = useState(user ? user.email : ""); // Initialize safely
  const [error, setError] = useState("");

  // Check if user data is available
  if (!user) {
    return <p>You have to login first</p>; // Display a message if the user is not logged in
  }

  // Update name and email when user changes
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleLogout = () => {
    // Clear user data and token from local storage
    localStorage.removeItem("userData");
    localStorage.removeItem("token");

    // Reset user state in context
    setUser(null);
    window.location.reload();
  };

  //=========================================================================================================
  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    try {
      const response = await axios.patch(
        `${url}/api/v1/users/updatePassword`,
        {
          currPassword: currentPassword,
          password: newPassword,
          passwordConfirm: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token if needed
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update password.");
      }

      alert("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setError(""); // Clear any previous error messages
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "An error occurred."
      );
    }
  };

  //=================================================================================================================================

  const handleDetailsChange = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `${url}/api/v1/users/updateMe`,
        {
          name: name,
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token if needed
          },
        }
      );

      if (response.status === 200) {
        alert("Details updated successfully!");
        handleLogout();
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || err.message || "An error occurred."
      );
    }
  };

  //=============================================================================================================================
  const handleDeleteAccount = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      const response = await axios.delete(
        `${url}/api/v1/users/deleteMe`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {
        alert("Account deleted successfully!");
        handleLogout();
      } else {
        throw new Error("Failed to delete account.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "An error occurred."
      );
    }
  };

  //=========================================================================================================================================

  return (
    <div className="settings-container">
      <div className="settings-section">
        <h2>Your account settings</h2>
        <div className="user-details">
          <p>
            <strong>Username:</strong> {user.name}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <h2>Change Details</h2>
        <form className="settings-form" onSubmit={handleDetailsChange}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="form-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update state on input change
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
            />
          </div>
          <div className="form-group">
            <img src={heroImages.userImage} />
            <a className="btn-text">Choose new photo</a>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Save settings
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Display error message */}
        </form>
      </div>

      <div className="settings-section">
        <h2>Password change</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="settings-form" onSubmit={handlePasswordChange}>
          <div className="form-group">
            <label className="form-label" htmlFor="password-current">
              Current password
            </label>
            <input
              id="password-current"
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              New password
            </label>
            <input
              id="password"
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password-confirm">
              Confirm password
            </label>
            <input
              id="password-confirm"
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Save password
            </button>
          </div>
        </form>
      </div>

      <div className="settings-section">
        <h2>Danger Zone</h2>
        <p>Delete Your Account.</p>
        <button className="btn btn-danger" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
