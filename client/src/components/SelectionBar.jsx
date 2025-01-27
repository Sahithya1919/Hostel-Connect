import "./SelectionBar.css";

const SelectionBar = () => {
  const locations = [
    "Ameerpet",
    "Kukatpally",
    "Hitech City",
    "Madhapur",
    "Gachibowli",
    "Secunderabad",
    "Mehdipatnam",
    "Begumpet",
    "Koti",
    "Banjara Hills",
  ];

  return (
    <div className="selection-bar">
      <div className="select-item">
        <label htmlFor="location">Location</label>
        <select id="location" className="dropdown">
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="select-item">
        <label htmlFor="price-range-min">Price Range</label>
        <div className="price-inputs">
          <input
            type="number"
            id="price-range-min"
            className="price-input"
            placeholder="Min ₹"
            min="0"
          />
          <span className="separator">-</span>
          <input
            type="number"
            id="price-range-max"
            className="price-input"
            placeholder="Max ₹"
            min="0"
          />
        </div>
      </div>

      <button className="search-button">Search</button>
    </div>
  );
};

export default SelectionBar;
