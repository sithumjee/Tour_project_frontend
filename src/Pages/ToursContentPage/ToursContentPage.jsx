import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TourContext } from "../../Context/TourContext";
import TourDetail from "../../Components/TourDisplay/TourDisplay";
import Review from "../../Components/Review/Review";

const ToursContentPage = () => {
  const { tourList, ReviewsList } = useContext(TourContext);
  const { tourId } = useParams();

  // Find tour in tourList based on _id
  const tour = tourList.find((item) => item._id === tourId);

  // Filter reviews based on tourId
  const reviews = ReviewsList.filter((review) => review.tour === tourId);

  // Handle case where tour is not found
  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="main-tour">
      <TourDetail tour={tour} reviews={reviews} />
    </div>
  );
};

export default ToursContentPage;
