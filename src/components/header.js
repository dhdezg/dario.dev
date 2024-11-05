import { Code, Settings } from '@geist-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import spainFlag from '../assets/flags/spainFlag.png';
import usFlag from '../assets/flags/usFlag.png';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuItems = {
    es: ['sobre mí','experiencia', 'proyectos', 'habilidades', 'contacto'],
    en: ['about me','experience', 'projects', 'skills', 'contact'],
  };

  return (
  <header id='header-wrapper' className='fixed top-0 w-full dark:bg-slate-950 bg-slate-200 text-slate-950 dark:text-slate-200'>
    <div className='flex flex-row justify-between p-6 items-center'>
      <div id='logo' className='font-comfortaa text-3xl flex flex-row gap-1 hover:scale-110 dark:hover:text-lime-300 hover:text-blue-500'>
        <button className='flex flex-row items-center gap-1' onClick={scrollToTop}>
          <Code size={28}/>
          dario.dev
        </button>
      </div>
      <div id='menu' className='font-urbanist flex gap-3'>
        {menuItems[language].map((item, itemIndex) => (
        <a key={itemIndex} href={`#${item.toLowerCase().replace(/ /g, '')}`} className="text-lg text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:scale-110 dark:hover:text-lime-300 transform transition-all duration-200 ease-in-out">
          {item}
        </a>
        ))}
        <button onClick={toggleDropdown} className="text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:scale-125 dark:hover:text-lime-300 transform transition-all duration-200 ease-in-out">
          <Settings size={18}/> 
        </button>
        {isDropdownOpen && (
            <div ref={dropdownRef}
            className='absolute top-12 right-2 mt-2 w-40 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4'>
              
              <div
                className='flex items-center justify-between p-2 cursor-pointer'
                onClick={toggleTheme}
              >
                <span className='text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-lime-300'>{language=== 'es' ? 'Tema': 'Theme'}</span>
                {darkMode ? (
                  <FaMoon size={20} className='text-slate-200' />
                ) : (
                  <FaSun size={20} className='text-yellow-400' />
                )}
              </div>
              
              <div onClick={toggleLanguage} className='flex items-center justify-between p-2 cursor-pointer'>
                <span className='text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-lime-300'>{language=== 'es' ? 'Idioma': 'Language'}</span>
                <button>
                  <img src={language === 'es' ? spainFlag : usFlag}
                      alt={language === 'es' ? 'English' : 'Spanish'}
                      className="w-6 h-6"/>
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  </header>
  );
}

export default Header;
