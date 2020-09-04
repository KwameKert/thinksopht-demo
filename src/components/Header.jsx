import React from "react";
import { SectionLink } from "react-scroll-section";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid ">
        <div className="row justify-content-center cursor-pointer">
          <div className="col-xl-9 d-flex align-items-center">
            <h1 className="logo mr-auto">
              <a style={{ textDecoration: "none" }} href="/">
                thinkSopht
              </a>
            </h1>
            <nav class="nav-menu d-none d-lg-block navIndex ">
              <ul>
                <SectionLink section="home " className="isActive">
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
                <SectionLink section="contact">
                  {({ onClick, isSelected }) => (
                    <li onClick={onClick} selected={isSelected}>
                      Contact Us
                    </li>
                  )}
                </SectionLink>
              </ul>
            </nav>
            {/* <a href="#about" class="get-started-btn scrollto">
              Get Started
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
