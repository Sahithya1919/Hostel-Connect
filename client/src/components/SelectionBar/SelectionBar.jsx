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

      {/* Search button with icon (SVG included) */}
      <button className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            fill="currentColor"
            d="M10,2A8,8,0,1,0,18,10,8.009,8.009,0,0,0,10,2ZM10,16A6,6,0,1,1,16,10,6.006,6.006,0,0,1,10,16Z"
          />
          <path
            fill="currentColor"
            d="M21.707,20.293l-4.5-4.5a1,1,0,0,0-1.414,1.414l4.5,4.5a1,1,0,0,0,1.414-1.414Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SelectionBar;
