import React from "react";
import hero from "../assets/img/hero-img.png";
import AOS from "aos";

AOS.init({
  startEvent: "DOMContentLoaded",
});

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container-fluid"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Bettter Digital Experience With thinkSopht</h1>
            <h2>We create stellar software solutions</h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">
                Read More
              </a>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <img src={hero} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
