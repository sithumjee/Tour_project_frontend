import React from "react";
import "./TourItem.css";
import { Link } from "react-router-dom";
import { heroImages } from "../../assets/assests"; // Ensure the path is correct

function TourItem({
  _id,
  name,
  summary,
  imageCover,
  price,
  duration,
  ratingsAverage,
  difficulty,
}) {
  // Extract the image name without the extension
  const imageName = imageCover.split(".").slice(0, -1).join(""); // Removes the .jpg extension

  return (
    <Link
      to={`/tours/${_id}`}
      className="tour-item"
      onClick={() => window.scrollTo(0, 0)}
    >
      <img
        src={heroImages[imageName]} // Accessing the image from heroImages
        alt={`${imageName} cover`} // More descriptive alt text
        className="tour-image-cover"
      />
      <div className="tour-details">
        <h2>{name}</h2>
        <p>{summary}</p>
        <p>
          <span>Price: </span>Rs {price}
        </p>
        <p>
          <span>Duration: </span> {duration} days
        </p>
        <p>
          <span>Rating: </span> {ratingsAverage}
        </p>
        <p>
          <span>Difficulty: </span> {difficulty}
        </p>
      </div>
    </Link>
  );
}

export default TourItem;
