import React, { useState } from "react";
import { GiPencilBrush } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { Modal, Card } from "react-bootstrap";
import AOS from "aos";

AOS.init({
  startEvent: "DOMContentLoaded",
});

/**
 * @author
 * @function Services
 **/

const Services = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="services" className="services section-bg">
      <div className="container service-container mx-auto" data-aos="fade-up">
        <div className="section-title ">
          <h2>Opportunities</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row mt-5 cursor:pointer">
          <Card
            className="col-lg-3 col-md-6 d-flex align-items-stretch shadow"
            data-aos="zoom-in"
            data-aos-delay="100"
            onClick={() => setShowModal(true)}
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
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>UI internship application</Modal.Title>
                </Modal.Header>
                <Modal.Body>form</Modal.Body>
              </Modal>
            </div>
          </Card>

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

          {/* <div
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
