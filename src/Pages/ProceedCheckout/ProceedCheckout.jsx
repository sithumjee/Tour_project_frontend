import React from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for navigation
import "./ProceedCheckout.css";

const ProceedCheckout = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const handleGoHome = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="checkout">
      <div className="orderDetails">
        <div>Your order is requested. Stay tuned for further details.</div>
        <button onClick={handleGoHome} className="home-button">
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default ProceedCheckout;
