import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import Products from "./Products";
import ContactUs from "../ContactUs";

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
      <Products />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Homepage;
