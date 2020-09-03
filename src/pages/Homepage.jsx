import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Products from "../components/Products";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
};

export default Homepage;
