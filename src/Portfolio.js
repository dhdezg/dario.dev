import React from 'react';
import './Portfolio.css';
import Footer from './components/footer.js';
import Header from './components/header.js';

function Portfolio() {
  return (
    <div className="App">
      <Header />
      <p className="dark:bg-slate-900 h-full text-4xl font-bold text-gray-900 dark:text-white">¡Este es mi portafolio personal!</p>
      <Footer />
    </div>
  );
}

export default Portfolio;