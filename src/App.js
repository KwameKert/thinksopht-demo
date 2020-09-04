import React from "react";
import "./App.css";
import { ScrollingProvider, Section } from "react-scroll-section";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Services from "./components/Services";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => (
  <ScrollingProvider>
    <Header />
    <Hero />
    <Section id="home"></Section>
    <Section id="about">
      <AboutUs />
    </Section>
    <Section id="services">
      <Services />
    </Section>
    <Section id="products">
      <Products />
    </Section>
    <Section id="contact">
      <ContactUs />
    </Section>
    <Footer />
  </ScrollingProvider>
);

export default App;
