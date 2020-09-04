import React from "react";
import aboutImg from "../assets/img/about.jpg";
import AOS from "aos";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";

AOS.init({
  startEvent: "DOMContentLoaded",
});

/**
 * @author
 * @function AboutUs
 **/

const AboutUs = (props) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="row section-title">
            <h2>About Us</h2>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h5>thinkSopht Labs is a software consultancy startup.</h5>
            <ul className="mt-5">
              <li className="mt-3">
                <div className="row">
                  <div className="col-md-1">
                    <Icon
                      path={mdiCheckCircleOutline}
                      title="User Profile"
                      size={1}
                      horizontal
                      vertical
                      rotate={180}
                      color="244887"
                    />{" "}
                  </div>
                  <div className="col-md-11">
                    <span>
                      Invent: we are constantly pre-thinking what else could be
                      done and inventing the solutions for future problems.
                      That’s our idea of constant improvement.{" "}
                    </span>
                  </div>
                </div>
              </li>
              <div className="row mt-3">
                <div className="col-md-1">
                  <Icon
                    path={mdiCheckCircleOutline}
                    title="User Profile"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="244887"
                  />{" "}
                </div>
                <div className="col-md-11">
                  <span>
                    Integrity: we do what we say we do when we say we will do
                    it, the way it should be done.
                  </span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-1">
                  <Icon
                    path={mdiCheckCircleOutline}
                    title="User Profile"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="244887"
                  />{" "}
                </div>
                <div className="col-md-11">
                  <span>
                    Speed: in today’s competitive world of business and
                    fast-evolving technology, speed is no longer a plus. It is
                    the minimum requirement for admission to the game.
                  </span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-1">
                  <Icon
                    path={mdiCheckCircleOutline}
                    title="User Profile"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="244887"
                  />{" "}
                </div>
                <div className="col-md-11">
                  <span>
                    Friendly-family: Beyond the transaction, we look to building
                    lifelong relationships with our clients and partners to
                    continue to provide support for long term success.
                  </span>
                </div>
              </div>
            </ul>
            <a href="/" className="read-more mt-5">
              Read More <i className="icofont-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
