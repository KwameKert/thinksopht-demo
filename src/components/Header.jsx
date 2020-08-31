import React from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-xl-9 d-flex align-items-center">
            <h1 className="logo mr-auto">
              <Link style={{ textDecoration: "none" }} to="/">
                thinkSopht
              </Link>
            </h1>

            <nav className="navIndex">
              <Link exact to="/">
                Home
              </Link>

              <Link exact to="/about">
                About
              </Link>

              <Link exact to="/services">
                Opportunities
              </Link>

              <Link exact to="/products">
                Products & Services
              </Link>

              <Link exact to="/contactUs">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
