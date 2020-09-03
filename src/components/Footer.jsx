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
                  <h6 href="/">Home</h6>
                </li>
                <li>
                  <h6 href="/About">About us</h6>
                </li>
                <li>
                  <h6 href="/Services">Opportunities</h6>
                </li>
                <li>
                  <h6 href="/Products">Products & Services</h6>
                </li>
                <li>
                  <h6 href="#">Terms of service</h6>
                </li>
                <li>
                  <h6 href="#">Privacy policy</h6>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <h6 href="/Services">UI Internship</h6>
                </li>
                <li>
                  <h6 href="Services">Web Development</h6>
                </li>

                <li>
                  <h6 href="Services">Digital Marketing</h6>
                </li>
                <li>
                  <h6 href="Services">Graphic Design</h6>
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
