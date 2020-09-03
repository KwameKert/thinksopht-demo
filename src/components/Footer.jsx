import React from "react";
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
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
                <li>
                  <a to="/">Home</a>
                </li>
                <li>
                  <a to="/About">About us</a>
                </li>
                <li>
                  <a to="/Services">Opportunities</a>
                </li>
                <li>
                  <a to="/Products">Products & Services</a>
                </li>
                <li>
                  <a to="#">Terms of service</a>
                </li>
                <li>
                  <a to="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a to="/Services">UI Internship</a>
                </li>
                <li>
                  <a to="Services">Web Development</a>
                </li>

                <li>
                  <a to="Services">Digital Marketing</a>
                </li>
                <li>
                  <a to="Services">Graphic Design</a>
                </li>
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
            <a to="#" className="twitter">
              <Icon
                path={mdiTwitter}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="white"
              />
            </a>
            <a to="#" className="facebook">
              <Icon
                path={mdiFacebook}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="white"
              />
            </a>
            <a to="#" className="instagram">
              <Icon
                path={mdiInstagram}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
