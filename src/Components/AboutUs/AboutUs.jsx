import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>

      <p>
        Welcome to Odyssey, your premier destination for unforgettable travel
        experiences! We are dedicated to providing you with the best tours
        tailored to your preferences and interests. Whether you're an adventure
        seeker, a culture enthusiast, or just looking to relax, we have
        something for everyone.
      </p>

      <div className="aboutContent">
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make travel accessible and enjoyable for everyone.
            We believe that exploring new places should be easy and fun, which
            is why we offer a wide range of tours that cater to different
            interests, budgets, and group sizes.
          </p>
        </div>
        <div>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Diverse Tour Selection:</strong> Choose from a variety of
              tours based on difficulty, duration, price, and group size.
            </li>
            <li>
              <strong>Expert Guides:</strong> Our knowledgeable guides are
              passionate about sharing their love for travel and ensuring you
              have an amazing experience.
            </li>
            <li>
              <strong>Customer Reviews:</strong> We value your feedback! Read
              reviews from fellow travelers and share your own experiences to
              help others.
            </li>
            <li>
              <strong>Personalized Service:</strong> Our team is here to assist
              you in planning your perfect getaway, ensuring every detail is
              taken care of.
            </li>
          </ul>
        </div>
        <div>
          <h2>Join Us Today!</h2>
          <p>
            Ready to embark on your next adventure? Browse our selection of
            tours and find the perfect fit for you. Whether you're traveling
            solo, with friends, or with family, we are here to help you create
            memories that will last a lifetime.
          </p>
          <p>
            Thank you for choosing [Your Company Name]. We can't wait to help
            you explore the world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
