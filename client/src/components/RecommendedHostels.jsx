import "./HostelList.css";

const RecommendedHostels = () => {
  const recommendedHostels = [
    {
      name: "Green Valley Hostel",
      rating: 4.5,
      image: "/src/images/hostel1.jpg",
    },
    {
      name: "Sunny Stay Hostel",
      rating: 4.3,
      image: "/src/images/hostel2.jpg",
    },
    { name: "Cozy Corner", rating: 4.2, image: "/src/images/hostel3.jpg" },
    { name: "Urban Nest", rating: 4.6, image: "/src/images/hostel4.jpg" },
  ];

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
              <h3>{hostel.name}</h3>
              <p>Rating: {hostel.rating} ★</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedHostels;
