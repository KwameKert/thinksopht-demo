import React from "react";
import { Link, NavLink } from "react-router-dom";
import Opportunities from "./Opportunities";
import Services from "./Services";

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
              <Link href="index.html">thinkSopht</Link>
            </h1>

            <nav className="nav-menu d-none d-lg-block ">
              <ul>
                <li className="active">
                  <Link to="/index.html">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Services">Opportunities</Link>
                </li>
                <li>
                  <Link to="/products">Products & Services</Link>
                </li>

                <li>
                  <Link to="/ContactUs">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
