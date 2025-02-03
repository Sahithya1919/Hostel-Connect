import { useState } from "react";

const Wishlist = ({ wishlist, setWishlist }) => {
  const removeFromWishlist = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);
    setWishlist(updatedWishlist);
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          {wishlist.map((hostel, index) => (
            <div key={index}>
              <img src={hostel.image} alt={hostel.name} />
              <h3>{hostel.name}</h3>
              <p>{hostel.location}</p>
              <p>Rating: {hostel.rating} ★</p>
              <button onClick={() => removeFromWishlist(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
