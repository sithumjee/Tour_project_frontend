import React, { useContext } from "react";
import { TourContext } from "../../../../../Context/TourContext";
import "./MyBookings.css";

const MyBookings = () => {
  const { bookings, tourList, user } = useContext(TourContext);

  // Filter bookings to only include those that belong to the logged-in user
  const userBookings = user
    ? bookings.filter((booking) => booking.user === user._id)
    : [];

  return (
    <div className="bookings">
      <h2 className="heading-secondary ma-bt-md">My Bookings</h2>
      {userBookings.length === 0 ? (
        <div>No bookings found</div>
      ) : (
        <ul className="bookings__list">
          {userBookings.map((booking) => {
            // Find the corresponding tour in the tourList
            const tour = tourList.find((t) => t._id === booking.tour);
            return tour ? (
              <li key={booking._id} className="booking">
                <img
                  src={tour.imageCover}
                  alt={tour.name}
                  className="booking__image"
                />
                <div className="booking__details">
                  <h3 className="booking__title">{tour.name}</h3>
                  <div className="booking__dates">
                    {tour.startDates.map((date, index) => (
                      <p key={index} className="booking__date">
                        {new Date(date).toLocaleDateString()}
                      </p>
                    ))}
                  </div>
                  <p className="booking__price">${tour.price}</p>
                </div>
              </li>
            ) : null; // If the tour is not found, return null
          })}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
