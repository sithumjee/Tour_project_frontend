import React, { useContext, useEffect, useState } from "react";
import TourItem from "../TourItem/TourItem";
import { TourContext } from "../../Context/TourContext";
import "./TourList.css";

const TourList = () => {
  const { tourList = [] } = useContext(TourContext);

  const [sortedTourList, setSortedTourList] = useState([...tourList]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  useEffect(() => {
    setSortedTourList(tourList);
  }, [tourList]);

  const sortTours = (criteria) => {
    let sortedTours = [...tourList];
    switch (criteria) {
      case "price":
        sortedTours.sort((a, b) => a.price - b.price);
        break;
      case "duration":
        sortedTours.sort((a, b) => a.duration - b.duration);
        break;
      case "ratingsAverage":
        sortedTours.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
        break;
      case "difficulty":
        sortedTours.sort((a, b) => {
          const difficulties = { easy: 1, medium: 2, difficult: 3 };
          return difficulties[a.difficulty] - difficulties[b.difficulty];
        });
        break;
      case "maxGroupSize":
        sortedTours.sort((a, b) => b.maxGroupSize - a.maxGroupSize);
        break;
      case "startDates":
        sortedTours.sort((a, b) => {
          const currentDate = new Date();
          const startDateA = new Date(a.startDates[0]);
          const startDateB = new Date(b.startDates[0]);
          const diffA = Math.abs(currentDate - startDateA);
          const diffB = Math.abs(currentDate - startDateB);
          return diffA - diffB;
        });
        break;
      default:
        // No sorting criteria selected, maintain original order
        sortedTours = [...tourList];
        break;
    }
    setSortedTourList(sortedTours);
    setSortCriteria(criteria);
  };

  // Filter tours based on the search query and selected difficulty
  const filteredTours = sortedTourList.filter((tour) => {
    const matchesSearch = tour.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty
      ? tour.difficulty === selectedDifficulty
      : true;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="tour-container">
      <div className="sort-buttons">
        <button onClick={() => sortTours("price")}>Sort by Price</button>
        <button onClick={() => sortTours("duration")}>Sort by Duration</button>
        <button onClick={() => sortTours("ratingsAverage")}>
          Sort by Ratings
        </button>
        <button onClick={() => sortTours("difficulty")}>
          Sort by Difficulty
        </button>
        <button onClick={() => sortTours("maxGroupSize")}>
          Sort by Group Size
        </button>
        <button onClick={() => sortTours("startDates")}>
          Sort by Closest Start Date
        </button>
        <button onClick={() => sortTours(null)}>Clear Sorting</button>
      </div>

      <div className="searchTourdiv">
        <div>
          <label>Search Tour Name:</label>
          <input
            className="searchTour"
            type="text"
            placeholder="Search by tour name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="difficulty-filter">
          <label htmlFor="difficulty">Select Difficulty:</label>
          <select
            id="difficulty"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="tour-content">
        {tourList.length === 0 ? (
          <p>Please log in first to see the tours.</p>
        ) : (
          filteredTours.map((tour) => (
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
        {sortCriteria && (
          <p style={{ marginTop: "10px" }}>
            Sorted by:{" "}
            {sortCriteria === "startDates"
              ? "Closest Start Date"
              : sortCriteria.charAt(0).toUpperCase() + sortCriteria.slice(1)}
          </p>
        )}
      </div>
    </div>
  );
};

export default TourList;
