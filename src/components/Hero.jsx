import React from "react";
import hero from "../assets/img/hero-img.png";
import AOS from "aos";
import { Link } from "react-router-dom";

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
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Bettter Digital Experience With thinkSopht</h1>
            <h2>We create stellar software solutions</h2>
            <div>
              <Link to="/about" className="btn-get-started scrollto">
                Read More
              </Link>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img src={hero} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
