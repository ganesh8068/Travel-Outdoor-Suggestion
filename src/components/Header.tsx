import React, { useState, useEffect } from 'react';
import { Mountain as Mountains, Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'Destinations', path: '#destinations' },
    { name: 'Activities', path: '#activities' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md dark:bg-gray-900' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Mountains className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">OutdoorExplore</span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.path}
                className="text-gray-700 hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors mr-2"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.path}
                  className="text-gray-700 hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-500 transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;