import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";

/**
 * @author
 * @function Homepage
 **/

const Homepage = (props) => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Homepage;
