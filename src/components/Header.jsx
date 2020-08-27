import React from "react";
import { Link, NavLink } from "react-router-dom";

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
                  <NavLink exact to="/index.html">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/services">
                    Products & Services
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/portfolio">
                    Opprtunities
                  </NavLink>
                </li>

                <li>
                  <NavLink exact to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>

            <Link to="/about" className="get-started-btn scrollto">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
