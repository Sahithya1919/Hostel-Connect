// RecommendedHostels.js
import { useState } from "react";
import "./HostelList.css";

const RecommendedHostels = () => {
  const recommendedHostels = [
    {
      name: "Green Valley Hostel",
      location: "Mumbai, Maharashtra",
      rating: 4.5,
      image: "/src/images/hostel1.jpg",
    },
    {
      name: "Sunny Stay Hostel",
      location: "Hyderabad, Telangana",
      rating: 4.3,
      image: "/src/images/hostel2.jpg",
    },
    {
      name: "Cozy Corner",
      location: "Chennai, Tamil Nadu",
      rating: 4.2,
      image: "/src/images/hostel3.jpg",
    },
    {
      name: "Urban Nest",
      location: "Bangalore, Karnataka",
      rating: 4.6,
      image: "/src/images/hostel4.jpg",
    },
  ];

  const [wishlist, setWishlist] = useState(
    Array(recommendedHostels.length).fill(false)
  );

  const toggleWishlist = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist[index] = !updatedWishlist[index];
    setWishlist(updatedWishlist);
  };

  return (
    <div className="list-section">
      <h2 className="list-title">Recommended Hostels</h2>
      <div className="hostels-row">
        {recommendedHostels.map((hostel, index) => (
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

export default RecommendedHostels;
