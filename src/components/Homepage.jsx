import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";

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
    </div>
  );
};

export default Homepage;
