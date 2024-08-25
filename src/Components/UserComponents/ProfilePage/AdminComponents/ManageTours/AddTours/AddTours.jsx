import React, { useContext, useState } from "react";
import axios from "axios";
import { TourContext } from "../../../../../../Context/TourContext";
import { heroImages } from "../../../../../../assets/assests";
import "./AddTours.css";

const AddTourForm = () => {
  const { url, token, guideList } = useContext(TourContext);

  // Initial state for tour data
  const initialTourData = {
    name: "",
    price: "",
    ratingsAverage: 0,
    ratingsQuantity: 0,
    difficulty: "",
    duration: "",
    maxGroupSize: "",
    priceDiscount: "",
    summary: "",
    description: "",
    imageCover: "",
    images: [], // Store multiple image names
    startDates: [],
    secretTour: false,
    startLocation: {
      type: "Point",
      coordinates: [],
      address: "",
      description: "",
    },
    locations: [
      {
        type: "Point",
        coordinates: [],
        address: "",
        description: "",
        day: 1,
      },
    ],
    guides: [],
  };

  const [tourData, setTourData] = useState(initialTourData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedImages, setSelectedImages] = useState([]); // State to hold selected images

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setTourData({ ...tourData, [name]: checked });
    } else if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setTourData((prevState) => ({
        ...prevState,
        [mainKey]: {
          ...prevState[mainKey],
          [subKey]: value,
        },
      }));
    } else {
      setTourData({ ...tourData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setTourData({ ...tourData, imageCover: e.target.files[0]?.name || "" });
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const fileNames = files.map((file) => file.name);
    setSelectedImages((prevImages) => [...prevImages, ...fileNames]); // Update selected images
    setTourData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...fileNames], // Append new images to the existing array
    }));
  };

  const handleCoordinatesChange = (index, e) => {
    const { value } = e.target;
    const coordinates = [...tourData.startLocation.coordinates];
    coordinates[index] = parseFloat(value);
    setTourData({
      ...tourData,
      startLocation: { ...tourData.startLocation, coordinates },
    });
  };

  const handleLocationCoordinatesChange = (locationIndex, index, e) => {
    const { value } = e.target;
    const newLocations = [...tourData.locations];
    const coordinates = [...newLocations[locationIndex].coordinates];
    coordinates[index] = parseFloat(value);
    newLocations[locationIndex].coordinates = coordinates;
    setTourData({ ...tourData, locations: newLocations });
  };

  const handleAddLocation = () => {
    setTourData((prevState) => ({
      ...prevState,
      locations: [
        ...prevState.locations,
        {
          type: "Point",
          coordinates: [],
          address: "",
          description: "",
          day: 1,
        },
      ],
    }));
  };

  const handleAddStartDate = () => {
    setTourData((prevState) => ({
      ...prevState,
      startDates: [...prevState.startDates, ""], // Add a new empty string for a new start date
    }));
  };

  const handleStartDateChange = (index, value) => {
    const newStartDates = [...tourData.startDates];
    newStartDates[index] = value;
    setTourData({ ...tourData, startDates: newStartDates });
  };

  const handleGuideChange = (e) => {
    const selectedGuideId = e.target.value;

    // Check if the selected guide is already in the guides array
    if (!tourData.guides.includes(selectedGuideId)) {
      setTourData((prevState) => ({
        ...prevState,
        guides: [...prevState.guides, selectedGuideId], // Add selected guide ID to guides array
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log(tourData);
      const response = await axios.post(`${url}/api/v1/tours/`, tourData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      setMessage("Tour added successfully!");

      // Reset the form to initial values
      setTourData(initialTourData);
      setSelectedImages([]); // Reset selected images
    } catch (error) {
      setMessage("Error adding tour: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-tour-form">
      <h2>Add a New Tour</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Tour Name:
            <input
              className="form-input"
              type="text"
              name="name"
              value={tourData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Price:
            <input
              className="form-input"
              type="number"
              name="price"
              value={tourData.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Ratings Average:
            <input
              className="form-input"
              type="number"
              name="ratingsAverage"
              value={tourData.ratingsAverage}
              onChange={handleChange}
              min="0"
              max="5"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Ratings Quantity:
            <input
              className="form-input"
              type="number"
              name="ratingsQuantity"
              value={tourData.ratingsQuantity}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Difficulty:
            <select
              className="form-select"
              name="difficulty"
              value={tourData.difficulty}
              onChange={handleChange}
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="difficult">Difficult</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Duration (in days):
            <input
              className="form-input"
              type="number"
              name="duration"
              value={tourData.duration}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Max Group Size:
            <input
              className="form-input"
              type="number"
              name="maxGroupSize"
              value={tourData.maxGroupSize}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Price Discount:
            <input
              className="form-input"
              type="number"
              name="priceDiscount"
              value={tourData.priceDiscount}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Summary:
            <input
              className="form-input"
              type="text"
              name="summary"
              value={tourData.summary}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Description:
            <textarea
              className="form-textarea"
              name="description"
              value={tourData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Image Cover:
            <input
              className="form-input"
              type="file"
              name="imageCover"
              onChange={handleFileChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Images:
            <input
              className="form-input"
              type="file"
              name="images"
              multiple
              onChange={handleImagesChange}
            />
          </label>
          <div>
            <h4>Selected Images:</h4>
            <ul>
              {selectedImages.map((image, index) => (
                <li key={index}>{image}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">
            <input
              className="form-checkbox"
              type="checkbox"
              name="secretTour"
              checked={tourData.secretTour}
              onChange={handleChange}
            />
            Secret Tour
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Start Dates:
            {tourData.startDates.map((date, index) => (
              <div key={index}>
                <input
                  className="form-input"
                  type="date"
                  value={date}
                  onChange={(e) => handleStartDateChange(index, e.target.value)}
                  required
                />
              </div>
            ))}
            <button type="button" onClick={handleAddStartDate}>
              Add Start Date
            </button>
          </label>
        </div>
        <h3>Start Location</h3>
        <div className="form-group">
          <label className="form-label">
            Latitude:
            <input
              className="form-input"
              type="number"
              name="startLocation.coordinates.0"
              value={tourData.startLocation.coordinates[0] || ""}
              onChange={(e) => handleCoordinatesChange(0, e)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Longitude:
            <input
              className="form-input"
              type="number"
              name="startLocation.coordinates.1"
              value={tourData.startLocation.coordinates[1] || ""}
              onChange={(e) => handleCoordinatesChange(1, e)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Address:
            <input
              className="form-input"
              type="text"
              name="startLocation.address"
              value={tourData.startLocation.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Description:
            <input
              className="form-input"
              type="text"
              name="startLocation.description"
              value={tourData.startLocation.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">
            Select Guide:
            <select className="form-select" onChange={handleGuideChange}>
              <option value="">Select a Guide</option>
              {guideList.map((guide) => (
                <option key={guide._id} value={guide._id}>
                  {guide.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <h4>Selected Guides:</h4>
          <ul>
            {tourData.guides.map((guideId) => {
              const guide = guideList.find((g) => g._id === guideId);
              return <li key={guideId}>{guide ? guide.name : guideId}</li>;
            })}
          </ul>
        </div>

        <h3>Locations</h3>
        {tourData.locations.map((location, index) => (
          <div key={index}>
            <div className="form-group">
              <label className="form-label">
                Latitude:
                <input
                  className="form-input"
                  type="number"
                  name={`locations[${index}].coordinates.0`}
                  value={location.coordinates[0] || ""}
                  onChange={(e) => handleLocationCoordinatesChange(index, 0, e)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Longitude:
                <input
                  className="form-input"
                  type="number"
                  name={`locations[${index}].coordinates.1`}
                  value={location.coordinates[1] || ""}
                  onChange={(e) => handleLocationCoordinatesChange(index, 1, e)}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Address:
                <input
                  className="form-input"
                  type="text"
                  name={`locations[${index}].address`}
                  value={location.address}
                  onChange={(e) =>
                    setTourData((prevState) => {
                      const newLocations = [...prevState.locations];
                      newLocations[index].address = e.target.value;
                      return { ...prevState, locations: newLocations };
                    })
                  }
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Description:
                <input
                  className="form-input"
                  type="text"
                  name={`locations[${index}].description`}
                  value={location.description}
                  onChange={(e) =>
                    setTourData((prevState) => {
                      const newLocations = [...prevState.locations];
                      newLocations[index].description = e.target.value;
                      return { ...prevState, locations: newLocations };
                    })
                  }
                />
              </label>
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddLocation}>
          Add Location
        </button>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Tour"}
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default AddTourForm;
