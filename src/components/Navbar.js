import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShoppingCartIcon, 
  SunIcon, 
  MoonIcon,
  PhoneIcon 
} from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-morphism shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-coffee-900">A.R.M CAFE</h1>
                <p className="text-xs text-coffee-600">Always Ready To Munch</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-coffee-700 ${
                    location.pathname === link.path
                      ? 'text-coffee-700 border-b-2 border-coffee-700'
                      : 'text-coffee-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Phone Button */}
              <a 
                href="tel:+919876543210"
                className="hidden sm:flex items-center space-x-1 text-coffee-600 hover:text-coffee-700 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Call Now</span>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-coffee-600 hover:text-coffee-700 hover:bg-coffee-100 transition-all duration-200"
              >
                {isDarkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative p-2 rounded-lg text-coffee-600 hover:text-coffee-700 hover:bg-coffee-100 transition-all duration-200"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-coffee-600 hover:text-coffee-700 hover:bg-coffee-100 transition-all duration-200"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="glass-morphism">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-coffee-100 ${
                    location.pathname === link.path
                      ? 'text-coffee-700 bg-coffee-100'
                      : 'text-coffee-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:+919876543210"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-coffee-600 hover:bg-coffee-100 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
