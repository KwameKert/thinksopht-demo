import React from "react";
import { GiPencilBrush } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import OpportunityForm from "./opportunityForm";
import AOS from "aos";

AOS.init({
  startEvent: "DOMContentLoaded",
});

/**
 * @author
 function Services
 **/

class Services extends React.Component {
  render() {
    return (
      <section id="services" className="services section-bg">
        <div
          className="container service-container mx-auto"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          >
          <div className="section-title ">
            <h2>Opportunities</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row ">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch shadow"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box iconbox-blue">
                <div className="serImgCon">
                  <AiOutlineMobile className="icon-red" />
                </div>
                <h4>UI Internship</h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 "
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box iconbox-orange">
                <div className="serImgCon">
                  <MdComputer className="icon-blue" />
                </div>
                <h4>Web Development</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 "
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box iconbox-pink">
                <div className="serImgCon">
                  <FaGlobe className="icon-green" />
                </div>
                <h4>Digital Marketing</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 "
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box iconbox-pink">
                <div className="serImgCon">
                  <GiPencilBrush className="icon-orange" />
                </div>
                <h4>Graphics Design</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <OpportunityForm />
        </div>
      </section>
    );
  }
}

export default Services;
