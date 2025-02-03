import { useState } from "react";
import Wishlist from "./Wishlist";

const Profile = () => {
  const [tab, setTab] = useState("bookings");
  const [wishlist, setWishlist] = useState([]);

  return (
    <div>
      <div>
        <img src="/src/images/profile-placeholder.png" alt="Profile" />
        <h2>User Name</h2>
        <p>Email: user@example.com</p>
      </div>

      <div>
        <button
          className={tab === "bookings" ? "active" : ""}
          onClick={() => setTab("bookings")}
        >
          My Bookings
        </button>
        <button
          className={tab === "wishlist" ? "active" : ""}
          onClick={() => setTab("wishlist")}
        >
          Wishlist
        </button>
        <button
          className={tab === "settings" ? "active" : ""}
          onClick={() => setTab("settings")}
        >
          Account Settings
        </button>
      </div>

      <div>
        {tab === "bookings" && <p>Here are your bookings...</p>}
        {tab === "wishlist" && (
          <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
        )}
        {tab === "settings" && <p>Account settings content...</p>}
      </div>
    </div>
  );
};

export default Profile;
