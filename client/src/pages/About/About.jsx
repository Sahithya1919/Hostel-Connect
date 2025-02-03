// src/pages/About.jsx
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css"; // Import the About page-specific styles

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-bg">
        <section className="about-container">
          <div className="about-content">
            <h1>About Hostel Connect</h1>
            <p>
              Welcome to <strong>Hostel Connect</strong>, your one-stop platform
              for finding the best hostels that match your budget and
              preferences. We bridge the gap between hostel seekers and hostel
              providers by offering a seamless browsing experience with
              real-time reviews, ratings, and location-based searches.
            </p>
            <h2>Our Mission</h2>
            <p>
              Our mission is to simplify the process of searching for
              accommodations by providing a user-friendly interface, reliable
              hostel information, and a transparent review system. Whether
              you're a student, traveler, or working professional, we ensure you
              find a comfortable stay effortlessly.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                🔍 Easy Search & Filtering – Find hostels based on location,
                price, and ratings.
              </li>
              <li>
                ⭐ Verified Reviews & Ratings – Get honest feedback from real
                users.
              </li>
              <li>
                📍 Location-Based Recommendations – Discover hostels near your
                preferred area.
              </li>
              <li>
                💰 Affordable Options – Compare prices to find the best deal for
                your stay.
              </li>
            </ul>
            <p>
              At Hostel Connect, we believe that finding a hostel should be as
              simple as booking a cab. Join us and make your hostel-hunting
              experience stress-free!
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
