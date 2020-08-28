import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Products from "../components/Products";
import ContactUs from "../components/ContactUs";

/**
 * @author
 * @function Homepage
 **/

const Homepage = (props) => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Products />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Homepage;
