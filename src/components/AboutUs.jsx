import React from "react";
import aboutImg from "../assets/img/about.jpg";
import Header from "../components/Header";
import group from "../assets/img/group.jpg";
import AOS from "aos";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
        <div className="row section-title">
          <h2>About Us</h2>
        </div>
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
            <h5>thinkSopht Labs is a software consultancy startup.</h5>

            <ul className="mt-5">
              <li className="mt-3">
                <Icon
                  path={mdiCheckCircleOutline}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="244887"
                />{" "}
                Invent: we are constantly pre-thinking what else could be done
                and inventing the solutions for future problems. That’s our idea
                of constant improvement.
              </li>
              <li className="mt-3">
                <Icon
                  path={mdiCheckCircleOutline}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="244887"
                />{" "}
                Integrity: we do what we say we do when we say we will do it,
                the way it should be done.
              </li>
              <li className="mt-3">
                <Icon
                  path={mdiCheckCircleOutline}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="244887"
                />{" "}
                Speed: in today’s competitive world of business and
                fast-evolving technology, speed is no longer a plus. It is the
                minimum requirement for admission to the game.
              </li>
              <li className="mt-3">
                <Icon
                  path={mdiCheckCircleOutline}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="244887"
                />{" "}
                Friendly-family: Beyond the transaction, we look to building
                lifelong relationships with our clients and partners to continue
                to provide support for long term success.
              </li>
            </ul>
            <Link to="/" className="read-more mt-5">
              Read More <i className="icofont-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
