// src/components/Review/Review.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TourContext } from "../../Context/TourContext";
import "./Review.css";

const Review = ({ reviews: initialReviews, tourId }) => {
  const { user, url, token, ReviewsList, setReviewList } =
    useContext(TourContext);
  const [newReview, setNewReview] = useState({ review: "", rating: 5 });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new review object with user ID and tour ID
    const reviewWithUserAndTour = {
      review: newReview.review, // Ensure this is not empty
      rating: newReview.rating,
      user: user._id, // Add user ID
      tour: tourId, // Add tour ID
    };

    try {
      console.log(reviewWithUserAndTour);
      await axios.post(
        `${url}/api/v1/tours/${tourId}/reviews`,
        reviewWithUserAndTour,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Reset the review input fields
      setNewReview({ review: "", rating: 5 });
      setError("");

      // Fetch updated reviews
      // const response = await axios.get(`${url}/api/v1/reviews`, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      // setReviews(response.data.data);
    } catch (err) {
      setError(err.response.data.message || "An error occurred");
    }
  };

  const tourReviews = ReviewsList.filter((review) => review.tour === tourId);

  return (
    <div className="review-container">
      <h1>Reviews</h1>

      {/* {user && ( */}
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          name="review"
          value={newReview.review}
          onChange={handleChange}
          placeholder="Write your review"
          required
        />
        <select
          name="rating"
          value={newReview.rating}
          onChange={handleChange}
          required
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button type="submit">Submit Review</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      {/* )} */}
      {tourReviews.map((review) => (
        <div key={review._id} className="review">
          <p>{review.review}</p>
          <p className="rating-review">Rating: {review.rating}</p>
          <p>By: {review.user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
