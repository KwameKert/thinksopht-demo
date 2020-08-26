import React from "react";
import aboutImg from "../assets/img/about.jpg";

/**
 * @author
 * @function AboutUs
 **/

const AboutUs = (props) => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <img src={aboutImg} className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h3 className="text-capitalize">about us</h3>
              <p className="font-italic ">
                A software consultancy startup driven by innovation and a
                burning passion to solve problems in society, business, health,
                and government by leveraging the unlimited power of technology.
              </p>

              <a href="#" className="read-more mt-5">
                Read More <i className="icofont-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
