import React from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink className to="/">
                thinkSopht
              </NavLink>
            </h1>

            <nav className="justify content-between navIndex">
              <NavLink activeClassName="selected" to="/">
                Home
              </NavLink>

              <NavLink activeClassName="selected" to="/about">
                About
              </NavLink>

              <NavLink activeClassName="selected" to="/services">
                Opportunities
              </NavLink>

              <NavLink activeClassName="selected" to="/products">
                Products & Services
              </NavLink>

              <NavLink activeClassName="selected" to="/contactUs">
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
