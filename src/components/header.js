import React, { useEffect, useState } from 'react';
import { FaBars, FaLaptopCode, FaTimes } from 'react-icons/fa';
import spainFlag from '../assets/flags/spainFlag.png';
import usFlag from '../assets/flags/usFlag.png';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuItems = {
    es: ['Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'],
    en: ['About Me', 'Projects', 'Skills', 'Contact'],
  };

  return (
    <header className="p-4 bg-gray-100 dark:bg-slate-900 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Ícono pulsable y Título */}
        <div className="flex items-center space-x-4">
          <button
            onClick={scrollToTop}
            className="text-gray-800 dark:text-gray-100 icon-animated icon-hover-effect"
          >
            <FaLaptopCode size={28} />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
            {language === 'es' ? 'Portafolio de Dario' : "Dario's Portfolio"}
          </h1>
        </div>

        {/* Botones de Tema e Idioma */}
        <div className="flex items-center space-x-4">
          {/* Botón de Tema sin fondo */}
          <button
            onClick={toggleTheme}
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 transform hover:scale-110 transition duration-200"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>

          {/* Botón de Idioma sin fondo */}
          <button
            onClick={toggleLanguage}
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 transform hover:scale-110 transition duration-200"
          >
            <img
              src={language === 'es' ? usFlag : spainFlag}
              alt={language === 'es' ? 'English' : 'Spanish'}
              className="w-6 h-6"
            />
          </button>

          {/* Botón de Menú para abrir el Sidebar */}
          <button
            onClick={toggleSidebar}
            className="text-gray-800 dark:text-gray-100 p-2"
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-100 dark:bg-gray-800 w-64 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 text-gray-800 dark:text-gray-100 p-2"
        >
          <FaTimes size={24} />
        </button>

        {/* Enlaces del Sidebar */}
        <nav className="flex flex-col p-4 space-y-4 mt-10">
          {menuItems[language].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/ /g, '')}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:translate-x-2 transform transition-all duration-200 ease-in-out"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay para cerrar el sidebar en móviles */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
}

export default Header;
