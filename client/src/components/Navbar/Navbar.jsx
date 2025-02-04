import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
    setShowProfileDropdown(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        {/* Logo */}
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

        {/* Search Bar (Small Screens - Center) */}
        <form className="d-flex d-lg-none search-small mx-auto" role="search">
          <input
            className="form-control search-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light ms-2" type="submit">
            <FaSearch />
          </button>
        </form>

        {/* Hamburger Icon (Small Screens) */}
        <div className="d-lg-none">
          <div
            className="menu-container position-relative"
            onClick={() => setShowMenuDropdown(!showMenuDropdown)}
          >
            <FaBars size={30} color="white" style={{ cursor: "pointer" }} />
            {showMenuDropdown && (
              <div className="menu-dropdown bg-dark text-light position-absolute end-0 mt-2 p-3 rounded shadow">
                <Link
                  to="/"
                  className="d-block text-decoration-none text-light mb-2"
                >
                  Home
                </Link>
                <Link
                  to="/features"
                  className="d-block text-decoration-none text-light mb-2"
                >
                  Features
                </Link>
                <Link
                  to="/contact"
                  className="d-block text-decoration-none text-light mb-2"
                >
                  Contact Us
                </Link>
                <Link
                  to="/about"
                  className="d-block text-decoration-none text-light mb-2"
                >
                  About
                </Link>
                <hr className="text-light" />
                <div
                  className="d-block text-light"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProfileDropdown(!showProfileDropdown);
                  }}
                >
                  <FaUserCircle size={25} className="me-2" /> Profile
                </div>
                {showProfileDropdown && (
                  <div className="profile-dropdown mt-2 p-3 rounded bg-secondary text-light">
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
            )}
          </div>
        </div>

        {/* Desktop View Navbar */}
        <div
          className="collapse navbar-collapse d-none d-lg-flex"
          id="navbarNav"
        >
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

          {/* Search Bar (Desktop) */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 search-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Profile Icon (Desktop) */}
        <div
          className="profile-container ms-3 position-relative d-none d-lg-block"
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
        >
          <FaUserCircle size={30} color="white" style={{ cursor: "pointer" }} />
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
    </nav>
  );
};

export default Navbar;
