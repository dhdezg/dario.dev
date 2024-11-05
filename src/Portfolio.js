import React from "react";
import "./Portfolio.css";
import About from "./components/about.js";
import Career from "./components/career.js";
import Contact from "./components/contact.js";
import Header from "./components/header.js";
import Projects from "./components/projects.js";

function Portfolio() {
  return (
    <div className="App">
      <Header />
      <About />
      <Career />
      <Projects />
      <Contact />
    </div>
  );
}

export default Portfolio;
