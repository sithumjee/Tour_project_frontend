import React from "react";
import "./Background.css";
import { heroImages } from "../../../assets/assests";
import { Link } from "react-router-dom";

const Background = ({ heroCount, playStatus, togglePlayStatus }) => {
  const heroImagesArray = [
    heroImages.hero1,
    heroImages.hero2,
    heroImages.hero3,
    heroImages.hero4,
    heroImages.hero5,
  ];

  return (
    <div className="background-container">
      {playStatus ? (
        <video className="background fade-in" autoPlay loop muted>
          <source src={heroImages.heroVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={heroImagesArray[heroCount]}
          alt="background"
          className="background fade-in"
        />
      )}

      <div className="overlay-content">
        <h1>
          Discover unforgettable travel experiences tailored just for you at
          Odyssey.
        </h1>
        <div className="button-group">
          <Link to="/tours">
            <button>Explore Tours</button>
          </Link>
          <Link to="/profile/settings">
            <button>Settings</button>
          </Link>
          <Link to="/profile/reviews">
            <button>Reviews</button>
          </Link>
          <Link to="/profile/bookings">
            <button>Bookings</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Background;
