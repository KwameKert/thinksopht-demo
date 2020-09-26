import React from "react";
import { SectionLinks } from "react-scroll-section";
import { Navbar, Nav } from "react-bootstrap";

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
              <a style={{ textDecoration: "none" }} href="/">
                thinkSopht
              </a>
            </h1>

            <Navbar className="nav-menu" bg="" variant="dark">
              <Nav className="mr-auto">
                <Nav.Link
                  style={{
                    color: "#ACB8D6",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "17px",
                    fontfamily: "Open Sans sansSerif,",
                    position: "absolute",
                    top: "-2px",
                    left: "-70px",
                  }}
                  href="/"
                >
                  Home
                </Nav.Link>

                <SectionLinks>
                  {({ allLinks }) =>
                    Object.entries(allLinks).map(([key, link]) => (
                      <Nav.Link
                        // active="true"
                        key={key}
                        onClick={link.onClick}
                        selected={link.isSelected}
                      >
                        {key.toUpperCase()}
                      </Nav.Link>
                    ))
                  }
                </SectionLinks>
              </Nav>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
