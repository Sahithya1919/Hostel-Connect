import "./HostelList.css";

const PopularHostels = () => {
  const popularHostels = [
    { name: "Downtown Dorms", rating: 4.7, image: "/src/images/hostel5.jpg" },
    { name: "City Haven", rating: 4.4, image: "/src/images/hostel6.jpg" },
    { name: "Peaceful Retreat", rating: 4.8, image: "/src/images/hostel7.jpg" },
    { name: "Student Shelter", rating: 4.3, image: "/src/images/hostel8.jpg" },
  ];

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
              <h3>{hostel.name}</h3>
              <p>Rating: {hostel.rating} ★</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularHostels;
