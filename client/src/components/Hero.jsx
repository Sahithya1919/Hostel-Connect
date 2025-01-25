import "./Hero.css";
const Hero = () => {
  return (
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary Hero-bg">
      <div class="col-md-6 p-lg-5 mx-auto my-5">
        <h1 class="display-3 fw-bold">Designed for Hostlers</h1>
        <h3 class="fw-normal text-muted mb-3">
          Your Comfort,Your Choice at Your Place!
        </h3>
        <div class="d-flex gap-3 justify-content-center lead fw-normal">
          <a class="icon-link" href="#">
            Learn more
            <svg class="bi">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </a>
          <a class="icon-link" href="#">
            Buy
            <svg class="bi">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
