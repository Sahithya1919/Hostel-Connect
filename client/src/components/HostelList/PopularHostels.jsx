// PopularHostels.js
import { useState } from "react";
import "./HostelList.css";

const PopularHostels = () => {
  const popularHostels = [
    {
      name: "Downtown Dorms",
      location: "Delhi, Delhi",
      rating: 4.7,
      image: "/src/images/hostel5.jpg",
    },
    {
      name: "City Haven",
      location: "Pune, Maharashtra",
      rating: 4.4,
      image: "/src/images/hostel6.jpg",
    },
    {
      name: "Peaceful Retreat",
      location: "Jaipur, Rajasthan",
      rating: 4.8,
      image: "/src/images/hostel7.jpg",
    },
    {
      name: "Student Shelter",
      location: "Kolkata, West Bengal",
      rating: 4.3,
      image: "/src/images/hostel8.jpg",
    },
  ];

  const [wishlist, setWishlist] = useState(
    Array(popularHostels.length).fill(false)
  );

  const toggleWishlist = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist[index] = !updatedWishlist[index];
    setWishlist(updatedWishlist);
  };

  return (
    <div className="list-section">
      <h2 className="list-title">Popular Hostels</h2>
      <div className="hostels-row">
        {popularHostels.map((hostel, index) => (
          <div key={index} className="hostel-card">
            <img
              src={hostel.image}
              alt={hostel.name}
              className="hostel-image"
            />
            <div className="hostel-info">
              <div className="hostel-title">
                <h3>{hostel.name}</h3>
                <span
                  className={`star-icon ${wishlist[index] ? "active" : ""}`}
                  onClick={() => toggleWishlist(index)}
                >
                  ★
                </span>
              </div>
              <p>{hostel.location}</p>
              <p>Rating: {hostel.rating} ★</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularHostels;
