import React from "react";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-9 d-flex align-items-center">
            <h1 className="logo mr-auto">
              <a href="index.html">ThinkSopht</a>
            </h1>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Products & Services</a>
                </li>
                <li>
                  <a href="#portfolio">Opprtunities</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>

            <a href="#about" className="get-started-btn scrollto">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
