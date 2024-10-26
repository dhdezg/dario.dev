import React, { useEffect, useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      {/* Logo o Título */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {language === 'es' ? 'Portafolio de Dario' : "Dario's Portfolio"}
      </h1>

      {/* Controles de Tema e Idioma */}
      <div className="flex items-center space-x-4">
        {/* Botón de Tema */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-500"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>

        {/* Botón de Idioma */}
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-500"
        >
          {language === 'es' ? 'ES' : 'EN'}
        </button>
      </div>
    </header>
  );
}

export default Header;
