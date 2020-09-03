import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Products from "../components/Products";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";

/**
 * @author
 * @function Homepage
 **/

const Homepage = (props) => {
  return (
    <>
      <Header />
      <Hero />

      <AboutUs button="readMore" />

      <Services />

      <Products />

      <ContactUs />
    </>
  );
};

export default Homepage;
