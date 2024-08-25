import React, { useContext, useState } from "react";
import { TourContext } from "../../../../../Context/TourContext";
import "./ManageTours.css";

const ManageTours = () => {
  const { tourList, setTourList, url, token } = useContext(TourContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tours based on the search query
  const filteredTours = tourList.filter((tour) =>
    tour.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to remove a tour
  const removeTour = async (tourId) => {
    try {
      const response = await fetch(`${url}/api/v1/tours/${tourId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Replace with actual token
        },
      });

      if (response.ok) {
        // Update the tourList state
        setTourList((prevTours) =>
          prevTours.filter((tour) => tour._id !== tourId)
        );
      } else {
        console.error("Failed to remove tour");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="manage-tours-container">
      <div className="tour-list-container">
        <h2>Manage Tours</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by tour name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        {filteredTours.length === 0 ? (
          <p>No tours found.</p>
        ) : (
          filteredTours.map((tour) => (
            <div key={tour._id} className="tour-card">
              <img
                src={tour.imageCover}
                alt={tour.name}
                className="tour-image"
              />
              <h3 className="tour-name">{tour.name}</h3>
              <p className="tour-price">Price: Rs {tour.price}</p>
              <p className="tour-summary">{tour.summary}</p>

              <button
                className="removeTour"
                onClick={() => removeTour(tour._id)} // Call removeTour with the tour ID
              >
                Remove Tour
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageTours;
