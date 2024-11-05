import React from 'react';
import './Portfolio.css';
import About from './components/about.js';
import Header from './components/header.js';

function Portfolio() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default Portfolio;