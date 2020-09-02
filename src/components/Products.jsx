import React from "react";
import AOS from "aos";
import portfolio1 from "../assets/img/portfolio/portfolio-1.jpg";

AOS.init({
  startEvent: "DOMContentLoaded",
});

/**
 * @author
 * @function Products
 **/

const Products = (props) => {
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Product & Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div> */}

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={portfolio1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Edify</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={portfolio1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Happy</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={portfolio1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Razor</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={portfolio1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Edify</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={portfolio1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Happy</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={portfolio1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Edify</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={portfolio2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Happy</h4>
                  <p>Web</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={portfolio3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Safehands</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={portfolio4} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Razor</h4>
                  <p>Card</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={portfolio5} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Web 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={portfolio6} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={portfolio7} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Card 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={portfolio8} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Card 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={portfolio9} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
