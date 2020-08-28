import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Opportunities from "./components/Opportunities";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/hero" component={Hero} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/footer" component={Footer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
