import React from "react";
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";
import { SectionLink } from "react-scroll-section";

const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row cursor-ponter">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>thinkSopht</h3>
              <p>
                Millenium City <br />
                Kasoa,Ghana
                <br />
                <br />
                <strong>Phone:</strong> +233 204466965
                <br />
                <strong>Email:</strong> thinkSopht@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <SectionLink section="home">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      Home
                    </li>
                  )}
                </SectionLink>
                <SectionLink section="about">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      About
                    </li>
                  )}
                </SectionLink>
                <SectionLink section="products">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      Products
                    </li>
                  )}
                </SectionLink>
                <SectionLink section="services">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      Opportunities
                    </li>
                  )}
                </SectionLink>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <SectionLink section="services">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      UI Internship
                    </li>
                  )}
                </SectionLink>
                <SectionLink section="about">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      Web Development
                    </li>
                  )}
                </SectionLink>
                <SectionLink section="products">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      Digital Marketing
                    </li>
                  )}
                </SectionLink>
                <SectionLink section="services">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      Graphic Design
                    </li>
                  )}
                </SectionLink>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright-wrap d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              &copy;{new Date().getFullYear()} thinkSopht | All right reserved |
              Term of Service | Privacy
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            {/* < href="#" className="twitter"> */}
            <Icon
              path={mdiTwitter}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
            />
            {/* </a> */}
            {/* <a href="#" className="facebook"> */}
            <Icon
              path={mdiFacebook}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
            />
            {/* </a>
            <a href="#" className="instagram"> */}
            <Icon
              path={mdiInstagram}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="white"
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
