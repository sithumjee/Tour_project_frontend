import React, { useContext } from "react";
import { TourContext } from "../../../../../Context/TourContext";
import "./MyReviews.css";

const MyReviews = () => {
  const { ReviewsList = [], user, tourList = [] } = useContext(TourContext); // Default to empty array if undefined

  // Ensure user is defined before filtering reviews
  const userReviews = user
    ? ReviewsList.filter((review) => review.user?._id === user._id)
    : [];

  return (
    <div className="review-list">
      <h2>My Reviews</h2>
      {userReviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        userReviews.map((review) => {
          // Find the corresponding tour based on the review's tour ID
          const tour = tourList.find((tour) => tour._id === review.tour);
          return (
            <div key={review._id} className="review">
              <p className="review-text">{review.review}</p>
              <p className="review-rating">Rating: {review.rating}</p>
              <p className="review-user">By: {user?.name}</p>
              {tour ? (
                <p className="review-tour">Tour Name: {tour.name}</p>
              ) : (
                <p className="review-tour">Tour not found</p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyReviews;
