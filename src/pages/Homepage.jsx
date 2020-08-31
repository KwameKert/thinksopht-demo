import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Products from "../components/Products";
import ContactUs from "../components/ContactUs";

/**
 * @author
 * @function Homepage
 **/

const Homepage = (props) => {
  return (
    <>
      <Hero />
      <main id="main">
        <AboutUs />

        <Services />

        <Products />

        <ContactUs />
      </main>
    </>
  );
};

export default Homepage;
