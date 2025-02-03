import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Store logged-in user data
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying localStorage or session storage
    const loggedInUser = localStorage.getItem("user"); // Assuming user info is stored in localStorage
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    setIsLoggedIn(false);
    setUser(null);
    navigate("/"); // Redirect to home page after logout
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to login page when login option is clicked
    setShowProfileDropdown(false); // Close the dropdown
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            alt="Logo"
            src="https://i.ibb.co/M5hHFdL/image.png"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <form className="d-flex mt-3 mt-lg-0" role="search">
            <input
              className="form-control me-2 search-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

          {/* Profile Icon */}
          <div
            className="profile-container ms-3 position-relative"
            onClick={handleProfileClick}
          >
            <FaUserCircle
              size={30}
              color="white"
              style={{ cursor: "pointer" }}
            />
            {showProfileDropdown && (
              <div className="profile-dropdown bg-dark text-light position-absolute end-0 mt-2 p-3 rounded shadow">
                {isLoggedIn ? (
                  <>
                    <p className="fw-bold mb-1">{user?.name}</p>
                    <p className="small mb-2">{user?.email}</p>
                    <hr className="text-light" />
                    <Link
                      to="/wishlist"
                      className="d-block text-decoration-none text-light mb-2"
                    >
                      Wishlist
                    </Link>
                    <Link
                      to="/profile"
                      className="d-block text-decoration-none text-light mb-2"
                    >
                      Bookings
                    </Link>
                    <button
                      className="btn btn-outline-light w-100 mt-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <p className="small mb-2">
                      Please log in to view your profile.
                    </p>
                    <button
                      className="btn btn-outline-light w-100 mt-2"
                      onClick={handleLoginClick}
                    >
                      Login/SignUp
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
