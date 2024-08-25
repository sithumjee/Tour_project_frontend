// src/pages/ForgotPassword.js
import React, { useContext, useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { TourContext } from "../../../Context/TourContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { url, token } = useContext(TourContext);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/v1/users/forgotPassword`, {
        email,
      });
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setMessage("");
      setError(err.response.data.message || "An error occurred");
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h2>Forgot Password</h2>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
      <button className="forgot-back">
        <Link to="/login">Back To Login Page</Link>
      </button>
    </div>
  );
};

export default ForgotPassword;
