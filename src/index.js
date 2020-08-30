import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import "./assets/js/main.js";

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 100) {
//     $("#header").addClass("header-scrolled");
//   } else {
//     $("#header").removeClass("header-scrolled");
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
