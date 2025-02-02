import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="Hero-bg">
        <div className="content-container">
          <h1 className="heading">Designed for Hostlers</h1>
          <h3 className="tagline">Your Comfort, Your Choice at Your Place!</h3>
          <div className="button-group">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-outline-secondary">Sign-Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
