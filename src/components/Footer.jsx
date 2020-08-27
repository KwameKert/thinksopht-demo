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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Mobile</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>

                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
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
            <a href="#" className="twitter">
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
            <a href="#" className="facebook">
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
            <a href="#" className="instagram">
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
