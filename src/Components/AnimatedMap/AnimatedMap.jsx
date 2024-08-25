// src/components/AnimatedMap/AnimatedMap.js
import React from "react";
import "./AnimatedMap.css"; // Create a CSS file for styling
import { heroImages } from "../../assets/assests";

const AnimatedMap = () => {
  return (
    <div className="animated-map">
      <h1>Explore Our Tours Around the World</h1>
      <div className="worldmap">
        <img src={heroImages.worldMap} alt="World Map" />

        <div className="pin usa">
          <p className="country-name">United States</p>
        </div>
        <div className="pin france">
          <p className="country-name">France</p>
        </div>
        <div className="pin srilanka">
          <p className="country-name">Sri Lanka</p>
        </div>
        <div className="pin canada">
          <p className="country-name">Canada</p>
        </div>
        <div className="pin brazil">
          <p className="country-name">Brazil</p>
        </div>

        <div className="pin japan">
          <p className="country-name">Japan</p>
        </div>
        <div className="pin australia">
          <p className="country-name">Australia</p>
        </div>
        <div className="pin russia">
          <p className="country-name">Russia</p>
        </div>
        <div className="pin england">
          <p className="country-name">England</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMap;
