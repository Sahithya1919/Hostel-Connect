import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="Hero-bg">
      <div className="content-container">
        <h1 className="heading">Designed for Hostlers</h1>
        <h3 className="tagline">Your Comfort, Your Choice at Your Place!</h3>
        <div className="button-group">
          <button className="btn btn-dark" onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/signup")}
          >
            Sign-Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
