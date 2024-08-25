import React, { useContext } from "react";
import "./Latest.css";
import TourItem from "../TourItem/TourItem";
import { TourContext } from "../../Context/TourContext";

const Latest = () => {
  const { tourList } = useContext(TourContext);
  const lastTenTours = tourList.slice(-5);

  return (
    <div className="latest-tours">
      <h1>Latest Tours</h1>
      <div className="latest-tours__container">
        {tourList.length === 0 ? (
          <p>Please log in first to see tours.</p>
        ) : (
          lastTenTours.map((tour) => (
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

export default Latest;
