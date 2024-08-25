import React, { useContext } from "react";
import "./Popular.css";
import TourItem from "../TourItem/TourItem";
import { TourContext } from "../../Context/TourContext";

const Popular = () => {
  const { tourList } = useContext(TourContext);

  // Sort tours by ratingsAverage in descending order and take the top 6
  const topRatedTours = tourList
    .sort((a, b) => b.ratingsAverage - a.ratingsAverage)
    .slice(0, 6);

  return (
    <div className="popular-tours">
      <h1>Popular Tours</h1>
      <div className="popular-tours__container">
        {tourList.length === 0 ? (
          <p>Please log in first to see popular tours.</p>
        ) : (
          topRatedTours.map((tour) => (
            <TourItem
              key={tour._id}
              _id={tour._id}
              name={tour.name}
              summary={tour.summary}
              imageCover={tour.imageCover}
              price={tour.price}
              duration={tour.duration}
              ratingsAverage={tour.ratingsAverage}
              difficulty={tour.difficulty}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Popular;
