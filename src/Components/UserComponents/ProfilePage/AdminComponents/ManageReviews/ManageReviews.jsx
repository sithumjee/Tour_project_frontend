import React, { useContext, useState } from "react";
import { TourContext } from "../../../../../Context/TourContext";
import axios from "axios";
import "./ManageReviews.css";

const ManageReviews = () => {
  const { ReviewsList = [], userList = [], url, token, setReviewList } =
    useContext(TourContext);
  const [selectedUser, setSelectedUser] = useState("");

  // Create a mapping of user IDs to usernames
  const userMap = userList.reduce((acc, user) => {
    acc[user._id] = user.name;
    return acc;
  }, {});

  // Get unique users from reviews using usernames
  const uniqueUsers = [
    ...new Set(ReviewsList.map((review) => review.user ? userMap[review.user._id] : null).filter(Boolean)),
  ];

  // Filter reviews based on selected user
  const filteredReviews = selectedUser
    ? ReviewsList.filter((review) => review.user && userMap[review.user._id] === selectedUser)
    : ReviewsList;

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`${url}/api/v1/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Optionally, refresh the reviews list after deletion
      setReviewList((prevReviews) =>
        prevReviews.filter((review) => review._id !== reviewId)
      );
    } catch (err) {
      console.error(
        "Error deleting review:",
        err.response?.data?.message || "An error occurred"
      );
    }
  };

  return (
    <div className="review-list">
      <h2>Review List</h2>
      <div className="user-select">
        <label htmlFor="user-select">Select User:</label>
        <select
          id="user-select"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">All Users</option>
          {uniqueUsers.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>
      {filteredReviews.length === 0 ? (
        <p>No reviews found for this user.</p>
      ) : (
        filteredReviews.map((review) => (
          <div key={review._id} className="review">
            <p className="review-text">{review.review}</p>
            <p className="review-rating">Rating: {review.rating}</p>
            <p className="review-user">By: {review.user ? userMap[review.user._id] : "Unknown"}</p>
            <button onClick={() => handleDelete(review._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ManageReviews;
