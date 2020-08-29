import React from "react";
// import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Products from "../components/Products";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Homepage
 **/

const Homepage = (props) => {
  return (
    <>
      {/* <Header /> */}

      <Hero />
      <main id="main">
        <AboutUs />

        <Services />

        <Products />

        <ContactUs />
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
