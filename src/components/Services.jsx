import React from "react";
import { GiPencilBrush } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { MdComputer } from "react-icons/md";

/**
 * @author
 * @function Services
 **/

const Services = (props) => {
  return (
    <section id="services" className="services section-bg">
      <div className="container service-container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch shadow"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box iconbox-blue">
              <div className="serImgCon">
                <AiOutlineMobile />
              </div>
              <h4>
                <a href="">Mobile Development</a>
              </h4>
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
                <MdComputer />
              </div>
              <h4>
                <a href="">Web Development</a>
              </h4>
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
                <FaGlobe />
              </div>
              <h4>
                <a href="">Digital Marketing</a>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch mt-5 lg "
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box iconbox-yellow">
              <div className="serImgCon">
                <GiPencilBrush />
              </div>
              <h4>
                <a href="">Graphics</a>
              </h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
