import React, { useState, useContext } from "react";
import "./TourDisplay.css";
import Review from "../Review/Review";
import { TourContext } from "../../Context/TourContext";
import { heroImages } from "../../assets/assests";
import { Link } from "react-router-dom";

const TourDetail = ({ tour, reviews }) => {
  const [expandedImage, setExpandedImage] = useState(null);

  const { addToCart, removeFromCart } = useContext(TourContext);

  const handleCloseImage = () => {
    setExpandedImage(null);
  };

  const handleGetTour = () => {
    addBooking(tour);
  };
  if (!tour || !tour.images || !tour.imageCover) {
    return <p>Loading...</p>; // Fallback UI
  }

  const toggleExpandImage = (index) => {
    setExpandedImage(expandedImage === index ? null : index);
  };

  const nextImage = () => {
    if (expandedImage < tour.images.length - 1) {
      setExpandedImage(expandedImage + 1);
    }
  };

  const prevImage = () => {
    if (expandedImage > 0) {
      setExpandedImage(expandedImage - 1);
    }
  };

  const imageName = tour.imageCover.split(".").slice(0, -1).join("");

  return (
    <div className="tour-detail">
      <h1>{tour.name}</h1>
      <img
        src={heroImages[imageName] || heroImages.hero2} // Fallback to hero2 if imageCover is not present
        alt={tour.name}
        className="tour-image-cover"
      />
      <p>{tour.description}</p>
      <div className="priceRating">
        <p className="priceP">
          <span>Price: </span>Rs {tour.price}
        </p>
        <p className="priceP">
          <span>Ratings:</span> {tour.ratingsAverage} ({tour.ratingsQuantity}{" "}
          reviews)
        </p>
      </div>

      <p>
        <span>Difficulty:</span> {tour.difficulty}
      </p>
      <p>
        <span>Duration:</span> {tour.duration} days
      </p>
      <p>
        <span>Max Group Size:</span> {tour.maxGroupSize}
      </p>
      <p>
        <span>Discount:</span> Rs {tour.priceDiscount}
      </p>
      <p>
        <span>Summary:</span> {tour.summary}
      </p>
      <hr />

      <div className="tour-images">
        {tour.images.map((image, index) => (
          <img
            key={index}
            src={heroImages[image.split(".").slice(0, -1).join("")]} // Ensure correct path
            alt={`${tour.name} ${index + 1}`}
            className="tour-image"
            onClick={() => toggleExpandImage(index)}
          />
        ))}
      </div>
      <hr />
      <h2>Start Location</h2>
      <p>{tour.startLocation.description}</p>
      <p>{tour.startLocation.address}</p>
      <hr />
      <h2>Start Dates</h2>
      <p>
        {tour.startDates.map((startDates, index) => (
          <div key={index}>
            <p>{startDates}</p>
          </div>
        ))}
      </p>

      <hr />

      <h2>Locations</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tour.locations.map((location, index) => (
            <tr key={index}>
              <td>{location.description}</td>
              <td>{location.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />

      <h2>Guides</h2>
      {tour.guides && tour.guides.length > 0 ? (
        tour.guides.map((guide, index) => (
          <div key={index} className="guiddiv">
            <p>
              <span>Name:</span> {guide.name}
            </p>
            <p>
              <span>Email:</span> {guide.email}
            </p>
          </div>
        ))
      ) : (
        <p>No guides available.</p>
      )}

      <Link to="/cart">
        <button
          className="get-tour"
          onClick={() => {
            addToCart(tour._id);
          }}
        >
          Get Tour
        </button>
      </Link>
      <div>
        <Review reviews={reviews} tourId={tour._id} />
      </div>

      {/* Expanded Image Overlay */}
      {expandedImage !== null && (
        <div className="expanded-image-overlay">
          {expandedImage > 0 && (
            <h4 className="nav-symbol prev" onClick={prevImage}>
              &lt;
            </h4>
          )}
          <h4 className="close-button" onClick={() => setExpandedImage(null)}>
            X
          </h4>
          {expandedImage < tour.images.length - 1 && (
            <h4 className="nav-symbol next" onClick={nextImage}>
              &gt;
            </h4>
          )}
          <img
            src={
              heroImages[
                tour.images[expandedImage].split(".").slice(0, -1).join("")
              ]
            } // Ensure correct path
            alt={`${tour.name} ${expandedImage + 1}`}
            className="expanded-image"
          />
        </div>
      )}
    </div>
  );
};

export default TourDetail;
