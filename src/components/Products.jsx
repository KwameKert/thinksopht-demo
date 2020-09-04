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
      <section id="products" className="portfolio">
        <div className="container" data-aos="fade-up" data-aos-duration="3000">
          <div className="section-title">
            <h2>Product & Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
