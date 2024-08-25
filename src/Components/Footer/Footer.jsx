import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>About Us</h2>
          <p>
            Explore the world with us. Our mission at ODYSSEY is to bring you
            unforgettable travel experiences. Discover unique destinations,
            immerse yourself in local cultures, and create lasting memories—all
            with the ease of booking online.
          </p>

          <div className="footer-social-icons">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>

          <div className="footer-content-right">
            <h2>Connect with Us</h2>

            <ul>
              <li>
                phone number : <span>071-8984567</span>
              </li>
              <li>
                <input type="text" placeholder="email" />
                <button>Send</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-content-middle">
          <h2>Company</h2>
          <ul>
            <li>home</li>
            <li>About Us</li>
            <li>Tours</li>
            <li>Privacy Policy</li>
            <li>Profile</li>
            <li>Bookings</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024@ff - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
