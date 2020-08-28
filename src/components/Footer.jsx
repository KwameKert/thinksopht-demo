import React from "react";
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";
import { Link } from "react-router-dom";
import Opportunities from "./Opportunities";
import Services from "./Services";

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
            <div className="col-lg-3 col-md-6 footer-contact">
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

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About us</Link>
                </li>
                <li>
                  <Link to="/Services">Opportunities</Link>
                </li>
                <li>
                  <Link to="/Products">Products & Services</Link>
                </li>
                <li>
                  <Link to="#">Terms of service</Link>
                </li>
                <li>
                  <Link to="#">Privacy policy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="/Services">UI Internship</Link>
                </li>
                <li>
                  <Link to="Services">Web Development</Link>
                </li>

                <li>
                  <Link to="Services">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="Services">Graphic Design</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright-wrap d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              &copy;{new Date().getFullYear()} thinkSopht|All right
              reserved|Term of Service|Privacy
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <Link to="#" className="twitter">
              <Icon
                path={mdiTwitter}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="white"
              />
            </Link>
            <Link to="#" className="facebook">
              <Icon
                path={mdiFacebook}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="white"
              />
            </Link>
            <Link to="#" className="instagram">
              <Icon
                path={mdiInstagram}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={180}
                color="white"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
