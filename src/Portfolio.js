import React from 'react';
import './Portfolio.css';
import Footer from './components/footer.js';
import Header from './components/header.js';

function Portfolio() {
  return (
    <div className="App">
      <Header />
      <p className="dark:bg-slate-950 h-full text-4xl text-gray-900 dark:text-white h-screen">¡Este es mi portafolio personal!</p>
      <Footer />
    </div>
  );
}

export default Portfolio;