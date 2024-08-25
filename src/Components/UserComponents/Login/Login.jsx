import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TourContext } from "../../../Context/TourContext";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();
  const { setUser, url } = useContext(TourContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUrl = `${url}/api/v1/users/login`;
    try {
      const response = await axios.post(newUrl, formData);
      const userData = response.data.data;
      const token = response.data.token;

      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("token", token);
      navigate("/");
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred"); // Set error message
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <form className="loginForm" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message */}
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className="loginbutton" type="submit">
          Login
        </button>
        <div className="login-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
